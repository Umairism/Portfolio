import React from 'react';
import { Link } from 'react-router-dom';

const TopAchievements = () => {
  const achievements = [
    {
      id: 1,
      title: "🚀 CodeSpace - Professional Browser IDE",
      description: "Advanced web-based development environment with real Python/JS execution",
      tech: ["React", "TypeScript", "Monaco", "Python Interpreter"],
      github: "https://github.com/Umairism/codespace",
      live: "https://webcodespace.netlify.app",
      status: "🔥 Latest & Featured",
      gradient: "from-blue-500 to-purple-600",
      impact: "Full IDE in browser, zero setup"
    },
    {
      id: 2,
      title: "🎓 Blockchain Certificate System",
      description: "Enterprise-grade blockchain verification platform",
      tech: ["React", "TypeScript", "Flask", "Blockchain"],
      github: "https://github.com/Umairism/blockchain-certificate-verification",
      status: "🆕 Latest",
      gradient: "from-emerald-500 to-blue-600",
      impact: "Eliminates certificate fraud"
    },
    {
      id: 3,
      title: "🤖 Portable AI Agent",
      description: "Privacy-first offline AI assistant with self-learning",
      tech: ["Python", "AI/ML", "PyTorch", "Local Storage"],
      github: "https://github.com/Umairism/Porable-Ai-Agent",
      status: "🔥 Featured",
      gradient: "from-purple-500 to-pink-600",
      impact: "100% privacy protection"
    },
    {
      id: 4,
      title: "🔐 Aircrack-NG GUI",
      description: "Modern wireless security auditing interface",
      tech: ["React", "TypeScript", "FastAPI", "Security"],
      github: "https://github.com/Umairism/Aircrack_GUI",
      status: "⚡ Advanced",
      gradient: "from-red-500 to-orange-600",
      impact: "Enterprise security testing"
    },
    {
      id: 5,
      title: "🐧 LinuxOS Desktop Environment",
      description: "Web-based desktop OS with vanilla JavaScript, zero dependencies",
      tech: ["Vanilla JS", "HTML5", "CSS3", "Window Management"],
      github: "https://github.com/umairism/linuxos-desktop",
      status: "🆕 New | 🚀 Live",
      gradient: "from-blue-600 to-purple-700",
      impact: "Pure vanilla JS innovation"
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
