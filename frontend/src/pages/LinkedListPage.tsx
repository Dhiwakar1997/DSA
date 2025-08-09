import React from "react";
import LinkedListVisualizer from "../components/linkedlist/LinkedListVisualizer";

const LinkedListPage: React.FC = () => {
  return (
    <div className="page-container linkedlist-page">
      <h1 className="page-title">Doubly Linked List</h1>
      <LinkedListVisualizer />
    </div>
  );
};

export default LinkedListPage;
