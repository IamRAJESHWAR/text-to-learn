# Text-to-Learn: AI-Powered Course Generator

## Live Demo & Code
- **Frontend:** [Your Vercel URL]
- **Backend APIs:** [Your Render URL]
- **GitHub Repository:** [Your GitHub Repo]

## Overview
Text-to-Learn is a full-stack AI-powered web application that transforms any user-submitted topic into a structured, multi-module online course. It provides instant course outlines, detailed lessons, and resource lists for a tailored learning experience.

## Features
- Prompt-to-course: Generate structured modules and lessons from a topic prompt
- Rich lessons: Text, code, video references, quizzes
- Download as PDF: Export lessons for offline use
- Multilingual explanations: Hinglish audio support
- Secure login: Auth0 authentication
- Persistent courses: Save and revisit generated courses

## Technology Stack
- **Frontend:** React (Vite, Chakra UI/Tailwind CSS, React Router)
- **Backend:** Node.js, Express, MongoDB (MERN)
- **AI/Text-Gen:** OpenAI/Hugging Face or Gemini
- **Video:** YouTube Data API
- **Auth:** Auth0
- **Deployment:** Vercel (frontend), Render (backend)

## How It Works
1. User enters a topic prompt
2. AI generates a course outline (modules/lessons)
3. Detailed lesson content is generated (objectives, text, code, video, MCQs)
4. Lessons can be played in Hinglish audio or downloaded as PDF
5. User authentication enables saving and revisiting courses

## Resume Bullets
- Developed a full-stack AI course creation platform generating structured learning modules and lessons from user prompts using LLMs
- Implemented rich lesson rendering (headings, paragraphs, MCQs, code, video suggestions)
- Integrated multilingual TTS (Hinglish) via Gemini APIs
- Designed PDF export with jsPDF and html2canvas
- Secured with Auth0 for personalized courses and progress tracking
- Deployed on Vercel (frontend) and Render (backend)
- Engineered prompt engineering pipeline for structured course/lesson generation
- Robust parsing/validation of AI-generated JSON for data integrity
- Optimized AI token usage and response times
- Dynamic React UI for diverse content types
- Scalable RESTful API for course/module/lesson CRUD
- Modeled complex data relationships in MongoDB with Mongoose
- Custom Express middleware for route protection, validation, error handling
- Clean, modular codebase with best practices

## Project Structure
project-root/
├── server/  # Backend (Render)
└── client/  # Frontend (Vercel)

---
See DEPLOYMENT.md and the hackathon roadmap for setup and deployment details.
