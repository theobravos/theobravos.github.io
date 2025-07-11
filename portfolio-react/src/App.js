import React from 'react';
import { VscHome, VscArchive, VscAccount, VscSettingsGear, VscMail } from 'react-icons/vsc';

// Import all your components
import Iridescence from './components/Iridescence';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css'; // Import global styles

// Menu items for the Dock navigation


function App() {
  return (
    <div className="app-container">
      {/* Layer 1: Animated Background */}
      <div className="iridescence-background">
        <Iridescence />
      </div>

      {/* Layer 2: Main Page Content */}
      <main className="main-content">
        <Hero />
        <AboutMe />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>

      {/* Layer 3: Floating UI Elements */}
    </div>
  );
}

export default App;