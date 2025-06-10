import React, { useRef, useEffect } from 'react';
import { LinkedinIcon, GithubIcon, Mail, ChevronsDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-header"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-offset="0"
      data-aos-mirror="true"
      data-aos-easing="ease-in-out"
      data-aos-delay="100"
      data-aos-once="false"
    >
      <h1>Theo Bravos</h1>
      <h2>Data Analyst</h2>
      <h3>Optimizing performance through data-driven insights</h3>
      <div className="social-links">
        <a href="https://linkedin.com/in/theobravos" target="_blank" rel="noreferrer">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/theobravos" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
        <a href="mailto:tbravos@usc.edu">
          <Mail />
        </a>
      </div>
      {/* Scroll down arrow */}
      <a href="#projects" className="scroll-indicator">
        <ChevronsDown size={32}/>
      </a>
    </section>
    
  );
}