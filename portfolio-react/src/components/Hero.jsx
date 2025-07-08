import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import BlurText from './BlurText';
import { LinkedinIcon, GithubIcon, Mail } from 'lucide-react';

export default function Hero() {
  const [showFooter, setShowFooter] = useState(false);

  // → fire the footer in the middle of the header’s animation
  useEffect(() => {
    const t = setTimeout(() => setShowFooter(true), 400); 
    return () => clearTimeout(t);
  }, []);

  // icon fade-up variants
  const iconsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        // no delayChildren here, since the entire footer is gated by showFooter
      }
    }
  };
  const iconItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } }
  };

  return (
    <div className="hero-section">
      {/* Header always animates on mount */}
      <BlurText
        text="Theo Bravos"
        delay={150}
        animateBy="words"
        direction="top"
        className="hero-heading"
      />

      {/* Footer container is always present, so no layout jump */}
      <div className="hero-footer">
        {/* subtitle only mounts after 400ms */}
        {showFooter && (
          <BlurText
            text="Data Scientist"
            delay={150}
            animateBy="words"
            direction="top"
            className="hero-subheading"
          />
        )}

        {/* icons also gated by showFooter */}
        {showFooter && (
          <motion.div
            className="social-links"
            variants={iconsContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.a variants={iconItem} href="https://linkedin.com/in/theobravos" target="_blank" rel="noreferrer">
              <LinkedinIcon size={32} />
            </motion.a>
            <motion.a variants={iconItem} href="https://github.com/theobravos" target="_blank" rel="noreferrer">
              <GithubIcon size={32} />
            </motion.a>
            <motion.a variants={iconItem} href="mailto:tbravos@usc.edu">
              <Mail size={32} />
            </motion.a>
          </motion.div>
        )}
      </div>
    </div>
  );
}