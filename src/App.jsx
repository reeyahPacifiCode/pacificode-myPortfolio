import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import CertificateModal from './components/Modals/CertificateModal';
import ProjectModal from './components/Modals/ProjectModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCertificates, setShowCertificates] = useState(false);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  // scroll detection for back-to-top
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-[#2D2D2D] transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero setShowCertificates={setShowCertificates} />
        <About />
        <Skills />
        <Projects setSelectedProject={setSelectedProject} />
        <Contact />
        <Footer />

        <BackToTopButton show={showBackToTop} />
        <CertificateModal
          show={showCertificates}
          setShow={setShowCertificates}
          currentCertIndex={currentCertIndex}
          setCurrentCertIndex={setCurrentCertIndex}
        />
        <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      </div>
    </div>
  );
}
