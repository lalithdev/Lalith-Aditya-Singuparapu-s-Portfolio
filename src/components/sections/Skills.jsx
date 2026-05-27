import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { useRef, useState, useEffect } from 'react';

const EXPO = [0.16, 1, 0.3, 1];

// Convert hex accent to rgba for glass glow usage
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function SkillCard({ cat, idx, scrollYProgress, scrollRange }) {
  const accent = cat.accent || '#6366f1';
  const [layout, setLayout] = useState({ cardCenter: 0, deltaP: 0.1 });

  useEffect(() => {
    const calculateCenter = () => {
      const width = window.innerWidth;
      let cardWidth = 340;
      let gap = 28;
      let paddingLeft = 80;

      if (width < 768) {
        cardWidth = 280;
        gap = 28;
        paddingLeft = 24;
      } else if (width < 1280) {
        cardWidth = 310;
        gap = 28;
        paddingLeft = 48;
      }

      const cardStart = paddingLeft + idx * (cardWidth + gap);
      const cardCenter = cardStart + cardWidth / 2;
      const deltaP = scrollRange > 0 ? 250 / scrollRange : 0.1;

      setLayout({ cardCenter, deltaP });
    };

    calculateCenter();
    window.addEventListener('resize', calculateCenter);
    return () => window.removeEventListener('resize', calculateCenter);
  }, [scrollRange, idx]);

  const pCenter = scrollRange > 0 ? (layout.cardCenter - window.innerWidth / 2) / scrollRange : 0.5;
  const pStart = pCenter - layout.deltaP;
  const pEnd = pCenter + layout.deltaP;

  const y = useTransform(
    scrollYProgress,
    [pStart - 0.05, pStart, pCenter, pEnd, pEnd + 0.05],
    [0, 0, -42, 0, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [pStart - 0.05, pStart, pCenter, pEnd, pEnd + 0.05],
    [1, 1, 1.08, 1, 1]
  );

  const shadow = useTransform(
    scrollYProgress,
    [pStart - 0.05, pStart, pCenter, pEnd, pEnd + 0.05],
    [
      '0 2px 10px rgba(0,0,0,0.03)',
      '0 2px 10px rgba(0,0,0,0.03)',
      `0 24px 48px rgba(0,0,0,0.12), 0 0 25px ${hexToRgba(accent, 0.12)}`,
      '0 2px 10px rgba(0,0,0,0.03)',
      '0 2px 10px rgba(0,0,0,0.03)'
    ]
  );

  const border = useTransform(
    scrollYProgress,
    [pStart - 0.05, pStart, pCenter, pEnd, pEnd + 0.05],
    [
      '1px solid rgba(0,0,0,0.06)',
      '1px solid rgba(0,0,0,0.06)',
      `1px solid ${hexToRgba(accent, 0.35)}`,
      '1px solid rgba(0,0,0,0.06)',
      '1px solid rgba(0,0,0,0.06)'
    ]
  );

  return (
    <motion.div
      key={cat.title}
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: idx * 0.06, duration: 0.7, ease: EXPO }}
      className="shrink-0"
    >
      <motion.div
        className="
          group
          relative
          rounded-[28px]
          bg-white/70
          p-6
          w-[280px]
          sm:w-[310px]
          md:w-[340px]
          h-[230px]
          sm:h-[250px]
          md:h-[270px]
        "
        style={{
          border,
          boxShadow: shadow,
          y,
          scale,
        }}
      >
        <div className="relative z-10 flex flex-col h-full">
          {/* Card header */}
          <div className="flex items-center gap-3 mb-5">
            {/* Icon container */}
            <div
              className="
                w-11
                h-11
                rounded-full
                bg-black
                text-white
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              {cat.icon}
            </div>

            <h3
              className="
                text-[1.05rem]
                font-[700]
                uppercase
                tracking-[-0.03em]
                text-[#111827]
              "
            >
              {cat.title}
            </h3>
          </div>

          {/* Divider */}
          <div
            className="mb-5 h-px bg-black/5"
          />

          {/* Skill pills */}
          <div className="flex flex-wrap gap-1.5 overflow-y-auto pr-1">
            {cat.items.map((skill) => (
              <span
                key={skill}
                className="
                  px-4
                  py-2
                  rounded-xl
                  text-[0.82rem]
                  font-medium
                  border
                  border-black/5
                  bg-[#f3f4f6]
                  text-[#4b5563]
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const { skills } = portfolioData;
  const categories = skills.categories ?? [];
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const calculateRange = () => {
      if (sliderRef.current) {
        const range = sliderRef.current.scrollWidth - window.innerWidth;
        setScrollRange(range > 0 ? range : 0);
      }
    };

    const timer = setTimeout(calculateRange, 100);
    window.addEventListener('resize', calculateRange);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateRange);
    };
  }, [categories.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <div
      ref={containerRef}
      id="skills"
      className="relative h-[220vh]"
    >
      <section
        className="
          sticky
          bg-[#f8f8f8]
          rounded-[48px]
          overflow-hidden
          flex
          flex-col
          justify-center
          py-6
          md:py-12
        "
        style={{
          top: '64px',
          height: 'calc(100vh - 64px)',
        }}
      >
        {/* CONTENT */}
        <div className="w-full relative z-10">
          
          {/* Section header */}
          <div className="flex flex-col items-center text-center px-6 md:px-12 lg:px-20 pt-8 md:pt-16 lg:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EXPO }}
            >
              <h2
                className="
                  font-display
                  text-center
                  uppercase
                  font-black
                  tracking-[-0.08em]
                  leading-none
                  text-[#050505]
                  select-none
                "
                style={{
                  fontSize: 'clamp(5rem, 14vw, 10rem)',
                }}
              >
                SKILLS
              </h2>
            </motion.div>
          </div>

          {/* Top Divider Line */}
          <div className="px-6 md:px-12 lg:px-20">
            <div className="w-full h-px bg-black/5 mt-6 mb-6 md:mt-10 md:mb-10 lg:mt-14 lg:mb-14" />
          </div>

          {/* SKILL CARDS HORIZONTAL SLIDER */}
          <div className="overflow-hidden w-full pt-32 pb-24 -mt-32 -mb-24">
            <motion.div
              ref={sliderRef}
              style={{ x }}
              className="flex gap-7 px-6 md:px-12 lg:px-20 w-max"
            >
              {categories.map((cat, idx) => (
                <SkillCard
                  key={cat.title}
                  cat={cat}
                  idx={idx}
                  scrollYProgress={scrollYProgress}
                  scrollRange={scrollRange}
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom Divider Line */}
          <div className="px-6 md:px-12 lg:px-20">
            <div className="w-full h-px bg-black/5 mt-6 mb-6 md:mt-10 md:mb-10 lg:mt-14 lg:mb-14" />
          </div>
        </div>
      </section>
    </div>
  );
}
