import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, LinkedinIcon, GithubIcon, Mail } from 'lucide-react';
import './Hero.css';
import BlurText from './BlurText';

// 1. Define the array of rotating subheadings
const SUBHEADINGS = [
  "Data Scientist",
  "D1 Athlete",
  "Data Engineer",
  "Business Analyst"
];

export default function Hero() {
  const [showFooter, setShowFooter] = useState(false);
  // 2. Add state to track the current subheading index
  const [subheadingIndex, setSubheadingIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setShowFooter(true), 500);
    return () => clearTimeout(t);
  }, []);

  // 3. Add an effect to cycle through the subheadings
  useEffect(() => {
    // Only start the loop after the initial footer animation
    if (!showFooter) return;

    const intervalId = setInterval(() => {
      setSubheadingIndex(prevIndex => (prevIndex + 1) % SUBHEADINGS.length);
    }, 4000); // Rotate every 4 seconds (4000ms)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [showFooter]);


  const scrollToAbout = () => {
    document
      .getElementById('about')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

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
          // 4. Update the BlurText component to be dynamic
          <BlurText
            key={subheadingIndex} // This key is crucial to re-trigger the animation
            text={SUBHEADINGS[subheadingIndex]}
            delay={170}
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

      <motion.div
        className="scroll-hint"
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={40} />
      </motion.div>
    </div>
  );
}