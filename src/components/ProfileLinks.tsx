import React from 'react';
import { Github, Linkedin, Youtube, Instagram, ExternalLink, Video, FileText } from 'lucide-react';

const ProfileLinks = () => {
  const profileLinks = [
    {
      platform: "GitHub",
      username: "@veerababu1729",
      description: "40+ repositories, 10k+ stars, open source contributions",
      icon: <Github className="w-6 h-6" />,
      link: "https://github.com/veerababu1729",
      color: "from-gray-700 to-gray-900",
      stats: "40+ Repos"
    },
    {
      platform: "LinkedIn",
      username: "Veerababu Palepu",
      description: "Professional network, career updates, tech insights",
      icon: <Linkedin className="w-6 h-6" />,
      link: "https://linkedin.com/in/veerababu-palepu",
      color: "from-blue-600 to-blue-800",
      stats: "2k+ Connections"
    },
    {
      platform: "YouTube",
      username: "Tech Demos",
      description: "Project demonstrations and technical walkthroughs",
      icon: <Youtube className="w-6 h-6" />,
      link: "https://youtube.com/@veerababu1729",
      color: "from-red-600 to-red-800",
      stats: "Video Portfolio"
    },
    {
      platform: "Instagram",
      username: "@veerababu1729",
      description: "Behind the scenes, tech journey, community highlights",
      icon: <Instagram className="w-6 h-6" />,
      link: "https://instagram.com/veerababu1729",
      color: "from-pink-600 to-purple-600",
      stats: "Tech Journey"
    }
  ];

  const portfolioDemos = [
    {
      title: "Live Project Demos",
      description: "Interactive demonstrations of Telugumemes.com and AI tools",
      icon: <Video className="w-5 h-5" />,
      link: "#",
      type: "demo"
    },
    {
      title: "Technical Documentation",
      description: "Detailed project documentation and architecture guides",
      icon: <FileText className="w-5 h-5" />,
      link: "#",
      type: "docs"
    },
    {
      title: "Video Portfolio",
      description: "Comprehensive video showcasing all projects and achievements",
      icon: <Youtube className="w-5 h-5" />,
      link: "#",
      type: "video"
    }
  ];

  return (
    <section id="profile-links" className="section-padding">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-display text-gradient mb-4">Profile Links & Portfolio</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Connect with me across platforms and explore detailed project demonstrations
          </p>
        </div>
        
        {/* Social profiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {profileLinks.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-primary transition-all duration-300 card-3d group animate-fade-in-up block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-4 bg-gradient-to-br ${profile.color} rounded-2xl w-fit mx-auto mb-6`}>
                <div className="text-white group-hover:scale-110 transition-transform">
                  {profile.icon}
                </div>
              </div>
              
              <h3 className="text-title font-bold text-foreground mb-2 text-center group-hover:text-primary transition-colors">
                {profile.platform}
              </h3>
              
              <p className="text-caption text-primary font-semibold mb-3 text-center">
                {profile.stats}
              </p>
              
              <p className="text-body text-muted-foreground text-center leading-relaxed mb-4">
                {profile.description}
              </p>
              
              <div className="flex items-center justify-center gap-2 text-primary group-hover:text-primary-dark transition-colors">
                <span className="text-sm font-medium">{profile.username}</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
        
        {/* Portfolio demos */}
        <div className="bg-gradient-card rounded-3xl p-12 shadow-card">
          <h3 className="text-headline font-bold text-foreground mb-8 text-center">
            Portfolio Demonstrations
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioDemos.map((demo, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-6 bg-gradient-primary rounded-2xl w-fit mx-auto mb-6">
                  <div className="text-white">
                    {demo.icon}
                  </div>
                </div>
                
                <h4 className="text-title font-bold text-foreground mb-3">
                  {demo.title}
                </h4>
                
                <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                  {demo.description}
                </p>
                
                <a 
                  href={demo.link}
                  className="inline-flex items-center gap-2 bg-white border border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <span>Explore</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Quick contact */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white inline-block">
            <h3 className="text-title font-bold mb-4">Ready to Connect?</h3>
            <p className="text-body opacity-90 mb-6 max-w-md">
              Let's discuss opportunities, collaborations, or just chat about technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:veerababup114@gmail.com"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Send Email
              </a>
              <a 
                href="https://linkedin.com/in/veerababu-palepu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileLinks;