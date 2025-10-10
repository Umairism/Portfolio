import React, { useEffect, useState } from "react";
// Import project images
import codespaceImage from "../Images/CodeSpace.png";
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
import proposalImage from '../Images/Proposal.png';
import birthdayImage from '../Images/me3.png';
import usbForgeImage from '../Images/Ddos.png';
import blockchainCertSystemImage from '../Images/lockchain-cert.png';
import outsourceAcceleratorImage from '../Images/Ecom.png';
import teachersClubImage from '../Images/portal.png';
import pythonMightImage from '../Images/1.png';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectLikes, setProjectLikes] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Web Development',
    'Cybersecurity', 
    'Desktop Applications',
    'Blockchain',
    '3D & Graphics',
    'Mobile & Cross-Platform',
    'Media & Entertainment',
    'Educational',
    'AI & Machine Learning',
    'Business & Productivity'
  ];

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
      achievement: "🏆 Latest Achievement - Complete Browser-Based IDE",
      category: "Web Development"
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
      achievement: "🏆 Latest Achievement - Full-Stack Blockchain Application",
      category: "Blockchain",
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
      color: "from-blue-500 to-purple-600",
      category: "Web Development",
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
      featured: true,
      category: "AI & Machine Learning",
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
      featured: true,
      category: "Cybersecurity",
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
      featured: true,
      category: "Web Development",
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
      featured: true,
      category: "Media & Entertainment",
    },
    {
      id: 8,
      title: "Task Manager App",
      description: "A task management app created to help users organize and track their daily tasks. Built with React.js and MongoDB, it features CRUD operations and user authentication.",
      tech: ["React.js", "MongoDB", "Node.js"],
      github: "https://github.com/Umairism/task-manager",
      readme: "https://github.com/Umairism/task-manager/blob/main/README.md",
      live: "https://memytaskmgr.netlify.app",
      image: taskManagerImage,
      color: "from-purple-500 to-pink-600",
      category: "Web Development"
    },
    {
      id: 9,
      title: "DDOS Simulation Tool",
      description: "Whistler v0.3 DDoS Simulation Tool (Educational Use) - A CLI-based Python application designed to simulate Distributed Denial-of-Service attacks for ethical and educational purposes.",
      tech: ["Python", "Scapy", "Networking"],
      github: "https://github.com/Umairism/Dos-Tool",
      readme: "https://github.com/Umairism/Dos-Tool/blob/main/README.md",
      live: null,
      image: ddosToolImage,
      color: "from-orange-500 to-red-600",
      category: "Cybersecurity",
    },
    {
      id: 10,
      title: "Weather Forecast App",
      description: "A weather app that fetches data from the OpenWeatherMap API. Users can input a location and view the weather forecast for that area. Built with React.js, demonstrating API integration.",
      tech: ["React.js", "API", "JavaScript"],
      github: "https://github.com/Umairism/Weather-App",
      readme: "https://github.com/Umairism/Weather-App/blob/main/README.md",
      live: "https://memyweather.netlify.app",
      image: weatherAppImage,
      color: "from-cyan-500 to-blue-600",
      category: "Web Development",
    },
    {
      id: 11,
      title: "Student Portal",
      description: "A student portal application designed to manage student information, courses, and grades. Built with React.js and Node.js, it provides a user-friendly interface for students and administrators.",
      tech: ["React.js", "Node.js", "Database"],
      github: "https://github.com/Umairism/student-portal",
      readme: "https://github.com/Umairism/student-portal/blob/main/README.md",
      live: "https://memystudentportal.netlify.app",
      image: studentPortalImage,
      color: "from-indigo-500 to-purple-600",
      category: "Educational",
    },
    {
      id: 12,
      title: "Pharmacy Inventory Management",
      description: "A web application for managing pharmacy inventory, including features for tracking stock levels, sales, and orders. Built with React.js and Node.js, it provides a comprehensive solution for pharmacy management.",
      tech: ["React.Js", "TypeScript", "React-Router-Dom", "Tailwind CSS"],
      github: "https://github.com/Umairism/Medical-Store-Management-System",
      readme: "https://github.com/Umairism/Medical-Store-Management-System/blob/main/README.md",
      live: "https://memymedi.netlify.app",
      image: medicalImage,
      color: "from-teal-500 to-green-600",
      category: "Business & Productivity",
    },
    {
      id: 13,
      title: "Medical Equipment Store {Template}",
      description: "",
      tech: ["JavaScript", "HTML", "CSS", "TypeScript", "React.js", "Tailwind CSS"],
      github: "https://github.com/Umairism/Xperti.git",
      readme: "https://github.com/Umairism/Xperti/blob/main/README.md",
      live: "https://xperti.netlify.app/",
      image: xpertiImage,
      color: "from-teal-500 to-green-600",
      category: "Business & Productivity",
    },
    {
      id: 14,
      title: "Surveillance and Monitoring Drone System",
      description: "A drone system designed for surveillance and monitoring purposes. Features real-time video streaming, GPS tracking, and automated flight paths.",
      tech: ["Drone Technology", "Computer Vision", "Real-time Streaming", "Python", "OpenCV", "Flask", "DroneKit", "GPS", "WebRTC", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Umairism/Drone-System.git",
      readme: "https://github.com/Umairism/Drone-System/blob/main/README.md",
      image: droneImage,
      color: "from-teal-500 to-green-600",
      category: "AI & Machine Learning",
    },
    {
      id: 15,
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
      id: 16,
      title: "Benchmark School Management System",
      description: "A modern, professional school management platform that brings together educators, students, and administrators in a comprehensive digital environment. Features modern homepage with gradient animations, professional dashboard with analytics, article system with rich content creation, community confessions, and hybrid database integration with Supabase and localStorage fallback.",
      tech: ["React.js", "TypeScript", "Vite", "TailwindCSS", "Supabase", "Lucide React", "Authentication", "Real-time Sync"],
      github: "https://github.com/Umairism/benchmark-school-system",
      readme: "https://github.com/Umairism/benchmark-school-system/blob/main/README.md",
      live: null,
      image: benchmarkImage,
      color: "from-purple-500 to-indigo-600",
      likes: 0,
      featured: true,
      category: "Educational",
    },
    {
      id: 17,
      title: "Benchmark School System (Offline)",
      description: "Offline-capable version of the school management platform with localStorage integration. Features the same comprehensive functionality as the online version but works completely offline with automatic data synchronization when connection is restored. Perfect for environments with limited internet access.",
      tech: ["React.js", "TypeScript", "Vite", "TailwindCSS", "localStorage", "Offline-First", "Progressive Web App", "Data Synchronization"],
      github: "https://github.com/Umairism/benchmark-school-system",
      readme: "https://github.com/Umairism/benchmark-school-system/blob/main/README.md",
      live: null,
      image: benchmarkImage,
      color: "from-indigo-500 to-blue-600",
      likes: 0,
      featured: false,
      category: "Educational",
    },
    {
      id: 18,
      title: "React Native Mobile App",
      description: "A comprehensive mobile application built with React Native featuring modern UI/UX design patterns. Demonstrates cross-platform mobile development with native components, state management, and responsive design. Includes form handling, navigation, and professional mobile interfaces.",
      tech: ["React Native", "TypeScript", "Mobile Development", "Cross-Platform", "Native Components", "State Management"],
      github: "https://github.com/Umairism/Mobile_App_Demo",
      readme: "https://github.com/Umairism/Mobile_App_Demo/blob/master/README.md",
      live: null,
      image: mobileAppImage,
      color: "from-green-500 to-emerald-600",
      likes: 0,
      featured: false,
      category: "Mobile & Cross-Platform",
    },
    {
      id: 19,
      title: "Offline Card Wallet - Mobile Demo",
      description: "A demonstration mobile application showcasing React Native development concepts for payment card management. Features card addition, secure number masking, transaction simulation, NFC payment mockups, QR code payments, and professional mobile UI design. Built for learning purposes with modern mobile development patterns.",
      tech: ["React Native", "TypeScript", "Mobile UI/UX", "Payment Simulation", "NFC Mockup", "QR Payments", "Cross-Platform"],
      github: "https://github.com/Umairism/Offline_Card_Wallet",
      readme: "https://github.com/Umairism/Offline_Card_Wallet/blob/main/README.md",
      live: null,
      image: mobileAppImage,
      color: "from-cyan-500 to-teal-600",
      likes: 0,
      featured: false,
      category: "Mobile & Cross-Platform",
    },
    {
      id: 20,
      title: "OpenCV Enterprise Computer Vision Hub",
      description: "A centralized hub for enterprise-grade computer vision projects leveraging OpenCV. Features motion detection security camera systems, face recognition, object tracking, license plate recognition, image segmentation, gesture recognition, and augmented reality solutions. Designed for scalable, maintainable, and secure development of vision-based enterprise applications.",
      tech: ["OpenCV", "Python", "Computer Vision", "Machine Learning", "Image Processing", "Real-time Analytics", "Enterprise Solutions"],
      github: "https://github.com/Umairism/OpenCV",
      readme: "https://github.com/Umairism/OpenCV/blob/main/README.md",
      live: null,
      image: opencvImage,
      color: "from-orange-500 to-red-600",
      likes: 0,
      featured: true,
      category: "AI & Machine Learning"
    },
    {
      id: 21,
      title: "Advanced Task Manager",
      description: "A comprehensive task management application with modern features and professional UI. Built with React and modern web technologies, featuring advanced task organization, priority management, deadline tracking, and collaborative features. Includes real-time updates and responsive design for optimal user experience.",
      tech: ["React.js", "Node.js", "Task Management", "Real-time Updates", "Responsive Design", "Modern UI/UX"],
      github: "https://github.com/Umairism/TaskManager",
      readme: null,
      live: null,
      image: taskManagerImage,
      color: "from-yellow-500 to-orange-600",
      likes: 0,
      featured: false,
      category: "Business & Productivity",
    },
    {
      id: 22,
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
      achievement: "🏆 Latest Project - Pure Vanilla JS Desktop OS",
      category: "Web Development",
    },
        {
      id: 23,
      title: "💕 Interactive Proposal Website",
      description: "A beautiful, romantic, and interactive proposal website built with React, TypeScript, and Three.js. Features stunning 3D heart animations using mathematical equations, 12 floating balloons with realistic physics, spectacular confetti explosions, enhanced music integration with multiple sources (YouTube, SoundCloud, audio files), glass-morphism UI effects, and smooth animations. Includes 8,000+ particles forming a perfect heart shape, responsive design for all devices, and professional performance optimizations targeting 60fps.",
      tech: ["React.js", "TypeScript", "Three.js", "Vite", "Tailwind CSS", "WebGL", "3D Graphics", "Mathematical Animations", "Glass Morphism", "Particle Systems", "Music Integration"],
      github: "https://github.com/Umairism/Proposal",
      readme: "https://github.com/Umairism/Proposal/blob/main/README.md",
      live: null,
      image: proposalImage,
      color: "from-pink-500 to-red-600",
      likes: 0,
      featured: true,
      isNew: true,
      achievement: "🏆 Latest Project - Interactive Romantic Experience",
      category: "3D & Graphics",
    },
    {
      id: 24,
      title: "🎵 Lyrixx - Real-time Lyrics Synchronization App",
      description: "A comprehensive Python desktop application that provides real-time synchronized lyrics display for songs. Features advanced music detection via microphone or system audio, song recognition using ACRCloud API, lyrics fetching from multiple sources (Apiary, Musixmatch, Genius), multi-language translation support, karaoke-style highlighting, and professional Tkinter GUI interface. Includes audio processing with pyaudio/sounddevice, Windows Stereo Mix support, and extensive configuration management for seamless user experience.",
      tech: ["Python", "Tkinter", "ACRCloud API", "Apiary API", "PyAudio", "SoundDevice", "Real-time Processing", "Music Recognition", "Lyrics APIs", "Audio Processing", "Multi-language Translation"],
      github: "https://github.com/Umairism/Lyrixx",
      readme: "https://github.com/Umairism/Lyrixx/blob/main/README.md",
      live: null,
      image: portfolioImage,
      color: "from-purple-500 to-pink-600",
      likes: 0,
      featured: true,
      isNew: true,
      achievement: "🏆 Latest Achievement - Desktop Music Recognition App",
      category: "Media & Entertainment",
    },
    {
      id: 25,
      title: "🛡️ Advanced Penetration Testing Framework",
      description: "A comprehensive, professional-grade penetration testing framework with modern GUI interface. Features advanced network scanner with high-speed TCP/SYN scanning, vulnerability assessment with CVE integration, payload generator for multiple platforms, professional HTML reporting, anti-detection techniques, stealth communication methods, and cryptographic utilities. Built with Python 3.8+, includes CLI mode, interactive menu, real-time progress tracking, and multi-threading for maximum performance. Designed for security professionals and educational purposes.",
      tech: ["Python", "Scapy", "Tkinter", "Network Security", "Penetration Testing", "Vulnerability Assessment", "Cryptography", "Multi-threading", "Professional Reporting", "CLI Interface", "GUI Framework"],
      github: "https://github.com/Umairism/advanced-pentest-framework",
      readme: "https://github.com/Umairism/advanced-pentest-framework/blob/main/README.md",
      live: null,
      image: ddosToolImage,
      color: "from-red-600 to-orange-700",
      likes: 0,
      featured: true,
      isNew: true,
      achievement: "🏆 Latest Achievement - Professional Security Framework",
      category: "Cybersecurity",
    },
    {
      id: 26,
      title: "🎂 Birthday Celebration Website",
      description: "A delightful TypeScript-based birthday celebration website featuring interactive animations, personalized messages, and engaging visual effects. Built with modern web technologies to create memorable birthday experiences with smooth animations, responsive design, and festive elements that bring joy to special celebrations.",
      tech: ["TypeScript", "HTML5", "CSS3", "JavaScript", "Animations", "Responsive Design"],
      github: "https://github.com/Umairism/Birthday",
      readme: "https://github.com/Umairism/Birthday/blob/main/README.md",
      live: null,
      image: birthdayImage,
      color: "from-yellow-400 to-pink-500",
      likes: 0,
      featured: false,
      isNew: true,
      category: "Media & Entertainment",
    },
    {
      id: 27,
      title: "🎨 3D Portfolio Experience",
      description: "An innovative 3D portfolio website built with TypeScript showcasing projects and skills in an immersive three-dimensional environment. Features interactive 3D elements, smooth transitions, modern animations, and cutting-edge web technologies to create a unique portfolio experience that stands out from traditional flat designs.",
      tech: ["TypeScript", "Three.js", "WebGL", "3D Graphics", "Modern Animations", "Interactive Design"],
      github: "https://github.com/Umairism/3D_Portfolio",
      readme: "https://github.com/Umairism/3D_Portfolio/blob/main/README.md",
      live: null,
      image: portfolioImage,
      color: "from-purple-600 to-blue-700",
      likes: 0,
      featured: true,
      isNew: true,
      category: "3D & Graphics",
    },
    {
      id: 28,
      title: "🔌 USBForge - USB Security Tool",
      description: "A sophisticated Python-based USB security and forensics tool designed for cybersecurity professionals. Features USB device analysis, security assessment capabilities, forensic data extraction, device fingerprinting, and comprehensive reporting. Built for ethical hacking and security research purposes with professional-grade functionality.",
      tech: ["Python", "USB Security", "Forensics", "Cybersecurity", "Device Analysis", "Security Assessment"],
      github: "https://github.com/Umairism/USBForge",
      readme: "https://github.com/Umairism/USBForge/blob/main/README.md",
      live: null,
      image: usbForgeImage,
      color: "from-green-600 to-teal-700",
      likes: 0,
      featured: true,
      isNew: true,
      category: "Desktop Applications"
    },
    {
      id: 29,
      title: "⛓️ Blockchain Certificate System",
      description: "A comprehensive Python-based blockchain certificate system for secure academic credential verification. Features custom blockchain implementation, certificate generation and validation, immutable record storage, cryptographic security, and professional API interface. Designed to eliminate certificate fraud through decentralized verification methods.",
      tech: ["Python", "Blockchain", "Cryptography", "Certificate Validation", "API Development", "Security"],
      github: "https://github.com/Umairism/blockchain-cert-system",
      readme: "https://github.com/Umairism/blockchain-cert-system/blob/main/README.md",
      live: null,
      image: blockchainCertSystemImage,
      color: "from-blue-600 to-cyan-700",
      likes: 0,
      featured: true,
      isNew: true,
      category: "Blockchain",
    },
    {
      id: 30,
      title: "🚀 Outsource Accelerator Platform",
      description: "A comprehensive TypeScript-based business automation and outsourcing management platform. Features project management capabilities, client-freelancer matching system, automated workflow processing, real-time collaboration tools, and professional dashboard interface. Built to streamline outsourcing operations and accelerate business growth through intelligent automation.",
      tech: ["TypeScript", "Business Automation", "Project Management", "Real-time Collaboration", "Dashboard Interface", "Workflow Automation"],
      github: "https://github.com/Umairism/Outsource-Accelerator",
      readme: "https://github.com/Umairism/Outsource-Accelerator/blob/main/README.md",
      live: null,
      image: outsourceAcceleratorImage,
      color: "from-emerald-600 to-teal-700",
      likes: 0,
      featured: true,
      isNew: true,
      category: "Business & Productivity",
    },
    {
      id: 31,
      title: "🎓 Teachers Club Educational Platform",
      description: "A modern TypeScript-based educational platform designed for teachers and educational institutions. Features comprehensive course management, student progress tracking, interactive learning tools, assignment distribution system, grade management, and collaborative educational environment. Built to enhance the teaching and learning experience with modern web technologies.",
      tech: ["TypeScript", "Educational Technology", "Course Management", "Student Tracking", "Interactive Tools", "Collaborative Platform"],
      github: "https://github.com/Umairism/Teachers_Club",
      readme: "https://github.com/Umairism/Teachers_Club/blob/main/README.md",
      live: null,
      image: teachersClubImage,
      color: "from-indigo-600 to-purple-700",
      likes: 0,
      featured: true,
      isNew: true,
      category: "Educational",
    },
    {
      id: 32,
      title: "🐍 Python's Might - Demonstration Project",
      description: "A comprehensive Python project showcasing the versatility and power of Python programming language. Features various Python capabilities including data structures, algorithms, web scraping, automation scripts, data analysis, and advanced programming concepts. Built as an educational resource and demonstration of Python's extensive capabilities across different domains.",
      tech: ["Python", "Data Structures", "Algorithms", "Web Scraping", "Automation", "Data Analysis", "Educational"],
      github: "https://github.com/Umairism/Python-s-might",
      readme: "https://github.com/Umairism/Python-s-might/blob/main/README.md",
      live: null,
      image: pythonMightImage,
      color: "from-green-500 to-blue-600",
      likes: 0,
      featured: false,
      isNew: true,
      category: "Desktop Applications",
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            
            {/* Category Filter */}
            <div className="category-filter">
              <h3 className="filter-title">Filter by Category:</h3>
              <div className="category-buttons">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="projects-stack">
              {filteredProjects.map((project, index) => (
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