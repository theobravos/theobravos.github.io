import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, LinkedinIcon, GithubIcon, Mail } from 'lucide-react';
import './Hero.css';
import BlurText from './BlurText';

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

  // re-add your icon framer-motion variants
  const iconsContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };
  const iconItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 14 }
    }
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
            variants={iconsContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              variants={iconItem}
              href="https://linkedin.com/in/theobravos"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon size={32} />
            </motion.a>
            <motion.a
              variants={iconItem}
              href="https://github.com/theobravos"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon size={32} />
            </motion.a>
            <motion.a variants={iconItem} href="mailto:tbravos@usc.edu">
              <Mail size={32} />
            </motion.a>
          </motion.div>
        )}
      </div>

      {/* your scroll‐hint */}
      <motion.div
        className="scroll-hint"
        onClick={scrollToProjects}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={40} />
      </motion.div>
    </div>
  );
}