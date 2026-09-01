import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchSuggestions from './SearchSuggestions';
import { homePageVariants } from './animations';

// ─────────────────────────────────────────────────────────────────────────────
// Pixel-perfect Google 2026 SVG icons
// ─────────────────────────────────────────────────────────────────────────────

const GoogleWordmark = () => (
  <svg viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg"
    style={{ width: 'clamp(180px, 25vw, 272px)', height: 'auto' }}>
    <path fill="#4285f4" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-8.98-6.26-15.48-12.51-15.48s-12.51 6.5-12.51 15.48 6.26 15.48 12.51 15.48 12.51-6.5 12.51-15.48z"/>
    <path fill="#ea4335" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.86 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-8.98-6.26-15.48-12.51-15.48s-12.51 6.5-12.51 15.48 6.26 15.48 12.51 15.48 12.51-6.5 12.51-15.48z"/>
    <path fill="#fbbc05" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.08-9.66-21.08-22.09 0-12.54 9.99-22.18 21.08-22.18 5.3 0 9.5 2.35 11.68 4.96h.34v-3.7h9.25zm-8.56 20.92c0-8.56-5.88-15.48-12.18-15.48-6.47 0-12.18 6.92-12.18 15.48 0 8.48 5.71 15.48 12.18 15.48 6.3 0 12.18-6.92 12.18-15.48z"/>
    <path fill="#4285f4" d="M225.03 2v65.65h-9.5V2z"/>
    <path fill="#34a853" d="M262.05 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-20.08 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.58-22.18 20.92-22.18 11.42 0 17.64 9.07 19.32 13.94l.92 2.27-29.74 12.3c2.27 4.45 6.05 6.72 10.58 6.72 4.62 0 8.23-2.27 10.53-5.74zm-22.18-12.01l20.41-8.48c-1.1-2.18-3.53-3.7-6.47-3.7-4.87-.01-11.59 3.52-13.94 12.18z"/>
    <path fill="#ea4335" d="M35.29 41.41V32h25.88c.32 1.53.47 3.37.47 5.21 0 6.22-1.8 14.18-7.39 19.74-5.46 5.66-12.51 8.42-21.43 8.42-17.65 0-32.83-14.37-32.83-32.69S15.17 0 32.82 0c9.66 0 16.89 3.79 22.35 8.99l-6.72 6.72c-3.95-3.71-9.16-6.64-15.63-6.64-12.01 0-21.42 9.74-21.42 21.84 0 12.09 9.41 21.84 21.42 21.84 6.89 0 10.92-2.77 13.44-5.3 2.02-2.02 3.36-4.96 3.86-9.07H35.29z"/>
  </svg>
);

/** Magnifying glass — Google's exact filled path, grey */
const SearchIconGrey = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    style={{ width: 20, height: 20, flexShrink: 0 }} fill="#9aa0a6">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

/** Google Microphone — exact multicolour paths */
const MicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    style={{ width: 22, height: 22, flexShrink: 0 }}>
    <path fill="#4285f4" d="M12 15c1.66 0 3-1.31 3-2.97V5.03C15 3.37 13.66 2 12 2S9 3.37 9 5.03v6.97c0 1.66 1.34 2.97 3 2.97z"/>
    <path fill="#34a853" d="M11 18.08h2V22h-2z"/>
    <path fill="#fbbc05" d="M7.05 16.87c-1.27-1.33-2.05-2.81-2.05-4.67h2c0 1.45.57 2.42 1.47 3.38v.32l-1.15 1.18-.27-.21z"/>
    <path fill="#ea4335" d="M12 16.93a4.97 5.25 0 0 1-3.54-1.55l-1.41 1.49C8.31 18.21 10.07 19 12 19c3.87 0 6.99-2.92 6.99-7h-2c0 2.92-2.23 4.93-4.99 4.93z"/>
  </svg>
);

/** Google Lens — camera with dot */
const LensIcon = () => (
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

/** Google Labs beaker — exact shape from reference */
const LabsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    style={{ width: 20, height: 20, flexShrink: 0 }} fill="none">
    <path
      d="M9 3h6M9 3v7.5L4.5 18A2 2 0 0 0 6.4 21h11.2a2 2 0 0 0 1.9-3L15 10.5V3"
      stroke="#e8eaed" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      opacity="0.8"
    />
    <circle cx="9.5" cy="17" r="1" fill="#34a853"/>
    <circle cx="13" cy="15" r="1.2" fill="#4285f4"/>
  </svg>
);

/** 9-dot waffle — Google's exact 3×3 dot grid */
const WaffleIcon = () => (
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

/** Gemini-style sparkle for AI Mode */
const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: 13, height: 13 }} fill="currentColor">
    <path d="M12 2C12 2 13.5 8 18 9.5C13.5 11 12 17 12 17C12 17 10.5 11 6 9.5C10.5 8 12 2 12 2Z"/>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────

