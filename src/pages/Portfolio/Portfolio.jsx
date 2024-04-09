import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  // Example project data
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      image: '/images/project1.jpg',
      deployLink: 'https://example.com/project1',
      repoLink: 'https://github.com/example/project1'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      image: '/images/project2.jpg',
      deployLink: 'https://example.com/project2',
      repoLink: 'https://github.com/example/project2'
    },
    // Add more project data as needed
  ];

  return (
    <div className="portfolio-page">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="project-list">
          {projects.map(project => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              deployLink={project.deployLink}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
