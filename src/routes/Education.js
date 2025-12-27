import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import EducationContent from '../components/EducationContent';

const Education = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="EDUCATION." text="My academic journey and certifications" />
            <EducationContent />
            <Footer />
        </div>
    );
}

export default Education;