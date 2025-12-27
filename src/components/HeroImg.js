import React from "react";
import { Link } from "react-router-dom";
import "./HeroImgStyles.css";
import introImg from "../assets/intro-img.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        {/* Background Image with Overlay */}
        <div className="hero-background">
          <img 
            className="hero-image" 
            src={introImg} 
            alt="Aftab Pathan - Full Stack Developer" 
            loading="lazy"
            decoding="async"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Content Section */}
        <div className="hero-content">
          <div className="hero-text-wrapper">
            {/* Animated Title */}
            <div className="hero-title-container">
              <h1 className="hero-subtitle">Hello, I'm</h1>
              <h2 className="hero-main-title">Aftab Pathan</h2>
              <div className="hero-role">
                <span className="typing-text">Full Stack Developer</span>
              </div>
            </div>

            {/* Elegant Description */}
            <p className="hero-description">
              Crafting digital experiences that blend beautiful design with 
              robust functionality. I specialize in building modern web applications 
              that are both visually stunning and technically sound.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">
              <Link to="/project" className="btn btn-primary">
                <span>Explore My Work</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link to="/contact" className="btn btn-outline">
                <span>Let's Connect</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </Link>
            </div>

            {/* Tech Stack Tags */}
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Java</span>
              <span className="tech-tag">Spring Boot</span>
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">HTML/CSS</span>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
              <svg className="scroll-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="scroll-text">Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;