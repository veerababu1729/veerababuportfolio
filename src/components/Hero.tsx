import React from 'react';
import heroImage from '../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Hero pattern overlay */}
      <div className="absolute inset-0 hero-pattern"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center container-padding max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-hero text-white mb-6 font-black tracking-tight">
            Veerababu <span className="text-gradient">Palepu</span>
          </h1>
          <p className="text-title text-white/90 mb-4 font-medium">
            Computer Science Engineer | AI & Full Stack Developer
          </p>
          <p className="text-body text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experienced in building innovative, scalable, efficient, and user-friendly software products from design to deployment. 
            Passionate about AI, machine learning, and creating solutions that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-hero">
              View My Work
            </button>
            <button className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-primary">
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float delay-400"></div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;