import React, { useState, useEffect } from "react";
import "../components/Skills.css";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const skillCards = document.querySelectorAll('.skill-tile');
      skillCards.forEach((card, index) => {
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

  const skills = [
    {
      id: 1,
      name: "JavaScript",
      category: "Frontend Development",
      description: "I am proficient in JavaScript, a versatile language for web development. I have experience with ES6+, React, and Node.js, building dynamic and interactive web applications.",
      proficiency: 90,
      tools: ["ES6+", "React", "Node.js", "DOM Manipulation", "Async/Await"],
      icon: "🚀",
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: 2,
      name: "React",
      category: "Frontend Framework",
      description: "I have extensive experience with React, building dynamic and responsive web applications with modern hooks, state management, and component architecture.",
      proficiency: 95,
      tools: ["Hooks", "Context API", "Redux", "JSX", "Component Design"],
      icon: "⚛️",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      name: "CSS",
      category: "Styling & Design",
      description: "I excel in CSS, using it to style and layout web pages. I am skilled in CSS3, SASS, Flexbox, Grid, and modern responsive design principles.",
      proficiency: 88,
      tools: ["CSS3", "SASS", "Flexbox", "Grid", "Animations", "Responsive Design"],
      icon: "🎨",
      color: "from-pink-500 to-purple-600"
    },
    {
      id: 4,
      name: "Node.js",
      category: "Backend Development",
      description: "I use Node.js for server-side development, creating scalable and efficient applications with Express, MongoDB integration, and API development.",
      proficiency: 85,
      tools: ["Express.js", "MongoDB", "REST APIs", "Authentication", "Middleware"],
      icon: "🟢",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 5,
      name: "Python",
      category: "Programming Language",
      description: "Python is my go-to language for its readability and versatility. I have experience with Python 3, Django, Flask, and automation scripting.",
      proficiency: 82,
      tools: ["Django", "Flask", "Automation", "Data Analysis", "Scripting"],
      icon: "🐍",
      color: "from-indigo-500 to-blue-600"
    },
    {
      id: 6,
      name: "Java",
      category: "Enterprise Development",
      description: "I am proficient in Java, using it to build enterprise-level applications. I have experience with Java SE, Spring framework, and Hibernate ORM.",
      proficiency: 78,
      tools: ["Spring", "Hibernate", "Maven", "JUnit", "Enterprise Apps"],
      icon: "☕",
      color: "from-red-500 to-orange-600"
    },
    {
      id: 7,
      name: "SQL & Databases",
      category: "Data Management",
      description: "I have a strong understanding of SQL, MySQL, and PostgreSQL, which I use to manage and manipulate relational databases efficiently.",
      proficiency: 80,
      tools: ["MySQL", "PostgreSQL", "MongoDB", "Database Design", "Optimization"],
      icon: "🗃️",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 8,
      name: "WordPress",
      category: "CMS Development",
      description: "I am proficient in WordPress development and customization, creating custom themes, plugins, and managing content management systems.",
      proficiency: 75,
      tools: ["Custom Themes", "Plugins", "PHP", "ACF", "WooCommerce"],
      icon: "📝",
      color: "from-teal-500 to-green-600"
    },
    {
      id: 9,
      name: "Graphic Design",
      category: "Visual Design",
      description: "I create visual content using industry-standard tools. My work includes designing graphics, animations, and visual effects for web and digital media.",
      proficiency: 70,
      tools: ["Blender", "Unity", "Unreal Engine", "Adobe Suite", "3D Modeling"],
      icon: "🎭",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const handleSkillClick = (skillId) => {
    setSelectedSkill(selectedSkill === skillId ? null : skillId);
  };

  return (
    <div className="page-container">
      <section className="skills-section">
        <div className="skills-container-wrapper">
          <div className="skills-content">
            <h1 className="page-title">My Skills</h1>
            <p className="page-description">
              A comprehensive overview of my technical expertise and proficiency levels. 
              Click on any skill to learn more about my experience and the tools I use.
            </p>
            
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
                          <div className="skill-proficiency">
                            <span className="proficiency-text">{skill.proficiency}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="skill-content">
                      <div className="skill-header">
                        <h3 className="skill-title">{skill.name}</h3>
                        <span className="skill-category">{skill.category}</span>
                        <div className="skill-progress-bar">
                          <div 
                            className="skill-progress-fill"
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="skill-description">
                        <p>{skill.description}</p>
                      </div>
                      
                      <div className="skill-tools">
                        <h4>Tools & Technologies:</h4>
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
        </div>
      </section>
    </div>
  );
};

export default Skills;