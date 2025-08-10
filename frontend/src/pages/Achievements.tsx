import React, { useState } from "react";
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    {
      id: "3",
      title: "🏆 Celebrating Techathon Victory! 🏆",
      date: "December 2024",
      description: `I'm absolutely thrilled to announce that our team, "Team Gluon," emerged as the WINNER of the Techathon event at Stryker! 🚀💡

Our journey began with Ideathon, where I proposed innovative ideas, and today, I couldn't be prouder to say that not only were those ideas selected, but me and my team successfully implemented them, taking home the 1st prize! 🥇

Hariharan J ,Vasukivasan Arun and I put our hearts and minds into this project, and the results speak volumes about the power of teamwork, dedication, and innovation. It's been an incredible learning experience, and I'm grateful for the support of our amazing colleagues and mentors at Stryker. 🙌

This victory is not just ours; it belongs to the entire team that made this project a reality. 🌐

Thank you, Stryker for providing a platform for us to explore our potential and make a meaningful impact. In perticular without moral support of Prachi Mane and Pankaj Kumar this victory would have never been possible. Thank you for your unconditional support. 

And now its time to celebrate,
Team Gluon 🎉`,
      images: ["/img/achievements/ac3/1699330169842.jpeg"],
      category: "victory",
    },
    {
      id: "2",
      title: "🥉 Ideathon 2nd Runner-Up! 🚀",
      date: "November 2024",
      description: `I'm thrilled to share that I've secured the 2nd runner-up place in the recent Ideathon event at Stryker, the company I joined just two months ago as an intern. 🚀

This journey has been nothing short of amazing! 🌟 From brainstorming innovative ideas to working collaboratively with talented colleagues, it's been a fantastic experience. I'm grateful for the mentorship, support, and encouragement I received throughout from Prachi Mane and Pankaj Kumar

Winning this award not only recognizes our hard work but also highlights Stryker's commitment to fostering creativity and innovation among its team members. 

This is just the beginning, and I can't wait to contribute more to Stryker's success in the future. 🚀 Stay tuned for more exciting updates as I continue to learn, grow, and innovate in this dynamic organization!

#Stryker #Ideathon #Innovation #Teamwork #CareerJourney #ProudMoment 🎉👏`,
      images: ["/img/achievements/ac2/1695883136214.jpeg"],
      category: "competition",
    },
    {
      id: "4",
      title: "✨ Celebrating a Remarkable Year! ✨",
      date: "December 2024",
      description: `As we close the chapter on 2024, I'm thrilled to reflect on a year filled with challenges, growth, and accomplishments. I'm incredibly honored to have been recognized with multiple Stryker Superstar for successfully completing impactful projects throughout the year.

Each award symbolizes more than just an achievement—it represents the collective effort, collaboration, and innovation that I was privileged to be a part of. From overcoming obstacles to delivering results that make a difference, it's been an inspiring journey.

A huge thank you to my team, mentors, and colleagues who supported and inspired me every step of the way. Together, we proved that dedication and teamwork can truly drive excellence.

Here's to setting even bigger goals for 2025 and continuing to make a positive impact. Let's keep pushing boundaries and achieving greatness!`,
      images: ["/img/achievements/ac4/1737719503526.jpeg"],
      category: "milestone",
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "award":
        return "🏆";
      case "competition":
        return "🥉";
      case "victory":
        return "🥇";
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

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
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
                        onClick={() => openImageModal(image)}
                        title="Click to view full size"
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

        {/* Image Modal */}
        {selectedImage && (
          <div className="image-modal-overlay" onClick={closeImageModal}>
            <div
              className="image-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={closeImageModal}>
                ✕
              </button>
              <img
                src={selectedImage}
                alt="Full size achievement photo"
                className="modal-image"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements;
