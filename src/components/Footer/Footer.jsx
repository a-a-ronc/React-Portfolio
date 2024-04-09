import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          {/* Add additional social media links as needed */}
        </div>
        <p>&copy; 2024 Your Name</p>
      </div>
    </footer>
  );
}

export default Footer;
