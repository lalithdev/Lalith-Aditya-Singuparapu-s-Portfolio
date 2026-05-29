import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

import certifyMe1 from '../../assets/images/Project/CertifyMe/certifymeprojectimage1.png';
import certifyMe2 from '../../assets/images/Project/CertifyMe/certifymeprojectimage2.png';
import certifyMe3 from '../../assets/images/Project/CertifyMe/certifymeprojectimage3.png';

import manage1 from '../../assets/images/Project/ManageYourProject/mnpprojectimage1.png';
import manage2 from '../../assets/images/Project/ManageYourProject/mnpprojectimage2.png';
import manage3 from '../../assets/images/Project/ManageYourProject/mnpprojectimage3.png';

import portfolio1 from '../../assets/images/Project/Portfolio/portfolioprojectimage1.png';
import portfolio2 from '../../assets/images/Project/Portfolio/portfolioprojectimage2.png';
import portfolio3 from '../../assets/images/Project/Portfolio/portfolioprojectimage3.png';

import bookMyCare1 from '../../assets/images/Project/BookMyCare/bookmycare1.png';
import bookMyCare2 from '../../assets/images/Project/BookMyCare/bookmycare2.png';
import bookMyCare3 from '../../assets/images/Project/BookMyCare/bookmycare3.png';

const PROJECTS = [
  {
    number: '01',
    category: 'Full Stack · Production',
    name: 'CertifyMe',
    liveUrl: 'https://certifymeonline.vercel.app/',
    githubUrl:
      'https://github.com/lalithdev/CertifyMe-Certification-Tracking-Platform.git',
    col1Image1: certifyMe1,
    col1Image2: certifyMe2,
    col2Image: certifyMe3,
  },
  {
    number: '02',
    category: 'Full Stack · SaaS',
    name: 'BookMyCare',
    liveUrl: '#',
    githubUrl:
      'https://github.com/lalithdev/BookMyCare-Patient-Appointment-Booking-System.git',
    col1Image1: bookMyCare1,
    col1Image2: bookMyCare2,
    col2Image: bookMyCare3,
  },
  {
    number: '03',
    category: 'Platform Engineering',
    name: 'ManageYourProject',
    liveUrl: 'https://manageyourproject.vercel.app',
    githubUrl:
      'https://github.com/lalithdev/FEDF-P35-PROJECT-MANAGEMENT-PORTAL.git',
    col1Image1: manage1,
    col1Image2: manage2,
    col2Image: manage3,
  },
  {
    number: '04',
    category: 'Identity · Portfolio',
    name: 'Lalith Dev',
    liveUrl: 'https://lalithdevportfolio.vercel.app',
    githubUrl:
      'https://github.com/lalithdev/Lalith-Aditya-Singuparapu-s-Portfolio',
    col1Image1: portfolio1,
    col1Image2: portfolio2,
    col2Image: portfolio3,
  },
];

