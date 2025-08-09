import React from 'react';
import LinkedListVisualizer from '../components/linkedlist/LinkedListVisualizer';

const LinkedListPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Doubly Linked List Visualizer</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
        Interactive demonstration of a doubly linked list data structure. 
        Perform various operations and see how the list changes in real-time.
      </p>
      <LinkedListVisualizer />
    </div>
  );
};

export default LinkedListPage;