import { portfolioData } from '../../data/portfolio';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-5 relative bg-[#050505] flex flex-row flex-wrap items-center justify-center gap-3 md:gap-4"
    >
      <div className="text-white/60 text-[15px] md:text-base font-body tracking-wide flex items-center">
        All Rights Reserved By
        <span className="font-display leading-none select-none ml-2" style={{ letterSpacing: '-0.03em' }}>
          <span style={{ fontWeight: 600, color: '#f5f5f5' }}>Lalith</span>
          <span className="editorial-accent-serif" style={{ fontSize: '1.05em', marginLeft: '0.08em', color: 'var(--color-accent)' }}>
            Dev
          </span>
        </span>
      </div>
      <p className="text-white/60 text-[13px] md:text-sm font-body tracking-widest">
        &copy; {currentYear}
      </p>
    </footer>
  );
}
