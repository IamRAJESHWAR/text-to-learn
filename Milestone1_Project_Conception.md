# Milestone 1: Project Conception and Prototype Thinking

## Core Concept
Text-to-Learn is an AI-powered web application that transforms any user-submitted topic into a structured, multi-module online course. Users input a topic prompt and receive a complete course outline, detailed lesson content, and resource lists, enabling immediate, tailored learning.

## User-Centric Features
- **Prompt to Course:** Users input a topic to generate structured modules and lessons.
- **Rich Lessons:** Lessons include text, code, video references, and quizzes.
- **Download as PDF:** Individual lessons can be downloaded as formatted PDFs.
- **Multilingual Explanations:** AI-generated explanations in languages like Hinglish.
- **Secure Login:** User authentication via Auth0.
- **Persistent Courses:** Users can save and revisit generated courses.

## UI Flow & Components
- **Home Page (/):** Course listing and creation.
- **Authentication Pages (/login, /signup):** User login and registration.
- **Course Overview Page (/course/:id):** Displays modules for a course.
- **Lesson Viewer (/lesson/:id):** Shows detailed lesson content with download options.

### Key UI Components
- **PromptForm:** Captures user topic input for course generation.
- **SidebarNavigation:** Provides primary navigation links.
- **LessonRenderer:** Displays structured lesson content.
- **DownloadButton:** Initiates PDF download for lessons.

## Project Significance
- Simplifies self-learning and course creation.
- Provides organized learning paths and multilingual accessibility.
- Enables offline consumption and personalized learning experiences.

---
This document serves as the foundation for the next development milestones, ensuring all user and project requirements are clearly defined and actionable.