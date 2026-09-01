import React, { useRef, useEffect, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KnowledgePanel from './KnowledgePanel';
import { SEARCH_RESULTS } from './constants';
import {
  resultsPageVariants,
  headerBarVariants,
  resultCardContainerVariants,
  resultCardVariants,
  resultClickVariants,
  otherResultsFadeVariants,
} from './animations';

// ── SVG Assets ────────────────────────────────────────────────────────────────
const GoogleLogoSVG = () => (
  <svg viewBox="0 0 272 92" width="92" height="31" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285f4" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-8.98-6.26-15.48-12.51-15.48s-12.51 6.5-12.51 15.48 6.26 15.48 12.51 15.48 12.51-6.5 12.51-15.48z"/>
    <path fill="#ea4335" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.86 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-8.98-6.26-15.48-12.51-15.48s-12.51 6.5-12.51 15.48 6.26 15.48 12.51 15.48 12.51-6.5 12.51-15.48z"/>
    <path fill="#fbbc05" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.08-9.66-21.08-22.09 0-12.54 9.99-22.18 21.08-22.18 5.3 0 9.5 2.35 11.68 4.96h.34v-3.7h9.25zm-8.56 20.92c0-8.56-5.88-15.48-12.18-15.48-6.47 0-12.18 6.92-12.18 15.48 0 8.48 5.71 15.48 12.18 15.48 6.3 0 12.18-6.92 12.18-15.48z"/>
    <path fill="#4285f4" d="M225.03 2v65.65h-9.5V2z"/>
    <path fill="#34a853" d="M262.05 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-20.08 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.58-22.18 20.92-22.18 11.42 0 17.64 9.07 19.32 13.94l.92 2.27-29.74 12.3c2.27 4.45 6.05 6.72 10.58 6.72 4.62 0 8.23-2.27 10.53-5.74zm-22.18-12.01l20.41-8.48c-1.1-2.18-3.53-3.7-6.47-3.7-4.87-.01-11.59 3.52-13.94 12.18z"/>
    <path fill="#ea4335" d="M35.29 41.41V32h25.88c.32 1.53.47 3.37.47 5.21 0 6.22-1.8 14.18-7.39 19.74-5.46 5.66-12.51 8.42-21.43 8.42-17.65 0-32.83-14.37-32.83-32.69S15.17 0 32.82 0c9.66 0 16.89 3.79 22.35 8.99l-6.72 6.72c-3.95-3.71-9.16-6.64-15.63-6.64-12.01 0-21.42 9.74-21.42 21.84 0 12.09 9.41 21.84 21.42 21.84 6.89 0 10.92-2.77 13.44-5.3 2.02-2.02 3.36-4.96 3.86-9.07H35.29z"/>
  </svg>
);

/* Search icon — grey magnifying glass */
const SearchIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    style={{ width: 20, height: 20, flexShrink: 0 }} fill="#9aa0a6">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

/* Google Mic — exact multicolour */
const MicIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    style={{ width: 22, height: 22, flexShrink: 0 }}>
    <path fill="#4285f4" d="M12 15c1.66 0 3-1.31 3-2.97V5.03C15 3.37 13.66 2 12 2S9 3.37 9 5.03v6.97c0 1.66 1.34 2.97 3 2.97z"/>
    <path fill="#34a853" d="M11 18.08h2V22h-2z"/>
    <path fill="#fbbc05" d="M7.05 16.87c-1.27-1.33-2.05-2.81-2.05-4.67h2c0 1.45.57 2.42 1.47 3.38v.32l-1.15 1.18-.27-.21z"/>
    <path fill="#ea4335" d="M12 16.93a4.97 5.25 0 0 1-3.54-1.55l-1.41 1.49C8.31 18.21 10.07 19 12 19c3.87 0 6.99-2.92 6.99-7h-2c0 2.92-2.23 4.93-4.99 4.93z"/>
  </svg>
);

/* Google Lens — coloured corner arcs + dot */
const LensIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"
    style={{ width: 22, height: 22, flexShrink: 0 }}>
    <rect width="192" height="192" fill="none"/>
    <path fill="#EA4335" d="M64 24H40a16 16 0 0 0-16 16v24"/>
    <path fill="#4285F4" d="M128 24h24a16 16 0 0 1 16 16v24"/>
    <path fill="#34A853" d="M128 168h24a16 16 0 0 0 16-16v-24"/>
    <path fill="#FBBC05" d="M64 168H40a16 16 0 0 1-16-16v-24"/>
    <circle cx="96" cy="96" r="40" fill="none" stroke="#4285F4" strokeWidth="14"/>
    <circle cx="96" cy="96" r="16" fill="#EA4335"/>
  </svg>
);

/* 9-circle waffle — Google Apps */
const WaffleSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    style={{ width: 20, height: 20, flexShrink: 0 }} fill="#e8eaed" opacity="0.85">
    <circle cx="5"  cy="5"  r="2"/>
    <circle cx="12" cy="5"  r="2"/>
    <circle cx="19" cy="5"  r="2"/>
    <circle cx="5"  cy="12" r="2"/>
    <circle cx="12" cy="12" r="2"/>
    <circle cx="19" cy="12" r="2"/>
    <circle cx="5"  cy="19" r="2"/>
    <circle cx="12" cy="19" r="2"/>
    <circle cx="19" cy="19" r="2"/>
  </svg>
);

const MoreVertSVG = () => (
  <svg viewBox="0 0 24 24" fill="#9aa0a6" className="w-[18px] h-[18px] flex-shrink-0">
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);

