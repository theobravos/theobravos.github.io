import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import './Projects.css';

// Simple SVG Icons for the cards
const GitHubIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" height="1em" width="1em">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
    <path d="M15 3h6v6"></path>
    <path d="M10 14L21 3"></path>
  </svg>
);


const ProjectCard = ({ project, index }) => {
  const [cardRef, isCardVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const skillsToShow = project.skills.slice(0, 3);
  const remainingSkills = project.skills.length - skillsToShow.length;

  return (
    <div
      ref={cardRef}
      // Removed the 'origin' className
      className={`project-card ${isCardVisible ? 'is-visible' : ''}`}
      // Increased multiplier for more delay between cards
      style={{ transitionDelay: `${index * 250}ms` }}
    >
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>

      <div className="project-info">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-links">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                <GitHubIcon />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo">
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>
        <p className="project-description">{project.desc}</p>
        <div className="project-footer">
          <div className="skills-container">
            {skillsToShow.map(skill => <span key={skill} className="skill-pill">{skill}</span>)}
            {remainingSkills > 0 && <span className="skill-pill">+{remainingSkills}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectGrid({ projects }) {
  return (
    <div className="project-grid">
      {/* Removed the 'origin' prop */}
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}