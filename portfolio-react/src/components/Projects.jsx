import React from 'react';
import ScrollFloat from './ScrollFloat';
import FlowingMenu from './FlowingMenu';

const PROJECTS = [
  {
    id: 1,
	image: '/assets/img/insurance-loss.png',
    title: 'Predicting Loss Causes',
    desc: 'Engineered predictive models to identify insurance claim likelihood and severity.',
    repo: 'https://github.com/theobravos/insurance-loss',
  },
  {
    id: 2,
    image: '/assets/img/music-analytics.png',
    title: 'Music Entertainment Analytics',
    desc: 'Performed end-to-end SQL analysis & time-series feature engineering.',
    repo: 'https://github.com/theobravos/music-entertainment-analytics',
  },
  {
    id: 3,
    image: '/assets/img/movie-analytics.png',
    title: 'Movie Ratings Analysis',
    desc: 'Explored and cleaned movie-rating data with Python, built regression models predict revenue.',
    repo: 'https://github.com/theobravos/movie-ratings-analysis',
  },
  {
    id: 4,
    image: '/assets/img/portfolio-website.png',
    title: 'Portfolio Website',
    desc: 'Built a personal portfolio website using React and modern web technologies.',
    repo: 'https://github.com/theobravos/theobravos.github.io',
  },
];

export default function Projects() {
  // transform projects for FlowingMenu
  const menuItems = PROJECTS.map(project => ({
    link: project.repo,
    text: project.title,
    image: project.image,
  }));

  return (
    <section id="projects" className="section-container">
      <ScrollFloat
        className="section-title"
        animationDuration={1.5}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.3}
      >
        Projects
      </ScrollFloat>

      <div style={{ height: '600px', position: 'relative',
		width: '100vw', left: '50%', marginLeft: '-50vw'
	   }}>
        <FlowingMenu items={menuItems} />
      </div>
    </section>
  );
}
