import React from 'react';
import QuizList from './QuizList';

const CoursePage = () => {
  const courseId = 'your-course-id'; // Replace with the actual course ID

  return (
    <div>
      <h1>Course Page</h1>
      <QuizList courseId={courseId} />
    </div>
  );
};

export default CoursePage;
