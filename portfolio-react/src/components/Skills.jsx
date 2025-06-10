import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <section id="skills" className="section-container">
      <h2
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="50"
      >
        Skills & Tools
      </h2>
      <ul className="skills-list">
        <li
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="100"
        >
          Python (pandas, scikit-learn, XGBoost)
        </li>
        <li
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="150"
        >
          SQL (PostgreSQL, BigQuery)
        </li>
        <li
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="200"
        >
          Tableau & Power BI
        </li>
        <li
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="250"
        >
          Machine Learning (Random Forest, SVM, Time Series)
        </li>
        <li
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="300"
        >
          Excel (Pivot Tables, VBA)
        </li>
        <li
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="350"
        >
          Git & GitHub
        </li>
      </ul>
    </section>
  );
}