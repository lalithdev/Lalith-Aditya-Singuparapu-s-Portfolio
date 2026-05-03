import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('group')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -16,
          top: -16,
          overflow: 'hidden',
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          backgroundColor: isHovered ? 'rgba(168, 85, 247, 0.15)' : '#a855f7',
          boxShadow: isHovered 
            ? '0 0 30px rgba(168, 85, 247, 0.5)' 
            : '0 0 10px rgba(168, 85, 247, 0.2)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      >
        <div className="absolute inset-0 rounded-full border border-white/20" />
        
        {/* Shine effect */}
        <motion.div
          animate={{
            x: [-40, 80],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
        />
      </motion.div>
  );
}
