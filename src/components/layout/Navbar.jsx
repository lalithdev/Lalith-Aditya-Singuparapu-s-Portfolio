import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Ecosystem", href: "#skills" },
    { name: "Experience", href: "#experience" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Identity */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-elite group-hover:scale-110 transition-transform">
            L
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-white font-bold text-sm tracking-tighter leading-none">LALITH ADITYA</span>
            <span className="text-indigo-500 font-mono text-[9px] uppercase tracking-[0.2em] leading-none mt-1">Architect</span>
          </div>
        </motion.div>

        {/* Minimalist Navigation */}
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-zinc-500 hover:text-white font-bold text-[10px] uppercase tracking-[0.3em] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTA */}
          <a 
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all shadow-elite"
          >
            Connect
          </a>
        </div>

      </div>
    </nav>
  );
}