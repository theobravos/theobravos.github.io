import React, { useState } from 'react';
import { motion } from 'framer-motion';     // ← import motion
import './Hero.css';
import BlurText from './BlurText';
import { LinkedinIcon, GithubIcon, Mail } from 'lucide-react';

export default function Hero() {
  const [showSubtitle, setShowSubtitle] = useState(false);

  // 1) container variant will stagger its children
  const iconsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,      // space between each icon’s entrance
        delayChildren: 0.3         // start after subtitle animates
      }
    }
  };

  // 2) each icon will fade up
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
        text="Theo Bravos"
        delay={150}
        animateBy="words"
        direction="top"
        className="hero-heading"
        onAnimationComplete={() => setShowSubtitle(true)}
      />

      <div className="hero-footer">
        {showSubtitle && (
          <BlurText
            text="Data Scientist"
            delay={150}
            animateBy="words"
            direction="top"
            className="hero-subheading"
          />
        )}

        {/* 3) wrap your links in a motion.div */}
        <motion.div
          className="social-links"
          variants={iconsContainer}
          initial="hidden"
          animate={showSubtitle ? 'visible' : 'hidden'}
        >
          {/* 4) wrap each <a> in motion.a with the item variant */}
          <motion.a
            variants={iconItem}
            href="https://linkedin.com/in/theobravos"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={32} />
          </motion.a>

          <motion.a
            variants={iconItem}
            href="https://github.com/theobravos"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon size={32} />
          </motion.a>

          <motion.a
            variants={iconItem}
            href="mailto:tbravos@usc.edu"
            aria-label="Email"
          >
            <Mail size={32} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
