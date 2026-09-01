// ─── animations.js ───────────────────────────────────────────────────────────
// Framer Motion variant objects reused across GoogleIntro components.

/** Homepage container: exit by sliding up + fading */
export const homePageVariants = {
  visible: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
};

/** Results page: enter by sliding up from below */
export const resultsPageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
};

/** Stagger container for autocomplete suggestions */
export const suggestionContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
  exit: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

/** Individual suggestion item */
export const suggestionItemVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.12 },
  },
};

/** Knowledge panel: slide in from right */
export const knowledgePanelVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.3 },
  },
};

/** Results stats + individual result cards stagger */
export const resultCardContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

export const resultCardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

/** Header bar slide down on results page */
export const headerBarVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

/** Whole Google overlay: final dissolve out */
export const overlayExitVariants = {
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.7, ease: 'easeInOut' },
  },
};

/**
 * Whole-overlay cinematic exit — the ENTIRE Google page zooms in
 * (as if you are entering the website through the screen) while
 * blurring and fading out. Looks infinitely better than zooming
 * a single result card.
 */
export const overlayZoomExit = {
  idle:   { opacity: 1, scale: 1,    filter: 'blur(0px)' },
  exiting: {
    opacity: [1, 1,    0.6, 0],
    scale:   [1, 1.03, 1.07, 1.12],
    filter:  ['blur(0px)', 'blur(0px)', 'blur(6px)', 'blur(14px)'],
    transition: {
      duration: 0.85,
      ease: [0.4, 0, 0.6, 1],
      times: [0, 0.2, 0.65, 1],
    },
  },
};

/**
 * Clicked result card: small tactile pulse to confirm the click,
 * then a gentle bright glow — no full-screen zoom on the card itself.
 */
export const resultClickVariants = {
  idle:    { scale: 1,    opacity: 1 },
  clicked: {
    scale:   [1, 1.015, 1.008],
    opacity: [1, 1,     0.9],
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exiting: {
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

/** Non-clicked results fade out quickly when click fires */
export const otherResultsFadeVariants = {
  normal:  { opacity: 1 },
  fading:  {
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};
