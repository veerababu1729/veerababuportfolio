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
      <div className="animate-fade-in-up"><Hero /></div>
      <div className="animate-fade-in-up delay-100"><Education /></div>
      <div className="animate-fade-in-up delay-200"><WorkExperience /></div>
      <div className="animate-fade-in-up delay-300"><Projects /></div>
      <div className="animate-fade-in-up delay-400"><Skills /></div>
      <div className="animate-fade-in-up delay-500"><Certifications /></div>
      <div className="animate-fade-in-up"><Achievements /></div>
      <div className="animate-fade-in-up delay-100"><CodingProfiles /></div>
      <div className="animate-fade-in-up delay-200"><ProfileLinks /></div>
      <div className="animate-fade-in-up delay-300"><WhyMe /></div>
      <div className="animate-fade-in-up delay-400"><Contact /></div>
      <div className="animate-fade-in-up delay-500"><Footer /></div>
    </div>
  );
};

export default Index;
