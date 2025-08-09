import React from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 'linkedlist',
      title: '🔗 Doubly Linked List',
      description: 'Interactive visualization of a doubly linked list with full CRUD operations, reverse functionality, and real-time API communication.',
      technologies: ['React', 'TypeScript', 'Python Flask', 'CSS3'],
      status: 'completed',
      link: '/linkedlist',
      features: [
        'Insert at any position',
        'Delete nodes by index',
        'Reverse the entire list',
        'Real-time visualization',
        'API latency tracking'
      ]
    },
    {
      id: 'bst',
      title: '🌳 Binary Search Tree',
      description: 'Visual representation of BST operations including insertion, deletion, and various traversal methods.',
      technologies: ['React', 'TypeScript', 'D3.js'],
      status: 'planned',
      features: [
        'Insert and delete nodes',
        'In-order, pre-order, post-order traversal',
        'Tree balancing visualization',
        'Search operations'
      ]
    },
    {
      id: 'sorting',
      title: '🔍 Sorting Algorithms',
      description: 'Step-by-step visualization of popular sorting algorithms with time complexity analysis.',
      technologies: ['React', 'TypeScript', 'Canvas API'],
      status: 'planned',
      features: [
        'Bubble, Quick, Merge Sort',
        'Animation speed control',
        'Time complexity comparison',
        'Input size customization'
      ]
    },
    {
      id: 'graph',
      title: '📊 Graph Algorithms',
      description: 'Interactive graph visualizations demonstrating pathfinding and traversal algorithms.',
      technologies: ['React', 'TypeScript', 'SVG'],
      status: 'planned',
      features: [
        'Dijkstra\'s algorithm',
        'Breadth-first search',
        'Depth-first search',
        'A* pathfinding'
      ]
    },
    {
      id: 'heap',
      title: '🏔️ Heap Data Structure',
      description: 'Max and Min heap implementations with priority queue operations.',
      technologies: ['React', 'TypeScript'],
      status: 'planned',
      features: [
        'Insert and extract operations',
        'Heapify visualization',
        'Priority queue simulation',
        'Heap sort demonstration'
      ]
    },
    {
      id: 'hashtable',
      title: '🗂️ Hash Table',
      description: 'Hash table implementation with collision resolution strategies.',
      technologies: ['React', 'TypeScript'],
      status: 'planned',
      features: [
        'Different hash functions',
        'Collision handling',
        'Load factor visualization',
        'Performance metrics'
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: { backgroundColor: '#4caf50', color: 'white' },
      planned: { backgroundColor: '#ff9800', color: 'white' }
    };
    
    return (
      <span 
        style={{
          ...styles[status as keyof typeof styles],
          padding: '4px 8px',
          borderRadius: '12px',
          fontSize: '0.75rem',
          fontWeight: '600',
          textTransform: 'uppercase'
        }}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="page-container">
      <h1 className="page-title">All Projects</h1>
      <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666', fontSize: '1.1rem' }}>
        A comprehensive collection of data structures and algorithms implementations 
        with interactive visualizations and real-world applications.
      </p>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0 }}>{project.title}</h3>
              {getStatusBadge(project.status)}
            </div>
            
            <p style={{ marginBottom: '1.5rem' }}>{project.description}</p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#667eea', fontSize: '1rem', marginBottom: '0.5rem' }}>Technologies:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    style={{
                      backgroundColor: '#f0f0f0',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      color: '#555'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#667eea', fontSize: '1rem', marginBottom: '0.5rem' }}>Features:</h4>
              <ul style={{ color: '#666', fontSize: '0.9rem', paddingLeft: '1rem' }}>
                {project.features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: '0.25rem' }}>{feature}</li>
                ))}
              </ul>
            </div>
            
            {project.status === 'completed' ? (
              <Link to={project.link!} className="project-link">
                View Demo →
              </Link>
            ) : (
              <span className="project-link" style={{ color: '#999', cursor: 'not-allowed' }}>
                Coming Soon
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;