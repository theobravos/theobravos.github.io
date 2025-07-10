// src/components/Projects.js

import React from 'react';
import ProjectGrid from './ProjectGrid';
import useIntersectionObserver from './useIntersectionObserver';
import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    image: '/assets/img/insurance-loss.png',
    title: 'Predicting Loss Causes',
    desc: 'Engineered predictive models to identify insurance claim likelihood and severity.',
    repo: 'https://github.com/theobravos/insurance-loss',
    liveUrl: null, // Add live URL if available, otherwise null
    skills: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost'],
  },
  { 
    id: 2,
    image: '/assets/img/music-analytics.png',
    title: 'Music Entertainment Analytics',
    desc: 'Performed end-to-end SQL analysis & time-series feature engineering.',
    repo: 'https://github.com/theobravos/music-entertainment-analytics',
    liveUrl: null,
    skills: ['SQL', 'PostgreSQL', 'Python', 'Time Series'],
  },
  {
    id: 3,
    image: '/assets/img/movie-analytics.png',
    title: 'Movie Ratings Analysis',
    desc: 'Explored and cleaned movie-rating data with Python, built regression models predict revenue.',
    repo: 'https://github.com/theobravos/movie-ratings-analysis',
    liveUrl: null,
    skills: ['Python', 'Pandas', 'Seaborn', 'Regression'],
  },
  {
    id: 4,
    image: '/assets/img/portfolio-website.png',
    title: 'Portfolio Website',
    desc: 'Built a personal portfolio website using React and modern web technologies.',
    repo: 'https://github.com/theobravos/theobravos.github.io',
    liveUrl: 'https://theobravos.github.io/', // Example of a live URL
    skills: ['React', 'JavaScript', 'CSS', 'GSAP'],
  },
];


export default function Projects() {
  const [titleRef, isTitleVisible] = useIntersectionObserver({
    threshold: 0.5,
  });

  return (
    <section id="projects" className="projects-section">
      <div
        ref={titleRef}
        className={`title-container ${isTitleVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">Projects</h2>
      </div>
      <ProjectGrid projects={PROJECTS} />
    </section>
  );
}