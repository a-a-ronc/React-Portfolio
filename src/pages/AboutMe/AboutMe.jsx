import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me-page">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-me-content">
          <div className="about-me-image">
            <img src="/path/to/your/photo.jpg" alt="Your Name" />
          </div>
          <div className="about-me-details">
            <p>Write a short bio about yourself here.</p>
            <p>Include your skills, interests, experiences, etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
