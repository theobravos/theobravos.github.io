import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About   from './components/About';
import Projects from './components/Projects';
import Skills  from './components/Skills';
import Contact from './components/Contact';
import Footer  from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;