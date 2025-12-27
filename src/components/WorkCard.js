import './WorkCardStyles.css';
import React, { useState } from 'react';
import WorkData from './WorkData';

const WorkCard = ({ showAll = true }) => {
  // Show only 3 projects by default, all if showAll is true
  const initialProjects = showAll ? WorkData : WorkData.slice(0, 3);
  const [displayedProjects, setDisplayedProjects] = useState(initialProjects);
  const [showAllProjects, setShowAllProjects] = useState(showAll);

  const handleShowMore = () => {
    setDisplayedProjects(WorkData);
    setShowAllProjects(true);
    
    // Smooth scroll to top of projects section
    setTimeout(() => {
      const projectHeading = document.querySelector('.project-heading');
      if (projectHeading) {
        projectHeading.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const handleShowLess = () => {
    setDisplayedProjects(WorkData.slice(0, 3));
    setShowAllProjects(false);
    
    // Smooth scroll to top of projects section
    setTimeout(() => {
      const projectHeading = document.querySelector('.project-heading');
      if (projectHeading) {
        projectHeading.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <div className='work-container'>
      <h1 className='project-heading'>
        {showAll ? 'All Projects' : 'Featured Projects'}
      </h1>
      
      {!showAll && (
        <p className='project-subtitle'>
          Here are some of my recent works. Click "View All Projects" to see more or 
          visit the Projects page from the navigation menu.
        </p>
      )}
      
      <div className='project-container'>
        {displayedProjects.map((project, index) => (
          <div 
            className='project-card' 
            key={index}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <img src={project.img} alt={project.title} />
            <h2 className='project-title'>{project.title}</h2>
            <div className='pro-details'>
              <p>{project.description}</p>
              <div className='pro-btns'>
                <a 
                  href={project.liveLink} 
                  className="btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  VIEW
                </a>
                <a 
                  href={project.sourceLink} 
                  className="btn source-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  SOURCE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Show More/Show Less buttons only on Home page (when showAll is false) */}
      {!showAll && !showAllProjects && (
        <div className="show-more-container">
          <button onClick={handleShowMore} className="btn show-more-btn">
            View All Projects
          </button>
        </div>
      )}
      
      {!showAll && showAllProjects && (
        <div className="show-more-container">
          <button onClick={handleShowLess} className="btn show-more-btn">
            Show Less
          </button>
        </div>
      )}
    </div>
  );
}

export default WorkCard;