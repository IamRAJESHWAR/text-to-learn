// AI prompt templates for course and lesson generation

function generateCoursePrompt(topic) {
  return `You are an expert course designer. Given the topic: "${topic}", generate a JSON object with the following structure:
{
  "title": string, // course title
  "description": string, // course description
  "tags": [string], // relevant tags
  "modules": [
    {
      "title": string, // module title
      "lessons": [string] // lesson titles
    }
  ]
}
- The curriculum should progress from foundational to advanced concepts.
- Ensure 3-6 modules, each with 3-5 lessons.
- Return only valid JSON, no markdown or extra text.`;
}

function generateLessonPrompt(course, module, lesson) {
  return `You are an expert educator. Given the course: "${course}", module: "${module}", and lesson: "${lesson}", generate a JSON object with:
{
  "title": string, // lesson title
  "objectives": [string], // lesson objectives
  "content": [
    { "type": "heading", "text": string },
    { "type": "paragraph", "text": string },
    { "type": "code", "language": string, "text": string },
    { "type": "video", "query": string },
    { "type": "mcq", "question": string, "options": [string], "answer": number, "explanation": string }
  ]
}
- Include a structured objectives field.
- Use a video search query, not a direct link.
- Add a code block only if relevant.
- Add 4-5 MCQs at the end, each with an explanation.
- Return only valid JSON, no markdown or extra text.`;
}

module.exports = { generateCoursePrompt, generateLessonPrompt };
