import React, { useState } from 'react';
import { Moon, Sun, X, Menu } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#DCE2D6] dark:bg-[#2D2D2D] border-t border-[#2D2D2D] dark:border-[#394931]">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-[#4E5652] dark:text-[#f5f5ec] py-2">Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-[#4E5652] dark:text-[#f5f5ec] py-2">
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-[#4E5652] dark:text-[#f5f5ec] py-2">
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-[#4E5652] dark:text-[#f5f5ec] py-2">
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-[#4E5652] dark:text-[#f5f5ec] py-2">
              Contact
            </button>
          </div>
        </div>
      )}
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
