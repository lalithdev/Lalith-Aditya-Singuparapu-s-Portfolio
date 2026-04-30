import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import StackEcosystem from './components/sections/StackEcosystem';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import CustomCursor from './components/layout/CustomCursor';

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-zinc-200 font-sans selection:bg-indigo-500/30">
      <Navbar />
      <CustomCursor />
      
      <main>
        <Hero />
        <About />
        <Education />
        <StackEcosystem />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;