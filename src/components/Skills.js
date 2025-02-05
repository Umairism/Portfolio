import React, { useState } from "react";
import "./Skills.css"; // Import the CSS file for transitions and effects

const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const handleCardClick = (skill) => {
    setExpandedSkill(expandedSkill === skill ? null : skill);
  };

  return (
    <section id="skills" style={{ zIndex: 0 }}>
      <h2>Skills</h2>
      <div className="skills-container">
        <div className={`skill-card ${expandedSkill === 'JavaScript' ? 'expanded' : ''}`} onClick={() => handleCardClick('JavaScript')}>
          <h3>JavaScript</h3>
          {expandedSkill === 'JavaScript' && (
            <p>I am proficient in JavaScript, a versatile language for web development. I have experience with ES6+, React, and Node.js.</p>
          )}
        </div>
        <div className={`skill-card ${expandedSkill === 'CSS' ? 'expanded' : ''}`} onClick={() => handleCardClick('CSS')}>
          <h3>CSS</h3>
          {expandedSkill === 'CSS' && (
            <p>I excel in CSS, using it to style and layout web pages. I am skilled in CSS3, SASS, Flexbox, and Grid.</p>
          )}
        </div>
        <div className={`skill-card ${expandedSkill === 'HTML' ? 'expanded' : ''}`} onClick={() => handleCardClick('HTML')}>
          <h3>HTML</h3>
          {expandedSkill === 'HTML' && (
            <p>I have a strong understanding of HTML5 semantics, which I use to structure web content effectively.</p>
          )}
        </div>
        <div className={`skill-card ${expandedSkill === 'Python' ? 'expanded' : ''}`} onClick={() => handleCardClick('Python')}>
          <h3>Python</h3>
          {expandedSkill === 'Python' && (
            <p>Python is my go-to language for its readability and versatility. I have experience with Python 3, Django, and Flask.</p>
          )}
        </div>
        <div className={`skill-card ${expandedSkill === 'Java' ? 'expanded' : ''}`} onClick={() => handleCardClick('Java')}>
          <h3>Java</h3>
          {expandedSkill === 'Java' && (
            <p>I am proficient in Java, using it to build enterprise-level applications. I have experience with Java SE, Spring, and Hibernate.</p>
          )}
        </div>
        <div className={`skill-card ${expandedSkill === 'SQL' ? 'expanded' : ''}`} onClick={() => handleCardClick('SQL')}>
          <h3>SQL</h3>
          {expandedSkill === 'SQL' && (
            <p>I have a strong understanding of SQL, MySQL, and PostgreSQL, which I use to manage and manipulate relational databases.</p>
          )}
        </div>
        <div className={`skill-card ${expandedSkill === 'Graphic Designing' ? 'expanded' : ''}`} onClick={() => handleCardClick('Graphic Designing')}>
          <h3>Graphic Designing</h3>
          {expandedSkill === 'Graphic Designing' && (
            <p>I create visual content using Unreal Engine, Blender, and Unity. My work includes designing graphics, animations, and visual effects.</p>
          )}
        </div>
        <div className={`skill-card ${expandedSkill === 'WordPress' ? 'expanded' : ''}`} onClick={() => handleCardClick('WordPress')}>
          <h3>WordPress</h3>
          {expandedSkill === 'WordPress' && (
            <p>I am proficient in WordPress development and customization, using it to create and manage websites with ease.</p>
          )}
        </div>
        <div className={`skill-card ${expandedSkill === 'React' ? 'expanded' : ''}`} onClick={() => handleCardClick('React')}>
          <h3>React</h3>
          {expandedSkill === 'React' && (
            <p>I have extensive experience with React, building dynamic and responsive web applications.</p>
          )}
        </div>
        <div className={`skill-card ${expandedSkill === 'Node.js' ? 'expanded' : ''}`} onClick={() => handleCardClick('Node.js')}>
          <h3>Node.js</h3>
          {expandedSkill === 'Node.js' && (
            <p>I use Node.js for server-side development, creating scalable and efficient applications.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
