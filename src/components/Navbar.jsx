import React, { useState } from 'react';
import { Moon, Sun, X, Menu } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-[#2D2D2D]/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-[#394931]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-gray-900 dark:text-[#E1DBCB]">PacifiCode</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
            <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink onClick={() => scrollToSection('skills')}>Skills</NavLink>
            <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#394931] transition"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-[#9ca089]" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2">
              {darkMode ? (
                <Sun className="w-5 h-5 text-[#9ca089]" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
              {menuOpen ? (
                <X className="w-6 h-6 dark:text-[#E1DBCB]" />
              ) : (
                <Menu className="w-6 h-6 dark:text-[#E1DBCB]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#2D2D2D] border-t border-gray-200 dark:border-[#394931]">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-700 dark:text-[#E1DBCB] py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-700 dark:text-[#E1DBCB] py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-gray-700 dark:text-[#E1DBCB] py-2"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-gray-700 dark:text-[#E1DBCB] py-2"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-700 dark:text-[#E1DBCB] py-2"
            >
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
      className="relative text-gray-700 dark:text-[#E1DBCB] hover:text-[#394931] dark:hover:text-[#9ca089] transition group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#394931] dark:bg-[#9ca089] group-hover:w-full transition-all duration-300"></span>
    </button>
  );
}
