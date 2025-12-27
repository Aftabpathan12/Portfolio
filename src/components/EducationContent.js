import React from 'react';
import './EducationStyles.css';

const EducationContent = () => {
  // Make sure arrays are defined
  const educationData = [
   {
      degree: "IT Vedant",
      institution: "DKASC College, Ichalkaranji",
      duration: "2024 - 2025",
      description: "Hands-on training in Full Stack Development with real-world projects using React, Java, Spring Boot, and MySQL. Focused on building scalable web applications and industry-ready skills.",
      grade: "A",
    
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "DKASC College, Ichalkaranji",
      duration: "2021 - 2024",
      description: "Strong foundation in computer science concepts including programming, databases, and software engineering. Developed analytical and problem-solving skills through academic projects and coursework.",
      grade: "CGPA: 7.30/10",
    
    },
    {
  degree: "Higher Secondary Education ",
  institution: "DKASC College, Ichalkaranji",
  duration: "2019 - 2021",
  description: "Completed Higher Secondary Education in Commerce with subjects including Accounting, Economics, and Business Studies. Built a strong foundation in analytical thinking, financial concepts, and discipline.",
  grade: "Percentage: 67.50%",
},
{
  degree: "Secondary Education (CBSE)",
  institution: "JambuKumar High School, Ichalkaranji",
  duration: "2005 - 2019",
  description: "Completed Secondary Education under the CBSE curriculum with a balanced focus on academics and extracurricular activities. Developed core learning skills, discipline, and problem-solving ability.",
  grade: "Percentage: 64.20%",
}

  ];

  const certifications = [
    "Full Stack Web Development - Coursera",
    "React.js Developer - Udemy", 
    "Spring Boot & Microservices - Udemy",
    "MongoDB for Developers - MongoDB University"
  ];

  // Add safety checks
  const safeEducationData = educationData || [];
  const safeCertifications = certifications || [];

  return (
    <div className="education-section">
      <div className="education-container">
        
        <h2 className="education-title">Academic Education</h2>
        
        {/* Safe rendering with optional chaining */}
        {safeEducationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="edu-header">
              <h3>{edu?.degree || "Degree"}</h3>
              <span className="duration">{edu?.duration || "Duration"}</span>
            </div>
            <p className="institution">{edu?.institution || "Institution"}</p>
            <p className="description">{edu?.description || "Description"}</p>
            <p className="grade">{edu?.grade || "Grade"}</p>
         
          </div>
        ))}

       
        

      

      </div>
    </div>
  );
};

export default EducationContent;