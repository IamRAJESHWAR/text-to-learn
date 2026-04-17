// Lesson Controller — handles lesson content generation and fetching
const Lesson = require('../models/Lesson');
const Module = require('../models/Module');
const Course = require('../models/Course');
const { generateLesson } = require('../services/geminiService');

/**
 * POST /api/lessons/:lessonId/generate
 * Generates rich lesson content using Gemini AI and saves it.
 */
async function generateAndSaveLesson(req, res) {
  try {
    const lesson = await Lesson.findById(req.params.lessonId).populate({
      path: 'module',
      populate: { path: 'course' },
    });
    if (!lesson) return res.status(404).json({ error: 'Lesson not found' });

    const moduleTitle = lesson.module?.title || '';
    const courseTitle = lesson.module?.course?.title || '';

    // Call Gemini AI
    const aiLesson = await generateLesson(courseTitle, moduleTitle, lesson.title);

    // Save generated content back to lesson
    lesson.content = aiLesson.content || [];
    lesson.isEnriched = true;
    await lesson.save();

    res.json(lesson);
  } catch (err) {
    console.error('generateAndSaveLesson error:', err.message);
    res.status(500).json({ error: 'Lesson generation failed', details: err.message });
  }
}

/**
 * GET /api/lessons/:lessonId
 * Returns a single lesson by ID.
 */
async function getLessonById(req, res) {
  try {
    const lesson = await Lesson.findById(req.params.lessonId);
    if (!lesson) return res.status(404).json({ error: 'Lesson not found' });
    res.json(lesson);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch lesson', details: err.message });
  }
}

module.exports = { generateAndSaveLesson, getLessonById };
