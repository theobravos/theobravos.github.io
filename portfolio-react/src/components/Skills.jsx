import React from 'react';
import { FaBrain, FaDatabase, FaChartBar, FaCogs } from 'react-icons/fa';
import useIntersectionObserver from './useIntersectionObserver';

// Note: The CSS import has been removed because we will import a single App.css in your main App.js file.

const skillCategories = [
  {
    title: 'Data Science & Machine Learning',
    icon: <FaBrain size={24} />,
    skills: [
      'Python', 'NumPy', 'pandas', 'scikit-learn',
      'TensorFlow', 'PyTorch', 'Keras', 'XGBoost',
      'Natural Language Processing', 'Time Series Analysis',
    ],
  },
  {
    title: 'Data & Databases',
    icon: <FaDatabase size={24} />,
    skills: [
      'SQL', 'PostgreSQL', 'MySQL', 'Google BigQuery',
      'Data Warehousing', 'ETL Pipelines', 'Data Modeling',
    ],
  },
  {
    title: 'BI & Visualization',
    icon: <FaChartBar size={24} />,
    skills: [
      'Tableau', 'Power BI', 'Looker Studio',
      'Excel', 'Pivot Tables', 'Power Query',
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: <FaCogs size={24} />,
    skills: ['Git', 'GitHub', 'Docker', 'AWS (S3, EC2)'],
  },
];

const AnimatedTitle = ({ children }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  return (
    <div ref={ref} className={`title-container ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

// This animated wrapper will be used for each card
const AnimatedCard = ({ children, index }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div 
            ref={ref} 
            className={`skill-card ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {children}
        </div>
    );
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <AnimatedTitle>
        <h2 className="section-title">Skills & Tools</h2>
      </AnimatedTitle>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <AnimatedCard key={index} index={index}>
            <div className="card-header">
              <div className="card-icon">{category.icon}</div>
              <h3 className="category-title">{category.title}</h3>
            </div>
            {/* This renders each skill as a styled div (pill) */}
            <div className="skills-pills-container">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-pill">{skill}</div>
              ))}
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}