import React from 'react';
import { Link } from 'react-router-dom'; 

import './navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Your Logo/Brand
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="nav-links">
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      
      </div>
    </nav>
  );
}

export default Navbar;