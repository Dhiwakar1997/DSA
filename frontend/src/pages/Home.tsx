import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="hero">
      <h1>Data Structures & Algorithms Portfolio</h1>
      <p>
        Welcome to my interactive portfolio showcasing various data structures and algorithms 
        implementations with visualizations. Explore different concepts through hands-on demos 
        and understand how these fundamental computer science concepts work.
      </p>
      <div className="hero-buttons">
        <Link to="/projects" className="btn btn-primary">
          View All Projects
        </Link>
        <Link to="/linkedlist" className="btn btn-secondary">
          Try LinkedList Demo
        </Link>
      </div>
      
      <div className="page-container" style={{ marginTop: '60px' }}>
        <h2 className="page-title">Featured Implementations</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>🔗 Doubly Linked List</h3>
            <p>
              Interactive visualization of a doubly linked list with operations like insert, 
              delete, reverse, and more. Features real-time API communication with a Python backend.
            </p>
            <Link to="/linkedlist" className="project-link">
              Try Demo →
            </Link>
          </div>
          
          <div className="project-card">
            <h3>🌳 Binary Search Tree</h3>
            <p>
              Visual representation of BST operations including insertion, deletion, 
              and various traversal methods. (Coming Soon)
            </p>
            <span className="project-link" style={{ color: '#999', cursor: 'not-allowed' }}>
              Coming Soon
            </span>
          </div>
          
          <div className="project-card">
            <h3>🔍 Sorting Algorithms</h3>
            <p>
              Step-by-step visualization of popular sorting algorithms including 
              Bubble Sort, Quick Sort, Merge Sort, and more.
            </p>
            <span className="project-link" style={{ color: '#999', cursor: 'not-allowed' }}>
              Coming Soon
            </span>
          </div>
          
          <div className="project-card">
            <h3>📊 Graph Algorithms</h3>
            <p>
              Interactive graph visualizations demonstrating pathfinding algorithms 
              like Dijkstra's and A*, along with graph traversal methods.
            </p>
            <span className="project-link" style={{ color: '#999', cursor: 'not-allowed' }}>
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;