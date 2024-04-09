import React from 'react';

const Project = ({ title, description, image, deployLink, repoLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <div className="project-links">
        <a href={deployLink} target="_blank" rel="noopener noreferrer">View Deployment</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>
  );
}

export default Project;
