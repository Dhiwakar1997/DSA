import React from "react";
import "./Achievements.css";

interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  images: string[];
  category: string;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: "1",
      title: "🌟 Rookie of the Year 2025! 🌟",
      date: "January 2025",
      description: `I'm beyond thrilled and humbled to share that I was honored with the Rookie of the Year Award at Ekatram 2025, an incredible event hosted by Stryker!

This recognition is a testament to the amazing opportunities, support, and guidance I've received since joining the organization. From day one, I've been surrounded by a team that inspires me to learn, grow, and push boundaries every single day.

A heartfelt thank you to my mentors, colleagues, and leaders who have played a pivotal role in shaping my journey so far. This achievement is as much yours as it is mine!

Looking forward to contributing even more in the years to come and making an even greater impact. Here's to many more milestones together!`,
      images: [
        "/img/achievements/ac1/1737859967689.jpeg",
        "/img/achievements/ac1/1751557131257.jpeg",
        "/img/achievements/ac1/1751557143378.jpeg",
        "/img/achievements/ac1/1751557129158.jpeg",
      ],
      category: "award",
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "award":
        return "🏆";
      case "recognition":
        return "👏";
      case "milestone":
        return "🎯";
      case "achievement":
        return "⭐";
      default:
        return "🌟";
    }
  };

  return (
    <div className="achievements-page">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Achievements</h1>
          <p className="page-subtitle">
            Celebrating milestones, recognitions, and accomplishments in my
            professional journey
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-header">
                <span className="achievement-icon">
                  {getCategoryIcon(achievement.category)}
                </span>
                <div className="achievement-info">
                  <h2 className="achievement-title">{achievement.title}</h2>
                  <p className="achievement-date">{achievement.date}</p>
                </div>
              </div>

              <div className="achievement-description">
                <p>{achievement.description}</p>
              </div>

              {/* Achievement Images */}
              <div className="achievement-images">
                <h3 className="images-title">Event Photos</h3>
                <div className="images-grid">
                  {achievement.images.map((image, index) => (
                    <div key={index} className="image-container">
                      <img
                        src={image}
                        alt={`Achievement photo ${index + 1}`}
                        className="achievement-image"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {achievements.length === 0 && (
          <div className="no-achievements">
            <p>No achievements to display yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements;
