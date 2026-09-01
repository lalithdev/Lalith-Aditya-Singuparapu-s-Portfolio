import certifyMe1 from '../assets/images/Project/CertifyMe/certifymeprojectimage1.png';
import certifyMe2 from '../assets/images/Project/CertifyMe/certifymeprojectimage2.png';
import certifyMe3 from '../assets/images/Project/CertifyMe/certifymeprojectimage3.png';

import bookMyCare1 from '../assets/images/Project/BookMyCare/bookmycare1.png';
import bookMyCare2 from '../assets/images/Project/BookMyCare/bookmycare2.png';
import bookMyCare3 from '../assets/images/Project/BookMyCare/bookmycare3.png';

import manage1 from '../assets/images/Project/ManageYourProject/mnpprojectimage1.png';
import manage2 from '../assets/images/Project/ManageYourProject/mnpprojectimage2.png';
import manage3 from '../assets/images/Project/ManageYourProject/mnpprojectimage3.png';

import portfolio1 from '../assets/images/Project/Portfolio/portfolioprojectimage1.png';
import portfolio2 from '../assets/images/Project/Portfolio/portfolioprojectimage2.png';
import portfolio3 from '../assets/images/Project/Portfolio/portfolioprojectimage3.png';

/**
 * projects.js — Canonical source of truth for portfolio projects.
 */

export const projectsData = [
  {
    number: '01',
    category: 'Full Stack · Production',
    name: 'CertifyMe',
    description:
      'Architected a scalable certification tracking platform for enterprise-level academic monitoring. Engineered a robust backend using Spring Boot and Hibernate, supported by a high-performance React-driven management layer.',
    techStack: ['React', 'Spring Boot', 'Hibernate', 'PostgreSQL', 'Tailwind'],
    liveUrl: 'https://certifymeonline.vercel.app/',
    githubUrl:
      'https://github.com/lalithdev/CertifyMe-Certification-Tracking-Platform.git',
    col1Image1: certifyMe1,
    col1Image2: certifyMe2,
    col2Image: certifyMe3,
    tags: ['Production Infrastructure', 'Academic Tracking'],
  },
  {
    number: '02',
    category: 'Full Stack · SaaS',
    name: 'BookMyCare',
    description:
      'Production-grade modular monolith for hospital appointment scheduling with JWT + RBAC (Patient, Doctor, Nurse, Admin), DB-level slot locking, Razorpay payments, OTP auth (email + SMS), Flyway migrations, and event-driven notifications.',
    techStack: ['React', 'Spring Boot 3.3', 'PostgreSQL', 'JWT', 'Razorpay', 'Flyway'],
    liveUrl: '#',
    githubUrl:
      'https://github.com/lalithdev/BookMyCare-Patient-Appointment-Booking-System.git',
    col1Image1: bookMyCare1,
    col1Image2: bookMyCare2,
    col2Image: bookMyCare3,
    tags: ['Modular Monolith', 'Healthcare SaaS'],
  },
  {
    number: '03',
    category: 'Platform Engineering',
    name: 'ManageYourProject',
    description:
      'Engineered a centralized portal for large-scale academic project submission and evaluation. Scaled the system to handle multi-stage workflows and automated teacher-student interactions.',
    techStack: ['Node.js', 'React', 'PostgreSQL'],
    liveUrl: 'https://manageyourproject.vercel.app',
    githubUrl:
      'https://github.com/lalithdev/FEDF-P35-PROJECT-MANAGEMENT-PORTAL.git',
    col1Image1: manage1,
    col1Image2: manage2,
    col2Image: manage3,
    tags: ['System Design', 'Backend Architecture'],
  },
  {
    number: '04',
    category: 'Identity · Portfolio',
    name: 'Lalith Dev',
    description:
      'Designed a world-class, 3D interactive portfolio focusing on spatial UI and cinematic storytelling. Engineered with modern React architecture for extreme performance and luxury perception.',
    techStack: ['Framer Motion', 'React', 'Tailwind'],
    liveUrl: 'https://lalithdevportfolio.vercel.app',
    githubUrl:
      'https://github.com/lalithdev/Lalith-Aditya-Singuparapu-s-Portfolio',
    col1Image1: portfolio1,
    col1Image2: portfolio2,
    col2Image: portfolio3,
    tags: ['Spatial UI', 'Design Systems'],
  },
];
