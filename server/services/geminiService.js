// Gemini API integration for course and lesson generation
const axios = require('axios');
const { generateCoursePrompt, generateLessonPrompt } = require('./promptTemplates');

const GEMINI_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

/**
 * Calls the Gemini API with a given prompt and returns parsed JSON.
 */
async function callGemini(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  const response = await axios.post(
    GEMINI_URL,
    { contents: [{ parts: [{ text: prompt }] }] },
    { params: { key: apiKey } }
  );
  const raw = response.data.candidates[0].content.parts[0].text;
  // Strip any accidental markdown code fences
  const cleaned = raw.replace(/```json|```/g, '').trim();
  return JSON.parse(cleaned);
}

/**
 * Generates a full course outline (modules + lesson titles) for a topic.
 */
async function generateCourse(topic) {
  const prompt = generateCoursePrompt(topic);
  return callGemini(prompt);
}

/**
 * Generates detailed lesson content for a specific lesson.
 */
async function generateLesson(courseTitle, moduleTitle, lessonTitle) {
  const prompt = generateLessonPrompt(courseTitle, moduleTitle, lessonTitle);
  return callGemini(prompt);
}

module.exports = { generateCourse, generateLesson };
