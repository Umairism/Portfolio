import React from 'react';
import { Link } from 'react-router-dom';

const TopAchievements = () => {
  const achievements = [
    {
      id: 1,
      title: "🎓 Blockchain Certificate System",
      description: "Enterprise-grade blockchain verification platform",
      tech: ["React", "TypeScript", "Flask", "Blockchain"],
      github: "https://github.com/Umairism/blockchain-certificate-verification",
      status: "🆕 Latest",
      gradient: "from-emerald-500 to-blue-600",
      impact: "Eliminates certificate fraud"
    },
    {
      id: 2,
      title: "🤖 Portable AI Agent",
      description: "Privacy-first offline AI assistant with self-learning",
      tech: ["Python", "AI/ML", "PyTorch", "Local Storage"],
      github: "https://github.com/Umairism/Porable-Ai-Agent",
      status: "🔥 Featured",
      gradient: "from-purple-500 to-pink-600",
      impact: "100% privacy protection"
    },
    {
      id: 3,
      title: "🔐 Aircrack-NG GUI",
      description: "Modern wireless security auditing interface",
      tech: ["React", "TypeScript", "FastAPI", "Security"],
      github: "https://github.com/Umairism/Aircrack_GUI",
      status: "⚡ Advanced",
      gradient: "from-red-500 to-orange-600",
      impact: "Enterprise security testing"
    },
    {
      id: 4,
      title: "🛒 ModernShop Platform",
      description: "Full-stack e-commerce with serverless backend",
      tech: ["React", "Node.js", "Serverless", "API"],
      github: "https://github.com/Umairism/e-commerce",
      status: "🚀 Deployed",
      gradient: "from-blue-500 to-cyan-600",
      impact: "Scalable architecture"
    },
    {
      id: 5,
      title: "✨ DDOS Simulation Tool",
      description: "A CLI-based Python application designed to simulate Distributed Denial-of-Service attacks",
      tech: ["Python", "Scapy", "Networking"],
      github: "https://github.com/Umairism/Dos-Tool",
      status: "✨ Live",
      gradient: "from-indigo-500 to-purple-600",
      impact: "Professional showcase"
    }
  ];

  return (
    <section className="achievements-section">
      <div className="achievements-container">
        <div className="achievements-header">
          <h2 className="achievements-title">
            <span className="title-icon">🏆</span>
            Top Achievements & Projects
          </h2>
          <p className="achievements-subtitle">
            Showcasing my most impactful and innovative development projects
          </p>
        </div>
        
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className={`achievement-gradient bg-gradient-to-br ${achievement.gradient}`}>
                <div className="achievement-content">
                  <div className="achievement-status">
                    {achievement.status}
                  </div>
                  
                  <h3 className="achievement-title">
                    {achievement.title}
                  </h3>
                  
                  <p className="achievement-description">
                    {achievement.description}
                  </p>
                  
                  <div className="achievement-tech">
                    {achievement.tech.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {achievement.tech.length > 3 && (
                      <span className="tech-more">+{achievement.tech.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="achievement-impact">
                    <span className="impact-icon">💡</span>
                    {achievement.impact}
                  </div>
                  
                  <div className="achievement-actions">
                    <a 
                      href={achievement.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      <span>📂</span> View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="achievements-footer">
          <Link to="/projects" className="view-all-projects">
            <span>🚀</span>
            View All Projects
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopAchievements;
