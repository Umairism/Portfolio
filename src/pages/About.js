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
                Get to know more about my journey, skills, and passion for technology
              </p>
              
              <div className="about-text">
                <p className="intro-paragraph">
                  Hi! I'm <strong>Muhammad Umair Hakeem</strong>, a passionate and dedicated
                  final-year Computer Science student with a deep love for technology,
                  programming, and problem-solving. I've spent the last few years honing my
                  skills in web development, building projects that push the limits of what's
                  possible while maintaining a focus on user experience and clean code.
                </p>

                <div className="about-sections">
                  <div className="about-section-item">
                    <h3>My Journey</h3>
                    <p>
                      My journey in the tech world began with a fascination for how things work
                      behind the scenes. This curiosity led me to pursue a degree in Computer
                      Science, where I've gained a solid foundation in algorithms, data structures,
                      and software engineering principles. Over time, I've gravitated towards web
                      development, where I've found my passion for creating interactive, dynamic,
                      and user-friendly applications.
                    </p>
                  </div>

                  <div className="about-section-item">
                    <h3>Technical Expertise</h3>
                    <p>
                      I specialize in full-stack web development, with expertise in <strong>React.js</strong>,
                      <strong> MongoDB</strong>, and <strong>Node.js</strong>. My experience extends to building
                      scalable, responsive applications and working with a variety of technologies and
                      frameworks that allow me to create seamless user experiences. Whether it's
                      building an e-commerce platform, a personal portfolio, or a task management app,
                      I thrive on the challenge of turning complex requirements into functional and
                      intuitive solutions.
                    </p>
                  </div>

                  <div className="about-section-item">
                    <h3>Philosophy & Approach</h3>
                    <p>
                      In addition to my technical skills, I am a strong believer in collaboration and
                      the power of teamwork. I enjoy working in agile environments, learning from others,
                      and contributing to open-source projects. I'm always looking for new challenges and
                      opportunities to grow both as a developer and as a person.
                    </p>
                  </div>

                  <div className="about-section-item">
                    <h3>Beyond Coding</h3>
                    <p>
                      When I'm not coding, you can usually find me experimenting with new technologies,
                      reading about the latest trends in web development, or diving into problem-solving
                      challenges on platforms like <strong>LeetCode</strong> and <strong>HackerRank</strong>.
                      I am constantly seeking ways to improve my craft, and I believe that learning is
                      a lifelong journey.
                    </p>
                  </div>
                </div>

                <p className="closing-paragraph">
                  Feel free to reach out if you'd like to collaborate on a project, need assistance,
                  or simply want to chat about tech. Let's create something amazing together!
                </p>
              </div>

              <div className="about-cta">
                <div className="cta-buttons">
                  <Link to="/projects" className="btn-primary">
                    View My Work
                  </Link>
                  <Link to="/contact" className="btn-secondary">
                    Get In Touch
                  </Link>
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