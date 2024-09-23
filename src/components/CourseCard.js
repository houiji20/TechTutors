import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="card shadow-sm border-0 rounded-lg">
        <img src={course.image} className="card-img-top" alt={course.title} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.description}</p>
          <p className="card-text"><strong>Rating:</strong> {course.rating} ★</p>
          <a href="#" className="btn btn-primary">View Course</a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
