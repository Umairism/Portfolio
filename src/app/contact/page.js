"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l1nri2p', 'template_o8su2rj', e.target, 'Outlook')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });

    e.target.reset();
  };

  return (
    <div className="page-container">
      <section className="contact-section">
        <div className="contact-container-wrapper">
          <div className="contact-container">
            <div className="contact-content">
              <h1 className="page-title">Contact Me</h1>
              <p className="page-description">
                Let's connect and discuss potential collaborations or opportunities
              </p>
            
              <div className="contact-intro">
                <p>
                  I'd love to hear from you! Whether you have a question, want to discuss a
                  potential project, or just want to connect, feel free to reach out to me via
                  email or through my social profiles below.
                </p>
              </div>
              
              <div className="social-links">
                <ul className="contact-list">
                  <li className="social-item">
                    <a href="mailto:malikumairhakim@outlook.com" className="social-link email">
                      <FaEnvelope size={30} />
                      <span>Email</span>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="https://github.com/umairism" target="_blank" rel="noopener noreferrer" className="social-link github">
                      <FaGithub size={30} />
                      <span>GitHub</span>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="https://www.linkedin.com/in/umairsim/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                      <FaLinkedin size={30} />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="https://twitter.com/umairism" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                      <FaTwitter size={30} />
                      <span>Twitter</span>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="contact-form-section">
                <p className="form-intro">If you prefer, you can also fill out the contact form below, and I will get back to you as soon as possible!</p>
                
                <form className="contact-form" onSubmit={sendEmail}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
                  </div>
                  
                  <div className="form-submit">
                    <button type="submit" className="btn-main submit-btn">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;