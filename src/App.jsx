import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import ExtraActivities from './components/sections/ExtraActivities';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import CustomCursor from './components/layout/CustomCursor';

function App() {
  return (
    <div style={{ backgroundColor: '#03050a', minHeight: '100vh', color: '#e8f0ff' }}>
      <Navbar />
      <CustomCursor />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <ExtraActivities />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;