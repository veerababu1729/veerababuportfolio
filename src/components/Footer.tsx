import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/veerababu1729", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/veerababu-palepu", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:veerababup114@gmail.com", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 py-16">
          {/* Brand section */}
          <div className="md:col-span-2">
            <h3 className="text-title font-bold text-white mb-4">Veerababu Palepu</h3>
            <p className="text-body text-white/80 mb-6 leading-relaxed max-w-md">
              Computer Science Engineer passionate about building innovative solutions 
              with AI, Machine Learning, and Full Stack Development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-body font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-body text-white/70 hover:text-white transition-colors animated-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-body font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:veerababup114@gmail.com"
                className="block text-body text-white/70 hover:text-white transition-colors"
              >
                veerababup114@gmail.com
              </a>
              <a
                href="tel:+919701910239"
                className="block text-body text-white/70 hover:text-white transition-colors"
              >
                +91 9701910239
              </a>
              <p className="text-body text-white/70">
                Kakinada, Andhra Pradesh, India
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-body text-white/70">
              <span>© 2025 Veerababu Palepu.
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-body text-white/70 hover:text-white transition-colors group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
