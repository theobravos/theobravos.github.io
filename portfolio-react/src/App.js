import React from 'react';
import Dock from './components/Dock';
import { VscHome, VscArchive, VscAccount, VscSettingsGear, VscMail } from 'react-icons/vsc';
import Hero from './components/Hero';
import Header from './components/Header';
import About   from './components/About';
import Projects from './components/Projects';
import Skills  from './components/Skills';
import Contact from './components/Contact';
import Footer  from './components/Footer';
import ProfileCard from './components/ProfileCard'; 

const menuItems = [
  {
    icon: <VscHome size={24} />,
    label: 'Home',
    onClick: () => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })
  },
  {
    icon: <VscArchive size={24} />,
    label: 'Projects',
    onClick: () => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  },
  {
    icon: <VscAccount size={24} />,
    label: 'Experience',
    onClick: () => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  },
  {
    icon: <VscSettingsGear size={24} />,
    label: 'Skills',
    onClick: () => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })
  },
  {
    icon: <VscMail size={24} />,
    label: 'Contact',
    onClick: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  },
];

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;