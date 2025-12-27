import { FaHome, FaMailBulk, FaPhone, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./FooterStyles.css";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        
        <div className="footer-section">
          <h3 className="footer-title">CONTACT</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaHome className="contact-icon" />
              <div>
                <p>Mumbai</p>
                <p>India</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <p>7385-011-476</p>
            </div>
            
            <div className="contact-item">
              <FaMailBulk className="contact-icon" />
              <p>pathanafab36@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">ABOUT ME</h3>
          <p className="company-description">
   I am <strong>Aftab Pathan</strong>, a Java Full Stack Developer passionate
            about building scalable, secure, and user-friendly web applications.
            I specialize in React for frontend and Spring Boot with MySQL for backend
            development.
          </p>
          
          <div className="social-links">
            <a href="https://github.com/Aftabpathan12" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://x.com/aftab_pathan12" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/a-p-682153322 " target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 Code-B. All rights reserved.</p>
        <p>Full Stack Developer | End-to-end web solutions</p>
      </div>
    </div>
  )
}

export default Footer