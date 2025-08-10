import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">
            Get to know me better - my journey, interests, and what drives me
          </p>
        </div>

        <div className="about-content">
          <p>Content coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default About;
