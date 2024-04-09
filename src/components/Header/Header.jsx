import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const Header = () => {
  return (
    <header style={{ backgroundColor: '#d12128', color: '#fff', padding: '20px' }}>
      <div className="container">
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/resume">Resume</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
