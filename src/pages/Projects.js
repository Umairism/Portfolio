import React, { useEffect, useState } from "react";
// Import project images
import codespaceImage from "../Images/codespace.png"; // Temporary placeholder - replace with actual CodeSpace screenshot
import portfolioImage from "../Images/1.png";
import ecommerceImage from "../Images/Ecom.png";
import slimeTubeImage from "../Images/SlimeTube.png";
import taskManagerImage from "../Images/portal.png";
import ddosToolImage from "../Images/Ddos.png";
import weatherAppImage from "../Images/weather.png";
import studentPortalImage from "../Images/portal.png";
import wordpressImage from "../Images/adobe.png";
import medicalImage from "../Images/Medi.png";
import xpertiImage from "../Images/Xperti.png";
import droneImage from "../Images/Drone.png";
import PortableAiImage from "../Images/PortableAiAgent.png";
import aircrackGuiImage from "../Images/Aircrack.png";
import benchmarkImage from "../Images/me3.png";
import mobileAppImage from "../Images/portal.png";
import opencvImage from "../Images/1.png";
import blockchainCertImage from '../Images/lockchain-cert.png';
import linuxosDesktopImage from '../Images/LinuxOS-Desktop.png';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectLikes, setProjectLikes] = useState({});

  useEffect(() => {
    // Load likes from localStorage
    const savedLikes = localStorage.getItem('projectLikes');
    if (savedLikes) {
      setProjectLikes(JSON.parse(savedLikes));
    }
  }, []);

  const handleLike = (projectId) => {
    const newLikes = { ...projectLikes };
    newLikes[projectId] = (newLikes[projectId] || 0) + 1;
    setProjectLikes(newLikes);
    localStorage.setItem('projectLikes', JSON.stringify(newLikes));
  };

  useEffect(() => {
    const handleScroll = () => {
      const projectCards = document.querySelectorAll('.project-tile');
      projectCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const offset = windowHeight - rect.top;
        const zIndex = Math.max(1, Math.floor(offset / 50));
        card.style.zIndex = offset > 0 ? zIndex : 1;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "🚀 CodeSpace - Professional Browser IDE",
      description: "The most advanced web-based development environment that transforms your browser into a professional IDE. Features comprehensive Python interpreter with full language support (variables, loops, functions, classes), Monaco Editor (VS Code engine) with IntelliSense, real-time code execution, live preview system for HTML/CSS/React/Markdown, file management with upload/download, project templates, and VS Code-style Markdown rendering. Zero installation required - full IDE functionality in your browser with enterprise-grade features.",
      tech: ["React.js", "TypeScript", "Monaco Editor", "Python Interpreter", "Vite", "Tailwind CSS", "Babel", "JSX Transpilation", "Markdown Parser", "File System API", "WebWorkers"],
      github: "https://github.com/Umairism/codespace",
      readme: "https://github.com/Umairism/codespace/blob/main/README.md",
      live: "https://webcodespace.netlify.app", 
      image: codespaceImage,
      color: "from-blue-500 to-purple-600",
      likes: 0,
      featured: true,
      isNew: true,
      achievement: "🏆 Latest Achievement - Complete Browser-Based IDE"
    },
    {
      id: 2,
      title: "🎓 Blockchain Certificate Verification System",
      description: "A comprehensive, enterprise-grade blockchain-based academic certificate verification platform. Features React TypeScript frontend, Flask backend, custom SHA-256 blockchain implementation, JWT authentication, role-based access control, real-time verification, and professional documentation. Eliminates certificate fraud through immutable blockchain storage.",
      tech: ["React.js", "TypeScript", "Flask", "Python", "SQLAlchemy", "Blockchain", "SHA-256", "JWT Auth", "SQLite", "Tailwind CSS", "Vite", "Docker"],
      github: "https://github.com/Umairism/blockchain-certificate-verification",
      readme: "https://github.com/Umairism/blockchain-certificate-verification/blob/main/README.md",
      live: null,
      image: blockchainCertImage,
      color: "from-emerald-500 to-blue-600",
      likes: 0,
      featured: true,
      isNew: true,
      achievement: "🏆 Latest Achievement - Full-Stack Blockchain Application"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "A personal portfolio website built with React.js to showcase my skills, projects, and achievements. This project helped me learn how to structure React applications and manage routing.",
      tech: ["React.js", "CSS3", "JavaScript"],
      github: "https://github.com/Umairism/Interactive-Portfolio",
      readme: "https://github.com/Umairism/Interactive-Portfolio/blob/main/README.md",
      live: "https://memyport.netlify.app",
      image: portfolioImage,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 4,
      title: "Portable AI Agent",
      description: "A **self-contained, offline-capable AI agent** with self-learning capabilities designed for personal use. Your privacy-first AI assistant that learns from every interaction while keeping all data completely local.",
      tech: ["Python", "AI", "Machine Learning", "Local Storage", "Self-learning", "Offline Capable", "Privacy-first", "PyTorch", "Transformers", "Flask", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Umairism/Porable-Ai-Agent",
      readme: "https://github.com/Umairism/Porable-Ai-Agent/blob/main/README.md",
      live: null,
      image: PortableAiImage,
      color: "from-blue-500 to-purple-600",
      likes: 0,
      featured: true
    },
    {
      id: 5,
      title: "Aircrack-NG GUI - Wireless Security Auditing Tool",
      description: "A modern, enterprise-grade web interface for wireless security auditing using Aircrack-NG. Features a React/TypeScript frontend with Material-UI design and FastAPI backend. Includes user authentication, file upload with drag & drop, job management, real-time dashboard, and comprehensive wireless penetration testing capabilities.",
      tech: ["React.js", "TypeScript", "Material-UI", "FastAPI", "Python", "SQLAlchemy", "JWT Authentication", "Redux Toolkit", "Aircrack-NG", "Cybersecurity"],
      github: "https://github.com/Umairism/Aircrack_GUI",
      readme: "https://github.com/Umairism/Aircrack_GUI/blob/main/README.md",
      live: null,
      image: aircrackGuiImage,
      color: "from-red-500 to-orange-600",
      likes: 0,
      featured: true
    },
    {
      id: 6,
      title: "ModernShop E-Commerce Platform",
      description: "A complete full-stack e-commerce platform with React frontend and serverless backend. Features product catalog, shopping cart, search & filtering, responsive design, and session-based cart persistence. Deployed with Netlify Functions for scalable serverless architecture.",
      tech: ["React.js", "Netlify Functions", "Node.js", "Serverless API"],
      github: "https://github.com/Umairism/e-commerce",
      readme: "https://github.com/Umairism/e-commerce/blob/main/README.md",
      live: "https://myecoms.netlify.app",
      image: ecommerceImage,
      color: "from-green-500 to-teal-600",
      likes: 0,
      featured: true
    },
    {
      id: 7,
      title: "SlimeTube - Video Streaming Platform",
      description: "A modern, full-featured video streaming platform that provides YouTube-like functionality with a clean, responsive interface. Built with React 18, TypeScript, and modern web technologies. Features video upload, playback, user management, IndexedDB storage, wishlist functionality, and comprehensive testing suite.",
      tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "IndexedDB"],
      github: "https://github.com/Umairism/SlimeTube",
      readme: "https://github.com/Umairism/SlimeTube/blob/main/README.md",
      live: "https://flixii.netlify.app/",
      image: slimeTubeImage,
      color: "from-red-500 to-pink-600",
      likes: 0,
      featured: true
    },
    {
      id: 6,
      title: "Task Manager App",
      description: "A task management app created to help users organize and track their daily tasks. Built with React.js and MongoDB, it features CRUD operations and user authentication.",
      tech: ["React.js", "MongoDB", "Node.js"],
      github: "https://github.com/Umairism/task-manager",
      readme: "https://github.com/Umairism/task-manager/blob/main/README.md",
      live: "https://memytaskmgr.netlify.app",
      image: taskManagerImage,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 7,
      title: "DDOS Simulation Tool",
      description: "Whistler v0.3 DDoS Simulation Tool (Educational Use) - A CLI-based Python application designed to simulate Distributed Denial-of-Service attacks for ethical and educational purposes.",
      tech: ["Python", "Scapy", "Networking"],
      github: "https://github.com/Umairism/Dos-Tool",
      readme: "https://github.com/Umairism/Dos-Tool/blob/main/README.md",
      live: null,
      image: ddosToolImage,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 8,
      title: "Weather Forecast App",
      description: "A weather app that fetches data from the OpenWeatherMap API. Users can input a location and view the weather forecast for that area. Built with React.js, demonstrating API integration.",
      tech: ["React.js", "API", "JavaScript"],
      github: "https://github.com/Umairism/Weather-App",
      readme: "https://github.com/Umairism/Weather-App/blob/main/README.md",
      live: "https://memyweather.netlify.app",
      image: weatherAppImage,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 9,
      title: "Student Portal",
      description: "A student portal application designed to manage student information, courses, and grades. Built with React.js and Node.js, it provides a user-friendly interface for students and administrators.",
      tech: ["React.js", "Node.js", "Database"],
      github: "https://github.com/Umairism/student-portal",
      readme: "https://github.com/Umairism/student-portal/blob/main/README.md",
      live: "https://memystudentportal.netlify.app",
      image: studentPortalImage,
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 10,
      title: "Pharmacy Inventory Management",
      description: "A web application for managing pharmacy inventory, including features for tracking stock levels, sales, and orders. Built with React.js and Node.js, it provides a comprehensive solution for pharmacy management.",
      tech: ["React.Js", "TypeScript", "React-Router-Dom", "Tailwind CSS"],
      github: "https://github.com/Umairism/Medical-Store-Management-System",
      readme: "https://github.com/Umairism/Medical-Store-Management-System/blob/main/README.md",
      live: "https://memymedi.netlify.app",
      image: medicalImage,
      color: "from-teal-500 to-green-600"
    },
    {
      id: 11,
      title: "Medical Equipment Store {Template}",
      description: "",
      tech: ["JavaScript", "HTML", "CSS", "TypeScript", "React.js", "Tailwind CSS"],
      github: "https://github.com/Umairism/Xperti.git",
      readme: "https://github.com/Umairism/Xperti/blob/main/README.md",
      live: "https://xperti.netlify.app/",
      image: xpertiImage,
      color: "from-teal-500 to-green-600"
    },
    {
      id: 12,
      title: "Surveillance and Monitoring Drone System",
      description: "A drone system designed for surveillance and monitoring purposes. Features real-time video streaming, GPS tracking, and automated flight paths.",
      tech: ["Drone Technology", "Computer Vision", "Real-time Streaming", "Python", "OpenCV", "Flask", "DroneKit", "GPS", "WebRTC", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Umairism/Drone-System.git",
      readme: "https://github.com/Umairism/Drone-System/blob/main/README.md",
      image: droneImage,
      color: "from-teal-500 to-green-600"
    },
    {
      id: 13,
      title: "WordPress Websites",
      description: "Professional WordPress websites developed for clients to showcase their business and services. Features custom themes and plugins tailored to meet specific client requirements.",
      tech: ["WordPress", "PHP", "Custom Themes"],
      github: null,
      readme: null,
      live: "https://doppe.store/",
      live2: "https://adobestudios.io/",
      image: wordpressImage,
      color: "from-teal-500 to-green-600",
    },
    {
      id: 14,
      title: "Benchmark School Management System",
      description: "A modern, professional school management platform that brings together educators, students, and administrators in a comprehensive digital environment. Features modern homepage with gradient animations, professional dashboard with analytics, article system with rich content creation, community confessions, and hybrid database integration with Supabase and localStorage fallback.",
      tech: ["React.js", "TypeScript", "Vite", "TailwindCSS", "Supabase", "Lucide React", "Authentication", "Real-time Sync"],
      github: "https://github.com/Umairism/benchmark-school-system",
      readme: "https://github.com/Umairism/benchmark-school-system/blob/main/README.md",
      live: null,
      image: benchmarkImage,
      color: "from-purple-500 to-indigo-600",
      likes: 0,
      featured: true
    },
    {
      id: 15,
      title: "Benchmark School System (Offline)",
      description: "Offline-capable version of the school management platform with localStorage integration. Features the same comprehensive functionality as the online version but works completely offline with automatic data synchronization when connection is restored. Perfect for environments with limited internet access.",
      tech: ["React.js", "TypeScript", "Vite", "TailwindCSS", "localStorage", "Offline-First", "Progressive Web App", "Data Synchronization"],
      github: "https://github.com/Umairism/benchmark-school-system",
      readme: "https://github.com/Umairism/benchmark-school-system/blob/main/README.md",
      live: null,
      image: benchmarkImage,
      color: "from-indigo-500 to-blue-600",
      likes: 0,
      featured: false
    },
    {
      id: 16,
      title: "React Native Mobile App",
      description: "A comprehensive mobile application built with React Native featuring modern UI/UX design patterns. Demonstrates cross-platform mobile development with native components, state management, and responsive design. Includes form handling, navigation, and professional mobile interfaces.",
      tech: ["React Native", "TypeScript", "Mobile Development", "Cross-Platform", "Native Components", "State Management"],
      github: "https://github.com/Umairism/Mobile_App_Demo",
      readme: "https://github.com/Umairism/Mobile_App_Demo/blob/master/README.md",
      live: null,
      image: mobileAppImage,
      color: "from-green-500 to-emerald-600",
      likes: 0,
      featured: false
    },
    {
      id: 17,
      title: "Offline Card Wallet - Mobile Demo",
      description: "A demonstration mobile application showcasing React Native development concepts for payment card management. Features card addition, secure number masking, transaction simulation, NFC payment mockups, QR code payments, and professional mobile UI design. Built for learning purposes with modern mobile development patterns.",
      tech: ["React Native", "TypeScript", "Mobile UI/UX", "Payment Simulation", "NFC Mockup", "QR Payments", "Cross-Platform"],
      github: "https://github.com/Umairism/Offline_Card_Wallet",
      readme: "https://github.com/Umairism/Offline_Card_Wallet/blob/main/README.md",
      live: null,
      image: mobileAppImage,
      color: "from-cyan-500 to-teal-600",
      likes: 0,
      featured: false
    },
    {
      id: 18,
      title: "OpenCV Enterprise Computer Vision Hub",
      description: "A centralized hub for enterprise-grade computer vision projects leveraging OpenCV. Features motion detection security camera systems, face recognition, object tracking, license plate recognition, image segmentation, gesture recognition, and augmented reality solutions. Designed for scalable, maintainable, and secure development of vision-based enterprise applications.",
      tech: ["OpenCV", "Python", "Computer Vision", "Machine Learning", "Image Processing", "Real-time Analytics", "Enterprise Solutions"],
      github: "https://github.com/Umairism/OpenCV",
      readme: "https://github.com/Umairism/OpenCV/blob/main/README.md",
      live: null,
      image: opencvImage,
      color: "from-orange-500 to-red-600",
      likes: 0,
      featured: true
    },
    {
      id: 19,
      title: "Advanced Task Manager",
      description: "A comprehensive task management application with modern features and professional UI. Built with React and modern web technologies, featuring advanced task organization, priority management, deadline tracking, and collaborative features. Includes real-time updates and responsive design for optimal user experience.",
      tech: ["React.js", "Node.js", "Task Management", "Real-time Updates", "Responsive Design", "Modern UI/UX"],
      github: "https://github.com/Umairism/TaskManager",
      readme: null,
      live: null,
      image: taskManagerImage,
      color: "from-yellow-500 to-orange-600",
      likes: 0,
      featured: false
    },
    {
      id: 20,
      title: "🐧 LinuxOS Desktop Environment",
      description: "A modern, web-based desktop operating system experience built with vanilla JavaScript, HTML5, and CSS3. Features a sleek macOS-inspired interface with Linux personality and full functionality. Includes window management, dynamic wallpapers, macOS-style dock, built-in applications (Firefox browser, calculator, file manager, text editor, terminal), system preferences, and smooth animations. Zero dependencies with pure vanilla JavaScript, 60fps CSS transitions, glass morphism UI, and keyboard shortcuts support.",
      tech: ["Vanilla JavaScript", "HTML5", "CSS3", "Window Management", "Glass Morphism", "Responsive Design", "Desktop OS", "Zero Dependencies", "Animation", "File System API"],
      github: "https://github.com/umairism/linuxos-desktop",
      readme: "https://github.com/umairism/linuxos-desktop/blob/main/README.md",
      live: "https://linuxos.netlify.app",
      image: linuxosDesktopImage,
      color: "from-blue-600 to-purple-700",
      likes: 0,
      featured: true,
      isNew: true,
      achievement: "🏆 Latest Project - Pure Vanilla JS Desktop OS"
    }
  ];

  return (
    <div className="page-container">
      <section className="projects-section">
        <div className="projects-container-wrapper">
          <div className="projects-content">
            <h1 className="page-title">My Projects</h1>
            <p className="page-description">
              A collection of projects showcasing my skills and creativity in web development. 
              Each project represents a unique challenge and learning experience in my journey 
              as a developer.
            </p>
            
            <div className="projects-stack">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`project-tile ${selectedProject === project.id ? 'active' : ''}`}
                  style={{
                    '--index': index,
                    zIndex: projects.length - index
                  }}
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                >
                  <div className="project-tile-inner">
                    <div className="project-image-container">
                      <div className={`project-image-placeholder bg-gradient-to-br ${project.color}`}>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="project-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <div className="project-image-overlay">
                          <span className="project-number">#{project.id}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="project-content">
                      <div className="project-header">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-tech">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="project-description">
                        <p>{project.description}</p>
                      </div>
                      
                      <div className="project-links">
                        <button
                          className="project-link like-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(project.id);
                          }}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                          <span className="like-count">{projectLikes[project.id] || 0}</span>
                        </button>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link github-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                            GitHub
                          </a>
                        )}
                        {project.readme && (
                          <a
                            href={project.readme}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link readme-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                            README
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link live-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                            Live Demo
                          </a>
                        )}
                        {project.live2 && (
                          <a
                            href={project.live2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link live-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                            Live Demo 2
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;