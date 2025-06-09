import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <h2>Let’s Connect</h2>
      <div className="contact-info">
        <p>Email: <a href="mailto:tbravos@usc.edu">tbravos@usc.edu</a></p>
        <p>
          LinkedIn:
          <a href="https://linkedin.com/in/theobravos" target="_blank" rel="noreferrer">
            linkedin.com/in/theobravos
          </a>
        </p>
        <p>
          GitHub:
          <a href="https://github.com/theobravos" target="_blank" rel="noreferrer">
            github.com/theobravos
          </a>
        </p>
      </div>
    </section>
  );
}