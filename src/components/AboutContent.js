import React from "react";
import "./AboutContentStyles.css";
import profileImg from "../assets/profile.jpg";

const AboutContent = () => {
  const fullStackSkills = [
    {
      name: "Frontend",
      level: 90,
      color: "#4A90E2",
      technologies: "React, HTML, CSS, JavaScript, Bootstrap"
    },
    {
      name: "Backend",
      level: 85,
      color: "#7B1FA2",
      technologies: "Java, Spring Boot, Spring Security, REST APIs"
    },
    {
      name: "Database",
      level: 80,
      color: "#D32F2F",
      technologies: "MySQL"
    }
  ];

  return (
    <div className="about-container">
      <div className="about-content-wrapper">

        {/* LEFT SIDE */}
        <div className="about-image-container">
          <div className="image-wrapper">
            <img
              src={profileImg}
              alt="Aftab Pathan - Full Stack Developer"
              className="profile-image"
            />
            <div className="developer-badge">
              <span>🚀 Java Full Stack Developer</span>
            </div>
          </div>

          {/* BADGES */}
          <div className="stack-badges">
            <div className="badge frontend-badge">
              <span className="badge-icon">💻</span>
              <span className="badge-text">Frontend</span>
            </div>
            <div className="badge backend-badge">
              <span className="badge-icon">⚙️</span>
              <span className="badge-text">Backend</span>
            </div>
            <div className="badge database-badge">
              <span className="badge-icon">🗄️</span>
              <span className="badge-text">Database</span>
            </div>
          </div>

          {/* TECH STACK */}
          <div className="tech-overview">
            <h3>Tech Stack</h3>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Java</span>
              <span className="tech-tag">Spring Boot</span>
              <span className="tech-tag">Spring Security</span>
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">Bootstrap</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-text-container">
          <div className="section-header">
            <span className="section-subtitle">Full Stack Developer</span>
            <h1 className="section-title">
              Building <span className="highlight">End-to-End</span> Solutions
            </h1>
            <div className="title-underline"></div>
          </div>

          <div className="about-description">
            <p className="lead-text">
              Hello! I'm <strong>Aftab Pathan</strong>, a Java Full Stack Developer
              with hands-on experience in building complete web applications
              using React on the frontend and Spring Boot on the backend.
            </p>

            <div className="fullstack-approach">
              <h3>My Full Stack Approach</h3>
              <p>
                I design responsive user interfaces, develop secure REST APIs,
                and integrate databases to deliver scalable and maintainable
                applications.
              </p>
            </div>

            <div className="philosophy-cards">
              <div className="philosophy-card">
                <div className="philosophy-icon">🔗</div>
                <h4>End-to-End Development</h4>
                <p>From UI design to backend APIs and database integration</p>
              </div>

              <div className="philosophy-card">
                <div className="philosophy-icon">⚡</div>
                <h4>Clean Architecture</h4>
                <p>Focus on readable, maintainable, and reusable code</p>
              </div>

              <div className="philosophy-card">
                <div className="philosophy-icon">🛡️</div>
                <h4>Security Awareness</h4>
                <p>Authentication and authorization using Spring Security</p>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="skills-section">
            <h2 className="skills-title">Full Stack Proficiency</h2>

            <div className="skills-grid">
              {fullStackSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <div>
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-tech">{skill.technologies}</div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS */}
          <div className="project-examples">
            <h2 className="skills-title">Full Stack Projects</h2>

            <div className="project-cards">

              <div className="project-card">
                <div className="project-icon">📦</div>
                <h4>Product Management System</h4>
                <p>
                  Developed a full-stack CRUD application using React,
                  Spring Boot, REST APIs, and MySQL.
                </p>
              </div>

              <div className="project-card">
                <div className="project-icon">🛒</div>
                <h4>Stationery Management Application</h4>
                <p>
                  Built frontend with React and backend with Spring Boot.
                  Implemented product management and database integration.
                </p>
              </div>

              <div className="project-card">
                <div className="project-icon">🐾</div>
                <h4>Pet Store Application</h4>
                <p>
                  Created RESTful APIs using Spring Boot and connected them
                  with React frontend using MySQL database.
                </p>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <button className="contact-btn">
              <span>Discuss Your Project</span>
              <svg
                className="btn-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutContent;