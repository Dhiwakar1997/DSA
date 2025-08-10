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
      name: "Data Structures",
      filename: "Data Structures.pdf",
      category: "computer-science",
      description: "Data Structures and Algorithms certification",
    },
    {
      id: "2",
      name: "AZ-204 Azure Developer Associate (Training)",
      filename: "AZ 204 Azure.pdf",
      category: "cloud",
      description: "Microsoft Azure Developer Associate certification",
    },
    {
      id: "3",
      name: ".NET MAUI",
      filename: "dotNET MAUI.pdf",
      category: "programming",
      description: ".NET Multi-platform App UI development certification",
    },
    {
      id: "4",
      name: "Google Cloud Fundamentals (Training)",
      filename: "Google Cloud Fundamentals.pdf",
      category: "cloud",
      description: "Google Cloud Platform fundamentals certification",
    },
    {
      id: "5",
      name: "CSS Certificate",
      filename: "CSS_Certificate.pdf",
      category: "web",
      description: "CSS styling and design certification",
    },
    {
      id: "6",
      name: "Docker Certificate",
      filename: "Docker_Certificate.pdf",
      category: "devops",
      description: "Docker containerization certification",
    },
    {
      id: "7",
      name: "Django & React Certificate",
      filename: "Django&React_Certificate.pdf",
      category: "web",
      description: "Full-stack development with Django and React",
    },
    {
      id: "8",
      name: "JavaScript Certificate",
      filename: "Javascript_Certificate.pdf",
      category: "web",
      description: "JavaScript programming certification",
    },
    {
      id: "9",
      name: "Machine Learning Specialization",
      filename: "ML_specialization.pdf",
      category: "ai-ml",
      description: "Machine learning specialization certification",
    },
    {
      id: "10",
      name: "PostgreSQL Certificate",
      filename: "PostgresSQL Certificate.pdf",
      category: "database",
      description: "PostgreSQL database management certification",
    },
    {
      id: "11",
      name: "Python Certificate",
      filename: "Python_Certificate.pdf",
      category: "programming",
      description: "Python programming certification",
    },
    {
      id: "12",
      name: "UI/UX Course Certificate",
      filename: "UI-UX-Course-Certificate (1).pdf",
      category: "design",
      description: "User interface and user experience design certification",
    },
  ];

  const categories = [
    { id: "all", name: "All Certificates", count: certificates.length },
    {
      id: "computer-science",
      name: "Computer Science",
      count: certificates.filter((c) => c.category === "computer-science")
        .length,
    },
    {
      id: "cloud",
      name: "Cloud Computing",
      count: certificates.filter((c) => c.category === "cloud").length,
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
      id: "design",
      name: "Design",
      count: certificates.filter((c) => c.category === "design").length,
    },
  ];

  const filteredCertificates =
    selectedCategory === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "computer-science":
        return "🧮";
      case "cloud":
        return "☁️";
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
      case "design":
        return "🎨";
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
