import React from 'react';

const Home = () => {
  return (
    <section id="home">
      <div className="content">
        <img
          src={require('../Images/me3.jpg')}
          alt="Profile"
        />
        <h1>Muhammad Umair Hakeem</h1>
        <p>
          Passionate and dedicated final-year Computer Science student with a deep love for technology, programming, and problem-solving.
        </p>
        <p>
          Specializing in full-stack web development with expertise in React.js, MongoDB, and Node.js. Experienced in building scalable, responsive applications.
        </p>
        <p>
          Strong believer in collaboration and teamwork, always looking for new challenges and opportunities to grow.
        </p>
      </div>
    </section>
  );
};

export default Home;