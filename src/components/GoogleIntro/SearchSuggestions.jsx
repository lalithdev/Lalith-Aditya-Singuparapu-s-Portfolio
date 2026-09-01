import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEARCH_SUGGESTIONS, SEARCH_QUERY } from './constants';
import { suggestionContainerVariants, suggestionItemVariants } from './animations';

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="#9aa0a6" className="w-[18px] h-[18px] flex-shrink-0">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

const SearchSuggestions = ({ visible, typedText }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.ul
          variants={suggestionContainerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute top-full left-0 right-0 rounded-b-2xl overflow-hidden z-10"
          style={{
            background: '#303134',
            borderTop: '1px solid #5f6368',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
            marginTop: 0,
          }}
        >
          {/* Divider line */}
          <div className="h-px mx-4" style={{ background: '#5f6368' }} />

          {SEARCH_SUGGESTIONS.map((s) => {
            // Bold the part that hasn't been typed yet
            const typed = typedText.toLowerCase();
            const full = s.text;
            const boldStart = full.toLowerCase().startsWith(typed) ? typedText.length : 0;

            return (
              <motion.li
                key={s.id}
                variants={suggestionItemVariants}
                className="flex items-center gap-3 px-4 py-[10px] cursor-pointer"
                style={{ color: '#e8eaed' }}
                whileHover={{ background: '#3c4043' }}
                transition={{ duration: 0.1 }}
              >
                <SearchIcon />
                <span className="text-[14px] flex-1 truncate">
                  <span style={{ color: '#e8eaed' }}>{full.slice(0, boldStart)}</span>
                  <span style={{ color: '#9aa0a6' }}>{full.slice(boldStart)}</span>
                </span>
                {/* North-west arrow icon — indicates "complete this search" */}
                <svg viewBox="0 0 24 24" fill="#9aa0a6" className="w-4 h-4 flex-shrink-0">
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                </svg>
              </motion.li>
            );
          })}

          {/* Google Search button row */}
          <div className="px-4 py-3 flex items-center justify-center">
            <button
              className="text-[13px] px-4 py-[7px] rounded"
              style={{
                background: '#303134',
                color: '#e8eaed',
                border: '1px solid #303134',
                cursor: 'default',
              }}
            >
              Google Search
            </button>
          </div>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default SearchSuggestions;
