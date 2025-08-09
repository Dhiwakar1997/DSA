import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>My Portfolio</h1>
      <p>Welcome! Explore my projects below.</p>
      <ul>
        <li>
          <Link to="/linked-list">Linked List Visualizer</Link>
        </li>
      </ul>
    </div>
  );
}