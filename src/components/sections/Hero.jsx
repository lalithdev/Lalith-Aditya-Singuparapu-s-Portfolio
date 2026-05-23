import { motion } from 'framer-motion';
import heroImg from '../../assets/images/lalithheroimgfinal.png';

const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-center"
      style={{ backgroundColor: '#020202', overflow: 'hidden' }}
    >
      {/* 1. CINEMATIC BACKGROUND IMAGE */}
      <img
        src={heroImg}
        alt="Cinematic Atmosphere"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* VIGNETTE TO HIDE EDGES */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 250px rgba(0,0,0,0.95)',
        }}
      />

      {/* 5. NOISE TEXTURE */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: noiseSvg,
          opacity: 0.06,
          mixBlendMode: 'overlay',
        }}
      />

      {/* BOTTOM FADE — deepens toward digital transition */}
      <div
        className="absolute bottom-0 left-0 w-full z-[1] pointer-events-none"
        style={{
          height: '42%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.88) 100%)',
          backdropFilter: 'blur(0.4px)',
        }}
      />

      {/* 6. EDITORIAL TYPOGRAPHY */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h1 
            className="font-body text-white/85"
            style={{ 
              fontSize: 'clamp(1.8rem, 3.8vw, 4.2rem)', 
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              textShadow: '0 4px 30px rgba(0,0,0,0.6)',
            }}
          >
            Hi, I'm{' '}
            <span 
              className="font-serif italic" 
              style={{ fontSize: '1.05em', letterSpacing: '0', color: 'rgba(255,255,255,0.88)' }}
            >
              Lalith.
            </span>
            <br />
            an{' '}
            <span 
              className="font-serif italic" 
              style={{ fontSize: '1.05em', letterSpacing: '0', color: 'rgba(255,255,255,0.88)' }}
            >
              AI Full Stack Architect
            </span>
            <br />
            based in India. Here you<br />
            can see some of my latest<br />
            engineering & projects.
          </h1>
        </motion.div>
      </div>

      {/* 7. MINIMAL FOOTER METADATA */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-10 left-0 w-full px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center z-10 gap-4"
        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}
      >
        <a 
          href="mailto:lalithadityasinguparapu@gmail.com" 
          className="font-body text-[10px] sm:text-xs text-white/70 hover:text-white tracking-widest uppercase transition-colors text-center"
        >
          lalithadityasinguparapu@gmail.com
        </a>
        <a 
          href="https://github.com/lalithdev" 
          target="_blank" 
          rel="noreferrer" 
          className="font-body text-[10px] sm:text-xs text-white/70 hover:text-white tracking-widest uppercase transition-colors text-center"
        >
          github.com/lalithdev
        </a>
        <span 
          className="font-body text-[10px] sm:text-xs text-white/70 tracking-widest uppercase text-center"
        >
          +91 8341647137
        </span>
      </motion.div>
    </section>
  );
}