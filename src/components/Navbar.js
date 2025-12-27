import { Link } from "react-router-dom"
import "./NavbarStyles.css"
import { FaBars, FaTimes } from "react-icons/fa"
import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  
  const handleClick = () => setClick(!click);
  
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setClick(false);
  };

  const changeColor = () => {
    if(window.scrollY >= 100){
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <nav className={`header ${color ? "header-bg" : ""}`}>
      <div className="navbar-container">
        <a 
          href="#home" 
          className="logo" 
          onClick={(e) => handleLinkClick(e, 'home')}
        >
          <h1>Portfolio.</h1>
        </a>

        <ul className={`nav-menu ${click ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a>
          </li>
          <li>
            <a href="#education" onClick={(e) => handleLinkClick(e, 'education')}>Education</a>
          </li>
          <li>
            <a href="#certifications" onClick={(e) => handleLinkClick(e, 'certifications')}>Certifications</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
          </li>
        </ul>
        
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={24} style={{color: "#fff"}} />
          ) : (
            <FaBars size={24} style={{color: "#fff"}} />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar