
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectShowcase from './components/ProjectShowcase';
import Publications from './components/Publications';
import SkillsMatrix from './components/SkillsMatrix';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AssistantChat from './components/AssistantChat';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'publications', 'skills', 'awards', 'contact'];
      // Add offset to account for navbar when calculating active section
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-emerald-950 text-emerald-50">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="experience" className="scroll-mt-28 py-16 bg-emerald-900/20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3">
              <span className="text-cyber">01.</span> Experience
            </h2>
            <ExperienceTimeline />
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3">
              <span className="text-cyber">02.</span> Projects
            </h2>
            <ProjectShowcase />
          </div>
        </section>

        <section id="publications" className="scroll-mt-28 py-16 bg-emerald-900/20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3">
              <span className="text-cyber">03.</span> Publications
            </h2>
            <Publications />
          </div>
        </section>

        <section id="skills" className="scroll-mt-28 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3">
              <span className="text-cyber">04.</span> Skills Matrix
            </h2>
            <SkillsMatrix />
          </div>
        </section>

        <section id="awards" className="scroll-mt-28 py-16 bg-emerald-900/20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3">
              <span className="text-cyber">05.</span> Honors & Awards
            </h2>
            <Awards />
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3">
              <span className="text-cyber">06.</span> Get In Touch
            </h2>
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
      <AssistantChat />
    </div>
  );
};

export default App;
