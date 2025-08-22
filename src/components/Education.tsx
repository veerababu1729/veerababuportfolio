import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech Computer Science Engineering",
      institution: "Aditya University, Surampalem",
      year: "2026 Graduate",
      cgpa: "8.28",
      description: "Specializing in Full Stack Development, AI and Machine Learning "
    },
    {
      degree: "XII (MPC)",
      institution: "Sri Chaitanya Junior College, Kakinada",
      
      score: "Score : 955/1000",
      description: "Mathematics, Physics, Chemistry with excellent academic performance"
    }
  ];

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-display text-gradient mb-4">Education</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in Computer Science and Engineering
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((education, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-primary transition-all duration-300 card-3d animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-title font-bold text-foreground mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-body text-primary font-semibold mb-1">
                    {education.institution}
                  </p>
                  <div className="flex items-center gap-4 text-caption">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{education.year}</span>
                    </div>
                    {education.cgpa && (
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span>CGPA: {education.cgpa}</span>
                      </div>
                    )}
                    {education.score && (
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span>{education.score}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <p className="text-body text-muted-foreground leading-relaxed">
                {education.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;