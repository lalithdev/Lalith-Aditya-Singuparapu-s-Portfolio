import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { FaGithub, FaLinkedin, FaTwitter, FaTerminal } from 'react-icons/fa';
import portraitImg from '../../assets/images/Lalith_Passport_Size_photo_4x5-removebg-preview.png';
import Magnetic from '../common/Magnetic';
import { useEffect } from 'react';

export default function Hero() {
  const nameParts = portfolioData.personal.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  // 3D Tilt Logic for Portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 150, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const momentumTransition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202] perspective-1000">
      
      {/* Spectral Indigo Atmosphere */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-indigo-950/20 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-violet-900/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT: ARCHITECTURAL TYPOGRAPHY */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Currently Building Status */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-950/20 border border-indigo-500/20 mb-10 group cursor-default"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-indigo-400 font-mono text-[10px] uppercase tracking-[0.3em]">
              Currently Architecting: <span className="text-white">CertifyMe Infrastructure</span>
            </span>
          </motion.div>

          {/* Identity & Signature Statement */}
          <div className="relative mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={momentumTransition}
              className="text-7xl md:text-8xl lg:text-[120px] font-bold tracking-tighter text-white leading-[0.85] mb-8"
            >
              {firstName} <br />
              <span className="text-zinc-800">{lastName}</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...momentumTransition, delay: 0.2 }}
              className="text-2xl md:text-3xl text-zinc-400 font-medium leading-tight max-w-xl"
            >
              I design <span className="text-white">intelligent systems</span> where product, engineering, and AI converge.
            </motion.p>
          </div>

          {/* Social Interactions */}
          <div className="flex items-center gap-8 text-zinc-500">
            {[
              { icon: <FaLinkedin className="w-6 h-6" />, href: portfolioData.personal.linkedin },
              { icon: <FaGithub className="w-6 h-6" />, href: portfolioData.personal.github },
              { icon: <FaTwitter className="w-6 h-6" />, href: "#" }
            ].map((social, i) => (
              <Magnetic key={i}>
                <motion.a 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-indigo-500 transition-colors"
                >
                  {social.icon}
                </motion.a>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* RIGHT: SPATIAL PORTRAIT & SYSTEM READOUTS */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          
          <motion.div
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[450px] aspect-[4/5] group"
          >
            {/* 3D Glass Layer Background */}
            <div className="absolute -inset-4 bg-indigo-500/5 rounded-[4rem] blur-2xl group-hover:bg-indigo-500/10 transition-colors duration-1000" />
            
            <div className="relative w-full h-full overflow-hidden rounded-[3rem] border border-white/5 bg-zinc-900/10 backdrop-blur-md shadow-elite">
              <img 
                src={portraitImg} 
                alt="Lalith Aditya" 
                className="w-full h-full object-cover relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] scale-[1.05] group-hover:scale-100 transition-transform duration-1000"
              />
              
              {/* Gloss shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            </div>

            {/* System Readout: Engineering Philosophy Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -right-8 top-1/4 glass-panel p-6 rounded-2xl border border-indigo-500/20 hidden xl:block z-20 shadow-elite"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <FaTerminal className="w-3 h-3 text-indigo-500" />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Philosophy</span>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-bold text-white tracking-tight">Build for scale.</div>
                  <div className="text-xs font-bold text-white tracking-tight">Design for trust.</div>
                  <div className="text-xs font-bold text-white tracking-tight">Engineer for clarity.</div>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack Indicator */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -left-12 bottom-1/4 glass-panel p-5 rounded-2xl border border-indigo-500/20 hidden xl:block z-20 shadow-elite"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono text-indigo-500 uppercase tracking-[0.2em] mb-2">Core Stack</span>
                <span className="text-xs font-bold text-zinc-100 uppercase tracking-tighter">AI ARCHITECT</span>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-tighter">FULL STACK</span>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>

      {/* Background Spatial Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      {/* Bottom Cinematic Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none" />
    </section>
  );
}