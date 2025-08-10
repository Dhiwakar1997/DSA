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
          {/* Location Section */}
          <div className="about-section">
            <h2 className="section-title">📍 Where I'm From</h2>
            <div className="location-container">
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.394212!2d80.209011!3d13.082680!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chennai, Tamil Nadu, India"
                ></iframe>
              </div>
              <div className="location-info">
                <div className="location-card">
                  <div className="location-icon">🏙️</div>
                  <div className="location-text">
                    <h3>Chennai</h3>
                    <p>
                      The capital city of Tamil Nadu, known for its rich
                      culture, beaches, and vibrant tech scene
                    </p>
                  </div>
                </div>
                <div className="location-card">
                  <div className="location-icon">🏛️</div>
                  <div className="location-text">
                    <h3>Tamil Nadu</h3>
                    <p>
                      A state in southern India famous for its Dravidian
                      temples, classical music, and literature
                    </p>
                  </div>
                </div>
                <div className="location-card">
                  <div className="location-icon">🇮🇳</div>
                  <div className="location-text">
                    <h3>India</h3>
                    <p>
                      A diverse country with rich heritage, culture, and a
                      growing technology sector
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Language Skills Section */}
          <div className="about-section">
            <h2 className="section-title">🗣️ Languages I Speak</h2>
            <div className="languages-container">
              <div className="language-card">
                <div className="language-header">
                  <span className="language-flag">🇮🇳</span>
                  <h3>Tamil</h3>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: "90%" }}></div>
                </div>
                <div className="skill-rating">4.5/5</div>
              </div>
              <div className="language-card">
                <div className="language-header">
                  <span className="language-flag">🇺🇸</span>
                  <h3>English</h3>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: "80%" }}></div>
                </div>
                <div className="skill-rating">4.0/5</div>
              </div>
            </div>
          </div>

          {/* Creative Talents Section */}
          <div className="about-section">
            <h2 className="section-title">🎭 Creative Talents</h2>
            <div className="talents-container">
              <div className="talent-card">
                <div className="talent-icon">✍️</div>
                <h3>Writer</h3>
                <p>
                  I write beautiful Tamil poems that capture emotions and
                  stories
                </p>
              </div>
              <div className="talent-card">
                <div className="talent-icon">🎤</div>
                <h3>Singer</h3>
                <p>I love to sing songs and express myself through music</p>
              </div>
            </div>
          </div>

          {/* Personality & Preferences Section */}
          <div className="about-section">
            <h2 className="section-title">🌟 Who I Am</h2>
            <div className="personality-grid">
              <div className="personality-item">
                <span className="personality-icon">🦉</span>
                <h4>Night Owl</h4>
                <p>I thrive in the quiet hours of the night</p>
              </div>
              <div className="personality-item">
                <span className="personality-icon">💡</span>
                <h4>Dim Lights</h4>
                <p>I love cozy, softly lit environments</p>
              </div>
              <div className="personality-item">
                <span className="personality-icon">🏸</span>
                <h4>Badminton Player</h4>
                <p>I enjoy playing badminton for fun and fitness</p>
              </div>
              <div className="personality-item">
                <span className="personality-icon">🚶‍♂️</span>
                <h4>Long Walks</h4>
                <p>I love going for long walks to clear my mind</p>
              </div>
            </div>
          </div>

          {/* Social Traits Section */}
          <div className="about-section">
            <h2 className="section-title">🤝 Social Side</h2>
            <div className="social-traits">
              <div className="trait-item">
                <span className="trait-icon">😊</span>
                <p>I'm friendly with everyone and love meeting new people</p>
              </div>
              <div className="trait-item">
                <span className="trait-icon">💪</span>
                <p>I have strong opinions and love deep discussions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
