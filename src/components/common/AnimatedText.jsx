import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedText = ({ text, className, style }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 85%', 'end 50%'],
  });

  const words = text.split(' ');

  return (
    <p ref={container} className={className} style={style}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative inline-block mr-[0.25em] mt-[0.1em]">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity, display: 'inline-block' }}>
        {children}
      </motion.span>
    </span>
  );
};

export default AnimatedText;
