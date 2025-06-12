import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SpotlightCard from './SpotlightCard';

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: false });
    AOS.refresh();
  }, []);

  // shared AOS props
  const aosOffset = 100;
  const baseDelay = 100;

  // the list of skills
  const skills = [
    { label: 'Python (pandas, scikit-learn, XGBoost)', direction: 'left' },
    { label: 'SQL (PostgreSQL, BigQuery)', direction: 'right' },
    { label: 'Tableau & Power BI', direction: 'left' },
    { label: 'Machine Learning (Random Forest, SVM, Time Series)', direction: 'right' },
    { label: 'Excel (Pivot Tables, VBA)', direction: 'left' },
    { label: 'Git & GitHub', direction: 'right' },
  ];

  return (
    <section id="skills" className="section-container">
      <h2
        data-aos="fade-up"
        data-aos-offset={aosOffset}
        data-aos-delay={baseDelay / 2}
      >
        Skills & Tools
      </h2>

      <div className="skills-list">
        {skills.map((skill, idx) => (
          <SpotlightCard
            key={skill.label}
            className="skill-card"
            spotlightColor="rgb(0, 64, 255)"
            data-aos={`fade-${skill.direction}`}
            data-aos-offset={aosOffset}
            data-aos-delay={baseDelay * (idx + 1)}
          >
            {skill.label}
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}