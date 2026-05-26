import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const ContactButton = () => {
  return (
    <motion.a
      href="#contact"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center justify-center gap-3 rounded-full border border-indigo-500/20 px-8 py-4 transition-all"
      style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(79,70,229,0.06) 100%)',
        backdropFilter: 'blur(16px)',
        color: '#818cf8',
        boxShadow: '0 0 0 1px rgba(99,102,241,0.14) inset',
      }}
    >
      <span className="font-display font-medium tracking-wide">Let's Connect</span>
      <FiArrowRight className="w-5 h-5" />
    </motion.a>
  );
};

export default ContactButton;
