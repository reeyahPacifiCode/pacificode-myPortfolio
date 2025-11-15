import React, { useState } from 'react';
import { Moon, Sun, X, Menu } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = 55; // Navbar height (h-16 = 64px)
    const offset = 10; // DAGDAGAN MO TO! Higher = mas mababa yung landing
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  setMenuOpen(false);
};

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#DCE2D6] dark:bg-[#2D2D2D] backdrop-blur-sm border-b border-[#2D2D2D] dark:border-[#394931]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-[#2D2D2D] dark:text-[#f5f5ec]">PacifiCode</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 ">
            <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
            <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink onClick={() => scrollToSection('skills')}>Skills</NavLink>
            <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
            {/* Dark/light mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-[#f5f5ec]  dark:hover:bg-[#4a5851] transition">
              {darkMode ? ( <Sun className="w-5 h-5 text-[#f5f5ec]" />) : 
              (<Moon className="w-5 h-5 text-[#4E5652]" />)
              }
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 ">
             {/* Dark/light mode */}
              <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full  hover:bg-[#f5f5ec]  dark:hover:bg-[#4a5851] transition">
              {darkMode ? (<Sun className="w-5 h-5 text-[#f5f5ec]" />) : 
              (<Moon className="w-5 h-5 text-[#4E5652]" />)
              }
            </button>

            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
              {menuOpen ? (<X className="w-6 h-6 dark:text-[#f5f5ec]" />) : 
              (<Menu className="w-6 h-6 dark:text-[#f5f5ec]" />)
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div 
        className={`md:hidden bg-[#DCE2D6] dark:bg-[#2D2D2D] border-t border-[#2D2D2D] dark:border-[#394931] overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          <MobileNavLink
            onClick={() => scrollToSection('home')}
            delay={0.1}
            isOpen={menuOpen}
            direction="left"
          >
            Home
          </MobileNavLink>
          <MobileNavLink
            onClick={() => scrollToSection('about')}
            delay={0.2}
            isOpen={menuOpen}
            direction="right"
          >
            About
          </MobileNavLink>
          <MobileNavLink
            onClick={() => scrollToSection('skills')}
            delay={0.3}
            isOpen={menuOpen}
            direction="left"
          >
            Skills
          </MobileNavLink>
          <MobileNavLink
            onClick={() => scrollToSection('projects')}
            delay={0.4}
            isOpen={menuOpen}
            direction="right"
          >
            Projects
          </MobileNavLink>
          <MobileNavLink
            onClick={() => scrollToSection('contact')}
            delay={0.5}
            isOpen={menuOpen}
            direction="left"
          >
            Contact
          </MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative text-[#4E5652] dark:text-[#f5f5ec] hover:text-[#394931] dark:hover:text-[#9ca089] transition group">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#394931] dark:bg-[#9ca089] group-hover:w-full transition-all duration-300"></span>
    </button>
  );
}

function MobileNavLink({ children, onClick, delay, isOpen, direction }) {
  const translateValue = direction === 'left' ? '-100px' : '100px';
  
  return (
    <button
      onClick={onClick}
      className="block w-full text-center text-[#4E5652] dark:text-[#f5f5ec] py-2 transition-all duration-500 ease-out"
      style={{
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateX(0)' : `translateX(${translateValue})`,
        transitionDelay: isOpen ? `${delay}s` : '0s'
      }}
    >
      {children}
    </button>
  );
}