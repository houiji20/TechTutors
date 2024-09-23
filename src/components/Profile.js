import React from 'react';

const Profile = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    enrolledCourses: [
      { title: 'Course 1', rating: 4.5 },
      { title: 'Course 2', rating: 4.0 },
    ],
  };

  return (
    <div className="container mt-4">
      <h2>{user.name}'s Profile</h2>
      <h4>Enrolled Courses</h4>
      <div className="row">
        {user.enrolledCourses.map((course, index) => (
          <div key={index} className="col-12 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text"><strong>Rating:</strong> {course.rating} ★</p>
                <button className="btn btn-primary">Continue Learning</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
