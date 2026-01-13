import React, { useState, useEffect } from "react";
import "../styles/Skills.css";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const skillCards = document.querySelectorAll('.skill-tile');
      skillCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const offset = windowHeight - rect.top;
        const zIndex = Math.max(1, Math.floor(offset / 40));
        card.style.zIndex = offset > 0 ? zIndex : 1;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillTiers = {
    comfortable: [
      {
        id: 1,
        name: "Python",
        description: "Backend services, automation scripts, Flask/FastAPI APIs, data processing. Built multiple production tools including pentest frameworks, blockchain systems, and ML applications.",
        tools: ["Flask", "FastAPI", "PyTorch", "Pandas", "Scapy"],
        icon: "🐍",
        color: "from-indigo-500 to-blue-600"
      },
      {
        id: 2,
        name: "JavaScript / TypeScript",
        description: "Full-stack development with modern ES6+, async patterns, type safety with TS. Primary language for web applications and tooling.",
        tools: ["ES6+", "TypeScript", "Async/Await", "Promises", "Modules"],
        icon: "🚀",
        color: "from-yellow-500 to-orange-600"
      },
      {
        id: 3,
        name: "React",
        description: "Component architecture, hooks, Context API, performance optimization. Built 20+ production apps including browser IDE, video platforms, and 3D experiences.",
        tools: ["Hooks", "Context API", "React Router", "Performance Optimization"],
        icon: "⚛️",
        color: "from-blue-500 to-cyan-600"
      },
      {
        id: 4,
        name: "Node.js",
        description: "REST APIs, Express servers, serverless functions, authentication systems. Backend for e-commerce, school management, and task management platforms.",
        tools: ["Express.js", "Serverless", "REST APIs", "JWT Auth"],
        icon: "🟢",
        color: "from-green-500 to-teal-600"
      },
      {
        id: 5,
        name: "Git",
        description: "Version control, branching strategies, collaboration workflows. Daily use across all projects with GitHub for CI/CD integration.",
        tools: ["Git", "GitHub", "Branching", "Merge Strategies"],
        icon: "📦",
        color: "from-gray-600 to-gray-800"
      }
    ],
    workedWith: [
      {
        id: 6,
        name: "Flask / FastAPI",
        description: "Python web frameworks for building APIs. Used in blockchain certificate system, Aircrack GUI backend, automata solver. Understand routing, middleware, async endpoints.",
        tools: ["REST APIs", "SQLAlchemy", "JWT", "Async Routes"],
        icon: "⚡",
        color: "from-red-500 to-pink-600"
      },
      {
        id: 7,
        name: "IndexedDB",
        description: "Browser storage for offline-first apps. Implemented in CodeSpace IDE and SlimeTube for 50MB+ file storage, transaction handling, cursor-based queries.",
        tools: ["Transactions", "Cursors", "Indexes", "Offline-First"],
        icon: "🗄️",
        color: "from-purple-500 to-indigo-600"
      },
      {
        id: 8,
        name: "Netlify Functions",
        description: "Serverless backend for ModernShop e-commerce. Understand cold starts, environment variables, deployment strategies. Good for low-traffic apps.",
        tools: ["Serverless", "AWS Lambda", "API Routes"],
        icon: "☁️",
        color: "from-teal-500 to-cyan-600"
      },
      {
        id: 9,
        name: "MongoDB / MySQL / PostgreSQL",
        description: "Database design and queries. MongoDB for task manager (NoSQL flexibility), PostgreSQL via Supabase for school system (relational integrity), MySQL for WordPress sites.",
        tools: ["Schema Design", "Indexing", "Query Optimization", "Migrations"],
        icon: "🗃️",
        color: "from-green-600 to-emerald-700"
      },
      {
        id: 10,
        name: "Three.js",
        description: "WebGL 3D graphics. Built proposal website with 8000-particle system, implemented physics simulations, optimized for 60fps on mobile. Understand scene graphs, geometries, materials.",
        tools: ["WebGL", "Particle Systems", "Physics", "Performance"],
        icon: "🎨",
        color: "from-pink-500 to-purple-600"
      },
      {
        id: 11,
        name: "Tailwind CSS",
        description: "Utility-first CSS framework. Used in 15+ projects for rapid prototyping. Understand responsive design, custom themes, performance implications of utility classes.",
        tools: ["Responsive Design", "Custom Themes", "JIT Compiler"],
        icon: "💅",
        color: "from-cyan-500 to-blue-600"
      },
      {
        id: 12,
        name: "Docker",
        description: "Container orchestration for development environments. Used for blockchain certificate system, FastAPI apps. Understand Dockerfile optimization, multi-stage builds.",
        tools: ["Containerization", "Multi-stage Builds", "Docker Compose"],
        icon: "🐳",
        color: "from-blue-600 to-indigo-700"
      }
    ],
    exploring: [
      {
        id: 13,
        name: "Machine Learning / Computer Vision",
        description: "Experimenting with PyTorch and OpenCV. Built drone surveillance with YOLO object detection, exploring transformers for local AI. Focus on practical applications over theory.",
        tools: ["PyTorch", "OpenCV", "YOLO", "Transformers"],
        icon: "🤖",
        color: "from-orange-500 to-red-600"
      },
      {
        id: 14,
        name: "Blockchain Concepts",
        description: "Learning smart contracts and decentralized systems. Built custom blockchain for certificate verification (SHA-256, proof-of-work). Exploring Ethereum and Solidity.",
        tools: ["Ethereum", "Solidity", "Web3.js", "Smart Contracts"],
        icon: "⛓️",
        color: "from-yellow-600 to-orange-700"
      },
      {
        id: 15,
        name: "Kubernetes",
        description: "Container orchestration at scale. Used in FYP health monitoring system. Understanding pods, services, deployments. Still learning production-grade cluster management.",
        tools: ["K8s", "Pods", "Services", "Deployments"],
        icon: "☸️",
        color: "from-blue-700 to-purple-800"
      },
      {
        id: 16,
        name: "Rust",
        description: "Exploring systems programming for performance-critical tools. Interested in WebAssembly compilation for browser. Still learning ownership model and lifetimes.",
        tools: ["Systems Programming", "WebAssembly", "Cargo"],
        icon: "🦀",
        color: "from-orange-600 to-red-700"
      }
    ]
  };

  const handleSkillClick = (skillId) => {
    setSelectedSkill(selectedSkill === skillId ? null : skillId);
  };

  const renderSkillTier = (title, skills, description) => (
    <div className="skill-tier">
      <div className="tier-header">
        <h2 className="tier-title">{title}</h2>
        <p className="tier-description">{description}</p>
      </div>
      <div className="skills-stack">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className={`skill-tile ${selectedSkill === skill.id ? 'active' : ''}`}
            style={{
              '--index': index,
              zIndex: skills.length - index
            }}
            onClick={() => handleSkillClick(skill.id)}
          >
            <div className="skill-tile-inner">
              <div className="skill-icon-container">
                <div className={`skill-icon-placeholder bg-gradient-to-br ${skill.color}`}>
                  <div className="skill-icon-overlay">
                    <span className="skill-icon">{skill.icon}</span>
                  </div>
                </div>
              </div>
              
              <div className="skill-content">
                <div className="skill-header">
                  <h3 className="skill-title">{skill.name}</h3>
                </div>
                
                <div className="skill-description">
                  <p>{skill.description}</p>
                </div>
                
                <div className="skill-tools">
                  <h4>Experience:</h4>
                  <div className="tools-list">
                    {skill.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="tool-tag">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="page-container">
      <section className="skills-section">
        <div className="skills-container-wrapper">
          <div className="skills-content">
            <h1 className="page-title">Tech Stack</h1>
            <p className="page-description">
              Honest assessment of technical skills organized by proficiency level. 
              Click any skill to see specific experience and tools.
            </p>
            
            {renderSkillTier(
              "Comfortable",
              skillTiers.comfortable,
              "Daily use, confident debugging, understand tradeoffs"
            )}
            
            {renderSkillTier(
              "Worked With",
              skillTiers.workedWith,
              "Shipped projects using these, understand core concepts, may need documentation"
            )}
            
            {renderSkillTier(
              "Exploring",
              skillTiers.exploring,
              "Learning actively, built demos, not production-ready yet"
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
