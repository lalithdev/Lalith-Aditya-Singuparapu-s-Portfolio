import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, y = 0, x = 0, duration = 0.5, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
