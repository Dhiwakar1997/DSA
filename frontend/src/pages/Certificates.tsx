import React, { useState } from "react";
import "./Certificates.css";

interface Certificate {
  id: string;
  name: string;
  filename: string;
  category: string;
  description: string;
}

const Certificates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const certificates: Certificate[] = [
    {
      id: "1",
      name: "Coursera Certificate 1",
      filename: "Coursera 9ZQ87WV6VNE7.pdf",
      category: "coursera",
      description: "Coursera online course completion certificate",
    },
    {
      id: "2",
      name: "Coursera Certificate 2",
      filename: "Coursera JKYQACG4V7HP.pdf",
      category: "coursera",
      description: "Coursera online course completion certificate",
    },
    {
      id: "3",
      name: "Cloud Fundamentals",
      filename: "cloud fundamentals.pdf",
      category: "cloud",
      description: "Cloud computing fundamentals certification",
    },
    {
      id: "4",
      name: "CSS Certificate",
      filename: "CSS_Certificate.pdf",
      category: "web",
      description: "CSS styling and design certification",
    },
    {
      id: "5",
      name: "Docker Certificate",
      filename: "Docker_Certificate.pdf",
      category: "devops",
      description: "Docker containerization certification",
    },
    {
      id: "6",
      name: "Django & React Certificate",
      filename: "Django&React_Certificate.pdf",
      category: "web",
      description: "Full-stack development with Django and React",
    },
    {
      id: "7",
      name: "JavaScript Certificate",
      filename: "Javascript_Certificate.pdf",
      category: "web",
      description: "JavaScript programming certification",
    },
    {
      id: "8",
      name: "Machine Learning Specialization",
      filename: "ML_specialization (2).pdf",
      category: "ai-ml",
      description: "Machine learning specialization certification",
    },
    {
      id: "9",
      name: "PostgreSQL Certificate",
      filename: "PostgresSQL Certificate.pdf",
      category: "database",
      description: "PostgreSQL database management certification",
    },
    {
      id: "10",
      name: "Python Certificate",
      filename: "Python_Certificate.pdf",
      category: "programming",
      description: "Python programming certification",
    },
    {
      id: "11",
      name: "UI/UX Course Certificate",
      filename: "UI-UX-Course-Certificate (1).pdf",
      category: "design",
      description: "User interface and user experience design certification",
    },
    {
      id: "12",
      name: "UC Certificate",
      filename: "UC-9b9354d0-5a61-461c-8531-26d8a489d1d6.pdf",
      category: "general",
      description: "UC course completion certificate",
    },
  ];

  const categories = [
    { id: "all", name: "All Certificates", count: certificates.length },
    {
      id: "coursera",
      name: "Coursera",
      count: certificates.filter((c) => c.category === "coursera").length,
    },
    {
      id: "web",
      name: "Web Development",
      count: certificates.filter((c) => c.category === "web").length,
    },
    {
      id: "programming",
      name: "Programming",
      count: certificates.filter((c) => c.category === "programming").length,
    },
    {
      id: "ai-ml",
      name: "AI & ML",
      count: certificates.filter((c) => c.category === "ai-ml").length,
    },
    {
      id: "database",
      name: "Database",
      count: certificates.filter((c) => c.category === "database").length,
    },
    {
      id: "devops",
      name: "DevOps",
      count: certificates.filter((c) => c.category === "devops").length,
    },
    {
      id: "cloud",
      name: "Cloud",
      count: certificates.filter((c) => c.category === "cloud").length,
    },
    {
      id: "design",
      name: "Design",
      count: certificates.filter((c) => c.category === "design").length,
    },
    {
      id: "general",
      name: "General",
      count: certificates.filter((c) => c.category === "general").length,
    },
  ];

  const filteredCertificates =
    selectedCategory === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "coursera":
        return "🎓";
      case "web":
        return "🌐";
      case "programming":
        return "💻";
      case "ai-ml":
        return "🤖";
      case "database":
        return "🗄️";
      case "devops":
        return "⚙️";
      case "cloud":
        return "☁️";
      case "design":
        return "🎨";
      case "general":
        return "📜";
      default:
        return "📜";
    }
  };

  return (
    <div className="certificates-page">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Certificates</h1>
          <p className="page-subtitle">
            Professional certifications and achievements in various technologies
            and skills
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${
                selectedCategory === category.id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon">
                {getCategoryIcon(category.id)}
              </span>
              <span className="category-name">{category.name}</span>
              <span className="category-count">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {filteredCertificates.map((certificate) => (
            <div key={certificate.id} className="certificate-card">
              <div className="certificate-header">
                <span className="certificate-icon">
                  {getCategoryIcon(certificate.category)}
                </span>
                <div className="certificate-info">
                  <h3 className="certificate-name">{certificate.name}</h3>
                  <p className="certificate-description">
                    {certificate.description}
                  </p>
                </div>
              </div>

              {/* Embedded PDF Viewer */}
              <div className="pdf-viewer-container">
                <iframe
                  src={`/pdf/${certificate.filename}#toolbar=0&navpanes=0&scrollbar=0`}
                  title={certificate.name}
                  className="pdf-iframe"
                  width="100%"
                  height="400"
                />
              </div>

              {/* Download Button Only */}
              <div className="certificate-actions">
                <a
                  href={`/pdf/${certificate.filename}`}
                  download
                  className="download-btn"
                >
                  <span className="btn-icon">⬇️</span>
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <div className="no-certificates">
            <p>No certificates found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
