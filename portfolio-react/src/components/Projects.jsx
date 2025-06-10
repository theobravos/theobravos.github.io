import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      
      <h2
        className="section-title"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="50"
      >
        Projects
      </h2>
      <div className="projects-grid">
        {/* Project Card 1 */}
        <div 
          className="project-card"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="100"
        >
          <img
            src="/assets/img/music-analytics.png"
            alt="Music Entertainment Analytics Dashboard"
          />
          <div className="project-info">
            <h3>Music Entertainment Analytics</h3>
            <p>
              Performed end-to-end SQL analysis in PostgreSQL on Agents, Customers, and Engagements.
              Built time-series and net-contribution analyses using window functions and CTEs.
              Delivered strategic recommendations and mock Tableau dashboards (revenue, net result, preference scores).
            </p>
            <a
              href="https://github.com/theobravos/music-entertainment-analytics"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Repo
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div 
          className="project-card"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="100"
        >
          <img
            src="/assets/img/insurance-loss.png"
            alt="Predicting Loss Causes screenshot"
          />
          <div className="project-info">
            <h3>Predicting Loss Causes</h3>
            <p>
              Engineered 20+ features and trained classification/regression models
              (XGBoost, Tweedie, Lasso) on a 37K-row insurance dataset to predict claim
              likelihood and severity.
            </p>
            <a
              href="https://github.com/theobravos/insurance-loss"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Repo
            </a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div 
          className="project-card"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="100"
        >
          <img
            src="/assets/img/movie-analytics.png"
            alt="Movie Ratings Analysis screenshot"
          />
          <div className="project-info">
            <h3>Movie Ratings Analysis</h3>
            <p>
              Explored and cleaned movie-rating data in Jupyter notebooks,
              built regression models to predict ratings, and compiled a final written report.
              Raw data is hosted on Dropbox; see the GitHub repo for instructions.
            </p>
            <a
              href="https://github.com/theobravos/movie-ratings-analysis"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Repo
            </a>
          </div>
        </div>

        {/* Project Card 4 */}
        <div
          className="project-card"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="100"
        >
          <img
            src="/assets/img/portfolio-website.png"
            alt="Personal Portfolio Website screenshot"
          />
          <div className="project-info">
            <h3>Personal Portfolio Website</h3>
            <p>
              Developed and iteratively enhanced this portfolio website using React, CSS Grid, and AOS animations for an engaging, responsive showcase of my work and skills.
            </p>
            <a
              href="https://github.com/theobravos/theobravos.github.io"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Repo
            </a>
          </div>
        </div>
        {/* …add more cards here… */}
      </div>
    </section>
  );
}