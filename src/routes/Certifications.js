import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import CertificationsContent from '../components/CertificationsContent';

const Certifications = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="CERTIFICATIONS." text="My professional certifications and achievements" />
            <CertificationsContent />
            <Footer />
        </div>
    );
}

export default Certifications;