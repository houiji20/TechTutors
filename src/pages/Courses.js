import React from 'react';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  // Sample data for courses
  const courses = [
    { id: 1, title: 'Learn React', description: 'A comprehensive guide to React.js', image: 'https://via.placeholder.com/150', rating: 4.5 },
    { id: 2, title: 'Master Python', description: 'Learn Python programming from scratch', image: 'https://via.placeholder.com/150', rating: 4.8 },
    { id: 3, title: 'Web Development Basics', description: 'Introduction to HTML, CSS, and JavaScript', image: 'https://via.placeholder.com/150', rating: 4.2 },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center">Available Courses</h2>
      <div className="row">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