function ProjectCard({ project, index, progress, range, targetScale }) {
  const container = useRef(null);

  // Stacking scale used while cards are scrolling normally
  const stackingScale = useTransform(progress, range, [1, targetScale]);
  
  // Cinematic closing animations applied individually to each card
  // This allows us to avoid transforming the parent wrapper which would break sticky
  const closeScale = useTransform(progress, [0.75, 1], [1, 0.92]);
  const closeY = useTransform(progress, [0.75, 1], [0, -180]);
  const closeOpacity = useTransform(progress, [0.8, 1], [1, 0]);

  return (
    <div
      ref={container}
      className="sticky top-24 md:top-32 h-[85vh] w-full"
    >
      <motion.div
        style={{
          scale: closeScale,
          y: closeY,
          opacity: closeOpacity,
        }}
        className="h-full w-full"
      >
        <motion.article
          style={{
            scale: stackingScale,
            top: `calc(-5vh + ${index * 25}px)`,
          }}
          className="
            relative
            origin-top
            mx-auto
            h-full
            w-full
            flex
            flex-col
            gap-4
            sm:gap-6
            md:gap-8
            rounded-[40px]
            sm:rounded-[50px]
            md:rounded-[60px]
            border
            border-white
            bg-[#0C0C0C]
            p-4
            sm:p-6
            md:p-8
          "
        >
          {/* TOP ROW */}
          <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-6">

            <div className="flex flex-row items-start gap-3 sm:gap-6 md:gap-10 min-w-0 w-full">

              {/* NUMBER */}
              <div
                className="
                  shrink-0
                  font-display
                  font-black
                  text-[#D7E2EA]
                  leading-none
                  tracking-[-0.08em]
                  select-none
                "
                style={{
                  fontSize: 'clamp(2.5rem, 10vw, 140px)',
                }}
              >
                {project.number}
              </div>

              {/* META */}
              <div className="flex flex-col gap-1 sm:gap-2.5 pt-1.5 sm:pt-3 md:pt-4 min-w-0 flex-1">

                <span
                  className="
                    font-mono
                    uppercase
                    tracking-[0.2em]
                    text-[#D7E2EA]/60
                  "
                  style={{
                    fontSize: 'clamp(0.65rem, 1vw, 0.85rem)',
                  }}
                >
                  {project.category}
                </span>

                <h3
                  className="
                    font-display
                    font-bold
                    uppercase
                    text-[#D7E2EA]
                    leading-none
                    tracking-tight
                  "
                  style={{
                    fontSize: 'clamp(1.2rem, 2.4vw, 2.3rem)',
                  }}
                >
                  {project.name}
                </h3>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="shrink-0 self-start sm:self-auto pt-1 sm:pt-2 md:pt-3 flex flex-row items-center gap-3 w-full sm:w-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-full
                    border
                    border-white
                    hover:bg-white/5
                    text-white/70
                    hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  <FiGithub className="w-4 h-4" />
                </a>
              )}

              <a
                href={project.name === 'BookMyCare' ? undefined : project.liveUrl}
                target={project.name === 'BookMyCare' ? undefined : "_blank"}
                rel="noreferrer"
                onClick={(e) => {
                  if (project.name === 'BookMyCare') e.preventDefault();
                }}
                className={`
                  inline-flex
                  items-center
                  justify-center
                  px-10
                  py-3.5
                  rounded-full
                  border
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  transition-all
                  duration-300
                  ${project.name === 'BookMyCare'
                    ? 'border-white/20 text-white/30 cursor-not-allowed'
                    : 'border-white hover:bg-white/10 text-white'
                  }
                `}
              >
                LIVE PROJECT
              </a>
            </div>
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-[1fr_2fr] gap-3 sm:gap-4 md:gap-5 flex-1 min-h-0">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 h-full min-h-0">

              {/* TOP IMAGE */}
              <div className="overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[32px] flex-1 w-full relative">
                <img
                  src={project.col1Image1}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  draggable={false}
                />
              </div>

              {/* BOTTOM IMAGE */}
              <div className="overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[32px] flex-1 w-full relative">
                <img
                  src={project.col1Image2}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  draggable={false}
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[32px] h-full w-full relative">
              <img
                src={project.col2Image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
                draggable={false}
              />
            </div>
          </div>
        </motion.article>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(
    sectionProgress,
    [0.75, 1],
    [1, 0.92]
  );

  const y = useTransform(
    sectionProgress,
    [0.75, 1],
    [0, -180]
  );

  const opacity = useTransform(
    sectionProgress,
    [0.8, 1],
    [1, 0]
  );

  const clipPath = useTransform(
    sectionProgress,
    [0.75, 1],
    [
      "inset(0% 0% 0% 0% round 40px)",
      "inset(18% 0% 0% 0% round 40px)",
    ]
  );

  return (
    <section id="projects" ref={sectionRef} className="relative w-full -mt-10 sm:-mt-12 md:-mt-14">
      
      {/* 
        STICKY ANIMATED BACKGROUND 
        This is a h-screen background that stays stuck on the screen as you scroll through the section.
        When sectionProgress hits 0.75, it scales down visually without breaking any inner sticky cards!
      */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="sticky top-0 h-[100vh] w-full overflow-hidden">
          <motion.div
            style={{
              scale,
              y,
              opacity,
              clipPath,
            }}
            className="
              w-full
              h-full
              bg-[#0C0C0C]
              rounded-t-[40px]
              sm:rounded-t-[50px]
              md:rounded-t-[60px]
              border-t
              border-white/10
            "
          />
        </div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 pt-24 md:pt-32">
        {/* TITLE */}
        <motion.div style={{ opacity, y }}>
          <motion.h2
            initial={{
              opacity: 0,
              y: 120,
              scale: 0.85,
              filter: 'blur(10px)',
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-center
              font-display
              font-black
              tracking-[-0.08em]
              leading-none
              mb-16
              sm:mb-20
              md:mb-28
              text-white
              select-none
            "
            style={{
              fontSize: 'clamp(3.5rem, 9vw, 6.8rem)',
            }}
          >
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e0e0e0] to-[#808080]">
              Projects
            </span>
          </motion.h2>
        </motion.div>

        {/* STACK */}
        <div className="mx-auto max-w-7xl relative pb-[100vh]">
          {PROJECTS.map((project, i) => {
            const targetScale = 1 - (PROJECTS.length - i) * 0.05;

            return (
              <ProjectCard
                key={project.number}
                project={project}
                index={i}
                progress={sectionProgress}
                range={[
                  i * 0.25,
                  1,
                ]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}