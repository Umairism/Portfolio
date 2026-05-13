import React from 'react';
import Link from 'next/link';
import TopAchievements from '../components/TopAchievements';
import '../components/TopAchievements.css';
import Image from 'next/image';
import profileImg from '../Images/ULP.png';

const Home = () => {
  return (
    <>
      <section id="home" className="home-page">
        <div className="home-container">
          <div className="home-content">
            <div className="profile-section">
              <Image
                src={profileImg}
                alt="Muhammad Umair Hakeem"
                className="profile-image"
                width={200}
                height={200}
                style={{ objectFit: 'cover' }}
              />
              <h1 className="name-title">Muhammad Umair Hakeem</h1>
              <h2 className="role-subtitle">Computer Science Undergraduate</h2>
            </div>
            
            <div className="intro-section">
              <p className="intro-text">
                Final-year Computer Science student focused on full-stack development and backend systems. 
                I build practical applications, automation tools, and developer utilities with an emphasis 
                on clean architecture and real-world constraints.
              </p>
              
              <div className="key-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">💻</span>
                  <span>React + TypeScript, Node.js, Python</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🔧</span>
                  <span>IndexedDB, Flask, PostgreSQL, MongoDB</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🚀</span>
                  <span>Docker, AWS, Git, Linux Systems</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🎯</span>
                  <span>Open to backend/platform engineering internships</span>
                </div>
              </div>
            </div>
            
            <div className="cta-section">
              <div className="cta-buttons">
                <Link href="/projects" className="btn-primary">
                  View Projects
                </Link>
                <a href="/resume.pdf" download className="btn-secondary">
                  Download Resume
                </a>
              </div>
              
              <div className="quick-links">
                <Link href="/skills" className="quick-link">
                  <span className="quick-link-icon">⚡</span>
                  <span>Tech Stack</span>
                </Link>
                <Link href="/contact" className="quick-link">
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
