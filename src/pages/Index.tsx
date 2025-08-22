import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Education from '../components/Education';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import CodingProfiles from '../components/CodingProfiles';
import ProfileLinks from '../components/ProfileLinks';
import WhyMe from '../components/WhyMe';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Education />
      <WorkExperience />
      <Projects />
      <Skills />
      <Certifications />
      <Achievements />
      <CodingProfiles />
      <ProfileLinks />
      <WhyMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
