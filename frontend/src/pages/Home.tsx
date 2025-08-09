import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-header">
        <div className="hero-avatar">
          <img src="/img/myImage.jpeg" alt="Dhiwakar" />
        </div>
        <div className="hero-text">
          <h1 className="hero-name">Dhiwakar Nagarajan</h1>
          <p className="hero-subtitle">
            Software Engineer | AI/ML Enthusiast | Data Structures & Algorithms
          </p>
        </div>
      </div>
      <p className="hero-description">
        Passionate Software Engineer with expertise in AI, Machine Learning, and
        Data Engineering. Experienced in Python development, C# .Net
        Development, and full-stack web development.
      </p>

      <div className="hero-buttons">
        <Link to="/projects" className="btn btn-primary">
          Explore Data Structures
        </Link>
        <a
          href="https://github.com/Dhiwakar1997"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <svg
            className="icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M12 2C6.477 2 2 6.484 2 12.021c0 4.424 2.865 8.176 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.114-4.555-4.957 0-1.095.39-1.99 1.029-2.691-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.297 2.748-1.027 2.748-1.027.546 1.376.202 2.393.1 2.646.64.7 1.028 1.596 1.028 2.69 0 3.852-2.337 4.701-4.566 4.95.359.31.678.921.678 1.856 0 1.339-.012 2.419-.012 2.749 0 .268.18.58.688.481A10.026 10.026 0 0 0 22 12.021C22 6.484 17.523 2 12 2z"
            />
          </svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/dhiwakar-nagarajan-a41609109/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <svg
            className="icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M4.984 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5zM3 9h4v12H3V9zm7 0h3.838v1.64h.054c.534-.956 1.84-1.964 3.79-1.964 4.054 0 4.318 2.67 4.318 6.145V21h-4v-5.334c0-1.272-.023-2.908-1.772-2.908-1.774 0-2.046 1.387-2.046 2.816V21h-4V9z"
            />
          </svg>
          LinkedIn
        </a>
      </div>

      <div className="page-container" style={{ marginTop: "60px" }}>
        <h2 className="page-title">Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">C</span>
              <span className="skill-tag">C++</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
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
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">.Net MAUI</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Kubernetes</span>
              <span className="skill-tag">Azure</span>
              <span className="skill-tag">UiPath</span>
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
