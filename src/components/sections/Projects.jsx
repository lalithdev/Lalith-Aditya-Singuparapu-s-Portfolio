import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "CertifyMe",
    subtitle: "Certification Tracking Platform",
    description:
      "A production-level full-stack platform that helps students track certifications and allows administrators to monitor progress, approvals, reminders, and analytics efficiently.",
    tech: [
      "ReactJS",
      "Spring Boot",
      "PostgreSQL",
      "REST APIs",
      "Production Deployment",
    ],
    status: "Live Production Project",
  },
  {
    title: "TrackYourProjects",
    subtitle: "Project Tracking Platform",
    description:
      "A project submission and evaluation platform where students can submit projects and faculty can review, evaluate, and manage project progress using structured workflows.",
    tech: [
      "ReactJS",
      "Node.js",
      "Frontend Deployment",
      "Workflow Management",
    ],
    status: "Frontend Live + Backend Expandable",
  },
  {
    title: "AI + NLP Systems",
    subtitle: "Intelligent Workflow Solutions",
    description:
      "Focused on building AI-assisted systems and NLP-driven workflows for scalable real-world problem solving, combining automation with full-stack architecture.",
    tech: [
      "AI Systems",
      "NLP",
      "Automation",
      "Scalable Architecture",
    ],
    status: "Strategic Focus Area",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-cyan-400 font-medium mb-3">
            Featured Projects
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Real systems, real impact
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                {/* Left */}
                <div className="flex-1">
                  <p className="text-cyan-400 text-sm font-medium mb-2">
                    {project.status}
                  </p>

                  <h3 className="text-3xl font-bold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xl text-gray-300 mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-4 min-w-[220px]">
                  <button className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold flex items-center justify-center gap-2">
                    Live Demo
                    <ExternalLink size={18} />
                  </button>

                  <button className="px-6 py-3 rounded-xl border border-white/20 hover:border-cyan-400 transition flex items-center justify-center gap-2">
                    GitHub
                    <FaGithub size={18} />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;