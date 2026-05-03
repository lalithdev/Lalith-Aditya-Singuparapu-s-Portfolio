import { FiCode, FiDatabase, FiLayout, FiServer, FiCpu, FiCloud, FiGitBranch, FiTerminal, FiGlobe, FiZap } from 'react-icons/fi';
import certifyMeImg from '../assets/images/certifymeprojectimage.png';
import manageProjectImg from '../assets/images/manageyourprojectprojectimage.png';

export const portfolioData = {
  personal: {
    name: "Lalith Aditya Singuparapu",
    role: "AI Full Stack Architect",
    tagline: "Designing intelligent systems where product, engineering, and AI converge.",
    specialization: "AI Architecture + Distributed Systems + Full Stack Engineering",
    education: "B.Tech CSE, K L University (2024 - 2028) • CGPA: 9.09",
    location: "Vijayawada, India",
    github: "https://github.com/lalithdev",
    linkedin: "https://linkedin.com/in/lalith-aditya-singuparapu",
    email: "2400031810cse4@gmail.com",
    currentlyBuilding: "CertifyMe Production Infrastructure",
    codingProfiles: {
      hackerrank: "https://hackerrank.com/h2400031810",
      leetcode: "https://leetcode.com/kl2400031810",
      codechef: "https://codechef.com/users/kl2400031810"
    }
  },

  about: {
    description: "I'm a CSE student who enjoys building practical full stack and AI projects that solve real problems. Most of my work is with React, Spring Boot, and PostgreSQL, and I learn best by shipping features, fixing bugs, and improving performance through hands-on project experience.",
    stats: [
      { value: "99.9%", label: "Stability Focus" },
      { value: "High", label: "System Throughput" }
    ],
    previouslyWorkedOn: [
      { name: "HackerRank", role: "Engineering Intern" },
      { name: "Code4Change", role: "System Lead" },
      { name: "Oracle Cloud", role: "Certified Architect" }
    ]
  },

  educationTimeline: [
    {
      degree: "B.Tech Computer Science Engineering",
      institution: "K L University, AP",
      period: "2024-2028",
      achievements: ["9.09 CGPA", "AI Specialization", "Hackathon Finalist"],
      description: "Focusing on Software Architecture, Distributed Systems, and AI. Developing the technical foundation to build enterprise-grade software."
    },
    {
      degree: "Intermediate",
      institution: "Board of Intermediate Education",
      period: "2022-2024",
      achievements: ["88.6%", "Science Stream"],
      description: "Focused on Mathematics, Physics, and Chemistry, building a strong analytical foundation for engineering."
    },
    {
      degree: "Secondary Education (10th)",
      institution: "Ravindra Bharathi Public School",
      period: "2021-2022",
      achievements: ["90% Grade"],
      description: "Completed matriculation with a focus on core scientific and mathematical principles."
    }
  ],

  skills: {
    frontend: [
      { name: "React Architecture", icon: <FiLayout className="w-4 h-4" /> },
      { name: "Advanced TypeScript", icon: <FiCode className="w-4 h-4" /> },
      { name: "Framer Motion", icon: <FiLayout className="w-4 h-4" /> },
    ],
    backend: [
      { name: "Java Systems", icon: <FiTerminal className="w-4 h-4" /> },
      { name: "Spring Boot Microservices", icon: <FiServer className="w-4 h-4" /> },
      { name: "Node.js Architecture", icon: <FiServer className="w-4 h-4" /> },
      { name: "Distributed APIs", icon: <FiGlobe className="w-4 h-4" /> },
    ],
    database: [
      { name: "PostgreSQL Engineering", icon: <FiDatabase className="w-4 h-4" /> },
      { name: "Database Design", icon: <FiDatabase className="w-4 h-4" /> },
      { name: "SQL Optimization", icon: <FiDatabase className="w-4 h-4" /> },
    ],
    cloudAndTools: [
      { name: "AWS Cloud Infrastructure", icon: <FiCloud className="w-4 h-4" /> },
      { name: "OCI Architecture", icon: <FiCloud className="w-4 h-4" /> },
      { name: "CI/CD Pipelines", icon: <FiZap className="w-4 h-4" /> },
      { name: "System Design", icon: <FiCode className="w-4 h-4" /> },
    ]
  },

  flagshipProject: {
    name: "CertifyMe: Enterprise Tracking System",
    type: "Production Infrastructure",
    description: "Architected a scalable certification tracking platform for enterprise-level academic monitoring. Engineered a robust backend using Spring Boot and Hibernate, supported by a high-performance React-driven management layer.",
    techStack: ["React", "Spring Boot", "Hibernate", "PostgreSQL", "Tailwind"],
    features: [
      "Architected real-time tracking workflows for thousands of concurrent users.",
      "Engineered automated certification verification systems reducing manual load by 70%.",
      "Designed a distributed database schema for multi-tenant administrative monitoring.",
      "Implemented enterprise-grade security protocols for data integrity."
    ],
    deploymentStatus: "Production Ready",
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Scale", value: "Enterprise" },
      { label: "Role", value: "Lead Architect" }
    ],
    github: "https://github.com/lalithdev",
    demo: "#",
    image: certifyMeImg,
    category: "System Architecture"
  },

  selectedWork: [
    {
      title: "Distributed Project Portal",
      description: "Engineered a centralized portal for large-scale academic project submission and evaluation. Scaled the system to handle multi-stage workflows and automated teacher-student interactions.",
      tech: ["Node.js", "React", "PostgreSQL"],
      tags: ["System Design", "Backend Architecture"],
      icon: <FiServer className="w-6 h-6" />,
      image: manageProjectImg,
      category: "Platform Engineering"
    },
    {
      title: "Personal Brand Architecture",
      description: "Designed a world-class, 3D interactive portfolio focusing on spatial UI and cinematic storytelling. Engineered with modern React architecture for extreme performance and luxury perception.",
      tech: ["Framer Motion", "React", "Tailwind"],
      tags: ["Spatial UI", "Design Systems"],
      icon: <FiLayout className="w-6 h-6" />,
      image: null,
      category: "Identity Design"
    }
  ],

  experience: [
    {
      role: "Engineering Intern",
      company: "HackerRank",
      period: "Sep 2025",
      description: "Architected early-stage features and gained deep insight into professional software development cycles and large-scale system maintenance.",
      skills: ["System Design", "Analytical Engineering"]
    },
    {
      role: "System Lead (Hackathon)",
      company: "Code4Change - KL University",
      period: "Oct 2025",
      description: "Led the architectural design and rapid development of technical solutions in a national-level hackathon, focusing on deployment speed and scalability.",
      skills: ["Leadership", "Rapid Architecture"]
    },
    {
      role: "Domain Architect (Intern)",
      company: "Agriculture Systems - KL University",
      period: "Sep 2025",
      description: "Analyzed complex irrigation challenges and engineered technology-driven strategies to optimize water utilization in distributed agricultural environments.",
      skills: ["Domain Analysis", "System Strategy"]
    }
  ],

  certifications: [
    {
      title: "OCI 2025 Certified Generative AI Professional",
      issuer: "Oracle Architecture Authority",
      icon: <FiCpu className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "OCI 2025 Certified Data Science Professional",
      issuer: "Oracle Data Authority",
      icon: <FiDatabase className="w-5 h-5 text-indigo-400" />
    }
  ],

  achievements: [
    "HackerRank Global Profile: hackerrank.com/h2400031810",
    "LeetCode Technical Profile: leetcode.com/kl2400031810",
    "CodeChef Competitive Profile: codechef.com/users/kl2400031810"
  ]
};
