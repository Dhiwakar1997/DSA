import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import LinkedListDemo from './pages/LinkedListDemo';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header style={{ padding: '12px 20px', borderBottom: '1px solid #eee', display: 'flex', gap: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/linked-list">Linked List</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linked-list" element={<LinkedListDemo />} />
        </Routes>
      </main>
    </div>
  );
}
