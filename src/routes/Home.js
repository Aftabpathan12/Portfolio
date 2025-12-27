import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg from '../components/HeroImg';
import WorkCard from '../components/WorkCard';
import AboutContent from '../components/AboutContent';
import EducationContent from '../components/EducationContent';
import CertificationsContent from '../components/CertificationsContent';
import Contact from './Contact';

import '../styles/HomeStyles.css';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Find active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="single-page-home">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navigation Dots */}
      <div className="section-indicator">
        {['home', 'about', 'projects', 'education', 'certifications', 'contact'].map((section) => (
          <button
            key={section}
            className={`section-dot ${activeSection === section ? 'active' : ''}`}
            onClick={() => scrollToSection(section)}
            title={`Go to ${section.charAt(0).toUpperCase() + section.slice(1)}`}
          >
            <span className="dot-tooltip">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
          </button>
        ))}
      </div>

      {/* Back to Top Button */}
      {scrollProgress > 20 && (
        <button 
          className="back-to-top"
          onClick={() => scrollToSection('home')}
          title="Back to Top"
        >
          ↑
        </button>
      )}

      <Navbar />
      
      {/* HOME SECTION */}
      <section id="home" className="home-section">
        <HeroImg />
        <div className="scroll-hint">
          <span>Scroll to explore</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>
      
      {/* ABOUT SECTION */}
      <section id="about" className="section-padding fade-in">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">01</span>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know who I am and what I do</p>
          </div>
          <AboutContent />
        </div>
      </section>
      
      {/* PROJECTS SECTION */}
      <section id="projects" className="section-padding fade-in">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">02</span>
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">Featured work and portfolio</p>
          </div>
          <WorkCard showAll={true} />
        </div>
      </section>
      
      {/* EDUCATION SECTION */}
      <section id="education" className="section-padding fade-in">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">03</span>
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">Academic background and qualifications</p>
          </div>
          <EducationContent />
        </div>
      </section>
      
      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="section-padding fade-in">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">04</span>
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle">Validated skills and achievements</p>
          </div>
          <CertificationsContent />
        </div>
      </section>
      
      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding fade-in">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">05</span>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Let's work together on your next project</p>
          </div>
          <Contact />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;