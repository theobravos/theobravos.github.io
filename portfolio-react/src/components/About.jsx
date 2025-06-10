import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


export default function About() {
  const expRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hidden');
          AOS.refresh();
        } else {
          entry.target.classList.add('hidden');
        }
      },
      { threshold: 0.1 }
    );
    if (expRef.current) observer.observe(expRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-container">
      <div className="about-content">
      {/* ─── Experience & Education with fade-up on scroll ─── */}
      <div
        ref={expRef}
        className="experience-education hidden"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="100"
      >
      <h2>Experience</h2>
      <div className="exp-list">
        {/* Professional Experience */}
        <div className="exp-item">
          <h4>Prep Baseball Report – Scouting & Analytics Intern</h4>
          <p>Los Angeles, CA · Mar 2022 – Sep 2022</p>
          <ul>
            <li>Conducted financial/performance valuations on 100+ players, integrating analytics to optimize recruitment.</li>
            <li>Created data-driven reports to guide player contract investments and sponsorship decisions.</li>
            <li>Presented player performance insights to cross-functional teams including scouts and management.</li>
          </ul>
        </div>
        <div className="exp-item">
          <h4>Optimal Sports NIL Agency – Business Intelligence Intern</h4>
          <p>Los Angeles, CA · May 2021 – Aug 2021</p>
          <ul>
            <li>Developed Excel dashboards to track athlete performance metrics, optimizing future NIL deals.</li>
            <li>Analyzed market trends to identify 15+ athlete engagement opportunities.</li>
            <li>Collaborated with legal and operations teams to streamline sponsorship processes.</li>
          </ul>
        </div>
      </div>
        {/* ─── Download Resume button, also fading up ─── */}
        <div
          className="resume-download"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="100"
        >
          <a href="/assets/resume.pdf" className="btn">
            Download Resume
          </a>
        </div>
      </div>
      </div> {/* Closing tag for about-content */}
    </section>
  );
}