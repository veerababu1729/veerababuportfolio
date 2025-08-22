import React from 'react';
import { Quote, Lightbulb, Target, Zap } from 'lucide-react';

const WhyMe = () => {
  const strengths = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "Work proof in building optimized, scalable, efficient software like telugumemes.com and Exam AI tool with measurable impact and user base."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Learning & Adaptation",
      description: "Ability to quickly learn and explore new or required technologies and tools for any project or problem, staying ahead of tech trends."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Critical Thinking & Problem Solving",
      description: "Team working nature with strong debugging skills and fundamental approach to solving complex technical challenges."
    },
    {
      icon: <Quote className="w-6 h-6" />,
      title: "Innovation & Research",
      description: "Knowledge of latest tech advancements, especially in AI. I use cutting-edge tools like Perplexity for research and stay updated with emerging technologies."
    }
  ];

  return (
    <section id="why-me" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-display text-gradient mb-4">Why Choose Me?</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            What sets me apart as a developer and technology professional
          </p>
        </div>
        
        {/* Main value proposition */}
        <div className="bg-gradient-hero rounded-3xl p-12 text-center text-white mb-16 relative overflow-hidden">
          <div className="absolute inset-0 hero-pattern opacity-20"></div>
          <div className="relative z-10">
            <Quote className="w-16 h-16 mx-auto mb-8 opacity-80" />
            <blockquote className="text-title md:text-headline font-semibold mb-8 max-w-4xl mx-auto leading-relaxed">
              "I don't just write code – I craft solutions that make a difference. 
              Every project is an opportunity to push boundaries and create something meaningful."
            </blockquote>
            <p className="text-body opacity-90 max-w-3xl mx-auto">
              From ideation to building platforms that serve thousands of users, I bring passion, precision, and innovation to every line of code from first principles of thinking.
            </p>
          </div>
        </div>
        
        {/* Key strengths */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {strengths.map((strength, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-primary transition-all duration-300 card-3d animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-xl flex-shrink-0">
                  <div className="text-white">
                    {strength.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-title font-bold text-foreground mb-3">
                    {strength.title}
                  </h3>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Results showcase */}
        <div className="bg-gradient-card rounded-3xl p-12">
          <h3 className="text-headline font-bold text-foreground mb-8 text-center">
            Measurable Impact
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up delay-100">
              <div className="text-4xl font-black text-primary mb-2">80k+</div>
              <p className="text-body text-muted-foreground">Users Impacted</p>
              <p className="text-caption text-muted-foreground mt-1">Across all platforms</p>
            </div>
            <div className="text-center animate-fade-in-up delay-200">
              <div className="text-4xl font-black text-primary mb-2">50%</div>
              <p className="text-body text-muted-foreground">Time Reduction</p>
              <p className="text-caption text-muted-foreground mt-1">Through AI automation</p>
            </div>
            <div className="text-center animate-fade-in-up delay-300">
              <div className="text-4xl font-black text-primary mb-2">₹1L+</div>
              <p className="text-body text-muted-foreground">Revenue Generated</p>
              <p className="text-caption text-muted-foreground mt-1">Community building</p>
            </div>
            <div className="text-center animate-fade-in-up delay-400">
              <div className="text-4xl font-black text-primary mb-2">12+</div>
              <p className="text-body text-muted-foreground">Projects Delivered</p>
              <p className="text-caption text-muted-foreground mt-1">AI/ML & Full Stack</p>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-title font-bold text-foreground mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-body text-muted-foreground mb-6 max-w-md">
              Let's discuss how I can contribute to your next project or team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-primary"
              >
                Get In Touch
              </a>
              <a 
                href="#projects"
                className="border border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;