import React from 'react';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  // Sample courses data
  const courses = [
    { id: 1, title: 'Course 1', description: 'Description for course 1', image: 'image1.jpg', rating: 4.5 },
    { id: 2, title: 'Course 2', description: 'Description for course 2', image: 'image2.jpg', rating: 4.0 },
    { id: 3, title: 'Course 3', description: 'Description for course 3', image: 'image3.jpg', rating: 4.8 },
    // Add more courses as needed
  ];

  return (
    <div className="container mt-4">
      <h2>All Courses</h2>
      <div className="row">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
