import React from 'react';
import ShinyText from './ShinyText';
import useIntersectionObserver from './/useIntersectionObserver';
import './Experience.css';

const experienceData = [
  {
    company: 'Prep Baseball Report',
    title: 'Scouting & Analytics Intern',
    location: 'Los Angeles, CA',
    dates: 'Mar 2022 – Sep 2022',
    description: [
      'Conducted financial/performance valuations on 100+ players, integrating analytics to optimize recruitment.',
      'Created data-driven reports to guide player contract investments and sponsorship decisions.',
      'Presented player performance insights to cross-functional teams including scouts and management.',
    ],
    origin: 'left',
  },
  {
    company: 'Optimal Sports NIL Agency',
    title: 'Business Intelligence Intern',
    location: 'Los Angeles, CA',
    dates: 'May 2021 – Aug 2021',
    description: [
      'Developed Excel dashboards to track athlete performance metrics, optimizing future NIL deals.',
      'Analyzed market trends to identify 15+ athlete engagement opportunities.',
      'Collaborated with legal and operations teams to streamline sponsorship processes.',
    ],
    origin: 'right',
  },
];

// A new wrapper component to handle the animation for each pill
const AnimatedWrapper = ({ children, origin }) => {
  const [elementRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.2, // Trigger when 20% of the item is visible
  });

  const animationClass = `animatable pill-${origin} ${isIntersecting ? 'is-visible' : ''}`;

  return (
    <div ref={elementRef} className={animationClass}>
      {children}
    </div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="pills-container">
        {experienceData.map((job, index) => (
          <AnimatedWrapper key={index} origin={job.origin}>
            <div className="experience-pill">
              <div className="pill-header">
                <h4>{job.company}</h4>
                <p className="job-title">{job.title}</p>
                <p className="job-dates">{job.location} · {job.dates}</p>
              </div>
              <ul className="pill-description">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </AnimatedWrapper>
        ))}
      </div>

      <div className="resume-button-container">
        <ShinyText
          as="a"
          href="/assets/resume.pdf"
          text="Download Resume"
          speed={8}
          className="btn resume-download"
        />
      </div>
    </section>
  );
}