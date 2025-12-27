import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <HeroImg2 
        heading="Full Stack Developer" 
        text="End-to-end web solutions | Frontend to Backend | Scalable Applications"
      />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About