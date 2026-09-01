// ─── constants.js ────────────────────────────────────────────────────────────
// All static data consumed by the GoogleIntro components. No JSX, pure data.

export const SEARCH_QUERY = 'Lalith Aditya';

/** Autocomplete suggestions that animate in after focus */
export const SEARCH_SUGGESTIONS = [
  { id: 1, text: 'Lalith Aditya portfolio' },
  { id: 2, text: 'Lalith Aditya github' },
  { id: 3, text: 'Lalith Aditya AI engineer' },
  { id: 4, text: 'Lalith Aditya projects' },
];

/** Google search result cards */
export const SEARCH_RESULTS = [
  {
    id: 'portfolio',
    favicon: 'LA',
    faviconBg: '#8ab4f8',
    siteName: 'lalithaditya.dev',
    url: 'https://lalithaditya.dev',
    urlDisplay: 'lalithaditya.dev › home',
    title: 'Lalith Aditya | AI & Full Stack Engineer',
    description:
      'Building intelligent applications with AI, cloud, and modern full-stack technologies. Explore projects, certifications, and architectural work.',
    tag: 'Portfolio',
  },
  {
    id: 'github',
    favicon: 'GH',
    faviconBg: '#333',
    siteName: 'github.com',
    url: 'https://github.com/lalithdev',
    urlDisplay: 'github.com › lalithdev',
    title: 'Lalith-Aditya · GitHub',
    description:
      '35+ repositories · BookMyCare · CertifyMe · Spring Boot microservices and React full-stack projects. Active open source contributor.',
    tag: 'GitHub',
  },
  {
    id: 'linkedin',
    favicon: 'in',
    faviconBg: '#0a66c2',
    siteName: 'linkedin.com',
    url: 'https://linkedin.com/in/lalith-aditya-singuparapu',
    urlDisplay: 'linkedin.com › in › lalith-aditya-singuparapu',
    title: 'Lalith Aditya Singuparapu — LinkedIn',
    description:
      'AI/ML Enthusiast · Full Stack Developer · B.Tech CSE, KL University · OCI Certified Generative AI Professional. Open to opportunities.',
    tag: 'LinkedIn',
  },
  {
    id: 'projects',
    favicon: 'PR',
    faviconBg: '#34a853',
    siteName: 'lalithaditya.dev',
    url: '#projects',
    urlDisplay: 'lalithaditya.dev › projects',
    title: 'Projects — BookMyCare, CertifyMe & More',
    description:
      'BookMyCare: Patient Appointment Booking Platform with JWT, RBAC, and Razorpay. CertifyMe: Enterprise certification tracking for thousands of users.',
    tag: 'Projects',
  },
];

/** Knowledge panel data (right side) */
export const KNOWLEDGE_PANEL = {
  name: 'Lalith Aditya Singuparapu',
  initials: 'LA',
  title: 'Software Engineer',
  subtitle: 'AI/ML Enthusiast · Full Stack Developer',
  university: 'K L University, B.Tech CSE · 2024–2028',
  skills: ['React', 'Spring Boot', 'PostgreSQL', 'AWS', 'Machine Learning', 'NLP', 'Java', 'Oracle Cloud'],
  links: [
    { label: 'GitHub', url: 'https://github.com/lalithdev', color: '#e8eaed' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/lalith-aditya-singuparapu', color: '#8ab4f8' },
    { label: 'Resume', url: '#', color: '#81c995' },
  ],
};

/**
 * Human-paced typing delay per character.
 * Returns ms to wait BEFORE appending the next character.
 * @param {string} char — the character about to be typed
 * @param {number} index — position in the string
 */
export function humanTypingDelay(char, index) {
  // Pause after every space
  if (char === ' ') return 160 + Math.random() * 60;
  // Occasional cognitive micro-pause every 3–4 chars
  if (index > 0 && index % (3 + Math.floor(Math.random() * 2)) === 0) {
    return 100 + Math.random() * 150;
  }
  // Normal character
  return 55 + Math.random() * 75;
}
