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
      link: "https://www.linkedin.com/in/veerababupalepu/",
      color: "from-blue-600 to-blue-800",
      stats: "2k+ Connections"
    },
    {
      platform: "YouTube",
      username: "Tech Demos",
      description: "Project demonstrations and technical walkthroughs",
      icon: <Youtube className="w-6 h-6" />,
      link: "https://www.youtube.com/@vb.solutions/videos",
      color: "from-red-600 to-red-800",
      stats: "Video Portfolio"
    },
    {
      platform: "Instagram",
      username: "@veerababu1729",
      description: "EE.info startup Behind the scenes, tech journey, community highlights",
      icon: <Instagram className="w-6 h-6" />,
      link: "https://instagram.com/ee.info",
      color: "from-pink-600 to-purple-600",
      stats: "Tech Journey"
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