// src/components/SkillsScroller.js

import React, { useRef, useEffect, useCallback } from 'react';
import './SkillsScroller.css';

export default function SkillsScroller({ text, speed = 1, direction = 'left' }) {
  const scrollerRef = useRef(null);
  const position = useRef(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const animationFrame = useRef(null);
  const currentDirection = useRef(direction);

  const animate = useCallback(() => {
    if (!isDragging.current) {
      // Adjust position based on direction and speed
      const moveSpeed = currentDirection.current === 'left' ? -speed : speed;
      position.current += moveSpeed;
    }

    if (scrollerRef.current) {
      const { scrollWidth, clientWidth } = scrollerRef.current;
      const contentWidth = scrollWidth / 2; // Since we have two identical spans

      // Loop the animation seamlessly
      if (position.current <= -contentWidth) {
        position.current += contentWidth;
      }
      if (position.current >= 0) {
        position.current -= contentWidth;
      }

      scrollerRef.current.style.transform = `translateX(${position.current}px)`;
    }

    animationFrame.current = requestAnimationFrame(animate);
  }, [speed]);

  useEffect(() => {
    animationFrame.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [animate]);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    lastX.current = e.clientX;
    scrollerRef.current.classList.add('dragging'); // For cursor style
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - lastX.current;
    position.current += deltaX;
    lastX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    isDragging.current = false;
    scrollerRef.current.classList.remove('dragging');
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      className="scroller"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp} // End drag if mouse leaves the area
    >
      <div className="scroller__inner" ref={scrollerRef}>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}