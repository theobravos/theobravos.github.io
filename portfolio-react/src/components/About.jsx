import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="about-content">
        <img
          src="/assets/img/headshot.jpg"
          alt="Theo Bravos"
          className="headshot"
        />
        <div className="about-text">
          <h1>Hi, I’m Theo Bravos</h1>
          <p>
            As a Master of Science in Business Analytics candidate at
            the University of Southern California, I specialize in
            financial data science, predictive modeling, and business
            intelligence. My experience includes an internship in sports
            analytics where I built models to improve forecasting accuracy
            and automated reporting for key decision-makers. A former NCAA D1
            football player, I bring a strong sense of teamwork and discipline to
            my goal of pursuing a full-time role in data analytics or financial analysis.
          </p>
          <a href="/assets/resume.pdf" className="btn">
            Download Resume
            </a>
          <a
            href="https://linkedin.com/in/theobravos"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="social-btn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/theobravos"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="social-btn"
          >
            <Github size={24} />
          </a>
        </div>

        <a href="#projects" className="scroll-indicator">
          <ChevronDown size={36} />
        </a>
      </div>
    </section>
  );
}