import React from "react";

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#1b263b', color: '#ffffff' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Skills</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ margin: '10px', padding: '20px', border: '1px solid #ffffff', borderRadius: '5px', width: '200px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>JavaScript</h3>
          <p>Experienced in ES6+, React, Node.js</p>
        </div>
        <div style={{ margin: '10px', padding: '20px', border: '1px solid #ffffff', borderRadius: '5px', width: '200px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>CSS</h3>
          <p>Proficient in CSS3, SASS, Flexbox, Grid</p>
        </div>
        <div style={{ margin: '10px', padding: '20px', border: '1px solid #ffffff', borderRadius: '5px', width: '200px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>HTML</h3>
          <p>Strong understanding of HTML5 semantics</p>
        </div>
        <div style={{ margin: '10px', padding: '20px', border: '1px solid #ffffff', borderRadius: '5px', width: '200px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Python</h3>
          <p>Experienced in Python 3, Django, Flask</p>
        </div>
        <div style={{ margin: '10px', padding: '20px', border: '1px solid #ffffff', borderRadius: '5px', width: '200px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Java</h3>
          <p>Proficient in Java SE, Spring, Hibernate</p>
        </div>
        <div style={{ margin: '10px', padding: '20px', border: '1px solid #ffffff', borderRadius: '5px', width: '200px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>SQL</h3>
          <p>Strong understanding of SQL, MySQL, PostgreSQL</p>
        </div>
        <div style={{ margin: '10px', padding: '20px', border: '1px solid #ffffff', borderRadius: '5px', width: '200px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>C++</h3>
          <p>Experienced in C++, STL, Boost</p>
        </div>
        <div style={{ margin: '10px', padding: '20px', border: '1px solid #ffffff', borderRadius: '5px', width: '200px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Ruby</h3>
          <p>Proficient in Ruby, Rails</p>
        </div>
        <div style={{ margin: '10px', padding: '20px', border: '1px solid #ffffff', borderRadius: '5px', width: '200px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>PHP</h3>
          <p>Experienced in PHP, Laravel</p>
        </div>
        {/* Add more skills as needed */}
      </div>
    </section>
  );
};

export default Skills;
