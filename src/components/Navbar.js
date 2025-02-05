import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar" 
    style={{backgroundColor: 'rgba(66, 40, 40, 0.5)',color: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <ul className="navbar-list" 
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 }}
      >
        <li style={{ margin: '40 40px' }}>
          <a href="#home" className="navbar-link" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '1px', position: 'relative', padding: '12px 20px', borderRadius: '5px', transition: 'all 0.4s ease-in-out', textTransform: 'uppercase', cursor: 'pointer', boxShadow: '0 0 5px rgba(255, 107, 107, 0.6)', overflow: 'hidden' }}>Home</a>
        </li>
        <li style={{ margin: '40 40px' }}>
          <a href="#projects" className="navbar-link" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '1px', position: 'relative', padding: '12px 20px', borderRadius: '5px', transition: 'all 0.4s ease-in-out', textTransform: 'uppercase', cursor: 'pointer', boxShadow: '0 0 5px rgba(255, 107, 107, 0.6)', overflow: 'hidden' }}>Projects</a>
        </li>
        <li style={{ margin: '40 40px' }}>
          <a href="#skills" className="navbar-link" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '1px', position: 'relative', padding: '12px 20px', borderRadius: '5px', transition: 'all 0.4s ease-in-out', textTransform: 'uppercase', cursor: 'pointer', boxShadow: '0 0 5px rgba(255, 107, 107, 0.6)', overflow: 'hidden' }}>Skills</a>
        </li>
        <li style={{ margin: '40 40px' }}>
          <a href="#about" className="navbar-link" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '1px', position: 'relative', padding: '12px 20px', borderRadius: '5px', transition: 'all 0.4s ease-in-out', textTransform: 'uppercase', cursor: 'pointer', boxShadow: '0 0 5px rgba(255, 107, 107, 0.6)', overflow: 'hidden' }}>About</a>
        </li>
        <li style={{ margin: '40 40px' }}>
          <a href="#contact" className="navbar-link" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '1px', position: 'relative', padding: '12px 20px', borderRadius: '5px', transition: 'all 0.4s ease-in-out', textTransform: 'uppercase', cursor: 'pointer', boxShadow: '0 0 5px rgba(255, 107, 107, 0.6)', overflow: 'hidden' }}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;