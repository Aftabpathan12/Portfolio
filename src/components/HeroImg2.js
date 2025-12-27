import React, { Component } from 'react';
import "./HeroImg2Styles.css";

class HeroImg2 extends Component {
  render() {
    const { heading, text } = this.props;
    
    return (
      <div className="hero-img2">
        <div className="hero-img2-container">
          {/* Background with gradient overlay */}
          <div className="hero-img2-background"></div>
          
          {/* Content */}
          <div className="hero-img2-content">
            <div className="hero-img2-text-wrapper">
              {/* Breadcrumb */}
              <div className="breadcrumb">
                <span className="breadcrumb-item"></span>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-item active">{heading}</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="hero-img2-heading">
                {heading}
                <div className="heading-underline"></div>
              </h1>
              
              {/* Description */}
              <p className="hero-img2-text">{text}</p>
              
              {/* Decorative Elements */}
              <div className="decorative-elements">
                <div className="decorative-line"></div>
                <div className="decorative-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Progress */}
          <div className="scroll-progress">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroImg2;