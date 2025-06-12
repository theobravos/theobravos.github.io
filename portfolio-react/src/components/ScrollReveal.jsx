import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0, // A starting opacity of 0 is more common for fade-ins
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  // textClassName prop is no longer needed
  start = "top bottom-=15%", // Adjusted start for better trigger timing
  end = "bottom center"
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;
    
    // Combine all animations into one timeline for better performance and control
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scroller,
        start: start,
        end: end,
        scrub: 1.5, // Use a numeric value for smoother scrubbing
      },
    });

    // Define the initial "from" state
    const fromState = {
      opacity: baseOpacity,
      rotation: baseRotation,
      transformOrigin: '0% 50%',
      willChange: 'transform, opacity, filter', // Performance optimization
    };
    
    // Add blur to the initial state if enabled
    if (enableBlur) {
      fromState.filter = `blur(${blurStrength}px)`;
    }

    // Define the final "to" state
    const toState = {
      opacity: 1,
      rotation: 0,
    };
    
    // Add blur removal to the final state if enabled
    if (enableBlur) {
      toState.filter = 'blur(0px)';
    }

    // Add the animation to the timeline
    tl.fromTo(el, fromState, toState);

    // Cleanup function to kill the trigger when the component unmounts
    return () => {
      tl.kill();
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, start, end, blurStrength]);

  // Use a 'div' instead of 'h2' to make the component more generic
  return (
    <div ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;