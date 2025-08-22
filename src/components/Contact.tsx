import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New portfolio message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoHref = `mailto:veerababup114@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoHref;
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
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-display text-gradient mb-4">Let's Connect</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>
        
        <div className="flex justify-center">
          {/* Contact information */}
          <div className="space-y-8 w-full max-w-2xl">
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
            <div className="bg-gradient-primary rounded-2xl p-8 text-white animate-fade-in-up delay-100">
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
            <div className="bg-gradient-card rounded-2xl p-6 text-center animate-scale-in delay-200">
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