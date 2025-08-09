import React from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 'linkedlist',
      title: '🔗 Doubly Linked List',
      description: 'Interactive linked list with basic operations and visualization.',
      status: 'completed',
      link: '/linkedlist',
    },
    {
      id: 'bst',
      title: '🌳 Binary Search Tree',
      description: 'BST operations and traversals visualization.',
      status: 'planned',
    },
    {
      id: 'sorting',
      title: '🔍 Sorting Algorithms',
      description: 'Visualize and compare sorting algorithms.',
      status: 'planned',
    },
    {
      id: 'graph',
      title: '📊 Graph Algorithms',
      description: 'Pathfinding and traversal in graphs.',
      status: 'planned',
    },
    {
      id: 'heap',
      title: '🏔️ Heap',
      description: 'Priority queue with heap operations.',
      status: 'planned',
    },
    {
      id: 'hashtable',
      title: '🗂️ Hash Table',
      description: 'Hashing and collision resolution strategies.',
      status: 'planned',
    },
  ] as const;

  const getStatusBadge = (status: 'completed' | 'planned') => {
    const className = `badge ${status === 'completed' ? 'badge-success' : 'badge-planned'}`;
    return <span className={className}>{status}</span>;
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Data Structures</h1>
      <p style={{ textAlign: 'center', marginBottom: '1.25rem', color: 'var(--text-secondary)', fontSize: '1rem' }}>
        Explore minimal, responsive tiles. New data structures will be added in future sprints.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h3 style={{ margin: 0 }}>{project.title}</h3>
              {getStatusBadge(project.status)}
            </div>

            <p style={{ marginBottom: '0.75rem' }}>{project.description}</p>

            {project.status === 'completed' && project.link ? (
              <Link to={project.link} className="project-link">
                Open →
              </Link>
            ) : (
              <span className="project-link" style={{ color: 'var(--text-secondary)', cursor: 'not-allowed' }}>
                Coming soon
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;