import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "veerababup114@gmail.com",
      href: "mailto:veerababup114@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9701910239",
      href: "tel:+919701910239",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Kakinada, Andhra Pradesh, India",
      href: "#",
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-display text-gradient mb-4">Let's Connect</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact form */}
          <div className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-card">
            <h3 className="text-headline font-bold text-foreground mb-8">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8 animate-scale-in">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-title font-bold text-foreground mb-2">Message Sent!</h4>
                <p className="text-body text-muted-foreground">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-body font-semibold text-foreground flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-body font-semibold text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-body font-semibold text-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-white border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-primary"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>
          
          {/* Contact information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-headline font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-body text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for a developer to join your team, need help with a project, 
                or just want to discuss technology trends, I'm always open to new opportunities and conversations.
              </p>
            </div>
            
            {/* Contact cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-6 p-6 bg-gradient-card rounded-2xl shadow-card hover:shadow-primary transition-all duration-300 card-3d animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`p-4 bg-gradient-to-br ${info.color} rounded-2xl`}>
                    <div className="text-white group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-caption text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-body font-semibold text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Availability */}
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h4 className="text-title font-bold mb-4">Current Availability</h4>
              <p className="text-body opacity-90 mb-4">
                🟢 Available for new opportunities
              </p>
              <p className="text-body opacity-80 leading-relaxed">
                I'm currently open to full-time positions, internships, and exciting project collaborations. 
                Let's build something amazing together!
              </p>
            </div>
            
            {/* Response time */}
            <div className="bg-gradient-card rounded-2xl p-6 text-center">
              <h4 className="text-body font-semibold text-foreground mb-2">Quick Response</h4>
              <p className="text-caption text-muted-foreground">
                I typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;