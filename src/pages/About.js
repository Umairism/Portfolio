import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="page-container">
      <section className="about-section">
        <div className="about-container-wrapper">
          <div className="about-container">
            <div className="about-content">
              <h1 className="page-title">About Me</h1>
              <p className="page-description">
                Technical background and engineering approach
              </p>
              
              <div className="about-text">
                <p className="intro-paragraph">
                  Computer Science undergraduate focused on full-stack development and backend systems. 
                  I build practical applications, automation tools, and developer utilities with an 
                  emphasis on clean architecture and real-world constraints.
                </p>

                <div className="about-sections">
                  <div className="about-section-item">
                    <h3>Engineering Notes</h3>
                    <p>
                      I focus on writing maintainable code, clear project structure, and understanding 
                      tradeoffs rather than overusing frameworks. I document decisions and prefer simple 
                      solutions that scale with requirements.
                    </p>
                  </div>

                  <div className="about-section-item">
                    <h3>Current Focus</h3>
                    <p>
                      Currently preparing for backend-focused roles. Interested in platform engineering, 
                      distributed systems, and building tools that other developers use. Open to junior 
                      software engineering roles and internships.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-cta">
                <div className="cta-buttons">
                  <Link to="/projects" className="btn-primary">
                    View Projects
                  </Link>
                  <a href="/resume.pdf" download className="btn-secondary">
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;