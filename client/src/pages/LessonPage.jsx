import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCourse, generateLessonContent } from '../utils/api';
import { useAuth } from '../hooks/useAuth';
import LessonRenderer from '../components/LessonRenderer';
import LessonPDFExporter from '../components/LessonPDFExporter';
import HinglishAudioButton from '../components/blocks/HinglishAudioButton';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const LessonPage = () => {
  const { courseId, moduleIndex, lessonIndex } = useParams();
  const { isAuthenticated, getToken, loginWithRedirect } = useAuth();
  
  const [course, setCourse] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadData() {
      try {
        const c = await getCourse(courseId);
        setCourse(c);
        const mod = c.modules[parseInt(moduleIndex, 10)];
        if (mod && mod.lessons) {
          setLesson(mod.lessons[parseInt(lessonIndex, 10)]);
        }
      } catch (err) {
        setError('Failed to load lesson data.');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [courseId, moduleIndex, lessonIndex]);

  const handleGenerateContent = async () => {
    if (!isAuthenticated) {
      loginWithRedirect();
      return;
    }
    setGenerating(true);
    setError('');
    try {
      const token = await getToken();
      const updatedLesson = await generateLessonContent(lesson._id, token);
      setLesson(updatedLesson);
    } catch (err) {
      setError('Failed to generate rich lesson content.');
    } finally {
      setGenerating(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!lesson) return <ErrorMessage message="Lesson not found." />;

  // Create full text for Hinglish TTS
  const fullText = lesson.content
    ?.filter(b => b.type === 'heading' || b.type === 'paragraph')
    .map(b => b.text)
    .join('. ');

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', paddingBottom: 60 }}>
      <div style={{ marginBottom: 20 }}>
        <Link to={`/courses/${courseId}`} style={{ color: '#64748b', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
          ← Back to Course
        </Link>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <h1 style={{ fontSize: '2rem', color: 'var(--primary-dark)', margin: 0 }}>{lesson.title}</h1>
          <div style={{ display: 'flex', gap: 10 }}>
            {lesson.isEnriched && fullText && <HinglishAudioButton text={fullText} />}
            {lesson.isEnriched && (
              <LessonPDFExporter fileName={`${lesson.title}.pdf`}>
                <div style={{ padding: 40, fontFamily: 'sans-serif', color: '#000' }}>
                  <h1 style={{ marginBottom: 20 }}>{lesson.title}</h1>
                  <LessonRenderer content={lesson.content} />
                </div>
              </LessonPDFExporter>
            )}
          </div>
        </div>

        {!lesson.isEnriched ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div style={{ fontSize: '3rem', marginBottom: 10 }}>🎓</div>
            <h3 style={{ marginBottom: 10 }}>Content Not Generated Yet</h3>
            <p style={{ color: '#64748b', marginBottom: 20 }}>
              Click below to let AI generate the full rich lesson content.
            </p>
            {generating ? (
              <LoadingSpinner message="AI is writing your lesson..." />
            ) : (
              <button onClick={handleGenerateContent} style={{ padding: '12px 24px', fontSize: '1.1rem' }}>
                Generate Lesson Content
              </button>
            )}
          </div>
        ) : (
          <div className="lesson-content">
            <LessonRenderer content={lesson.content} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonPage;
