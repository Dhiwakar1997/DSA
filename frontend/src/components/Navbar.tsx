import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useTheme } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          DNR Portfolio
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={`nav-link ${
                location.pathname === "/projects" ? "active" : ""
              }`}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/certificates"
              className={`nav-link ${
                location.pathname === "/certificates" ? "active" : ""
              }`}
            >
              Certificates
            </Link>
          </li>
        </ul>
        <button
          aria-label="Toggle theme"
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
