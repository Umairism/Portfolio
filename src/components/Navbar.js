import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const resumePath = `${process.env.PUBLIC_URL || ''}/resume.html`;
  const resumeHref = `${window.location.origin}${resumePath}`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-text">Portfolio</span>
        </div>
        <ul className="navbar-list">
          <li>
            <Link 
              to="/" 
              className={`navbar-link ${getActiveClass('/')}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={`navbar-link ${getActiveClass('/projects')}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/skills" 
              className={`navbar-link ${getActiveClass('/skills')}`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`navbar-link ${getActiveClass('/about')}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`navbar-link ${getActiveClass('/contact')}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <a 
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-link resume-link"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;