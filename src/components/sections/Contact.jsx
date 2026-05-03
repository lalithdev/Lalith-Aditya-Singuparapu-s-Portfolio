import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FiCopy, FiArrowUpRight, FiCheck, FiMail, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import Magnetic from '../common/Magnetic';

const EXPO = [0.16, 1, 0.3, 1];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = portfolioData.personal.email;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { name: 'LinkedIn',  href: portfolioData.personal.linkedin, icon: <FaLinkedin /> },
    { name: 'GitHub',    href: portfolioData.personal.github,   icon: <FaGithub /> },
    { name: 'Twitter',   href: '#',                             icon: <FaTwitter /> },
    { name: 'Instagram', href: '#',                             icon: <FaInstagram /> },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Orb */}
      <div className="glow-orb w-[700px] h-[700px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)' }} />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* ── CTA block ── */}
        <div className="text-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="section-eyebrow">Initialize Protocol</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EXPO }}
            className="font-display font-black tracking-tighter leading-[0.88] mb-12"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)', color: '#e8f0ff' }}
          >
            LET'S BUILD THE <br />
            <span className="text-gradient">FUTURE.</span>
          </motion.h2>

          <div className="flex flex-col items-center gap-8">
            <Magnetic>
              <button
                id="contact-cta-btn"
                onClick={copyToClipboard}
                className="btn-primary text-base px-10 py-5"
                style={{ borderRadius: '100px', fontSize: '0.9rem' }}
              >
                {copied ? 'Email Copied!' : 'Copy Email Address'}
                {copied ? <FiCheck className="w-5 h-5" /> : <FiMail className="w-5 h-5" />}
              </button>
            </Magnetic>

            <div className="flex items-center gap-3">
              <div className="dot-live" />
              <span className="font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color: '#2a3a5a' }}>
                Direct Access: <span style={{ color: '#c7d9ff' }}>{email}</span>
              </span>
            </div>
          </div>
        </div>

        {/* ── Footer info grid ── */}
        <div
          className="grid lg:grid-cols-3 gap-16 pt-20 items-start"
          style={{ borderTop: '1px solid rgba(59,130,246,0.10)' }}
        >
          {/* Location */}
          <div className="space-y-6">
            <div className="flex items-center gap-3" style={{ color: '#7a8fbb' }}>
              <FiMapPin className="w-4 h-4" style={{ color: '#3b82f6' }} />
              <span className="font-body text-sm font-medium">{portfolioData.personal.location}</span>
            </div>
            <p className="font-body text-sm leading-relaxed max-w-xs" style={{ color: '#4a5a80' }}>
              Open for world-class engineering opportunities and strategic product partnerships.
            </p>
          </div>

          {/* Social links */}
          <div>
            <h4 className="font-mono text-[9px] uppercase tracking-[0.4em] mb-8" style={{ color: '#2a3a5a' }}>
              Digital Ecosystem
            </h4>
            <ul className="grid grid-cols-2 gap-5">
              {socials.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 group no-underline transition-colors"
                    style={{ color: '#4a5a80' }}
                  >
                    <span className="text-sm group-hover:text-blue-400 transition-colors">{link.icon}</span>
                    <span className="font-display font-bold text-xs uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                      {link.name}
                    </span>
                    <FiArrowUpRight
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      style={{ color: '#22d3ee' }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <h4 className="font-mono text-[9px] uppercase tracking-[0.4em] mb-8" style={{ color: '#2a3a5a' }}>
              System Status
            </h4>
            <div className="flex flex-wrap gap-3">
              <span className="badge">Available for Q2 2026</span>
              <span className="badge">Global Remote</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}