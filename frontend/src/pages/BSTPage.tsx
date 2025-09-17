import React from "react";
import BSTVisualizer from "../components/bst/BSTVisualizer";

const BSTPage: React.FC = () => {
  return (
    <div className="page-container bst-page">
            <h1 className="page-title">Binary Search Tree</h1>
      <BSTVisualizer />
    </div>
  );
};

export default BSTPage;


