import React from 'react';

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="container">
        <h2>Resume</h2>
        <p>Download my resume <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">here</a></p>
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          {/* Add more skills as needed */}
        </ul>
        <h3>Experience</h3>
        <ul>
          <li>Company Name - Position - Date Range</li>
          <li>Company Name - Position - Date Range</li>
          {/* Add more experience entries as needed */}
        </ul>
        <h3>Education</h3>
        <ul>
          <li>Degree - University Name - Date</li>
          <li>Degree - University Name - Date</li>
          {/* Add more education entries as needed */}
        </ul>
      </div>
    </div>
  );
}

export default Resume;
