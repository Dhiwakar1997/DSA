import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="hero">
      <h1>Dhiwakar Nagarajan</h1>
      <p className="hero-subtitle">
        Software Engineer | AI/ML Enthusiast | Data Structures & Algorithms
      </p>
      <p className="hero-description">
        Passionate Software Engineer with expertise in AI, Machine Learning, and
        Data Science. Experienced in Python development, Data Engineering, and
        full-stack web development.
      </p>

      <div className="hero-buttons">
        <Link to="/projects" className="btn btn-primary">
          Explore Data Structures
        </Link>
      </div>

      <div className="page-container" style={{ marginTop: "60px" }}>
        <h2 className="page-title">Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">SQL</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>AI & Machine Learning</h3>
            <div className="skill-tags">
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">Deep Learning</span>
              <span className="skill-tag">Computer Vision</span>
              <span className="skill-tag">NLP</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Technologies</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">Docker</span>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container" style={{ marginTop: "40px" }}>
        <h2 className="page-title">Work Experience</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <div className="experience-header">
              <h3>Software Engineer</h3>
              <span className="experience-company">Stryker</span>
              <span className="experience-duration">July 2023 - Present</span>
            </div>
            <p className="experience-location">Gurugram, Haryana, India</p>
            <div className="experience-roles">
              <div className="experience-role">
                <span className="role-title">Software Engineer</span>
                <span className="role-duration">June 2024 - Present</span>
              </div>
              <div className="experience-role experience-role-intern">
                <span className="role-title">Graduate Student Intern</span>
                <span className="role-duration">July 2023 - June 2024</span>
              </div>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <h3>Data Engineer</h3>
              <span className="experience-company">Kissflow</span>
              <span className="experience-duration">
                April 2021 - April 2022
              </span>
            </div>
            <p className="experience-location">Chennai, Tamil Nadu, India</p>
            <p className="experience-description">
              Data pipeline development and ETL processes for business
              intelligence and analytics.
            </p>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <h3>Full Stack Web Developer</h3>
              <span className="experience-company">HCL Technologies</span>
              <span className="experience-duration">
                September 2019 - July 2020
              </span>
            </div>
            <p className="experience-location">Chennai, Tamil Nadu, India</p>
            <p className="experience-description">
              Full-stack web development using modern technologies and
              frameworks.
            </p>
          </div>
        </div>
      </div>

      <div className="page-container" style={{ marginTop: "40px" }}>
        <h2 className="page-title">Education</h2>
        <div className="education-grid">
          <div className="education-card">
            <div className="education-header">
              <h3>Master of Technology - MTech</h3>
              <span className="education-institution">
                Vellore Institute of Technology
              </span>
              <span className="education-duration">
                September 2022 - September 2024
              </span>
            </div>
            <p className="education-specialization">
              Computer Science - Artificial Intelligence & Machine Learning
            </p>
            <p className="education-location">Vellore, Tamil Nadu, India</p>
          </div>

          <div className="education-card">
            <div className="education-header">
              <h3>Bachelor of Engineering - BE</h3>
              <span className="education-institution">
                R.M.D Engineering College
              </span>
              <span className="education-duration">2015 - 2019</span>
            </div>
            <p className="education-specialization">
              Electrical and Electronics Engineering
            </p>
            <p className="education-location">Chennai, Tamil Nadu, India</p>
          </div>
        </div>
      </div>

      <div className="page-container" style={{ marginTop: "40px" }}>
        <h2 className="page-title">Featured Data Structures</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>🔗 Doubly Linked List</h3>
            <p>
              Interactive visualization of doubly linked list operations with
              real-time updates and performance metrics.
            </p>
            <Link to="/linkedlist" className="project-link">
              Try Demo →
            </Link>
          </div>

          <div className="project-card">
            <h3>🌳 Binary Search Tree</h3>
            <p>
              Visualize BST operations including insertion, deletion, and
              various traversal algorithms.
            </p>
            <span
              className="project-link"
              style={{ color: "var(--text-secondary)", cursor: "not-allowed" }}
            >
              Coming Soon
            </span>
          </div>

          <div className="project-card">
            <h3>🔍 Sorting Algorithms</h3>
            <p>
              Step-by-step visualization of classic sorting algorithms with
              performance comparisons.
            </p>
            <span
              className="project-link"
              style={{ color: "var(--text-secondary)", cursor: "not-allowed" }}
            >
              Coming Soon
            </span>
          </div>

          <div className="project-card">
            <h3>📊 Graph Algorithms</h3>
            <p>
              Interactive graph traversal and pathfinding algorithms with visual
              demonstrations.
            </p>
            <span
              className="project-link"
              style={{ color: "var(--text-secondary)", cursor: "not-allowed" }}
            >
              Coming Soon
            </span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <a
          href="https://designs-by-dhiwakar.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
          style={{ fontSize: "1.1rem", padding: "14px 28px" }}
        >
          Old Portfolio →
        </a>
      </div>
    </div>
  );
};

export default Home;
