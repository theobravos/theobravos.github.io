import React from 'react';
import ScrollReveal from './ScrollReveal';
import StarBorder from './StarBorder';
import ShinyText from './ShinyText';

export default function About() {
  // Shared ScrollReveal settings
  const srProps = {
    baseOpacity: 0,
    enableBlur: true,
    blurStrength: 4,
    baseRotation: 5,
    distance: '20px',
    origin: 'bottom',
    duration: 600,
    reset: false,
  };

  return (
    <section id="about" className="section-container">
      <div className="about-content">

        {/* Section header */}
        <ScrollReveal {...srProps}>
          <h2>Experience</h2>
        </ScrollReveal>

        {/* Job #1 */}
        <ScrollReveal {...srProps} delay={100}>
          <div className="exp-entry1">
            <h4>Prep Baseball Report – Scouting & Analytics Intern</h4>
            <p>Los Angeles, CA · Mar 2022 – Sep 2022</p>
          </div>
        </ScrollReveal>
        <ScrollReveal {...srProps} delay={300}>
          <p>
            Conducted financial/performance valuations on 100+ players,
            integrating analytics to optimize recruitment.
          </p>
        </ScrollReveal>
        <ScrollReveal {...srProps} delay={500}>
          <p>
            Created data-driven reports to guide player contract investments
            and sponsorship decisions.
          </p>
        </ScrollReveal>
        <ScrollReveal {...srProps} delay={700}>
          <p>
            Presented player performance insights to cross-functional teams
            including scouts and management.
          </p>
        </ScrollReveal>

        {/* Job #2 */}
        <ScrollReveal {...srProps} style={{ marginTop: '10rem' }} delay={900}>
          <div className="exp-entry2">
            <h4>Optimal Sports NIL Agency – Business Intelligence Intern</h4>
            <p>Los Angeles, CA · May 2021 – Aug 2021</p>
          </div>
        </ScrollReveal>
        <ScrollReveal {...srProps} delay={900}>
          <p>
            Developed Excel dashboards to track athlete performance metrics,
            optimizing future NIL deals.
          </p>
        </ScrollReveal>
        <ScrollReveal {...srProps} delay={1000}>
          <p>
            Analyzed market trends to identify 15+ athlete engagement
            opportunities.
          </p>
        </ScrollReveal>
        <ScrollReveal {...srProps} delay={1200}>
          <p>
            Collaborated with legal and operations teams to streamline
            sponsorship processes.
          </p>
        </ScrollReveal>

        {/* Download Resume Button */}
        <ScrollReveal {...srProps} delay={1100}>
          <ShinyText
            as="a"
            href="/assets/resume.pdf"
            text="Download Resume"
            speed={8}
            className="btn resume-download"
          />
        </ScrollReveal>

      </div>
    </section>
  );
}