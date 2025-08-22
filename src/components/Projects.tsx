import React, { useState } from 'react';
import { ExternalLink, Github, Play, Users, TrendingUp, Zap, Brain, Code, Database } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Telugumemes.com",
      subtitle: "Full-Stack Video Template Platform",
      description: "Built and deployed a full-stack video template platform on AWS, reducing creators editing time by 40–50%. Designed a specialized searching algorithm for fast, relevant video retrieval.",
      impact: "1500+ daily active users",
      techStack: ["HTML", "CSS", "JavaScript", "Node.js", "REST APIs", "Firestore", "AWS"],
      achievements: [
        "Reduced creators editing time by 40-50%",
        "Achieved 1500+ daily active users",
        "Responsive, optimized UI and seamless UX",
        "Specialized search algorithm for video retrieval"
      ],
      links: {
        live: "https://telugumemes.com",
        github: "#",
        demo: "#"
      },
      type: "Live Platform",
      image: "/lovable-uploads/8c15f813-48b3-4d03-8bfa-6a97dcb22e4b.png"
    },
    {
      title: "One Day Exam Preparation AI Tool",
      subtitle: "AI-Powered Exam Assistant",
      description: "Built a fine-tuned AI-powered exam assistant that answers from user-uploaded docs, cutting prep time by 50%. Used RAG with FAISS & SpacyEmbeddings for fast, accurate document retrieval.",
      impact: "50% reduction in exam prep time",
      techStack: ["Python", "Streamlit", "FAISS", "PyPDF2", "SpacyEmbeddings", "RAG", "Google Gemini API"],
      achievements: [
        "50% reduction in exam preparation time",
        "RAG implementation with FAISS for fast retrieval",
        "Google Gemini API integration for fallback",
        "Document processing with PyPDF2"
      ],
      links: {
        live: "#",
        github: "#",
        demo: "https://youtu.be/HFexB2bScIU?si=HZOHxjJzqyesFGfO"
      },
      type: "SaaS Prototype",
      image: "/lovable-uploads/oneday exam ai toolimage.png"
    },
    {
      title: "Movie Recommendation System",
      subtitle: "Hybrid ML Recommendation Engine",
      description: "Built hybrid recommendation engine with TF-IDF, K-NN, matrix factorization in Flask framework. Implemented sentiment analysis on live user reviews using Naive Bayes and TF-IDF.",
      impact: "≈85% accuracy",
      techStack: ["Python", "Flask", "TF-IDF", "K-NN", "Naive Bayes", "Pandas", "Jupyter"],
      achievements: [
        "85% model accuracy achieved",
        "Hybrid recommendation with multiple algorithms",
        "Sentiment analysis on user reviews",
        "Weighted genre-year scoring system",
        "Full ETL pipeline with MovieLens and TMDB data"
      ],
      links: {
        live: "#",
        github: "#",
        demo: "#"
      },
      type: "Data Science",
      image: "/lovable-uploads/movieproject.png"
    }
  ];

  const getTechIcon = (tech: string) => {
    if (tech.includes('AI') || tech.includes('ML') || tech.includes('FAISS')) return <Brain className="w-4 h-4" />;
    if (tech.includes('Node') || tech.includes('React') || tech.includes('Express')) return <Code className="w-4 h-4" />;
    if (tech.includes('Database') || tech.includes('Firestore') || tech.includes('MongoDB')) return <Database className="w-4 h-4" />;
    return <Zap className="w-4 h-4" />;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Live Platform':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'SaaS Prototype':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Data Science':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-display text-gradient mb-4">Live Projects & Startups</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Innovative projects that solve real-world problems with cutting-edge technology
          </p>
        </div>
        
        {/* Project navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeProject === index
                  ? 'bg-gradient-primary text-white shadow-primary'
                  : 'bg-white text-foreground hover:bg-secondary border border-border'
              }`}
            >
              {project.title.split('.')[0]}
            </button>
          ))}
        </div>
        
        {/* Active project display */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-card animate-scale-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm border font-medium ${getTypeColor(projects[activeProject].type)}`}>
                  {projects[activeProject].type}
                </span>
                <div className="flex items-center gap-2 text-caption text-primary">
                  <TrendingUp className="w-4 h-4" />
                  <span>{projects[activeProject].impact}</span>
                </div>
              </div>
              
              <h3 className="text-headline font-bold text-foreground mb-3">
                {projects[activeProject].title}
              </h3>
              <p className="text-title text-primary font-semibold mb-6">
                {projects[activeProject].subtitle}
              </p>
              
              <p className="text-body text-muted-foreground mb-8 leading-relaxed">
                {projects[activeProject].description}
              </p>
              
              {/* Tech stack */}
              <div className="mb-8">
                <h4 className="text-body font-semibold text-foreground mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {projects[activeProject].techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href={projects[activeProject].links.live}
                  className="flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-primary"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Link
                </a>
                <a 
                  href={projects[activeProject].links.github}
                  className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
                <a 
                  href={projects[activeProject].links.demo}
                  className="flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Play className="w-4 h-4" />
                  Video Demo
                </a>
              </div>
            </div>
            
            {/* Project achievements */}
            <div className="bg-white/50 rounded-2xl p-8">
              {projects[activeProject].image && (
                <div className="mb-6">
                  <img 
                    src={projects[activeProject].image} 
                    alt={`${projects[activeProject].title} screenshot`}
                    className="w-full rounded-xl shadow-lg object-cover max-h-64"
                  />
                </div>
              )}
              <h4 className="text-title font-bold text-foreground mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Key Achievements
              </h4>
              <ul className="space-y-4">
                {projects[activeProject].achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-body text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* More projects section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 inline-block">
            <h3 className="text-title font-bold text-foreground mb-4">More Projects</h3>
            <p className="text-body text-muted-foreground mb-6">
              12+ original projects in AI, ML, and Full Stack domains
            </p>
            <a 
              href="https://github.com/veerababu1729"
              className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 mx-auto w-fit"
            >
              <Github className="w-4 h-4" />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
