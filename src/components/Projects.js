import React from "react";

const Projects = () => {
  return (
    <section id="projects" style={{ height: '100vh', overflowY: 'auto', position: 'relative', backgroundColor: '#0d1b2a', color: '#ffffff' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
        <h2 style={{ color: '#ffffff' }}>My Projects</h2>
        <div className="projects-container">
          <div className="project-card" style={{ backgroundColor: '#1a1a1a', color: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <h3 style={{ color: '#ffffff' }}>Personal Portfolio</h3>
            <p style={{ color: '#ffffff' }}>
              A personal portfolio website built with React.js to showcase my
              skills, projects, and achievements. This project helped me learn how
              to structure React applications and manage routing.
            </p>
            <a
              href="https://github.com/umairism"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ff6b6b' }}
            >
              View on GitHub
            </a>
          </div>

          <div className="project-card" style={{ backgroundColor: '#1a1a1a', color: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <h3 style={{ color: '#ffffff' }}>E-Commerce Website</h3>
            <p style={{ color: '#ffffff' }}>
              A full-stack e-commerce web application built using React.js,
              Node.js, and MongoDB. It includes features such as user authentication,
              shopping cart, and order processing.
            </p>
            <a
              href="https://github.com/Umairism"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ff6b6b' }}
            >
              View on GitHub
            </a>
          </div>

          <div className="project-card" style={{ backgroundColor: '#1a1a1a', color: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <h3 style={{ color: '#ffffff' }}>Task Manager App</h3>
            <p style={{ color: '#ffffff' }}>
              A task management app created to help users organize and track their
              daily tasks. Built with React.js and MongoDB, it features CRUD
              operations and user authentication.
            </p>
            <a
              href="https://github.com/umairism"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ff6b6b' }}
            >
              View on GitHub
            </a>
          </div>

          <div className="project-card" style={{ backgroundColor: '#1a1a1a', color: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <h3 style={{ color: '#ffffff' }}>Weather Forecast App</h3>
            <p style={{ color: '#ffffff' }}>
              A weather app that fetches data from the OpenWeatherMap API. Users
              can input a location and view the weather forecast for that area.
              Built with React.js, the app demonstrates working with APIs and state
              management.
            </p>
            <a
              href="https://github.com/umairism"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ff6b6b' }}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
