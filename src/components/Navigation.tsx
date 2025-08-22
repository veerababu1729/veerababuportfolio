import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Home, User, Briefcase, Code, Award, Trophy, MessageSquare } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#', icon: <Home className="w-4 h-4" /> },
    { name: 'Education', href: '#education', icon: <User className="w-4 h-4" /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Projects', href: '#projects', icon: <Code className="w-4 h-4" /> },
    { name: 'Skills', href: '#skills', icon: <Award className="w-4 h-4" /> },
    { name: 'Achievements', href: '#achievements', icon: <Trophy className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <MessageSquare className="w-4 h-4" /> }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/veerababu1729", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/veerababupalepu/", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:veerababup114@gmail.com", label: "Email" }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-gradient">
                Veerababu Palepu
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-body text-muted-foreground hover:text-primary transition-colors animated-underline"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-bold text-gradient">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="space-y-4 mb-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-body text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    {item.icon}
                    {item.name}
                  </a>
                ))}
              </nav>
              
              <div className="pt-4 border-t border-border">
                <p className="text-caption text-muted-foreground mb-4">Connect with me</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;