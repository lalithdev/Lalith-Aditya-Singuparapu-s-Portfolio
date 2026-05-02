import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FiCopy, FiArrowUpRight, FiCheck, FiMail, FiMapPin } from 'react-icons/fi';
import { useState } from 'react';
import Magnetic from '../common/Magnetic';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = portfolioData.personal.email;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-48 relative bg-transparent">
      
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* EXECUTIVE CTA */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.6em]">Initialize Protocol</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[120px] font-bold text-white mb-12 tracking-tighter leading-[0.85]"
          >
            LET'S BUILD THE <br />
            <span className="text-zinc-800">FUTURE.</span>
          </motion.h2>

          <div className="flex flex-col items-center gap-12">
            <Magnetic>
              <button 
                onClick={copyToClipboard}
                className="group relative flex items-center gap-4 bg-gradient-to-r from-pink-500 to-violet-500 text-white px-12 py-5 rounded-full font-bold text-lg transition-all hover:from-pink-600 hover:to-violet-600 shadow-[0_20px_50px_rgba(236,72,153,0.3)]"
              >
                <span>{copied ? "IDENTITY COPIED" : "ESTABLISH CONNECTION"}</span>
                {copied ? <FiCheck className="w-5 h-5" /> : <FiMail className="w-5 h-5" />}
              </button>
            </Magnetic>
            
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em]">Direct Access: <span className="text-white">{email}</span></span>
            </div>
          </div>
        </div>

        {/* ARCHITECTURAL FOOTER INFO */}
        <div className="grid lg:grid-cols-12 gap-16 pt-24 border-t border-white/5 items-start">
          
          <div className="lg:col-span-4 space-y-10">
            <div className="flex items-center gap-4 text-zinc-400">
              <FiMapPin className="w-5 h-5 text-pink-500" />
              <span className="text-sm font-medium tracking-tight">{portfolioData.personal.location}</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Open for world-class engineering opportunities and strategic product partnerships.
            </p>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em] mb-10">Digital Ecosystem</h4>
            <ul className="grid grid-cols-2 gap-6">
              {[
                { name: "Linkedin", href: portfolioData.personal.linkedin },
                { name: "GitHub", href: portfolioData.personal.github },
                { name: "Twitter", href: "#" },
                { name: "Instagram", href: "#" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
                  >
                    <span className="text-sm font-bold uppercase tracking-widest">{link.name}</span>
                    <FiArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em] mb-10">System Status</h4>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Available for Q2 2026</div>
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Global Remote</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}