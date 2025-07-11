// ShinyText.jsx
import React from 'react';
import './ShinyText.css';

const ShinyText = ({
  text,
  as: Component = 'div',    // ← let us choose <a> or <button>
  href,
  disabled = false,
  speed = 5,
  className = '',
  ...rest
}) => {
  const animationDuration = `${speed}s`;

  return (
    <Component
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
      {...(href ? { href } : {})}
      {...rest}
    >
      {text}
    </Component>
  );
};

export default ShinyText;