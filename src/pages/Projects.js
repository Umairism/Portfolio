import React, { useEffect, useRef, useState } from "react";
// Import unique project images
import codespaceImage from "../Images/CodeSpace.png";
import ecommerceImage from "../Images/Ecom.png";
import slimeTubeImage from "../Images/SlimeTube.png";
import portalImage from "../Images/portal.png";
import ddosToolImage from "../Images/Ddos.png";
import weatherAppImage from "../Images/weather.png";
import wordpressImage from "../Images/adobe.png";
import medicalImage from "../Images/Medi.png";
import xpertiImage from "../Images/Xperti.png";
import droneImage from "../Images/Drone.png";
import PortableAiImage from "../Images/PortableAiAgent.png";
import aircrackGuiImage from "../Images/Aircrack.png";
import benchmarkImage from "../Images/me3.png";
import blockchainCertImage from '../Images/lockchain-cert.png';
import linuxosDesktopImage from '../Images/LinuxOS-Desktop.png';
import proposalImage from '../Images/Proposal.png';

const imagePlaceholder = null;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectLikes, setProjectLikes] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

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
    'Business & Productivity',
    'Healthcare & IoT'
  ];

  useEffect(() => {
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
      projectCards.forEach((card) => {
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

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    previousFocusRef.current = document.activeElement;
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) {
        return;
      }

      const focusableElements = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, [selectedProject]);

  const openProject = (projectId) => {
    setSelectedProject(projectId);
  };

  const handleCardKeyDown = (event, projectId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProject(projectId);
    }
  };

  const projects = [
    {
      id: 1,
      title: "CodeSpace - Browser IDE",
      problem: "Local development environments require heavy installations and configuration. Need a zero-setup IDE that runs everywhere.",
      solution: "Built with React + TypeScript, uses Monaco Editor (VS Code engine) for IntelliSense, integrates custom Python interpreter via WebWorkers for sandboxed execution, IndexedDB for file persistence. Supports HTML/CSS/React preview with iframe isolation.",
      decisions: "Chose Monaco over CodeMirror for better language support. Implemented WebWorker isolation to prevent main thread blocking during code execution. Used IndexedDB instead of localStorage for 50MB+ file capacity.",
      challenges: "Python interpreter integration required building custom WASM bindings. Solved React JSX transpilation in-browser using Babel standalone. Preview isolation needed postMessage communication between iframe and parent.",
      tech: ["React", "TypeScript", "Monaco Editor", "Python Interpreter", "Vite", "WebWorkers", "IndexedDB"],
      github: "https://github.com/Umairism/codespace",
      live: "https://webcodespace.netlify.app", 
      image: codespaceImage,
      color: "from-blue-500 to-purple-600",
      featured: true,
      category: "Web Development"
    },
    {
      id: 2,
      title: "Blockchain Certificate Verification",
      problem: "Academic certificates are easily forged. Universities need immutable, decentralized verification.",
      solution: "React + TypeScript frontend, Flask backend with custom SHA-256 blockchain implementation. SQLAlchemy ORM with SQLite for local dev, PostgreSQL for production. JWT auth with role-based access (admin/issuer/verifier).",
      decisions: "Built custom blockchain instead of Ethereum to avoid gas fees and simplify deployment. SHA-256 provides sufficient security for educational use case. SQLAlchemy allows easy database swapping.",
      challenges: "Blockchain consensus in single-node setup required proof-of-work simulation. JWT refresh tokens needed Redis for production but localStorage for demo. Chain validation performance degraded after 10k blocks—added merkle tree optimization.",
      tech: ["React", "TypeScript", "Flask", "SQLAlchemy", "Custom Blockchain", "JWT", "Tailwind CSS"],
      github: "https://github.com/Umairism/blockchain-certificate-verification",
      live: null,
      image: blockchainCertImage,
      color: "from-emerald-500 to-blue-600",
      featured: true,
      category: "Blockchain"
    },
    {
      id: 3,
      title: "Portable AI Agent",
      problem: "Cloud AI services expose user data. Need local, privacy-first AI assistant that learns offline.",
      solution: "Python Flask backend with local Transformers models (distilgpt2 for generation, sentence-transformers for embeddings). FAISS for vector search, conversation stored in SQLite. No external API calls.",
      decisions: "Chose distilgpt2 over GPT-2 for 2x faster inference on CPU. FAISS instead of ChromaDB for lower memory footprint (~50MB vs ~200MB). SQLite avoids database server dependency.",
      challenges: "Model inference on CPU too slow—added batching and caching for 3x speedup. Context window limited to 1024 tokens required smart truncation. Memory usage peaked at 2GB—solved with lazy model loading.",
      tech: ["Python", "Flask", "Transformers", "FAISS", "SQLite", "PyTorch"],
      github: "https://github.com/Umairism/Porable-Ai-Agent",
      live: null,
      image: PortableAiImage,
      color: "from-blue-500 to-purple-600",
      featured: true,
      category: "AI & Machine Learning"
    },
    {
      id: 4,
      title: "Aircrack-NG GUI",
      problem: "Aircrack-NG CLI is powerful but difficult for learning wireless security. Need modern interface for educational use.",
      solution: "React + TypeScript frontend with Material-UI, FastAPI backend wraps Aircrack-NG CLI tools. SQLAlchemy for job history, JWT auth, Redis for task queue. Supports pcap upload, WPA handshake capture, dictionary attacks.",
      decisions: "FastAPI over Flask for async support (long-running captures don't block API). Material-UI provides professional security tool aesthetic. Redis task queue allows background processing with progress updates.",
      challenges: "Streaming command output from subprocess to frontend required Server-Sent Events. File uploads for large pcap files (500MB+) needed chunked upload with resume capability. Process management required careful cleanup to avoid zombie processes.",
      tech: ["React", "TypeScript", "FastAPI", "Material-UI", "SQLAlchemy", "Redis", "Aircrack-NG"],
      github: "https://github.com/Umairism/Aircrack_GUI",
      live: null,
      image: aircrackGuiImage,
      color: "from-red-500 to-orange-600",
      featured: true,
      category: "Cybersecurity"
    },
    {
      id: 5,
      title: "ModernShop E-Commerce",
      problem: "Traditional e-commerce needs backend servers. Serverless approach reduces hosting costs to near-zero.",
      solution: "React frontend with Netlify Functions for serverless API. Session-based cart uses localStorage with 7-day expiry. Product catalog stored in JSON, search uses client-side Fuse.js for fuzzy matching.",
      decisions: "Serverless over traditional Node.js backend eliminates monthly hosting costs ($0 vs $5-15). localStorage instead of cookies avoids GDPR complexity. Client-side search trades latency for zero backend load.",
      challenges: "Cold start latency (2-3s) on Netlify Functions required aggressive caching. Checkout flow without backend database used URL parameters—limited to 2KB. Inventory management not real-time due to static JSON.",
      tech: ["React", "Netlify Functions", "localStorage", "Fuse.js"],
      github: "https://github.com/Umairism/e-commerce",
      live: "https://myecoms.netlify.app",
      image: ecommerceImage,
      color: "from-green-500 to-teal-600",
      featured: true,
      category: "Web Development"
    },
    {
      id: 6,
      title: "SlimeTube - Video Platform",
      problem: "Building a video platform like YouTube requires complex backend. Simplified version using browser storage for learning.",
      solution: "React + TypeScript with Vite, Tailwind CSS for styling, Framer Motion for animations. Videos stored in IndexedDB (supports 50MB+ files), metadata in localStorage. No backend—fully client-side.",
      decisions: "IndexedDB over localStorage for large video files (50MB limit vs 5MB). Framer Motion provides smooth animations without jQuery. Vite build tool for faster dev experience vs Create React App.",
      challenges: "Video upload progress tracking required FileReader with chunk processing. Playback from IndexedDB needed Blob URLs with proper cleanup to avoid memory leaks. Search performance degraded with 100+ videos—added debouncing and virtual scrolling.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "IndexedDB"],
      github: "https://github.com/Umairism/SlimeTube",
      live: "https://flixii.netlify.app/",
      image: slimeTubeImage,
      color: "from-red-500 to-pink-600",
      featured: true,
      category: "Media & Entertainment"
    },
    {
      id: 7,
      title: "LinuxOS Desktop Environment",
      problem: "Web-based OS interfaces usually depend on heavy frameworks. Wanted pure vanilla implementation for learning.",
      solution: "Pure JavaScript, HTML5, CSS3. Custom window manager with drag/resize using mouse events, macOS-style dock with magnification effect via CSS transforms, built-in apps (terminal, file manager, calculator, browser) as separate modules.",
      decisions: "Vanilla JS over React to understand core browser APIs. CSS Grid + Flexbox for layout instead of positioning libraries. Event delegation for performance with many windows. LocalStorage for preferences and file system simulation.",
      challenges: "Window z-index management required custom focus tracking. Drag/resize boundaries needed viewport collision detection. Terminal emulator output buffering—limited to 1000 lines to prevent memory issues. 60fps animations required will-change and transform optimizations.",
      tech: ["Vanilla JavaScript", "HTML5", "CSS3", "File System API", "LocalStorage"],
      github: "https://github.com/umairism/linuxos-desktop",
      live: "https://linuxos.netlify.app",
      image: linuxosDesktopImage,
      color: "from-blue-600 to-purple-700",
      featured: true,
      category: "Web Development"
    },
    {
      id: 8,
      title: "Interactive Proposal Website",
      problem: "Needed memorable, interactive romantic experience with 3D elements that runs smoothly on low-end devices.",
      solution: "React + TypeScript + Three.js for WebGL rendering. 8000+ particle system forming mathematical heart shape (parametric equations), physics-based balloon animations, confetti system with gravity simulation. Tailwind + glass-morphism CSS for UI.",
      decisions: "Three.js over raw WebGL for faster development. Particle count limited to 8000 for mobile performance (vs 50k on desktop). Used instanced geometry for balloons to reduce draw calls from 12 to 1. Preloaded audio with fallback URLs (YouTube, SoundCloud, local).",
      challenges: "60fps target on mobile required LOD (level of detail) system—reduced particles to 2000 on low-end devices. Music autoplay blocked by browsers—required user gesture detection. Heart equation rendering needed custom shader for smooth curves. Memory usage spiked during confetti—implemented particle pooling.",
      tech: ["React", "TypeScript", "Three.js", "WebGL", "Tailwind CSS", "Particle Systems"],
      github: "https://github.com/Umairism/Proposal",
      live: null,
      image: proposalImage,
      color: "from-pink-500 to-red-600",
      featured: true,
      category: "3D & Graphics"
    },
    {
      id: 9,
      title: "Lyrixx - Lyrics Sync App",
      problem: "Existing lyrics apps require manual song search. Wanted automatic recognition with real-time sync.",
      solution: "Python desktop app with Tkinter GUI. ACRCloud API for audio fingerprinting, PyAudio for microphone capture, multiple lyrics APIs (Apiary, Musixmatch, Genius) with fallbacks. Karaoke-style highlighting using timestamps.",
      decisions: "ACRCloud over Shazam API for better free tier (100 calls/day vs 500/month). PyAudio + sounddevice for cross-platform audio capture. Windows Stereo Mix support for system audio recognition. SQLite cache for recognized songs to reduce API calls.",
      challenges: "Audio buffer management—5 second samples vs latency tradeoff. API rate limiting required intelligent fallback system. Lyrics timestamp parsing varied across sources—built unified parser. GUI freezing during recognition—moved to threading with queue communication.",
      tech: ["Python", "Tkinter", "ACRCloud API", "PyAudio", "SoundDevice", "SQLite"],
      github: "https://github.com/Umairism/Lyrixx",
      live: null,
      image: imagePlaceholder,
      color: "from-purple-500 to-pink-600",
      featured: true,
      category: "Media & Entertainment"
    },
    {
      id: 10,
      title: "Advanced Pentest Framework",
      problem: "Penetration testing tools scattered across multiple CLIs. Need unified framework for security assessments.",
      solution: "Python with Scapy for packet crafting, Tkinter for optional GUI, modular architecture (scanner, exploit, reporting modules). TCP/SYN scanning with multi-threading, CVE vulnerability database integration, automated HTML reports.",
      decisions: "Scapy over nmap for programmatic control. Multi-threading (ThreadPoolExecutor) for 10x faster scanning. CLI-first with optional GUI—most pentesters prefer terminal. CVE database stored in SQLite for offline use.",
      challenges: "Raw socket access requires root permissions—added privilege escalation check. Port scanning rate limited to avoid network flooding (1000 ports/sec max). CVE matching required fuzzy string matching—added Levenshtein distance. Report generation with large scan results (10k+ hosts) caused memory issues—implemented streaming write.",
      tech: ["Python", "Scapy", "Tkinter", "SQLite", "Multi-threading", "Cryptography"],
      github: "https://github.com/Umairism/advanced-pentest-framework",
      live: null,
      image: imagePlaceholder,
      color: "from-red-600 to-orange-700",
      featured: true,
      category: "Cybersecurity"
    },
    {
      id: 11,
      title: "Benchmark School System",
      problem: "School management systems are expensive and complex. Need simple, modern solution for small schools.",
      solution: "React + TypeScript + Supabase for backend. PostgreSQL with Row-Level Security for multi-tenant data isolation. JWT authentication with role-based access (admin, teacher, student). Dashboard with real-time statistics via Supabase subscriptions.",
      decisions: "Supabase over Firebase for PostgreSQL (relational data better for school management). Row-Level Security instead of application-layer auth reduces security bugs. Real-time subscriptions for live dashboard updates without polling.",
      challenges: "RLS policies complex for multi-role access—required careful policy design. File uploads for assignments needed Supabase Storage with access control. Offline support required IndexedDB sync queue for poor connectivity scenarios. Performance with 1000+ students required query optimization and pagination.",
      tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Real-time Subscriptions"],
      github: "https://github.com/Umairism/benchmark-school-system",
      live: null,
      image: benchmarkImage,
      color: "from-purple-500 to-indigo-600",
      featured: true,
      category: "Educational"
    },
    {
      id: 12,
      title: "Automata Solver",
      problem: "Theory of computation problems tedious to solve manually. Students need visual tool for DFA/NFA/PDA.",
      solution: "Flask backend with Python automata libraries (automata-lib), Graphviz for state diagram generation. Supports DFA minimization, NFA to DFA conversion, pumping lemma verification, CFG ambiguity detection. Responsive HTML/CSS/JS frontend.",
      decisions: "Flask over Django for lightweight API. Graphviz for publication-quality diagrams (300 DPI). Timeout protection (5 sec) for ambiguity detection to prevent infinite loops. State diagrams rendered as SVG for scalability.",
      challenges: "Ambiguity detection computationally expensive—limited to 100 production rules. Large automata (500+ states) crashed Graphviz—added pagination. Formula rendering required MathJax for proper symbols. Example database grew to 50MB—implemented lazy loading.",
      tech: ["Python", "Flask", "Graphviz", "Theory of Computation", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Umairism/Automata",
      live: "https://automata-production-71fb.up.railway.app/",
      image: imagePlaceholder,
      color: "from-violet-600 to-purple-700",
      featured: true,
      category: "Educational"
    },
    {
      id: 13,
      title: "The Chronicle - News Platform",
      problem: "News aggregation requires backend complexity. Wanted serverless solution with caching to avoid API rate limits.",
      solution: "React + TypeScript frontend, Express.js serverless functions on Netlify. Dual news APIs (NewsAPI + GNews) with automatic fallback. PostgreSQL via Supabase for articles, Redis-like caching using Netlify edge handlers. Admin CMS for article management.",
      decisions: "NewsAPI + GNews fallback for reliability (5000 calls/day vs 100). Netlify edge handlers for caching reduce API calls 90%. Supabase over MongoDB for relational article structure. Dark mode with system preference detection using prefers-color-scheme.",
      challenges: "API rate limiting required smart caching strategy—7 day cache for old articles, 1 hour for breaking news. Category filtering across two APIs needed unified data normalization. Admin auth without backend server used Supabase RLS. Search performance on 10k+ articles required full-text search indexes.",
      tech: ["React", "TypeScript", "Express.js", "Supabase", "PostgreSQL", "NewsAPI", "GNews"],
      github: "https://github.com/Umairism/The-Chronicle",
      live: null,
      image: imagePlaceholder,
      color: "from-slate-600 to-gray-800",
      featured: true,
      category: "Web Development"
    },
    {
      id: 14,
      title: "Office Management System",
      problem: "Learning ASP.NET Web Forms (legacy but still used in enterprises). Built CRUD app with n-tier architecture.",
      solution: "ASP.NET Web Forms + .NET Framework 4.8, SQL Server database. Three-tier architecture: Data Access Layer (ADO.NET), Business Logic Layer (validation, processing), Presentation Layer (Web Forms). Bootstrap 5 for UI.",
      decisions: "ADO.NET over Entity Framework to understand raw SQL. Stored procedures for security against SQL injection. Session state for user auth (simple vs ASP.NET Identity). Bootstrap CDN instead of bundling for faster initial setup.",
      challenges: "ViewState size grew with large datasets—disabled where not needed. SQL injection protection required parameterized queries everywhere. Session timeout issues—added keep-alive mechanism. Cross-browser compatibility (IE11 support) required polyfills.",
      tech: ["ASP.NET Web Forms", ".NET Framework 4.8", "C#", "SQL Server", "ADO.NET", "Bootstrap 5"],
      github: "https://github.com/Umairism/OfficeManagementSystem",
      live: null,
      image: imagePlaceholder,
      color: "from-blue-700 to-indigo-800",
      featured: true,
      category: "Business & Productivity"
    },
    {
      id: 15,
      title: "WeddingShare - Event Media Platform",
      problem: "Wedding guests share photos via messy WhatsApp groups. Need centralized, easy upload with admin control.",
      solution: "Next.js 13 with TypeScript, Supabase for storage and database. Drag-drop upload with react-dropzone, JWT auth for admin panel, Row-Level Security for guest access control. Rate limiting (5 uploads/IP/minute) to prevent abuse. Automatic file organization by date.",
      decisions: "Next.js 13 for SSR and optimized images. Supabase Storage over S3 for simpler auth integration. Rate limiting at edge (Vercel middleware) instead of backend. Guest access without account creation—uploads tied to IP for 24 hours.",
      challenges: "Large file uploads (100MB+ videos) required chunking and progress tracking. Rate limiting by IP problematic with NAT—added captcha for suspicious activity. Admin panel needed infinite scroll for 1000+ photos—implemented virtual scrolling with react-window. Image optimization (Next.js Image) reduced bandwidth 70%.",
      tech: ["Next.js 13", "React", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "JWT"],
      github: "https://github.com/Umairism/WeddingShare",
      live: "https://wedding-share-vert.vercel.app",
      image: imagePlaceholder,
      color: "from-pink-500 to-rose-600",
      featured: true,
      category: "Web Development"
    },
    {
      id: 16,
      title: "USBForge - USB Security Tool",
      problem: "USB forensics and security analysis require multiple tools. Unified Python tool for USB device analysis.",
      solution: "Python with pyusb for device enumeration, forensic data extraction, device fingerprinting. Generates detailed reports on USB device history, security risks, potential malware indicators. Cross-platform (Windows/Linux).",
      decisions: "pyusb over platform-specific APIs for portability. SQLite for device history tracking. Report generation as HTML for easy sharing. Admin/root detection with graceful fallback for limited permissions.",
      challenges: "USB device access requires elevated permissions—added sudo/admin prompt. Device enumeration sometimes incomplete—implemented retry logic with delays. Malware detection heuristics prone to false positives—added whitelist. Large device histories (10k+ entries) slowed queries—added indexing.",
      tech: ["Python", "pyusb", "USB Security", "Forensics", "SQLite"],
      github: "https://github.com/Umairism/USBForge",
      live: null,
      image: imagePlaceholder,
      color: "from-green-600 to-teal-700",
      featured: true,
      category: "Cybersecurity"
    },
    {
      id: 17,
      title: "Task Manager Portal",
      problem: "Simple task manager for learning React basics and MongoDB integration.",
      solution: "React frontend, Node.js + Express backend, MongoDB for persistence. JWT authentication, CRUD operations for tasks with priority/deadline fields. Responsive design for mobile use.",
      decisions: "MongoDB over SQL for flexible schema during rapid development. JWT stored in localStorage (simple but less secure than httpOnly cookies). Express middleware for auth verification. Mongoose ODM for schema validation.",
      challenges: "CORS issues between frontend/backend ports—configured properly in Express. Token expiration handling required refresh token logic—kept simple with 7-day expiry. MongoDB connection pooling for performance. Task filtering by date range needed efficient query indexes.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Mongoose"],
      github: "https://github.com/Umairism/task-manager",
      live: "https://memytaskmgr.netlify.app",
      image: portalImage,
      color: "from-purple-500 to-pink-600",
      category: "Web Development"
    },
    {
      id: 18,
      title: "DDoS Simulation Tool (Educational)",
      problem: "Learning network security requires understanding DDoS attacks. Educational CLI tool for ethical testing.",
      solution: "Python with Scapy for packet crafting. Simulates various DDoS types: SYN flood, UDP flood, HTTP flood. Configurable packet rate, target port, duration. Includes educational documentation on mitigation.",
      decisions: "Scapy for low-level packet control. CLI only (no GUI) to emphasize educational use. Built-in rate limiting to prevent accidental damage. Requires explicit confirmation before starting. Logs all activity for review.",
      challenges: "Raw socket access requires root—added clear permission error message. Packet generation rate limited by Python GIL—used multi-processing for higher throughput. Target IP validation to prevent misuse. Ethical warnings displayed prominently.",
      tech: ["Python", "Scapy", "Network Security", "Packet Crafting"],
      github: "https://github.com/Umairism/Dos-Tool",
      live: null,
      image: ddosToolImage,
      color: "from-orange-500 to-red-600",
      category: "Cybersecurity"
    },
    {
      id: 19,
      title: "Weather Forecast App",
      problem: "Learning API integration and async JavaScript. Simple weather app using OpenWeatherMap API.",
      solution: "React with useState/useEffect hooks. Axios for HTTP requests, OpenWeatherMap free tier API (60 calls/min). Location input with autocomplete, 5-day forecast display, weather icons.",
      decisions: "Axios over fetch for better error handling. OpenWeatherMap over others for generous free tier. LocalStorage cache for last searched city. Geolocation API for automatic location detection.",
      challenges: "API rate limit (60/min) required caching—stored results for 10 minutes. Geolocation permission handling across browsers. Weather icons mapping from API codes. Error states for network failures and invalid locations.",
      tech: ["React", "JavaScript", "OpenWeatherMap API", "Axios", "Geolocation API"],
      github: "https://github.com/Umairism/Weather-App",
      live: "https://memyweather.netlify.app",
      image: weatherAppImage,
      color: "from-cyan-500 to-blue-600",
      category: "Web Development"
    },
    {
      id: 20,
      title: "Pharmacy Inventory System",
      problem: "Learning TypeScript and state management. Pharmacy needs simple inventory tracking.",
      solution: "React + TypeScript, React Router for navigation, Tailwind CSS for styling. LocalStorage for data persistence (no backend). Stock tracking, low-stock alerts, sales recording, medication search.",
      decisions: "TypeScript for type safety during learning. Tailwind over custom CSS for rapid prototyping. LocalStorage sufficient for demo (real version would need backend). React Context for state management (simpler than Redux).",
      challenges: "TypeScript generics for flexible component props. Inventory calculations require precise decimal handling—used libraries to avoid floating point errors. Search performance with 1000+ items needed debouncing. Data export to CSV for backup.",
      tech: ["React", "TypeScript", "Tailwind CSS", "React Router", "LocalStorage"],
      github: "https://github.com/Umairism/Medical-Store-Management-System",
      live: "https://memymedi.netlify.app",
      image: medicalImage,
      color: "from-teal-500 to-green-600",
      category: "Business & Productivity"
    },
    {
      id: 21,
      title: "Drone Surveillance System",
      problem: "University project: IoT-based surveillance drone with real-time streaming and computer vision.",
      solution: "Raspberry Pi on drone running Python with OpenCV for video processing. Flask server for streaming via WebRTC. DroneKit for autopilot control. GPS tracking, object detection (YOLO), automated flight paths.",
      decisions: "Raspberry Pi 4 for balance of performance and power consumption. WebRTC over RTSP for lower latency (<500ms vs 2-3s). YOLO Tiny model for real-time detection on Pi (15fps). GPS via serial connection to flight controller.",
      challenges: "Video encoding on Pi CPU-intensive—used hardware H.264 encoder. Network latency over 4G required adaptive bitrate. Battery life limited to 20 minutes—optimized by reducing video quality. Object detection accuracy vs performance tradeoff—chose speed for real-time.",
      tech: ["Python", "OpenCV", "Flask", "DroneKit", "WebRTC", "YOLO", "Raspberry Pi", "GPS"],
      github: "https://github.com/Umairism/Drone-System",
      live: null,
      image: droneImage,
      color: "from-teal-500 to-green-600",
      category: "Healthcare & IoT"
    },
    {
      id: 22,
      title: "WordPress Client Sites",
      problem: "Clients needed professional websites without custom development costs.",
      solution: "WordPress with custom themes, WooCommerce for e-commerce, custom plugins for specific functionality. SEO optimization, responsive design, performance optimization (caching, CDN).",
      decisions: "WordPress over custom PHP for faster delivery and client-friendly CMS. Custom theme development instead of premium themes for unique branding. WooCommerce over Shopify for lower recurring costs. Cloudflare CDN for free performance boost.",
      challenges: "Plugin conflicts required careful testing. Performance optimization—W3 Total Cache + image compression reduced load time from 4s to 1.5s. Security hardening against WordPress-specific attacks. Client training for CMS use.",
      tech: ["WordPress", "PHP", "WooCommerce", "Custom Themes", "MySQL"],
      github: null,
      live: "https://adobestudios.io/",
      image: wordpressImage,
      color: "from-blue-500 to-purple-600",
      category: "Web Development"
    },
    {
      id: 23,
      title: "Student Portal",
      problem: "Schools need centralized student information system. Manual grade/course management error-prone.",
      solution: "React frontend, Node.js backend, PostgreSQL database. Student profiles, course enrollment, grade management, attendance tracking. Role-based access (admin, teacher, student).",
      decisions: "PostgreSQL over MongoDB for relational data (students→courses→grades). React Router for multi-page navigation. JWT auth with role middleware. PostgreSQL stored procedures for complex grade calculations.",
      challenges: "Grade calculation logic complex—weighted averages, GPA conversion. Attendance tracking across timezones needed careful timestamp handling. Large result sets (1000+ students) required pagination. CSV export for reports needed streaming to avoid memory issues.",
      tech: ["React", "Node.js", "PostgreSQL", "Express", "JWT"],
      github: "https://github.com/Umairism/student-portal",
      live: "https://memystudentportal.netlify.app",
      image: imagePlaceholder,
      category: "Educational"
    },
    {
      id: 24,
      title: "Xperti Medical Equipment Store",
      problem: "Medical equipment vendor needed template site for quick deployment.",
      solution: "React + TypeScript template with product catalog, responsive design, contact forms. Tailwind CSS for styling, modular components for easy customization. Netlify deployment with form handling.",
      decisions: "Template approach over custom build for reusability. Tailwind for rapid styling. Static site (no backend) for low maintenance. Netlify forms instead of custom backend for contact.",
      challenges: "Product catalog filtering performance with 100+ items. Image optimization for medical equipment photos (high detail needed). Mobile responsiveness for complex product specs. SEO optimization without SSR.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Netlify"],
      github: "https://github.com/Umairism/Xperti",
      live: "https://xperti.netlify.app/",
      image: xpertiImage,
      category: "Business & Productivity"
    },
    {
      id: 25,
      title: "3D Portfolio Experience",
      problem: "Traditional portfolios are flat. Wanted immersive 3D experience to stand out.",
      solution: "TypeScript + Three.js for WebGL rendering. 3D scene with interactive project cards, camera controls, particle effects, smooth animations. React Three Fiber for React integration.",
      decisions: "React Three Fiber over vanilla Three.js for component-based 3D. LOD system for performance—simpler models on mobile. Preloaded assets to prevent loading flicker. Fall back to 2D on WebGL unsupported devices.",
      challenges: "60fps on mid-range devices required aggressive optimization—reduced polygon count 80%. Camera controls unintuitive—added guided tour mode. Loading 3D assets slow—implemented progressive loading. Mobile touch controls different from mouse—dual input system.",
      tech: ["TypeScript", "Three.js", "React Three Fiber", "WebGL", "GLSL Shaders"],
      github: "https://github.com/Umairism/3D_Portfolio",
      live: null,
      image: imagePlaceholder,
      category: "3D & Graphics"
    },
    {
      id: 26,
      title: "Birthday Celebration Website",
      problem: "Wanted memorable, personalized birthday experience for a friend. Static cards boring.",
      solution: "TypeScript with HTML5 Canvas for animations. Confetti physics simulation, personalized messages with typewriter effect, music integration, photo gallery with transitions.",
      decisions: "Canvas over CSS animations for complex particle physics. TypeScript for type-safe animation logic. Preloaded all assets for smooth experience. Mobile-first design since most views from phones.",
      challenges: "Confetti particle count (5000+) caused frame drops—implemented object pooling for 3x performance gain. Audio autoplay blocked—added user gesture trigger. Photo loading slow—lazy loaded with blur-up placeholder. Animation timing across devices inconsistent—used requestAnimationFrame.",
      tech: ["TypeScript", "HTML5 Canvas", "CSS3 Animations", "Physics Simulation"],
      github: "https://github.com/Umairism/Birthday",
      live: null,
      image: imagePlaceholder,
      category: "Media & Entertainment"
    },
    {
      id: 27,
      title: "OpenCV Computer Vision Hub",
      problem: "Computer vision projects scattered across repos. Need centralized toolkit for learning.",
      solution: "Python + OpenCV collection of CV applications. Motion detection, face recognition, object tracking, license plate recognition, gesture control, image segmentation. Modular architecture for easy extension.",
      decisions: "OpenCV over MediaPipe for more control. HOG descriptor for face detection (faster than deep learning on CPU). Kalman filter for object tracking smoothness. Background subtraction for motion detection (simpler than optical flow).",
      challenges: "Real-time processing (30fps) on CPU required optimization—reduced resolution to 640x480, skipped frames. Face recognition accuracy vs speed tradeoff—used smaller model. Camera latency on USB webcams—implemented frame buffering. Lighting changes affected detection—added adaptive thresholding.",
      tech: ["Python", "OpenCV", "NumPy", "Computer Vision", "Image Processing"],
      github: "https://github.com/Umairism/OpenCV",
      live: null,
      image: imagePlaceholder,
      category: "AI & Machine Learning"
    },
    {
      id: 28,
      title: "Teachers Club Platform",
      problem: "Teachers need private community for resource sharing and collaboration.",
      solution: "TypeScript + React for frontend, authentication system, file upload/download, discussion forums, resource library. Categorized content, search functionality, user profiles.",
      decisions: "TypeScript for maintainability in growing codebase. React Router v6 for nested routes. LocalStorage + IndexedDB hybrid—small data in localStorage, files in IndexedDB. Client-side search using Fuse.js (no backend search needed).",
      challenges: "File sharing without backend storage—used IndexedDB with 500MB limit, added file size warnings. Discussion threading required nested comment structure. Search across multiple content types (posts, files, users) needed unified index. User permissions complex—implemented role-based components.",
      tech: ["TypeScript", "React", "IndexedDB", "Fuse.js", "React Router"],
      github: "https://github.com/Umairism/Teachers_Club",
      live: null,
      image: imagePlaceholder,
      category: "Educational"
    },
    {
      id: 29,
      title: "Python's Might - Demo Collection",
      problem: "Showcase Python capabilities across different domains for learning.",
      solution: "Collection of Python scripts demonstrating data structures, algorithms, web scraping (BeautifulSoup), automation (selenium), data analysis (pandas), file operations, API integration.",
      decisions: "Modular structure—each demo self-contained. Requirements.txt per demo to avoid dependency conflicts. Jupyter notebooks for interactive demos. Comments explain not just what but why.",
      challenges: "Web scraping demos broke when sites changed—added error handling and fallback examples. Automation scripts required browser drivers—included driver management. Different Python versions compatibility—tested on 3.8-3.11. Large datasets for pandas demos—used sampling.",
      tech: ["Python", "BeautifulSoup", "Selenium", "Pandas", "NumPy", "Jupyter"],
      github: "https://github.com/Umairism/Python-s-might",
      live: null,
      image: imagePlaceholder,
      category: "Educational"
    },
    {
      id: 30,
      title: "Outsource Accelerator Platform",
      problem: "Businesses struggle to manage outsourced projects and freelancer communication.",
      solution: "TypeScript + React platform. Project management dashboard, freelancer profiles, task tracking, time logging, file sharing, messaging system. Admin panel for oversight.",
      decisions: "TypeScript for complex business logic type safety. React Context for state management (Redux overkill for this scale). Supabase backend for real-time updates. Row-Level Security for multi-tenant data isolation.",
      challenges: "Real-time messaging required WebSocket connection management—used Supabase realtime subscriptions. File uploads for large project files—implemented chunked upload with resume capability. Time tracking across timezones—stored UTC, displayed local. Dashboard performance with 100+ projects—virtualized lists.",
      tech: ["TypeScript", "React", "Supabase", "PostgreSQL", "Real-time Subscriptions"],
      github: "https://github.com/Umairism/Outsource-Accelerator",
      live: null,
      image: imagePlaceholder,
      category: "Business & Productivity"
    },
    {
      id: 31,
      title: "Veterans Talha Memorial",
      problem: "Memorial website for military veteran. Needed respectful, professional tribute.",
      solution: "TypeScript + React with photo galleries, biography sections, service timeline, memorial book for messages. Responsive design, accessibility features, print-friendly layouts.",
      decisions: "TypeScript for maintainability (family may update). Static site for reliability and low cost. Cloudinary for image hosting and optimization. Accessibility priority (screen readers, keyboard navigation).",
      challenges: "Photo galleries with 200+ images—lazy loading with intersection observer. Timeline visualization responsive across devices—used CSS Grid with fallback. Memorial messages required moderation—added admin approval system. Print layouts needed special CSS—used print media queries.",
      tech: ["TypeScript", "React", "Cloudinary", "Accessibility", "Responsive Design"],
      github: "https://github.com/Umairism/Veterans_Talha",
      live: null,
      image: imagePlaceholder,
      category: "Web Development"
    },
    {
      id: 32,
      title: "Visual Programming Tasks (C# Collection)",
      problem: "Learning C# GUI development with Windows Forms. Need practice projects.",
      solution: "Collection of C# Windows Forms applications. Calculator, to-do list, file manager, image viewer, text editor, database CRUD app. Each demonstrates different WinForms concepts.",
      decisions: "Windows Forms over WPF for simpler learning curve. ADO.NET for database access (understand SQL before ORMs). Event-driven programming patterns. Single responsibility per form.",
      challenges: "Thread-safe UI updates from background tasks—used Invoke pattern. Database connections not disposed—added using statements. Large file operations froze UI—moved to BackgroundWorker. Memory leaks from event handlers—proper unsubscribe on form close.",
      tech: ["C#", ".NET Framework", "Windows Forms", "ADO.NET", "SQL Server"],
      github: "https://github.com/Umairism/Visual_Programing_Tasks",
      live: null,
      image: imagePlaceholder,
      category: "Desktop Applications"
    },
    {
      id: 33,
      title: "React Native Mobile App Demo",
      problem: "Learning cross-platform mobile development. Need comprehensive demo.",
      solution: "React Native app with navigation, forms, API integration, local storage, camera access, push notifications. Demonstrates core mobile patterns.",
      decisions: "React Native over Flutter for React knowledge transfer. Expo for faster development (no native build setup). AsyncStorage for simple persistence. React Navigation for routing.",
      challenges: "iOS and Android platform differences required conditional rendering. Keyboard management on forms—used KeyboardAvoidingView. Image picker permissions across platforms. App size large with Expo—ejected for production optimization. Performance on older devices—optimized list rendering with FlatList.",
      tech: ["React Native", "TypeScript", "Expo", "React Navigation", "AsyncStorage"],
      github: "https://github.com/Umairism/Mobile_App_Demo",
      live: null,
      image: imagePlaceholder,
      category: "Mobile & Cross-Platform"
    },
    {
      id: 34,
      title: "Offline Card Wallet Demo",
      problem: "Learning mobile payment UI patterns. Simulate card management without backend.",
      solution: "React Native app simulating digital wallet. Add cards, secure display, transaction history, NFC payment mockup, QR code generation. All data local (demo only).",
      decisions: "React Native for cross-platform. Card number masking for security UI. No real payment integration (educational). AsyncStorage encrypted for card data. Biometric auth simulation.",
      challenges: "Card number validation (Luhn algorithm). CVV masking while typing. NFC API simulation since real NFC requires native code. QR code generation for payments—used qrcode library. Card animations smooth on low-end devices—optimized with React.memo.",
      tech: ["React Native", "TypeScript", "Biometric Auth", "QR Codes", "Animations"],
      github: "https://github.com/Umairism/Offline_Card_Wallet",
      live: null,
      image: imagePlaceholder,
      category: "Mobile & Cross-Platform"
    },
    {
      id: 35,
      title: "HealSense - AI Health Monitoring (FYP)",
      problem: "Final year project: Real-time health monitoring with predictive analytics for early disease detection.",
      solution: "Full-stack IoT system. Arduino + Raspberry Pi for sensors (heart rate, temperature, SpO2), Flask backend with TensorFlow models, React dashboard, Flutter mobile app. Kubernetes deployment, Prometheus monitoring.",
      decisions: "TensorFlow over PyTorch for mobile deployment (TFLite). Raspberry Pi for edge computing (reduce cloud costs). MQTT protocol for IoT communication (lightweight). Kubernetes for scalability. Time-series database (InfluxDB) for health metrics.",
      challenges: "Real-time sensor data streaming—MQTT with QoS 1 for reliability. ML model accuracy on limited medical data—used data augmentation and transfer learning. Battery life on mobile sensors—optimized sampling rate. False positive alerts—implemented ensemble models. HIPAA-like privacy—encrypted data at rest and in transit.",
      tech: ["Python", "TensorFlow", "React", "Flutter", "Arduino", "Raspberry Pi", "Kubernetes", "MQTT", "InfluxDB"],
      github: "https://github.com/Umairism/FYP-Project",
      live: null,
      image: imagePlaceholder,
      featured: true,
      category: "Healthcare & IoT"
    },
    {
      id: 36,
      title: "AI-Powered Blockchain Certificate System",
      problem: "Enhanced certificate verification with AI fraud detection. Previous blockchain system needed automation.",
      solution: "React + Flask with Ethereum smart contracts. OCR for certificate extraction, NLP validation, AI fraud detection using FAISS knowledge base, IPFS storage, MetaMask integration. Multi-role dashboards.",
      decisions: "Ethereum over custom blockchain for decentralization. Solidity smart contracts for immutability. IPFS for distributed storage. FAISS vector DB for fast fraud pattern matching. Offline AI processing for privacy.",
      challenges: "Gas fees on Ethereum mainnet—deployed to Polygon for cheaper transactions. OCR accuracy on various certificate formats—trained custom model. IPFS pinning reliability—used Pinata service. MetaMask integration browser compatibility. Smart contract upgradeability—used proxy pattern.",
      tech: ["React", "TypeScript", "Flask", "Ethereum", "Solidity", "IPFS", "FAISS", "OCR", "NLP", "Web3"],
      github: "https://github.com/Umairism/blockchain-cert-system",
      live: null,
      image: imagePlaceholder,
      featured: true,
      category: "Blockchain"
    },
    {
      id: 37,
      title: "Advanced Task Manager",
      problem: "Basic task managers lack advanced features. Need priority management, dependencies, collaboration.",
      solution: "React + Node.js with advanced features. Task dependencies (Gantt-style), priority matrix, recurring tasks, subtasks, time tracking, team collaboration, calendar integration.",
      decisions: "React + Redux for complex state management. Node.js + Socket.io for real-time collaboration. PostgreSQL for relational task data. Cron jobs for recurring tasks. Canvas for Gantt chart rendering.",
      challenges: "Task dependency cycles—implemented cycle detection algorithm. Drag-and-drop for priority matrix—used react-beautiful-dnd. Real-time sync with multiple users—conflict resolution via last-write-wins. Gantt chart performance with 1000+ tasks—canvas virtualization. Recurring task logic complex—used node-cron library.",
      tech: ["React", "Redux", "Node.js", "Socket.io", "PostgreSQL", "Canvas", "Cron"],
      github: "https://github.com/Umairism/TaskManager",
      live: null,
      image: imagePlaceholder,
      category: "Business & Productivity"
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="page-container">
      <section className="projects-section">
        <div className="projects-container-wrapper">
          <div className="projects-content">
            <h1 className="page-title">Projects</h1>
            <p className="page-description">
              Full-stack applications, automation tools, and security utilities. Each project includes
              architectural decisions, tradeoffs, and technical challenges solved.
            </p>
            
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
            
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-card"
                  onClick={() => openProject(project.id)}
                  onKeyDown={(event) => handleCardKeyDown(event, project.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open project details for ${project.title}`}
                >
                  <div className="project-card-inner">
                    <div className={`project-card-image bg-gradient-to-br ${project.color}`}>
                      {project.image && (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="project-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      )}
                      <div className="project-card-overlay">
                        <span className="project-number">#{project.id}</span>
                      </div>
                    </div>
                    
                    <div className="project-card-content">
                      <h3 className="project-card-title">{project.title}</h3>
                      
                      <div className="project-card-preview">
                        <p className="preview-text">{project.problem}</p>
                      </div>
                      
                      <div className="project-card-tech">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="tech-badge">{tech}</span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="tech-badge more">+{project.tech.length - 3}</span>
                        )}
                      </div>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Detail Modal */}
            {selectedProject && (
              <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
                <div
                  className="project-modal"
                  onClick={(e) => e.stopPropagation()}
                  role="dialog"
                  aria-modal="true"
                  aria-label="Project details"
                  tabIndex={-1}
                  ref={modalRef}
                >
                  <button
                    className="modal-close"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close project details"
                    ref={closeButtonRef}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                  
                  {(() => {
                    const project = projects.find(p => p.id === selectedProject);
                    if (!project) return null;
                    
                    return (
                      <>
                        <div className={`modal-header bg-gradient-to-br ${project.color}`}>
                          {project.image && (
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="modal-header-image"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          )}
                          <div className="modal-header-content">
                            <h2 className="modal-title">{project.title}</h2>
                            <div className="modal-category">{project.category}</div>
                          </div>
                        </div>
                        
                        <div className="modal-body">
                          <div className="modal-section">
                            <h3 className="modal-section-title">Problem</h3>
                            <p className="modal-section-text">{project.problem}</p>
                          </div>
                          
                          <div className="modal-section">
                            <h3 className="modal-section-title">Solution</h3>
                            <p className="modal-section-text">{project.solution}</p>
                          </div>
                          
                          <div className="modal-section">
                            <h3 className="modal-section-title">Key Technical Decisions</h3>
                            <p className="modal-section-text">{project.decisions}</p>
                          </div>
                          
                          <div className="modal-section">
                            <h3 className="modal-section-title">Challenges</h3>
                            <p className="modal-section-text">{project.challenges}</p>
                          </div>
                          
                          <div className="modal-section">
                            <h3 className="modal-section-title">Tech Stack</h3>
                            <div className="modal-tech-tags">
                              {project.tech.map((tech, techIndex) => (
                                <span key={techIndex} className="modal-tech-tag">{tech}</span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="modal-actions">
                            <button
                              className="modal-action-btn like-btn"
                              onClick={() => handleLike(project.id)}
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                              </svg>
                              <span>{projectLikes[project.id] || 0} Likes</span>
                            </button>
                            
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-action-btn github-btn"
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                </svg>
                                GitHub
                              </a>
                            )}
                            
                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-action-btn live-btn"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                </svg>
                                Live Demo
                              </a>
                            )}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
