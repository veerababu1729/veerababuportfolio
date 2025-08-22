import React from 'react';
import { Briefcase, Calendar, MapPin, Users, Zap } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Lead developer and product architect",
      company: "EE Info Edu Tech Startup",
      location: "Remote",
      period: "Aug 2022 - Present",
      type: "Full-time",
      achievements: [
        "Developed, deployed and maintaining telugumemes.com and Exam AI tool.",
        "Built a distrtibution of 50k+ Members Engineering Tech Community @ee.info, generated 100k+ revenue."
      ]
    },
    {
      title: "AI & ML Intern (Onsite)",
      company: "OPENTAB Innovations",
      location: "SmartBridge",
      period: "May 2025 - Jun 2025",
      type: "Internship",
      achievements: [
        "Worked on fine-tuning AI models with LLMs and custom data training for Generative AI applications",
        "Built ML models (Linear Regression, Decision Trees) using Python, NumPy, and Pandas on real-world datasets",
        "Gained experience in team leading, requirements analysis, debugging, handling ambiguity, research, and agile principles"
      ]
    },
    {
      title: "MERN Full Stack Development Intern",
      company: "SmartBridge",
      location: "Remote",
      period: "Jun 2024 - Jul 2024",
      type: "Internship",
      achievements: [
        "Learned and implemented SQL operations, full stack web apps using MongoDB, Express.js, React.js, Node.js",
        "Developed API integrations and CRUD operations with real-time projects",
        "Built News Blog Website and Note-taking application with modern tech stack"
      ]
    },
    {
      title: "UNSTOP Campus Ambassador",
      company: "UNSTOP",
      location: "Remote",
      period: "Dec 2024 - Apr 2025",
      type: "Leadership Role",
      achievements: [
        "Organized hackathons, coding challenges, promoted platform events among 1000s of students",
        "Bridged gap between off-campus opportunities and students"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Leadership Role':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-display text-gradient mb-4">Work Experience</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Professional journey through internships, leadership roles, and startup experience
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-primary"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background shadow-primary"></div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-primary transition-all duration-300 card-3d">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-primary rounded-lg">
                          <Briefcase className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-title font-bold text-foreground">{exp.title}</h3>
                          <p className="text-body text-primary font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm border ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-caption text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-body text-muted-foreground">
                          <Zap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;