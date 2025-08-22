import React from 'react';
import { Trophy, Users, Star, Target, Medal, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      category: "Coding Excellence",
      icon: <Medal className="w-6 h-6" />,
      items: [
        {
          title: "600+ DSA Problems Solved",
          description: "Solved across LeetCode, HackerRank, CodeChef, and GeeksforGeeks platforms",
          metric: "600+",
          color: "text-blue-600"
        },
        {
          title: "LeetCode Contest Rating",
          description: "Maximum contest rating achieved through consistent performance",
          metric: "1424",
          color: "text-green-600"
        },
        {
          title: "CodeChef Rating & Ranking",
          description: "127th rank among 16,134 participants in competitive programming",
          metric: "1520",
          color: "text-purple-600"
        }
      ]
    },
    {
      category: "Community Impact",
      icon: <Users className="w-6 h-6" />,
      items: [
        {
          title: "Community Building",
          description: "Built and leading 50k+ Members Engineering Tech Community @ee.info",
          metric: "50k+",
          color: "text-orange-600"
        },
        {
          title: "Revenue Generation",
          description: "Generated through community building and event management",
          metric: "₹1L+",
          color: "text-green-600"
        },
        {
          title: "Monthly Users",
          description: "Deployed and maintaining 2 live projects with proper documentation",
          metric: "30k",
          color: "text-blue-600"
        }
      ]
    },
    {
      category: "Leadership & Innovation",
      icon: <Trophy className="w-6 h-6" />,
      items: [
        {
          title: "Workshop Leadership",
          description: "Organized workshop on 'Latest AI tech trends' for large audience",
          metric: "3000+",
          color: "text-purple-600"
        },
        {
          title: "Hackathon Recognition",
          description: "Selected among top 5 projects from district for state level BVM Avishkaar hackathon",
          metric: "Top 5",
          color: "text-red-600"
        },
        {
          title: "Open Source Contribution",
          description: "Contributed to high impact open-source projects with 40+ repositories",
          metric: "10k+ ⭐",
          color: "text-yellow-600"
        }
      ]
    }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-display text-gradient mb-4">Achievements & Leadership</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Recognition for technical excellence, community building, and leadership in technology
          </p>
        </div>
        
        <div className="space-y-16">
          {achievements.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-headline font-bold text-foreground">{category.category}</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {category.items.map((achievement, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-primary transition-all duration-300 card-3d group"
                  >
                    <div className="text-center mb-6">
                      <div className={`text-4xl font-black mb-2 ${achievement.color} group-hover:scale-110 transition-transform`}>
                        {achievement.metric}
                      </div>
                      <div className="w-12 h-1 bg-gradient-primary rounded-full mx-auto"></div>
                    </div>
                    
                    <h4 className="text-title font-bold text-foreground mb-4 text-center group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    
                    <p className="text-body text-muted-foreground text-center leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Summary stats */}
        <div className="bg-gradient-primary rounded-3xl p-12 mt-16 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-headline font-bold mb-8">Impact Summary</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="animate-fade-in-up delay-100">
                <TrendingUp className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <div className="text-3xl font-black mb-2">80k+</div>
                <p className="text-white/80">Total Users Reached</p>
              </div>
              <div className="animate-fade-in-up delay-200">
                <Star className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <div className="text-3xl font-black mb-2">10k+</div>
                <p className="text-white/80">GitHub Stars</p>
              </div>
              <div className="animate-fade-in-up delay-300">
                <Target className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <div className="text-3xl font-black mb-2">600+</div>
                <p className="text-white/80">Problems Solved</p>
              </div>
              <div className="animate-fade-in-up delay-400">
                <Trophy className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <div className="text-3xl font-black mb-2">5+</div>
                <p className="text-white/80">Major Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;