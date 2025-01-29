import React from 'react';
import Particles from 'react-tsparticles';

const particlesInit = (main) => {};

const particlesLoaded = (container) => {};

const Home = () => {
  return (
    <section id="home" style={{ height: '100vh', overflowY: 'auto', position: 'relative' }}>
      <Particles
        id="tsp"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        options={{
          background: {
            color: {
              value: "#0d1b2a",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: '100%',
        }}
        >
        <img
          src={require('../Images/me3.jpg')}
          alt="Profile"
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '1rem',
          }}
        />
        <h1 style={{ color: '#ffffff' }}>Muhammad Umair Hakeem</h1>
        <p style={{ color: '#ffffff', fontSize: '1.2rem', marginTop: '1rem' }}>
          Passionate and dedicated final-year Computer Science student with a deep love for technology, programming, and problem-solving.
        </p>
        <p style={{ color: '#ffffff', fontSize: '1rem', marginTop: '0.5rem' }}>
          Specializing in full-stack web development with expertise in React.js, MongoDB, and Node.js. Experienced in building scalable, responsive applications.
        </p>
        <p style={{ color: '#ffffff', fontSize: '1rem', marginTop: '0.5rem' }}>
          Strong believer in collaboration and teamwork, always looking for new challenges and opportunities to grow.
        </p>
        </div>
    </section>
  );
};

export default Home;