import React from 'react';
import { Award, ExternalLink, Star, BookOpen } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      description: "5 months comprehensive course covering cloud fundamentals and AWS services",
      type: "Cloud Computing",
      year: "2024"
    },
    {
      title: "5 Star Coder - Python, Java, Problem Solving, SQL",
      issuer: "HackerRank",
      description: "Achieved 5-star rating across multiple programming domains",
      type: "Programming",
      year: "2022-24"
    },
    {
      title: "MTA Python Certification",
      issuer: "Microsoft",
      description: "Microsoft Technology Associate certification in Python programming",
      type: "Programming",
      year: "2023"
    },
    {
      title: "SQL & MongoDB Database Concepts",
      issuer: "SmartBridge",
      description: "Comprehensive coursework in relational and NoSQL database management",
      type: "Database",
      year: "2024"
    },
    {
      title: "Introduction to Data Science and Analytics",
      issuer: "CISCO",
      description: "Foundational concepts in data science and analytical methodologies",
      type: "Data Science",
      year: "2024"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Cloud Computing':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Programming':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Database':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Data Science':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Cloud Computing':
        return '☁️';
      case 'Programming':
        return '💻';
      case 'Database':
        return '🗄️';
      case 'Data Science':
        return '📊';
      default:
        return '📜';
    }
  };

  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-display text-gradient mb-4">Certifications & Coursework</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning in cutting-edge technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-primary transition-all duration-300 card-3d animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{getTypeIcon(cert.type)}</div>
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs border font-medium ${getTypeColor(cert.type)}`}>
                  {cert.type}
                </span>
              </div>
              
              <h3 className="text-title font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-primary" />
                <p className="text-body text-primary font-semibold">{cert.issuer}</p>
                <span className="text-caption text-muted-foreground">• {cert.year}</span>
              </div>
              
              <p className="text-body text-muted-foreground leading-relaxed mb-6">
                {cert.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-caption text-primary">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Certified</span>
                </div>
                <button className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">Verify</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center bg-gradient-card rounded-2xl p-6 shadow-card">
            <div className="text-3xl font-black text-primary mb-2">5+</div>
            <p className="text-body text-muted-foreground">Certifications</p>
          </div>
          <div className="text-center bg-gradient-card rounded-2xl p-6 shadow-card">
            <div className="text-3xl font-black text-primary mb-2">4</div>
            <p className="text-body text-muted-foreground">Specializations</p>
          </div>
          <div className="text-center bg-gradient-card rounded-2xl p-6 shadow-card">
            <div className="text-3xl font-black text-primary mb-2">2+</div>
            <p className="text-body text-muted-foreground">Years Learning</p>
          </div>
          <div className="text-center bg-gradient-card rounded-2xl p-6 shadow-card">
            <div className="text-3xl font-black text-primary mb-2">⭐</div>
            <p className="text-body text-muted-foreground">5-Star Rated</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;