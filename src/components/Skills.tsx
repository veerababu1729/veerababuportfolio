import React, { useState } from 'react';
import { Code, Database, Cloud, Brain, Settings, Smartphone } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Languages');

  const skillCategories = {
    'Languages': {
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: 'C/C++', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'R', level: 75 }
      ]
    },
    'Web Development': {
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: 'React.js', level: 92 },
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Angular', level: 80 },
        { name: 'REST APIs', level: 90 }
      ]
    },
    'Databases & Cloud': {
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 88 },
        { name: 'Firebase', level: 90 },
        { name: 'AWS', level: 82 },
        { name: 'Google Cloud', level: 78 }
      ]
    },
    'AI/ML': {
      icon: <Brain className="w-5 h-5" />,
      skills: [
        { name: 'Machine Learning', level: 88 },
        { name: 'TensorFlow', level: 82 },
        { name: 'PyTorch', level: 80 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'Pandas/NumPy', level: 92 },
        { name: 'Generative AI', level: 85 }
      ]
    },
    'Tools & Methodologies': {
      icon: <Settings className="w-5 h-5" />,
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 75 },
        { name: 'Kubernetes', level: 70 },
        { name: 'VS Code', level: 95 },
        { name: 'Agile', level: 85 },
        { name: 'System Design', level: 80 }
      ]
    },
    'Miscellaneous': {
      icon: <Smartphone className="w-5 h-5" />,
      skills: [
        { name: 'Flutter', level: 75 },
        { name: 'iOS/Android', level: 70 },
        { name: 'Linux', level: 85 },
        { name: 'Tableau', level: 80 },
        { name: 'Testing & Debugging', level: 88 }
      ]
    }
  };

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-green-500 to-emerald-600';
    if (level >= 80) return 'from-blue-500 to-cyan-600';
    if (level >= 70) return 'from-purple-500 to-violet-600';
    return 'from-orange-500 to-amber-600';
  };

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-display text-gradient mb-4">Skills & Expertise</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills across multiple domains of software development
          </p>
        </div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([category, data]) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-primary text-white shadow-primary'
                  : 'bg-gradient-card text-foreground hover:bg-secondary border border-border'
              }`}
            >
              {data.icon}
              {category}
            </button>
          ))}
        </div>
        
        {/* Skills display */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-card animate-scale-in">
          <h3 className="text-headline font-bold text-foreground mb-8 text-center">
            {activeCategory}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-3">
                  <span className="text-body font-semibold text-foreground">{skill.name}</span>
                </div>
                
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden skill-bar">
                  <div 
                    className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Key competencies */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center bg-gradient-card rounded-2xl p-8 shadow-card card-3d">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-title font-bold text-foreground mb-3">Full Stack Development</h3>
            <p className="text-body text-muted-foreground">
              End-to-end web application development with modern frameworks and best practices
            </p>
          </div>
          
          <div className="text-center bg-gradient-card rounded-2xl p-8 shadow-card card-3d">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-title font-bold text-foreground mb-3">AI & Machine Learning</h3>
            <p className="text-body text-muted-foreground">
              Building intelligent systems with cutting-edge ML algorithms and AI technologies
            </p>
          </div>
          
          <div className="text-center bg-gradient-card rounded-2xl p-8 shadow-card card-3d">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-title font-bold text-foreground mb-3">Cloud & DevOps</h3>
            <p className="text-body text-muted-foreground">
              Scalable cloud solutions with modern deployment and infrastructure practices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;