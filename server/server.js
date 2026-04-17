// Entry point for the backend application
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from config/.env
dotenv.config({ path: path.join(__dirname, 'config', '.env') });

// Middleware
app.use(cors());
app.use(express.json());

// ─── API Routes ───────────────────────────────────────────────
// Course routes (generate, list, get, delete)
const courseRoutes = require('./routes/courses');
app.use('/api', courseRoutes);

// Lesson routes (get, generate content)
const lessonRoutes = require('./routes/lessons');
app.use('/api', lessonRoutes);

// Hinglish TTS route
const hinglishRoutes = require('./routes/hinglish');
app.use('/api', hinglishRoutes);

// YouTube video search route
const youtubeRoutes = require('./routes/youtube');
app.use('/api', youtubeRoutes);

// Auth0 protected example route
const protectedRoutes = require('./routes/protected');
app.use('/api', protectedRoutes);

// ─── Root endpoint ────────────────────────────────────────────
app.get('/', (req, res) => {
  res.send('Text-to-Learn Backend is running ✅');
});

// ─── Global error handler ─────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// ─── Database & Server start ──────────────────────────────────
const connectDB = require('./config/db');
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
