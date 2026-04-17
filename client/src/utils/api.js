// API helper functions — all backend calls go through here
import axios from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Creates an axios instance with auth token injected automatically
export function createApiClient(token) {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
}

// ── Course API ────────────────────────────────────────────────

export async function generateCourse(topic, token) {
  const api = createApiClient(token);
  const { data } = await api.post('/api/courses/generate', { topic });
  return data;
}

export async function getUserCourses(token) {
  const api = createApiClient(token);
  const { data } = await api.get('/api/courses');
  return data;
}

export async function getCourse(courseId) {
  const { data } = await axios.get(`${API_BASE_URL}/api/courses/${courseId}`);
  return data;
}

export async function deleteCourse(courseId, token) {
  const api = createApiClient(token);
  const { data } = await api.delete(`/api/courses/${courseId}`);
  return data;
}

// ── Lesson API ────────────────────────────────────────────────

export async function getLesson(lessonId) {
  const { data } = await axios.get(`${API_BASE_URL}/api/lessons/${lessonId}`);
  return data;
}

export async function generateLessonContent(lessonId, token) {
  const api = createApiClient(token);
  const { data } = await api.post(`/api/lessons/${lessonId}/generate`);
  return data;
}

// ── Utility ───────────────────────────────────────────────────

export async function getYouTubeVideo(query) {
  const { data } = await axios.get(`${API_BASE_URL}/api/youtube`, { params: { query } });
  return data.url;
}
