import React from 'react';
import logo from './logo.webp';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>DesignAI Innovations</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section id="about" className="section">
          <h2>About Us</h2>
          <p>We combine the power of artificial intelligence with innovative design solutions to create cutting-edge products and services.</p>
        </section>
        <section id="services" className="section">
          <h2>Our Services</h2>
          <ul>
            <li>AI-Driven Design Solutions</li>
            <li>Interactive User Experience Design</li>
            <li>Data Visualization Services</li>
            <li>Custom Design Automation</li>
          </ul>
        </section>
        <section id="portfolio" className="section">
          <h2>Portfolio</h2>
          <div className="portfolio-gallery">
            {/* Insert portfolio items here */}
          </div>
        </section>
        <section id="contact" className="section">
          <h2>Contact Us</h2>
          <p>Reach out to us for inquiries and collaborations.</p>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={4}></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 DesignAI Innovations. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;