// src/components/AboutMe.jsx

import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import './AboutMe.css';

// This wrapper component applies the scroll-in animation
const AnimatedPill = ({ children, origin }) => {
  const [elementRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.2,
  });
  const animationClass = `animatable pill-${origin} ${isIntersecting ? 'is-visible' : ''}`;
  return <div ref={elementRef} className={animationClass}>{children}</div>;
};

export default function AboutMe() {
  // Use the hook for the title. It will return a ref and a boolean.
  const [titleRef, isTitleVisible] = useIntersectionObserver({
    threshold: 0.5,
  });

  return (
    <section id="about" className="about-section">
      {/* ADD THIS: Animated Title */}
      <div
        ref={titleRef}
        className={`title-container ${isTitleVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="pills-container">
        {/* Left Pill: About My Journey */}
        <AnimatedPill origin="left">
          <div className="about-pill">
            <h3>My Journey</h3>
            <p>
              As a Master of Science in Business Analytics candidate at USC and a former NCAA D1 athlete, I've built a unique foundation of disciplined strategy and quantitative expertise. My passion lies in the intersection of sports, business, and data.
            </p>
            <p>
              I thrive on translating complex datasets into actionable insights, whether it's building predictive models for athlete performance or optimizing business processes. My goal is to drive decision-making and uncover value through the power of analytics.
            </p>
          </div>
        </AnimatedPill>

        {/* Right Pill: Education */}
        <AnimatedPill origin="right">
          <div className="about-pill">
            <h3>Education</h3>
            <div className="education-entry">
              <h4>M.S. in Business Analytics (STEM)</h4>
              <p className="school">USC, Marshall School of Business</p>
              <p className="date">Expected Dec 2025</p>
            </div>
            <div className="education-entry">
              <h4>B.S. in Business Administration (STEM)</h4>
              <p className="school">USC, Marshall School of Business</p>
              <p className="date">May 2025</p>
            </div>
            <div className="honors-entry">
              <h4>Honors & Athletics</h4>
              <p>Dean’s List • Presidential Scholar • NCAA D1 Football</p>
            </div>
          </div>
        </AnimatedPill>
      </div>
    </section>
  );
}