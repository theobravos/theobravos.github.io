// src/components/Dock.jsx
"use client";

import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
} from "react";
import { useMotionValue, motion } from "framer-motion";
import "./Dock.css";

/** Single icon that grows based on cursor proximity */
function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  // Measure cursor distance from this icon center
  const mouseDistance = useRef(0);
  const updateDistance = (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseItemSize };
    mouseDistance.current = val - rect.x - baseItemSize / 2;
  };

  // Listen to global cursor X
  useEffect(() => {
    const unsub = mouseX.on("change", (val) => updateDistance(val));
    return unsub;
  }, [mouseX, baseItemSize]);

  // Map distance → scale factor
  const targetSize = useMotionValue(baseItemSize);
  useEffect(() => {
    const unsubscribe = mouseX.on("change", () => {
      const d = mouseDistance.current;
      const clamped = Math.max(-distance, Math.min(distance, d));
      // simple linear interpolation
      const scale = baseItemSize + ((-Math.abs(clamped) + distance) / distance) * (magnification - baseItemSize);
      targetSize.set(scale);
    });
    return unsubscribe;
  }, [mouseX, distance, magnification, baseItemSize]);

  return (
    <motion.div
      ref={ref}
      style={{ width: targetSize, height: targetSize }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
    >
      {Children.map(children, (child) =>
        isValidElement(child) ? cloneElement(child, { isHovered }) : child
      )}
    </motion.div>
  );
}

/** Label tooltip above each icon */
function DockLabel({ children, isHovered }) {
  const [visible, setVisible] = React.useState(false);
  useEffect(() => {
    const unsub = isHovered.on("change", (v) => setVisible(v === 1));
    return unsub;
  }, [isHovered]);

  if (!visible) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -10 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.2 }}
      className="dock-label"
      role="tooltip"
      style={{ x: "-50%" }}
    >
      {children}
    </motion.div>
  );
}

/** Wrapper for SVG icon */
function DockIcon({ children }) {
  return <div className="dock-icon">{children}</div>;
}

/** Main Dock — fixed across top, horizontal */
export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  baseItemSize = 50,
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  return (
    <div className="dock-outer">
      <div
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        role="toolbar"
        aria-label="Navigation Dock"
      >
        {items.map((item, idx) => (
          <DockItem
            key={idx}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel isHovered={isHovered}>{item.label}</DockLabel>
          </DockItem>
        ))}
      </div>
    </div>
  );
}