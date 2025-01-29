import React from "react";

const About = () => {
  return (
    <section id="about" style={{ height: '100vh', overflowY: 'auto', position: 'relative', backgroundColor: '#0d1b2a', color: '#ffffff' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
        <h2 style={{ color: '#ffffff' }}>About Me</h2>
        <p style={{ color: '#ffffff' }}>
          Hi! I’m <strong>Muhammad Umair Hakeem</strong>, a passionate and dedicated
          final-year Computer Science student with a deep love for technology,
          programming, and problem-solving. I’ve spent the last few years honing my
          skills in web development, building projects that push the limits of what’s
          possible while maintaining a focus on user experience and clean code.
        </p>

        <p style={{ color: '#ffffff' }}>
          My journey in the tech world began with a fascination for how things work
          behind the scenes. This curiosity led me to pursue a degree in Computer
          Science, where I’ve gained a solid foundation in algorithms, data structures,
          and software engineering principles. Over time, I’ve gravitated towards web
          development, where I’ve found my passion for creating interactive, dynamic,
          and user-friendly applications.
        </p>

        <p style={{ color: '#ffffff' }}>
          I specialize in full-stack web development, with expertise in <strong>React.js</strong>,
          <strong>MongoDB</strong>, and <strong>Node.js</strong>. My experience extends to building
          scalable, responsive applications and working with a variety of technologies and
          frameworks that allow me to create seamless user experiences. Whether it’s
          building an e-commerce platform, a personal portfolio, or a task management app,
          I thrive on the challenge of turning complex requirements into functional and
          intuitive solutions.
        </p>

        <p style={{ color: '#ffffff' }}>
          In addition to my technical skills, I am a strong believer in collaboration and
          the power of teamwork. I enjoy working in agile environments, learning from others,
          and contributing to open-source projects. I’m always looking for new challenges and
          opportunities to grow both as a developer and as a person.
        </p>

        <p style={{ color: '#ffffff' }}>
          When I’m not coding, you can usually find me experimenting with new technologies,
          reading about the latest trends in web development, or diving into problem-solving
          challenges on platforms like <strong>LeetCode</strong> and <strong>HackerRank</strong>.
          I am constantly seeking ways to improve my craft, and I believe that learning is
          a lifelong journey.
        </p>

        <p style={{ color: '#ffffff' }}>
          Feel free to reach out if you'd like to collaborate on a project, need assistance,
          or simply want to chat about tech. Let’s create something amazing together!
        </p>

        <a href="#contact" className="btn-main" style={{ color: 'black' }}>
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default About;
