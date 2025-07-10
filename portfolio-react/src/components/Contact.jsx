// src/components/Contact.jsx

import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import { Linkedin, Mail } from 'lucide-react'; // Using lucide-react icons

const AnimatedTitle = ({ children }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  return (
    <div ref={ref} className={`title-container ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default function Contact() {
  // Re-purposed the observer for the new links container
  const [linksRef, areLinksVisible] = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section id="contact" className="contact-section">
      <AnimatedTitle>
        <h2 className="section-title">Let’s Connect!</h2>
      </AnimatedTitle>

      {/* Replaced the form with a simple icon link container */}
      <div
        ref={linksRef}
        className={`contact-links-container ${areLinksVisible ? 'is-visible' : ''}`}
      >
        <a 
          href="https://linkedin.com/in/theobravos" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={48} />
        </a>
        <a 
          href="mailto:tbravos@usc.edu"
          aria-label="Email"
        >
          <Mail size={48} />
        </a>
      </div>
    </section>
  );
}