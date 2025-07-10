// src/hooks/useIntersectionObserver.js

import { useState, useEffect, useRef } from 'react';

export default function useIntersectionObserver(options) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Capture the current ref value in a variable
    const element = elementRef.current; 

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (element) {
      observer.observe(element);
    }

    // Use the captured variable in the cleanup function
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting];
}