const SearchHomePage = ({ stage, typedText }) => {
  const isFocused       = stage >= 1;
  const showSuggestions = stage >= 2 && stage < 4;

  // White bar — Google's actual shadow on focus
  const barShadow = isFocused
    ? '0 1px 6px rgba(32,33,36,.28), 0 0 0 1px rgba(32,33,36,.08)'
    : '0 2px 5px 1px rgba(32,33,36,.16)';

  return (
    <AnimatePresence>
      {stage < 4 && (
        <motion.div
          key="homepage"
          variants={homePageVariants}
          initial="visible"
          exit="exit"
          className="absolute inset-0 flex flex-col"
          style={{ background: '#3c3c3c' }}
        >
          {/* ── Top-right nav: Gmail · Images · Labs · Waffle · Avatar ── */}
          <div className="flex items-center justify-end gap-3 px-4 py-2 flex-shrink-0">
            <a className="text-[13px] cursor-default px-2 py-1 rounded-full hover:bg-black/10"
              style={{ color: '#e8eaed' }}>Gmail</a>
            <a className="text-[13px] cursor-default px-2 py-1 rounded-full hover:bg-black/10"
              style={{ color: '#e8eaed' }}>Images</a>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10">
              <LabsIcon />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10">
              <WaffleIcon />
            </button>
            {/* Avatar */}
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-medium select-none flex-shrink-0"
              style={{ background: '#1a73e8', color: '#fff' }}>
              L
            </div>
          </div>

          {/* ── Centre: logo + search bar ── */}
          <div className="flex flex-col items-center flex-1" style={{ paddingTop: '10vh' }}>

            {/* Google Wordmark */}
            <div className="mb-8">
              <GoogleWordmark />
            </div>

            {/* ── White search bar ── */}
            <div className="w-full px-4" style={{ maxWidth: 584 }}>
              <motion.div
                animate={{ boxShadow: barShadow }}
                transition={{ duration: 0.2 }}
                style={{
                  background: '#ffffff',
                  borderRadius: showSuggestions ? '24px 24px 0 0' : '24px',
                  boxShadow: barShadow,
                  position: 'relative',
                }}
              >
                {/* Input row */}
                <div className="flex items-center px-4 gap-3" style={{ height: 46 }}>
                  {/* Left: search icon */}
                  <SearchIconGrey />

                  {/* Typing area */}
                  <div className="flex-1 relative flex items-center overflow-hidden" style={{ height: 24 }}>
                    {/* Placeholder — only when nothing typed yet */}
                    {!typedText && !isFocused && (
                      <span className="absolute left-0 text-[16px] whitespace-nowrap select-none"
                        style={{ color: '#5f6368' }}>
                        Search Google or type a URL
                      </span>
                    )}
                    {/* Typed text */}
                    <span className="absolute left-0 text-[16px] whitespace-nowrap"
                      style={{ color: '#202124' }}>
                      {typedText}
                    </span>
                    {/* Blinking cursor */}
                    {isFocused && stage < 4 && (
                      <span className="absolute"
                        style={{
                          left: `${typedText.length * 9.4}px`,
                          top: 2, bottom: 2,
                          width: 1,
                          background: '#202124',
                          animation: 'blink-cursor 1s step-start infinite',
                        }}
                      />
                    )}
                  </div>

                  {/* Right: Mic · divider · Lens · AI Mode */}
                  <div className="flex items-center gap-3">
                    <MicIcon />
                    <span style={{ width: 1, height: 20, background: '#dadce0', flexShrink: 0 }} />
                    <LensIcon />
                    {/* AI Mode badge */}
                    <div className="hidden sm:flex items-center gap-1 px-[10px] py-[4px] rounded-full text-[13px] font-medium select-none"
                      style={{
                        border: '1px solid #dadce0',
                        color: '#4285f4',
                        whiteSpace: 'nowrap',
                        background: '#f8f9fa',
                      }}>
                      <SparkleIcon />
                      AI Mode
                    </div>
                  </div>
                </div>

                {/* Autocomplete suggestions */}
                <SearchSuggestions visible={showSuggestions} typedText={typedText} />
              </motion.div>

              {/* Google Search / I'm Feeling Lucky — before suggestions */}
              {!showSuggestions && !isFocused && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-center mt-7 gap-3 flex-wrap"
                >
                  {['Google Search', "I'm Feeling Lucky"].map((label) => (
                    <button key={label}
                      className="text-[14px] px-4 py-2 rounded cursor-default hover:border-[#c6c6c6] hover:shadow-sm"
                      style={{
                        background: '#f8f9fa',
                        color: '#3c4043',
                        border: '1px solid #f8f9fa',
                      }}>
                      {label}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Language links below buttons */}
            {!isFocused && (
              <p className="mt-6 text-[13px]" style={{ color: '#e8eaed', opacity: 0.65 }}>
                Google offered in:{' '}
                <span className="cursor-default" style={{ color: '#8ab4f8' }}>हिन्दी</span>
                {' · '}
                <span className="cursor-default" style={{ color: '#8ab4f8' }}>বাংলা</span>
                {' · '}
                <span className="cursor-default" style={{ color: '#8ab4f8' }}>తెలుగు</span>
              </p>
            )}
          </div>

          {/* ── Footer ── */}
          <div className="flex-shrink-0 flex flex-col sm:flex-row justify-between items-center px-6 py-3 gap-2 text-[13px]"
            style={{ borderTop: '1px solid rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.55)' }}>
            <div className="flex gap-5 flex-wrap">
              {['Advertising', 'Business', 'How Search works'].map((t) => (
                <span key={t} className="cursor-default hover:underline">{t}</span>
              ))}
            </div>
            <div className="flex gap-5 flex-wrap">
              {['Privacy', 'Terms', 'Settings'].map((t) => (
                <span key={t} className="cursor-default hover:underline">{t}</span>
              ))}
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchHomePage;
