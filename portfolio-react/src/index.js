import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'aos/dist/aos.css'; 
import App from './App';
import AOS from 'aos';
// Initialize AOS (Animate On Scroll) library for animations


AOS.init({  duration: 600,      // animation length in ms
    easing: 'ease-out', // easing function
    once: false,
    mirror: true,         // animate only once
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);