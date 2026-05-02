import { portfolioData } from '../../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-zinc-900 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold tracking-tighter">
            <span className="text-zinc-100">L</span>
            <span className="text-pink-500">A</span>
          </div>
          <span className="text-zinc-600">© {currentYear}</span>
        </div>

        <p className="text-zinc-500 text-sm font-mono">
          Architected with React & Framer Motion
        </p>

        <div className="flex gap-6 text-sm text-zinc-500">
          <a href={portfolioData.personal.github} className="hover:text-zinc-300 transition-colors">GitHub</a>
          <a href={portfolioData.personal.linkedin} className="hover:text-zinc-300 transition-colors">LinkedIn</a>
        </div>

      </div>
    </footer>
  );
}
