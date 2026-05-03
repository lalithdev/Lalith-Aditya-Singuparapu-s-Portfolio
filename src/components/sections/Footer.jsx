import { portfolioData } from '../../data/portfolio';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 relative"
      style={{ borderTop: '1px solid rgba(59,130,246,0.08)', background: 'rgba(3,5,10,0.80)' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="flex items-center gap-2">
          <span className="font-display font-black text-xl" style={{ color: '#60a5fa', letterSpacing: '-0.02em' }}>L</span>
          <span className="font-display font-light text-xl" style={{ color: '#818cf8', letterSpacing: '-0.02em' }}>A</span>
          <span className="font-mono text-xs ml-2" style={{ color: '#2a3a5a' }}>© {currentYear}</span>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: '#2a3a5a' }}>
          Architected with React & Framer Motion
        </p>

        <div className="flex gap-5">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="btn-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
}
