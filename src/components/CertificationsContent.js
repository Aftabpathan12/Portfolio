import React, { useState } from 'react';
import './CertificationsStyles.css';
import { FaExternalLinkAlt, FaCalendarAlt, FaDownload, FaTimes } from 'react-icons/fa';
import metaCert from "../assets/meta-cert.png";
import IBMcertificates from "../assets/IBMcertificates.png";
import sql from "../assets/sql.jpg";
import corejava from "../assets/corejava.jpg";
import webdesign from "../assets/webdesign.jpg";
import advancedwebdesign from "../assets/advancedwebdesign.jpg";

const CertificationsContent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');

  const certifications = [
    {
      id: 1,
      title: "Master in Full Stack Web Development with Java",
      year: "2024",
      description: "End-to-end full stack development with React, Java, Spring Boot, and SQL.Hands-on experience building real-world web applications.",
      link: "/certificates/JFSD.pdf",
      image: metaCert,
    },
      {
      id: 2,
      title: "IBM certification of java fundamentals",
      year: "2024",
      description: "IBM-certified training in Java syntax, OOP principles, and control structures.Strengthened core programming and problem-solving skills.",
      link: "/certificates/IBMCEP.pdf",
      image: IBMcertificates,
    },
         {
      id:3,
      title: "Master in Full Stack Web Development with Java",
      year: "2024",
      description: "Trained in SQL fundamentals, joins, subqueries, indexing, and normalization.Experienced in writing optimized queries for relational databases.",
      link:  "/certificates/sql.pdf",
      image: sql,
    },
          {
      id:4,
      title: "Master in Full Stack Web Development with Java",
      year: "2024",
      description: "Strong foundation in Java OOP, collections, exception handling, and multithreading.Developed logic-driven and backend-ready applications.",
      link: "/certificates/corejava.pdf",
      image: corejava,
    },
          {
      id:5,
      title: "Master in Full Stack Web Development with Java",
      year: "2024",
      description: "Built responsive websites using HTML5, CSS3, and basic JavaScript.Focused on clean layouts, forms, and accessible UI design.",
      link: "/certificates/webdesign.pdf",
      image: webdesign,
    },
          {
      id:6,
      title: "Master in Full Stack Web Development with Java",
      year: "2024",
      description: "Learned advanced CSS, animations, responsive design, and JavaScript concepts.Created interactive and performance-optimized web interfaces.",
      link: "/certificates/advancedwebdesign.pdf",
      image: advancedwebdesign,
    },
  ];

  const openImageModal = (imageSrc, title) => {
    setSelectedImage(imageSrc);
    setSelectedTitle(title);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal') {
      closeModal();
    }
  };

  return (
    <div className="certifications-page">
      <div className="certifications-container">
        
        <div className="certifications-header">
          <div className="header-icon">
            <i className="fas fa-certificate"></i>
          </div>
          <h1>Professional Certifications</h1>
          <p className="subtitle">Validated skills and professional achievements</p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div className="certification-card" key={cert.id}>
              
              <div className="cert-image-container">
                <div className="image-wrapper">
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} Certification`} 
                    className="cert-image"
                    onClick={() => openImageModal(cert.image, cert.title)}
                    style={{ cursor: 'pointer' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="image-placeholder">
                          <i class="fas fa-certificate"></i>
                          <span>${cert.issuer}</span>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
              
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="issuer-name">{cert.issuer}</p>
                
                <div className="cert-meta">
                  <span className="year">
                    <FaCalendarAlt /> {cert.year}
                  </span>
                </div>
                
                <p className="description">{cert.description}</p>
                
                <div className="card-footer">
                  <a href={cert.link} className="view-btn" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> View Certificate
                  </a>
                  <button 
                    className="preview-btn" 
                    onClick={() => openImageModal(cert.image, cert.title)}
                  >
                    <i className="fas fa-expand"></i> Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <div className="resume-card">
            <div className="resume-content">
              <div className="resume-icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="resume-info">
                <h3>Download Complete Resume</h3>
                <p>Get detailed information about all my certifications, skills, and experience in one document.</p>
                <div className="resume-buttons">
                  <a href="/Aftab_pathan.pdf" download className="download-btn">
                    <FaDownload /> Download PDF Resume
                  </a>
                  <a href="/Aftab_pathan.pdf" target="_blank" rel="noopener noreferrer" className="view-resume-btn">
                    <FaExternalLinkAlt /> View Online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {modalOpen && (
          <div className="modal" onClick={handleBackdropClick}>
            <div className="modal-content-wrapper">
              <span className="close" onClick={closeModal}>
                <FaTimes />
              </span>
              <img 
                className="modal-image" 
                src={selectedImage} 
                alt="Certificate Preview" 
              />
              <div className="modal-caption">{selectedTitle}</div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CertificationsContent;