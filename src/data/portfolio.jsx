import { FiCode, FiDatabase, FiLayout, FiServer, FiCpu, FiCloud, FiGitBranch, FiTerminal, FiGlobe, FiZap, FiBook, FiUsers } from 'react-icons/fi';
import certifyMeImg from '../assets/images/Project/CertifyMe/certifymeprojectimage1.png';
import manageProjectImg from '../assets/images/Project/ManageYourProject/mnpprojectimage1.png';
import portfolioImg from '../assets/images/Project/Portfolio/portfolioprojectimage3.png';

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
    description: "I'm a Computer Science undergraduate focused on building practical, reliable software that solves real-world problems. My primary interests lie in backend engineering, full-stack development, scalable application design, and AI-powered solutions. I enjoy turning ideas into functional products, working across APIs, databases, and application architecture, while continuously strengthening my problem-solving, system design, and software engineering skills.",
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
      degree: "Bachelors of Technology",
      institution: "K L University, AP",
      period: "2024-2028",
      achievements: ["9.2 CGPA", "Computer Science and Engineering", "Specialization on AI NLP"],
      description: "Focusing on Software Architecture, Distributed Systems, and AI. Developing the technical foundation to build enterprise-grade software."
    },
    {
      degree: "Intermediate",
      institution: "Board of Intermediate Education",
      period: "2022-2024",
      achievements: ["88.6%", "MPC(Science) Stream"],
      description: "Focused on Mathematics, Physics, and Chemistry, building a strong analytical foundation for engineering."
    },
    {
      degree: "Secondary Education (10th grade)",
      institution: "Ravindra Bharathi Public School",
      period: "2021-2022",
      achievements: ["89.5% Percentage", "Matriculation"],
      description: "Completed matriculation with a focus on core scientific and mathematical principles."
    }
  ],

  skills: {
    categories: [
      {
        title: 'Programming Languages',
        items: ['Java', 'C', 'JavaScript', 'SQL'],
        icon: <FiCode className="w-4 h-4" />,
        accent: '#60a5fa',
      },
      {
        title: 'Web Development',
        items: ['ReactJS', 'Node.js', 'Spring Boot', 'Hibernate', 'HTML', 'CSS'],
        icon: <FiLayout className="w-4 h-4" />,
        accent: '#818cf8',
      },
      {
        title: 'Databases',
        items: ['MySQL', 'PostgreSQL'],
        icon: <FiDatabase className="w-4 h-4" />,
        accent: '#22d3ee',
      },
      {
        title: 'Cloud Technologies',
        items: ['AWS (EC2, S3 Basics)', 'Oracle Cloud Infrastructure'],
        icon: <FiCloud className="w-4 h-4" />,
        accent: '#a78bfa',
      },
      {
        title: 'Developer Tools',
        items: ['Git/GitHub', 'VS Code', 'Eclipse'],
        icon: <FiGitBranch className="w-4 h-4" />,
        accent: '#34d399',
      },
      {
        title: 'Development Practices',
        items: ['CI/CD Basics', 'Agile Development', 'REST APIs'],
        icon: <FiZap className="w-4 h-4" />,
        accent: '#f472b6',
      },
      {
        title: 'Core Concepts',
        items: ['Data Structures', 'OOPs', 'Database Management Systems', 'Operating Systems'],
        icon: <FiBook className="w-4 h-4" />,
        accent: '#fb923c',
      },
      {
        title: 'Soft Skills',
        items: ['Problem Solving', 'Analytical Thinking', 'Teamwork', 'Leadership'],
        icon: <FiUsers className="w-4 h-4" />,
        accent: '#38bdf8',
      },
    ],
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
      title: "BookMyCare: Hospital Appointment System",
      description: "Production-grade modular monolith for hospital appointment scheduling with JWT + RBAC (Patient, Doctor, Nurse, Admin), DB-level slot locking, Razorpay payments, OTP auth (email + SMS), Flyway migrations, and event-driven notifications.",
      tech: ["React", "Spring Boot 3.3", "PostgreSQL", "JWT", "Razorpay", "Flyway"],
      tags: ["Modular Monolith", "Healthcare SaaS"],
      icon: <FiServer className="w-6 h-6" />,
      image: null,
      category: "Full Stack SaaS"
    },
    {
      title: "Project Management Portal",
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
      image: portfolioImg,
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
