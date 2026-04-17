import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Placeholder pages
const Home = () => <div>Home Page</div>;
const Course = () => <div>Course Overview Page</div>;
const Lesson = () => <div>Lesson Viewer Page</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses/:courseId/module/:moduleIndex/lesson/:lessonIndex" element={<Lesson />} />
          <Route path="courses/:courseId" element={<Course />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
