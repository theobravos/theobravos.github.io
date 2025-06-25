import React from 'react';
import ProfileCard from './ProfileCard';
import { LinkedinIcon, GithubIcon, Mail } from 'lucide-react';
export default function Hero() {
  return (
    <div className="hero-section">
      <ProfileCard
        name="Theo Bravos"
        avatarUrl = '/assets/img/headshot.jpg'
        title="Data Analyst"
        showUserInfo={true}
        enableTilt={true}
      />
      <div className="action-buttons flex space-x-4 mt-4">
        <a
          href="https://linkedin.com/in/theobravos"
          target="_blank"
          rel="noreferrer"
          className="icon-btn"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://github.com/theobravos"
          target="_blank"
          rel="noreferrer"
          className="icon-btn"
        >
          <GithubIcon />
        </a>
        <a href="mailto:tbravos@usc.edu" className="icon-btn">
          <Mail />
        </a>
      </div>
    </div>
  );
}