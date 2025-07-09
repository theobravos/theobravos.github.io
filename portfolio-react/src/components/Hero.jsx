// Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';
import BlurText from './BlurText';
import { LinkedinIcon, GithubIcon, Mail } from 'lucide-react';

export default function Hero() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowFooter(true), 500);
    return () => clearTimeout(t);
  }, []);

  const scrollToProjects = () => {
    document
      .getElementById('projects')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-section">
      <BlurText
        text="Hi, I'm Theo Bravos"
        delay={140}
        animateBy="words"
        direction="top"
        className="hero-heading"
      />

      <div className="hero-footer">
        {showFooter && (
          <BlurText
            text="Data Scientist"
            delay={150}
            animateBy="words"
            direction="top"
            className="hero-subheading"
          />
        )}

        {showFooter && (
          <motion.div
            className="social-links"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            initial="hidden"
            animate="visible"
          >
            {/* your icons */}
          </motion.div>
        )}
      </div>

      {/* ←— add this */}
      <motion.div
        className="scroll-hint"
        onClick={scrollToProjects}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={60} />
      </motion.div>
    </div>
  );
}