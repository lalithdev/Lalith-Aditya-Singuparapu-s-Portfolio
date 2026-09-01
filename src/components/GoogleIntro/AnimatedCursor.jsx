import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedCursor
 *
 * Props:
 *   stage          — current animation stage (number)
 *   targetX, targetY — pixel position computed via getBoundingClientRect
 *   showRipple     — boolean: trigger the click ripple burst
 */
const AnimatedCursor = ({ stage, targetX, targetY, showRipple }) => {
  const isHovering = stage >= 7;
  const isClicking = stage >= 8;

  // Compute cursor animation target based on stage
  const cursorAnimate = (() => {
    if (stage < 6) return { opacity: 0, x: '50vw', y: '55vh' };
    if (stage === 6) return { opacity: 1, x: '50vw', y: '55vh' };
    // stages 7+ → move to result position
    return {
      opacity: 1,
      x: targetX ?? '50vw',
      y: targetY ?? '55vh',
      scale: isClicking ? 0.9 : 1,
    };
  })();

  const cursorTransition = (() => {
    if (stage === 6) return { duration: 0.2 };
    if (stage === 7) return { duration: 1.1, ease: [0.4, 0, 0.2, 1] };
    return { duration: 0.15 };
  })();

  return (
    <motion.div
      animate={cursorAnimate}
      transition={cursorTransition}
      className="fixed top-0 left-0 pointer-events-none z-[130]"
      style={{ translateX: '-2px', translateY: '-2px' }}
    >
      {/* Cursor SVG */}
      {isHovering ? (
        // Hand pointer when hovering over link
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))' }}
        >
          <path
            d="M9 11.5V5.5C9 4.67 9.67 4 10.5 4S12 4.67 12 5.5V11.5H12.5C13.6 11.5 14.5 12.4 14.5 13.5V14C14.5 14.1 14.49 14.2 14.48 14.3L15 13.5C15.55 12.67 16.63 12.47 17.46 13.02C17.81 13.26 18.05 13.61 18.14 14H18.5C19.33 14 20 14.67 20 15.5C20 15.69 19.96 15.86 19.9 16.03C20.28 16.26 20.5 16.67 20.5 17.12C20.5 18.16 19.78 19.5 18.5 20.5L17 21.5C16.23 21.83 15.37 22 14.5 22H12C9.24 22 7 19.76 7 17V13.5C7 12.4 7.9 11.5 9 11.5Z"
            stroke="black"
            strokeWidth="0.5"
          />
        </svg>
      ) : (
        // Default arrow cursor
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))' }}
        >
          <path
            d="M4.5 3L18.5 10.5L11.5 12.5L16.5 19.5L13.5 21L8.5 14L4.5 18V3Z"
            fill="white"
            stroke="black"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {/* Click ripple burst */}
      {showRipple && (
        <motion.div
          initial={{ scale: 0, opacity: 0.7 }}
          animate={{ scale: [0, 1.8, 2.8], opacity: [0.7, 0.4, 0] }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="absolute -top-3 -left-3 w-6 h-6 rounded-full pointer-events-none"
          style={{ background: 'rgba(138, 180, 248, 0.5)' }}
        />
      )}
    </motion.div>
  );
};

export default AnimatedCursor;
