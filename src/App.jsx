import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorksPage from './components/WorksPage';
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

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-[#2D2D2D] transition-colors duration-300">
          {/* ✅ Conditional Navbar - Hidden on /works page */}
          <NavbarWrapper darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <Routes>
            {/* ✅ HOME PAGE */}
            <Route
              path="/"
              element={
                <>
                  <Hero setShowCertificates={setShowCertificates} />
                  <About />
                  <Skills />
                  <ProjectsWrapper setSelectedProject={setSelectedProject} />
                  <Contact />
                  <Footer />
                </>
              }
            />
            {/* ✅ WORKS PAGE */}
            <Route
              path="/works"
              element={<WorksWrapper setSelectedProject={setSelectedProject} darkMode={darkMode} />}
            />
          </Routes>
          
          <BackToTopButton show={showBackToTop} />
          <CertificateModal
            show={showCertificates}
            setShow={setShowCertificates}
            currentCertIndex={currentCertIndex}
            setCurrentCertIndex={setCurrentCertIndex}
          />
          <ProjectModal
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        </div>
      </div>
    </Router>
  );
}

/* ✅ Navbar Wrapper - Hides on /works page */
function NavbarWrapper({ darkMode, setDarkMode }) {
  const location = useLocation();
  
  // Hide navbar if on /works page
  if (location.pathname === '/works') {
    return null;
  }
  
  return <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />;
}

/* ✅ Wrappers for navigation logic */
function ProjectsWrapper({ setSelectedProject }) {
  const navigate = useNavigate();
  const navigateToWorks = () => navigate('/works');
  return (
    <Projects
      setSelectedProject={setSelectedProject}
      navigateToWorks={navigateToWorks}
    />
  );
}

function WorksWrapper({ setSelectedProject, darkMode }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return <WorksPage setSelectedProject={setSelectedProject} darkMode={darkMode} />;
}