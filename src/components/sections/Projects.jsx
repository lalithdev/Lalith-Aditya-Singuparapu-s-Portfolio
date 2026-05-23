import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';

import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiServer,
  FiCpu,
  FiShield,
  FiLayout,
  FiDatabase,
  FiCloud,
  FiZap,
  FiX,
} from 'react-icons/fi';

import certifyMeImg from '../../assets/images/certifymeprojectimage.png';
import portfolioImg from '../../assets/images/portfolioimage.png';
import manageProjectImg from '../../assets/images/manageyourprojectprojectimage.png';

const EXPO = [0.16, 1, 0.3, 1];

const PROJECTS = [
  {
    num: '01',
    category: 'System Architecture',
    title: 'CertifyMe: Certification Tracking Platform',
    tech: 'Spring Boot, ReactJS, PostgreSQL, REST APIs',
    period: 'Feb 2026 – Present',
    image: certifyMeImg,
    url: 'https://certifymeonline.vercel.app/',
    github: 'https://github.com/lalithdev/CertifyMe-Certification-Tracking-Platform.git',
    accent: '#2447FF',
    highlights: [
      'Production-ready platform for 4000+ students with certification workflows and approval pipelines.',
      'RBAC for students, faculty, and admins with real-time status updates.',
    ],
    context:
      'Built and deployed a production-ready full-stack platform supporting certification workflows and approval pipelines for 4000+ students.',
    metrics: [
      { label: 'Status', value: 'Live' },
      { label: 'Scale', value: '4000+ Users' },
      { label: 'Role', value: 'Full Stack' },
    ],
    features: [
      {
        text: 'Role-based access control for students, faculty, and administrators with secure validation and approval tracking.',
        icon: <FiShield />,
      },
      {
        text: 'Real-time certification status updates across the full approval pipeline.',
        icon: <FiServer />,
      },
      {
        text: 'Optimized PostgreSQL queries, reporting pipelines, and dashboard performance via indexing and query tuning.',
        icon: <FiDatabase />,
      },
      {
        text: 'Efficient database workflows for high-volume academic certification monitoring.',
        icon: <FiCpu />,
      },
    ],
  },

  {
    num: '02',
    category: 'Full Stack SaaS',
    title: 'BookMyCare: Patient Appointment Booking System',
    tech: 'Spring Boot, PostgreSQL, ReactJS, REST APIs',
    period: '2026 – Present',
    image: null,
    url: '#',
    github: 'https://github.com/lalithdev/BookMyCare-Patient-Appointment-Booking-System.git',
    accent: '#2447FF',
    highlights: [
      'Scalable appointment system with patient registration, scheduling, and secure role-based workflows.',
      'Production-oriented Spring Boot + PostgreSQL backend with auth and optimized relationships.',
    ],
    context:
      'Built a scalable full-stack patient appointment system with patient registration, doctor/admin modules, appointment scheduling, and secure role-based workflows.',
    metrics: [
      { label: 'Status', value: 'In Development' },
      { label: 'Stack', value: 'Full Stack' },
      { label: 'Role', value: 'Architect' },
    ],
    features: [
      {
        text: 'Patient registration, doctor/admin modules, and structured appointment scheduling.',
        icon: <FiServer />,
      },
      {
        text: 'Authentication, authorization, and optimized PostgreSQL database relationships.',
        icon: <FiShield />,
      },
      {
        text: 'Appointment booking logic and admin workflows via REST APIs.',
        icon: <FiDatabase />,
      },
      {
        text: 'Conflict-free scheduling focused on real-world hospital management.',
        icon: <FiZap />,
      },
    ],
  },

  {
    num: '03',
    category: 'Platform Engineering',
    title: 'ManageYourProject: Project Management Portal',
    tech: 'Node.js, ReactJS, PostgreSQL, REST APIs',
    period: 'Nov 2025 – Present',
    image: manageProjectImg,
    url: 'https://manageyourproject.vercel.app',
    github: 'https://github.com/lalithdev/FEDF-P35-PROJECT-MANAGEMENT-PORTAL.git',
    accent: '#2447FF',
    highlights: [
      'Scalable submission and evaluation platform with end-to-end workflow automation.',
      'Backend APIs for submissions, mentor reviews, faculty approvals, and tracking.',
    ],
    context:
      'Built a scalable project submission and evaluation platform for students and faculty with end-to-end workflow automation and structured approval pipelines.',
    metrics: [
      { label: 'Status', value: 'Production' },
      { label: 'Scale', value: 'Academic' },
      { label: 'Role', value: 'Full Stack' },
    ],
    features: [
      {
        text: 'Project submission, mentor reviews, faculty approvals, and evaluation tracking.',
        icon: <FiLayout />,
      },
      {
        text: 'Academic workflow management through structured REST APIs.',
        icon: <FiServer />,
      },
      {
        text: 'Normalized PostgreSQL schema for reliable project data modeling.',
        icon: <FiDatabase />,
      },
      {
        text: 'Optimized backend request handling for faster tracking and reporting.',
        icon: <FiCloud />,
      },
    ],
  },

  {
    num: '04',
    category: 'Identity Design',
    title: 'Professional Portfolio',
    tech: 'React, Framer Motion, Tailwind, Vite',
    period: '2025 – Present',
    image: portfolioImg,
    url: 'https://lalithdevportfolio.vercel.app',
    github: 'https://github.com/lalithdev',
    accent: '#2447FF',
    highlights: [
      'Interactive portfolio with spatial UI, motion design, and performance-focused React architecture.',
      'Custom design system with cinematic sections for projects, skills, and certifications.',
    ],
    context:
      'Designed and engineered a high-performance personal portfolio with spatial UI, Framer Motion animations, and a cohesive dark-theme design system.',
    metrics: [
      { label: 'Status', value: 'Live' },
      { label: 'Deploy', value: 'Vercel' },
      { label: 'Role', value: 'UI Architect' },
    ],
    features: [
      {
        text: 'Custom animated backgrounds and scroll-driven section layouts.',
        icon: <FiCpu />,
      },
      {
        text: 'Framer Motion orchestration for smooth page transitions and micro-interactions.',
        icon: <FiLayout />,
      },
      {
        text: 'Optimized asset loading for fast first paint and smooth navigation.',
        icon: <FiZap />,
      },
      {
        text: 'Responsive layouts for projects, skills, and certification showcases.',
        icon: <FiShield />,
      },
    ],
  },
];

