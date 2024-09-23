import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  // Sample course data; replace with actual data fetching logic
  const course = {
    title: `Course ${id}`,
    description: 'Detailed description of the course.',
    image: 'image-placeholder.jpg',
    rating: 4.5,
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h2>{course.title}</h2>
          <img src={course.image} alt={course.title} className="img-fluid" />
          <p>{course.description}</p>
          <p><strong>Rating:</strong> {course.rating} ★</p>
          <button className="btn btn-success">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
