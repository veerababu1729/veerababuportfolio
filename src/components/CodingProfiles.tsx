import React from 'react';
import { ExternalLink, Code, Trophy, Target } from 'lucide-react';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "@veerababu1729",
      stats: {
        rating: "1424",
        solved: "600+",
        solver: "DSA"
      },
      achievements: ["Maximum contest rating: 1424", "Consistent problem solving streak"],
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50 border-orange-200",
      textColor: "text-orange-700",
      link: "https://leetcode.com/u/VeerababuP/"
    },
    {
      platform: "HackerRank",
      username: "@veerababu1729",
      stats: {
        rating: "5 Star",
        domains: "4",
        badges: "6+"
      },
      achievements: ["5 star in Python, Java, Problem Solving, SQL", "Multiple domain expertise"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 border-green-200",
      textColor: "text-green-700",
      link: "https://www.hackerrank.com/profile/20A91A0546"
    },
    {
      platform: "CodeChef",
      username: "@veerababu1729",
      stats: {
        rating: "1520",
        rank: "127th",
        participants: "16K+"
      },
      achievements: ["127th rank among 16,134 participants", "Consistent competitive programming"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 border-blue-200",
      textColor: "text-blue-700",
      link: "https://www.codechef.com/users/veerababu1729"
    },
    {
      platform: "GeeksforGeeks",
      username: "@veerababu1729",
      stats: {
        problems: "200+",
        articles_read: "100+",
        contributions: "Active"
      },
      achievements: ["Regular problem solving", "Community Learner"],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50 border-purple-200",
      textColor: "text-purple-700",
      link: "https://auth.geeksforgeeks.org/user/veerababup"
    }
  ];

  return (
    <section id="coding-profiles" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-display text-gradient mb-4">Coding Profiles</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Active presence across major competitive programming and coding platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-3xl p-8 shadow-card hover:shadow-primary transition-all duration-300 card-3d animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className={`p-3 bg-gradient-to-br ${profile.color} rounded-2xl`}>
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-title font-bold text-foreground group-hover:text-primary transition-colors">
                      {profile.platform}
                    </h3>
                    <p className="text-body text-muted-foreground">{profile.username}</p>
                  </div>
                </div>
                <a 
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {Object.entries(profile.stats).map(([key, value], idx) => (
                  <div key={idx} className={`text-center p-4 rounded-xl border ${profile.bgColor}`}>
                    <div className={`text-2xl font-black mb-1 ${profile.textColor}`}>
                      {value}
                    </div>
                    <p className="text-sm text-muted-foreground capitalize">{key}</p>
                  </div>
                ))}
              </div>
              
              {/* Achievements */}
              <div className="space-y-3">
                {profile.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Trophy className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-body text-muted-foreground leading-relaxed">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-border">
                <a 
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 bg-gradient-to-r ${profile.color} text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg`}
                >
                  <Target className="w-4 h-4" />
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Overall stats */}
        <div className="bg-gradient-card rounded-3xl p-12 mt-16 text-center">
          <h3 className="text-headline font-bold text-foreground mb-8">Overall Coding Statistics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in-up delay-100">
              <div className="text-4xl font-black text-primary mb-2">600+</div>
              <p className="text-body text-muted-foreground">Problems Solved</p>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="text-4xl font-black text-primary mb-2">4</div>
              <p className="text-body text-muted-foreground">Active Platforms</p>
            </div>
            <div className="animate-fade-in-up delay-300">
              <div className="text-4xl font-black text-primary mb-2">5⭐</div>
              <p className="text-body text-muted-foreground">Highest Ratings</p>
            </div>
            <div className="animate-fade-in-up delay-400">
              <div className="text-4xl font-black text-primary mb-2">3+</div>
              <p className="text-body text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;