import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
  { name: "Projects", id: "projects" }
];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          Lalith<span className="text-cyan-400">.</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <li
                key={link.id}
                className="hover:text-cyan-400 transition duration-300 cursor-pointer"
                onClick={() =>
                document.getElementById(link.id)?.scrollIntoView({
                    behavior: "smooth",
                })
                }
            >
                {link.name}
            </li>
            ))}
        </ul>

        {/* Resume Button */}
        <button className="hidden md:block px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-medium text-black">
          Resume
        </button>

        {/* Mobile Menu */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#111827] border-t border-white/10 px-6 py-4">
          <ul className="space-y-4 text-gray-300">
            {navLinks.map((link) => (
              <li
                key={link}
                className="hover:text-cyan-400 transition cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;