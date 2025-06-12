import React, { useRef, useEffect } from 'react';
import {
  LinkedinIcon,
  GithubIcon,
  Mail,
  ChevronsDown,
} from 'lucide-react';
import SplitText from './SplitText';
import VariableProximity from './VariableProximity';

export default function Hero() {
  // ref for the proximity container
  const containerRef = useRef(null);

  // Re-init AOS if you’re still using it
  useEffect(() => {
    // AOS.init(...) if needed
  }, []);

  return (
    // Wrap everything in a relative container
    <section
      id="hero"
      ref={containerRef}
      className="hero-header"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-offset="0"
      data-aos-mirror="true"
      data-aos-easing="ease-in-out"
      data-aos-delay="100"
      data-aos-once="false"
      style={{ position: 'relative', overflow: 'hidden' }}
    >

      {/* Your SplitText Titles */}
      <SplitText
        text="Theo Bravos"
        className="hero-title text-5xl font-bold"
        splitType="chars"
        delay={190}
        duration={2}
        ease="elastic.out(1, 0.3)"
        threshold={0.1}
        rootMargin="-50px"
      />
      <SplitText
        text="Data Analyst"
        className="hero-subtitle text-2xl font-medium"
        splitType="chars"
        delay={300}
        duration={1}
        ease="elastic.out(1, 0.3)"
        threshold={0.1}
        rootMargin="-50px"
        textAlign="center"
      />
      <SplitText
        text="Optimizing performance through data-driven insights"
        className="hero-tagline text-lg text-gray-600"
        splitType="words"
        delay={400}
        duration={1.5}
        ease="elastic.out(1, 0.3)"
        threshold={0.5}
        rootMargin="-50px"
        textAlign="center"
      />

      {/* Social Links */}
      <div className="social-links">
        <a
          href="https://linkedin.com/in/theobravos"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="500"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://github.com/theobravos"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="600"
        >
          <GithubIcon />
        </a>
        <a
          href="mailto:tbravos@usc.edu"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="700"
        >
          <Mail />
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#projects"
        className="scroll-indicator"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="800"
      >
        <ChevronsDown size={32} />
      </a>
    </section>
  );
}