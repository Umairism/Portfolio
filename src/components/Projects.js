import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    const handleScroll = () => {
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const offset = windowHeight - rect.top;
        card.style.zIndex = offset > 0 ? index + 1 : 0;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" style={{ zIndex: 0 }}>
      <div className="content">
        <h2>My Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>Personal Portfolio</h3>
            <p>
              A personal portfolio website built with React.js to showcase my
              skills, projects, and achievements. This project helped me learn how
              to structure React applications and manage routing.
            </p>
            <a
              href="https://github.com/Umairism/Interactive-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a
              href="https://memyport.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '1rem' }}
            >
              View Live
            </a>
          </div>

          <div className="project-card">
            <h3>E-Commerce Website</h3>
            <p>
              A full-stack e-commerce web application built using React.js,
              Node.js, and MongoDB. It includes features such as user authentication,
              shopping cart, and order processing.
            </p>
            <a
              href="https://github.com/Umairism"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a
              href="https://memyecomweb.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '1rem' }}
            >
              View Live
            </a>
          </div>

          <div className="project-card">
            <h3>Task Manager App</h3>
            <p>
              A task management app created to help users organize and track their
              daily tasks. Built with React.js and MongoDB, it features CRUD
              operations and user authentication.
            </p>
            <a
              href="https://github.com/umairism"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a
              href="https://memytaskmgr.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '1rem' }}
            >
              View Live
            </a>
          </div>

          <div className="project-card">
            <h3>Weather Forecast App</h3>
            <p>
              A weather app that fetches data from the OpenWeatherMap API. Users
              can input a location and view the weather forecast for that area.
              Built with React.js, the app demonstrates working with APIs and state
              management.
            </p>
            <a
              href="https://github.com/Umairism/Weather-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a
              href="https://memyweather.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '1rem' }}
            >
              View Live
            </a>
          </div>

          <div className="project-card">
            <h3>Student Portal</h3>
            <p>
              A student portal application designed to manage student information,
              courses, and grades. Built with React.js and Node.js, it provides a
              user-friendly interface for students and administrators.
            </p>
            <a
              href="https://github.com/Umairism"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a
              href="https://memystudentportal.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '1rem' }}
            >
              View Live
            </a>
          </div>

          <div className="project-card">
            <h3>WordPress Website</h3>
            <p>
              A WordPress website developed for a client to showcase their business
              and services. It includes custom themes and plugins to meet the client's
              specific requirements.
            </p>
            <a
              href="https://memypressweb.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '1rem' }}
            >
              View Live
            </a>
          </div>

          <div className="project-card">
            <h3>Blender 3D Models</h3>
            <p>
              A collection of 3D models created using Blender. These models showcase
              my skills in 3D modeling, texturing, and rendering.
            </p>
            <a
              href="https://memyblender3d.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '1rem' }}
            >
              View Live
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
