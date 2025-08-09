import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="hero">
      <h1>Data Structures & Algorithms Portfolio</h1>
      <p>
        Explore interactive visualizations of core data structures and algorithms. Each tile links to a focused demo. More structures will be added across sprints.
      </p>
      <div className="hero-buttons">
        <Link to="/projects" className="btn btn-primary">
          View All Tiles
        </Link>
        <Link to="/linkedlist" className="btn btn-secondary">
          Try a Demo
        </Link>
      </div>
      
      <div className="page-container" style={{ marginTop: '60px' }}>
        <h2 className="page-title">Featured Tiles</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>🔗 Doubly Linked List</h3>
            <p>
              Minimal interactive linked list operations and visualization.
            </p>
            <Link to="/linkedlist" className="project-link">
              Open →
            </Link>
          </div>
          
          <div className="project-card">
            <h3>🌳 Binary Search Tree</h3>
            <p>
              Insert, delete, and traverse a BST. (Coming soon)
            </p>
            <span className="project-link" style={{ color: 'var(--text-secondary)', cursor: 'not-allowed' }}>
              Coming soon
            </span>
          </div>
          
          <div className="project-card">
            <h3>🔍 Sorting Algorithms</h3>
            <p>
              Visualize classic sorts step by step. (Coming soon)
            </p>
            <span className="project-link" style={{ color: 'var(--text-secondary)', cursor: 'not-allowed' }}>
              Coming soon
            </span>
          </div>
          
          <div className="project-card">
            <h3>📊 Graph Algorithms</h3>
            <p>
              Pathfinding and traversal demos. (Coming soon)
            </p>
            <span className="project-link" style={{ color: 'var(--text-secondary)', cursor: 'not-allowed' }}>
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;