// ── Result Card ───────────────────────────────────────────────────────────────
const ResultCard = forwardRef(({ result, isHovered, isClicked, isZooming, isFading }, ref) => {
  const titleColor = isClicked ? '#c58af9' : isHovered ? '#93beff' : '#8ab4f8';

  return (
    <motion.div
      ref={ref}
      variants={
        isZooming  ? resultClickVariants :
        isFading   ? otherResultsFadeVariants :
        resultCardVariants
      }
      animate={
        isZooming  ? 'clicked' :
        isFading   ? 'fading'  :
        undefined
      }
      className="mb-7"
    >
      {/* Source row */}
      <div className="flex items-center gap-3 mb-[6px]">
        <div
          className="w-[26px] h-[26px] rounded-full flex-shrink-0 flex items-center justify-center text-[11px] font-bold"
          style={{ background: result.faviconBg, color: '#fff' }}
        >
          {result.favicon}
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[14px] truncate" style={{ color: '#e8eaed' }}>
            {result.siteName}
          </span>
          <span className="text-[12px] truncate" style={{ color: '#bdc1c6' }}>
            {result.urlDisplay}
          </span>
        </div>
        <MoreVertSVG />
      </div>

      {/* Title */}
      <motion.h3
        animate={{ color: titleColor, textDecoration: isHovered ? 'underline' : 'none' }}
        transition={{ duration: 0.15 }}
        className="text-[20px] leading-[1.3] font-normal cursor-pointer"
        style={{ color: titleColor }}
      >
        {result.title}
      </motion.h3>

      {/* Description */}
      <p className="text-[14px] leading-[1.58] mt-[3px] max-w-[600px]" style={{ color: '#bdc1c6' }}>
        <span style={{ color: '#9aa0a6' }}>{result.tag} · </span>
        {result.description}
      </p>
    </motion.div>
  );
});

ResultCard.displayName = 'ResultCard';

// ── Search Results Page ───────────────────────────────────────────────────────
const SearchResults = ({ stage, visible, onResultRef }) => {
  const tabs = ['All', 'Images', 'News', 'Videos', 'Maps', 'Shopping'];
  const activeTab = 'All';
  const isHovering = stage >= 7;
  const isClicked = stage >= 8;
  const isZooming = stage >= 9;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="results"
          variants={resultsPageVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 flex flex-col overflow-hidden"
          style={{ background: '#3c3c3c' }}
        >
          {/* ── Header Bar ── */}
          <motion.div
            variants={headerBarVariants}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0 flex items-center gap-3 px-4 py-2"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: '#3c3c3c' }}
          >
            {/* Google logo */}
            <div className="flex-shrink-0">
              <GoogleLogoSVG />
            </div>

            {/* White search bar — no duplicate icon */}
            <div
              className="flex-1 flex items-center gap-3 px-4 rounded-full"
              style={{
                background: '#ffffff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                maxWidth: 690,
                height: 44,
              }}
            >
              <SearchIconSVG />
              <span className="flex-1 text-[16px] truncate" style={{ color: '#202124' }}>
                Lalith Aditya
              </span>
              {/* Right of bar: Mic divider Lens */}
              <div className="flex items-center gap-3">
                <MicIconSVG />
                <span style={{ width: 1, height: 20, background: '#dadce0', flexShrink: 0 }} />
                <LensIconSVG />
              </div>
            </div>

            {/* Far-right: Waffle + Avatar */}
            <div className="flex items-center gap-2 ml-2">
              <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10">
                <WaffleSVG />
              </button>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-medium flex-shrink-0"
                style={{ background: '#1a73e8', color: '#fff' }}
              >
                L
              </div>
            </div>
          </motion.div>

          {/* ── Tabs ── */}
          <div
            className="flex-shrink-0 flex items-center gap-1 px-4 md:px-6 overflow-x-auto"
            style={{ borderBottom: '1px solid #3c4043' }}
          >
            {tabs.map((tab) => (
              <div
                key={tab}
                className="flex-shrink-0 px-4 py-3 text-[14px] cursor-default relative"
                style={{
                  color: tab === activeTab ? '#8ab4f8' : '#9aa0a6',
                  borderBottom: tab === activeTab ? '3px solid #8ab4f8' : '3px solid transparent',
                  marginBottom: '-1px',
                }}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* ── Body: results + knowledge panel ── */}
          <div className="flex-1 overflow-hidden flex">
            <div className="flex-1 overflow-y-auto px-4 md:px-6 lg:px-[140px] py-4">
              {/* Stats */}
              <p className="text-[13px] mb-5" style={{ color: '#9aa0a6' }}>
                About 4,820,000 results (0.38 seconds)
              </p>

              {/* Result cards */}
              <motion.div
                variants={resultCardContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {SEARCH_RESULTS.map((result, i) => (
                  <ResultCard
                    key={result.id}
                    result={result}
                    ref={i === 0 ? onResultRef : undefined}
                    isHovered={isHovering && i === 0}
                    isClicked={isClicked && i === 0}
                    isZooming={isZooming && i === 0}
                    isFading={isZooming && i !== 0}
                  />
                ))}
              </motion.div>
            </div>

            {/* ── Knowledge Panel ── */}
            <div
              className="hidden lg:flex flex-shrink-0 px-4 py-4 overflow-y-auto"
              style={{ width: '360px', paddingTop: '16px', paddingRight: '24px' }}
            >
              <KnowledgePanel visible={true} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchResults;
