import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          DSA Portfolio
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/projects" 
              className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/linkedlist" 
              className={`nav-link ${location.pathname === '/linkedlist' ? 'active' : ''}`}
            >
              LinkedList Demo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;