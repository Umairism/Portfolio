import React from 'react';
import { Link } from 'react-router-dom';
import TopAchievements from '../components/TopAchievements';
import '../components/TopAchievements.css';

const Home = () => {
  return (
    <>
      <section id="home" className="home-page">
        <div className="home-container">
          <div className="home-content">
            <div className="profile-section">
              <img
                src={require('../Images/me3.png')}
                alt="Muhammad Umair Hakeem"
                className="profile-image"
              />
              <h1 className="name-title">Muhammad Umair Hakeem</h1>
              <h2 className="role-subtitle">Full-Stack Developer & Computer Science Student</h2>
            </div>
            
            <div className="intro-section">
              <p className="intro-text">
                Passionate and dedicated final-year Computer Science student with a deep love for 
                technology, programming, and problem-solving. Specializing in full-stack web 
                development with expertise in React.js, MongoDB, and Node.js.
              </p>
              
              <div className="key-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🎓</span>
                  <span>Final Year CS Student</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">💻</span>
                  <span>Full-Stack Developer</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🚀</span>
                  <span>React.js Specialist</span>
                </div>
              </div>
            </div>
            
            <div className="cta-section">
              <div className="cta-buttons">
                <Link to="/projects" className="btn-primary">
                  View My Projects
                </Link>
                <Link to="/about" className="btn-secondary">
                  Learn More About Me
                </Link>
              </div>
              
              <div className="quick-links">
                <Link to="/skills" className="quick-link">
                  <span className="quick-link-icon">⚡</span>
                  <span>Skills</span>
                </Link>
                <Link to="/contact" className="quick-link">
                  <span className="quick-link-icon">📧</span>
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <TopAchievements />
    </>
  );
};

export default Home;