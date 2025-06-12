import React, { forwardRef, useRef, useEffect } from 'react';
import gsap from 'gsap';
import './TiltedCard.css';

export default function TiltedCard({
  imageSrc,
  altText,
  captionText,
  containerHeight = '300px',
  containerWidth = '300px',
  imageHeight = '300px',
  imageWidth = '300px',
  rotateAmplitude = 16,
  scaleOnHover = 1.4,
  showMobileWarning = false,
  showTooltip = true,
  displayOverlayContent = true,
  overlayContent,
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    const handleMouseMove = e => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      gsap.to(el, {
        rotationY: x * rotateAmplitude,
        rotationX: -y * rotateAmplitude,
        scale: scaleOnHover,
        ease: 'power2.out',
        duration: 0.3,
      });
    };
    const reset = () => gsap.to(el, { rotationY:0, rotationX:0, scale:1, ease:'power2.out' });
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', reset);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', reset);
    };
  }, [rotateAmplitude, scaleOnHover]);

  return (
    <div
      ref={cardRef}
      className="tilted-card-container"
      style={{ width: containerWidth, height: containerHeight }}
    >
      <img
        src={imageSrc}
        alt={altText}
        style={{ width: imageWidth, height: imageHeight }}
      />
      {displayOverlayContent && (
        <div className="tilted-card-overlay">
          {overlayContent || <p>{captionText}</p>}
        </div>
      )}
      {showTooltip && (
        <div className="tilted-card-tooltip">{captionText}</div>
      )}
      {showMobileWarning && (
        <div className="tilted-card-mobile-warning">
          Move your mouse over the card!
        </div>
      )}
    </div>
  );
}