function splitProjectTitle(title) {
  const [primary, secondary] = title.split(/:\s+/, 2);

  return {
    primary: primary?.trim() || title,
    secondary: secondary?.trim() || '',
  };
}

/* ─── PROJECT CARD ─────────────────────────────────────────── */

function ProjectRow({
  project,
  onKnowMore,
  isActive,
}) {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        ease: EXPO,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.06]
        bg-[#050816]
        p-6
        md:p-7
        flex
        flex-col
        h-full
        transition-transform
        duration-500
        hover:-translate-y-2
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            rgba(11,16,45,0.98) 0%,
            rgba(7,10,30,0.98) 45%,
            rgba(3,5,18,1) 100%
          )
        `,
        boxShadow: `
          0 0 0 1px rgba(36,71,255,0.08),
          0 30px 80px rgba(0,0,0,0.55),
          0 0 120px rgba(36,71,255,0.08)
        `,
      }}
    >
      {/* Inner glow overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-40
          pointer-events-none
          rounded-[28px]
        "
        style={{
          background: `
            radial-gradient(
              circle at top left,
              rgba(80,120,255,0.18),
              transparent 40%
            )
          `,
        }}
      />

      {/* Background number watermark */}
      <div
        className="
          absolute
          -top-4
          left-4
          pointer-events-none
          select-none
          opacity-20
        "
      >
        <span className="font-display font-black text-8xl md:text-[120px] leading-none text-transparent"
              style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)' }}>
          {project.num}
        </span>
      </div>

      {/* Header: Number + Badge */}
      <div className="relative z-10 flex items-start justify-between mb-6">
        <span className="font-display font-black text-5xl md:text-6xl tracking-tighter text-white">
          {project.num}
        </span>

        <div
          className="
            px-4
            py-2
            rounded-full
            border
            border-[#00e5ff]/30
            text-[10px]
            uppercase
            tracking-[0.3em]
            font-mono
            text-[#00e5ff]
            bg-[#00e5ff]/5
          "
        >
          WEB
        </div>
      </div>

      {/* Content area */}
      <div className="relative z-10 flex flex-col flex-1">
        {(() => {
          const { primary, secondary } = splitProjectTitle(project.title);

          return (
            <h3
              className="
                max-w-[420px]
                font-display
                text-[22px]
                md:text-[24px]
                leading-[1.1]
                font-bold
                tracking-tight
                text-white
                mb-4
              "
            >
              <span className="block">{primary}</span>
              {secondary ? (
                <span className="block mt-1 text-[18px] md:text-[20px] text-white/85 leading-[1.15]">
                  {secondary}
                </span>
              ) : null}
            </h3>
          );
        })()}

        <div className="mb-4">
          <p
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.35em]
              mb-3
            "
            style={{
              color: 'var(--color-accent)',
            }}
          >
            TECHSTACK USED
          </p>

          <p className="editorial-body text-sm leading-[1.8]">
            {project.tech}
          </p>
        </div>

        <p
          className="
            font-mono
            text-[10px]
            uppercase
            tracking-[0.35em]
            mb-5
          "
          style={{
            color: 'var(--color-accent)',
          }}
        >
          {project.period}
        </p>

        <ul className="space-y-3 mb-6">
          {project.highlights.map((line) => (
            <li
              key={line}
              className="
                editorial-body
                text-sm
                pl-5
                relative
                leading-[1.7]
              "
            >
              <span
                className="
                  absolute
                  left-0
                  top-[0.72em]
                  w-[6px]
                  h-[6px]
                  rounded-full
                  bg-[#36d7ff]
                "
              />

              {line}
            </li>
          ))}
        </ul>

        {/* Image — desktop screenshot frame */}
        <div
          className="
            relative
            mt-auto
            overflow-hidden
            rounded-[18px]
            border
            border-white/[0.06]
            cursor-pointer
            group/img
          "
          style={{ aspectRatio: '16 / 9' }}
          onMouseEnter={() => setImgHovered(true)}
          onMouseLeave={() => setImgHovered(false)}
          onClick={() =>
            project.url &&
            project.url !== '#' &&
            window.open(project.url, '_blank', 'noreferrer')
          }
        >
          {project.image ? (
            <motion.img
              src={project.image}
              alt={project.title}
              className="
                w-full
                h-full
                object-cover
                object-top
                grayscale-[20%]
                group-hover/img:grayscale-0
                transition-all
                duration-700
              "
              animate={{
                scale: imgHovered ? 1.04 : 1,
              }}
              transition={{
                duration: 0.7,
                ease: EXPO,
              }}
            />
          ) : (
            <div
              className="
                w-full
                h-full
                flex
                items-center
                justify-center
              "
              style={{
                background: '#0a0a0a',
              }}
            >
              <span className="editorial-num-bg opacity-40">
                LA
              </span>
            </div>
          )}

          <AnimatePresence>
            {imgHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  gap-4
                "
                style={{
                  background: 'rgba(5,5,5,0.55)',
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-12
                    h-12
                    flex
                    items-center
                    justify-center
                    border
                    border-white/15
                    backdrop-blur-md
                    bg-white/[0.04]
                    rounded-full
                  "
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGithub className="w-5 h-5 text-white" />
                </a>

                {project.url !== '#' && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      w-12
                      h-12
                      flex
                      items-center
                      justify-center
                      border
                      border-white/15
                      backdrop-blur-md
                      bg-white/[0.04]
                      rounded-full
                    "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink className="w-5 h-5 text-white" />
                  </a>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Know More — below the image */}
        <div className="pt-5">
          <button
            type="button"
            onClick={onKnowMore}
            className="
              group/km
              inline-flex
              items-center
              gap-3
              font-display
              font-bold
              text-[10px]
              uppercase
              tracking-[0.4em]
              transition-colors
            "
            style={{
              color: 'var(--color-accent)',
            }}
          >
            <span className="relative">
              {isActive ? 'Close' : 'Know More'}

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  w-0
                  h-px
                  bg-current
                  transition-all
                  duration-300
                  group-hover/km:w-full
                "
              />
            </span>

            <motion.span
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {isActive ? (
                <FiX className="w-4 h-4" />
              ) : (
                <FiArrowUpRight className="w-4 h-4" />
              )}
            </motion.span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── DETAIL VIEW ──────────────────────────────────────────── */

function DetailView({ project }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: EXPO }}
      className="
        mt-24
        rounded-[36px]
        border
        border-white/[0.06]
        p-8
        md:p-12
        bg-[#050816]
        grid
        lg:grid-cols-12
        gap-12
        lg:gap-16
        items-start
      "
      style={{
        background:
          'linear-gradient(180deg, rgba(10,15,40,0.98) 0%, rgba(3,6,20,1) 100%)',
        boxShadow:
          '0 10px 40px rgba(0,0,0,0.35)',
      }}
    >
      <div className="lg:col-span-4 space-y-10">
        <div>
          <span className="editorial-eyebrow block mb-4">
            System Context
          </span>

          <h2 className="editorial-heading editorial-heading-md mb-3">
            {project.title}
          </h2>

          <p
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-widest
              mb-6
            "
            style={{
              color: 'var(--color-accent)',
            }}
          >
            {project.period}
          </p>

          <p className="editorial-body text-base">
            {project.context}
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              editorial-link
              inline-flex
              items-center
              gap-2
            "
          >
            <FiGithub className="w-4 h-4" />
            Repository
          </a>

          {project.url !== '#' && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="
                editorial-link
                inline-flex
                items-center
                gap-2
              "
            >
              <FiExternalLink className="w-4 h-4" />
              Live System
            </a>
          )}
        </div>

        <div className="editorial-panel p-8 space-y-6">
          {project.metrics.map((m, i) => (
            <div
              key={i}
              className="
                flex
                justify-between
                items-end
                pb-4
                border-b
                border-white/[0.06]
              "
            >
              <span
                className="editorial-eyebrow"
                style={{
                  opacity: 0.6,
                }}
              >
                {m.label}
              </span>

              <span
                className="
                  font-display
                  font-bold
                  text-lg
                "
                style={{
                  color: '#f5f5f5',
                }}
              >
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-8 space-y-10">
        <div
          className="
            relative
            aspect-video
            overflow-hidden
            editorial-panel
            rounded-[28px]
          "
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full
                h-full
                object-cover
                object-top
              "
            />
          ) : (
            <div
              className="
                w-full
                h-full
                flex
                items-center
                justify-center
              "
              style={{
                background: '#0a0a0a',
              }}
            >
              <span className="editorial-num-bg">
                LA
              </span>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {project.features.map((f, i) => (
            <div
              key={i}
              className="
                flex
                gap-4
                editorial-panel
                p-5
              "
            >
              <div
                className="
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
                style={{
                  color: 'var(--color-accent)',
                  border: '1px solid var(--color-border)',
                }}
              >
                {f.icon}
              </div>

              <p className="editorial-body text-sm">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── MAIN PROJECTS SECTION ────────────────────────────────── */

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  const handleKnowMore = useCallback(
    (idx) => {
      if (current === idx && showDetail) {
        setShowDetail(false);
        return;
      }

      setCurrent(idx);
      setShowDetail(true);

      setTimeout(() => {
        const detailEl = document.getElementById(
          'project-detail-view'
        );

        if (detailEl) {
          detailEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    },
    [current, showDetail]
  );

  return (
    <section
      id="projects"
      className="editorial-section relative"
    >
      <div
        className="
          editorial-glow
          w-[560px]
          h-[560px]
          left-[-10%]
          top-[0%]
          opacity-35
        "
      />

      <div className="editorial-container relative z-10">
        {/* ── Section header ── */}
        <div
          className="
            grid
            lg:grid-cols-12
            gap-8
            items-end
            mb-8
            md:mb-10
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-px bg-[#00e5ff] opacity-80" />

              <span className="font-mono text-[10px] tracking-[0.38em] uppercase text-[#00e5ff]">
                MY PROJECTS
              </span>
            </div>

            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-[70px] tracking-tight leading-none text-white">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e0e0e0] to-[#808080]">Projects</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="
              lg:col-span-4
              flex
              items-center
              justify-end
            "
          >
            <p
              className="
                font-mono
                text-[10px]
                tracking-[0.2em]
                uppercase
                text-white/50
                whitespace-nowrap
              "
            >
              4 builds · full stack engineering
            </p>
          </motion.div>
        </div>

        {/* ── Infinite Scroll Marquee ── */}
        <div className="relative overflow-hidden w-full py-4 -mx-4 px-4 md:-mx-8 md:px-8">
          {/* Left and right fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-6 shrink-0 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30, // Adjust speed
            }}
          >
            {[...PROJECTS, ...PROJECTS].map((project, idx) => {
              const originalIndex = idx % PROJECTS.length;

              return (
                <div key={`${project.num}-${idx}`} className="w-[320px] md:w-[420px] shrink-0 h-full">
                  <ProjectRow
                    project={project}
                    onKnowMore={() => handleKnowMore(originalIndex)}
                    isActive={current === originalIndex && showDetail}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Detail view ── */}
        <div id="project-detail-view">
          <AnimatePresence mode="wait">
            {showDetail && (
              <DetailView
                key={PROJECTS[current].num}
                project={PROJECTS[current]}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}