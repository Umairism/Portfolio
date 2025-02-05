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
    <section id="contact" style={{ height: '100vh', overflowY: 'auto', position: 'relative', color: '#ffffff', zIndex: 0 }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
        <h2 style={{ color: '#ffffff' }}>Contact Me</h2>
        <p style={{ color: '#ffffff' }}>
          I'd love to hear from you! Whether you have a question, want to discuss a
          potential project, or just want to connect, feel free to reach out to me via
          email or through my social profiles below.
        </p>
        
        <ul className="contact-list" style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <li>
            <a href="mailto:m.umiarhakim@outlook.com" style={{ color: '#ff6b6b' }}>
              <FaEnvelope size={30} />
            </a>
          </li>
          <li>
            <a href="https://github.com/umairism" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b6b' }}>
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/umairsim/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b6b' }}>
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/umairism" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b6b' }}>
              <FaTwitter size={30} />
            </a>
          </li>
        </ul>
        
        <p style={{ color: '#ffffff' }}>If you prefer, you can also fill out the contact form below, and I will get back to you as soon as possible!</p>
        
        <form className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name" style={{ color: '#555' }}>Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
          
          <label htmlFor="email" style={{ color: '#555' }}>Your Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
          
          <label htmlFor="message" style={{ color: '#555' }}>Your Message:</label>
          <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
          
          <button type="submit" className="btn-main" style={{ backgroundColor: '#ff6b6b', color: '#ffffff' }}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
