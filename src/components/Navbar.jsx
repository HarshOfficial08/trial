import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <div className="logo-icon">
            <i className="fas fa-heartbeat"></i>
          </div>
          <div className="logo-text">
            <span>Dr Harsh's</span>
            <span className="consulting">consulting</span>
          </div>
        </div>
        <div className="nav-links">
          <a href="#vision" className="nav-link">Our Vision</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#team" className="nav-link">Our Team</a>
          <a href="#news" className="nav-link">Latest News</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;