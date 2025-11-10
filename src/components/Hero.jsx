import React, { useState, useEffect } from 'react';
import { Download, Twitter, Facebook, Github, Instagram } from 'lucide-react';

export default function Hero({ setShowCertificates }) {
  const titles = ['Web Developer', 'UI/UX Designer', 'IT Student', 'Front-End Developer'];
  const [typedText, setTypedText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentTitle = titles[titleIndex];
      if (!isDeleting && charIndex < currentTitle.length) {
        setTypedText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
      }
    }, isDeleting ? 50 : 150);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/PACIFICADOR,RHEAMAE.pdf';
    link.download = 'PACIFICADOR_RHEAMAE_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-[#f5f5ec] dark:bg-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold text-[#2D2D2D] dark:text-[#E1DBCB]">
            Hi! I'm Rhea
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#394931] dark:text-[#9ca089]">
            {typedText}
            <span className="animate-pulse">|</span>
          </h3>

          <p className="text-gray-600 dark:text-[#c5beab] text-lg">
            A dedicated and hardworking IT Student with basic knowledge of web development, UI/UX design, and programming.
          </p>

          <div className="flex space-x-4 pt-4">
            <button
              onClick={downloadCV}
              className="flex items-center space-x-2 border-2 border-[#394931] dark:border-[#5d624c] text-[#394931] dark:text-[#5d624c] px-4 py-2 rounded-md transition font-semibold relative overflow-hidden group text-sm"
            >
              <span className="absolute inset-0 bg-[#394931] dark:bg-[#5d624c] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <Download className="w-4 h-4 relative z-10 group-hover:text-[#f5f5ec] transition-colors duration-300" />
              <span className="relative z-10 group-hover:text-[#f5f5ec] transition-colors duration-300">Download CV</span>
            </button>
            <button
              onClick={() => setShowCertificates(true)}
              className="flex items-center space-x-2 border-2 border-[#394931] dark:border-[#5d624c] text-[#394931] dark:text-[#5d624c] px-4 py-2 rounded-md transition font-semibold relative overflow-hidden group text-sm"
            >
              <span className="absolute inset-0 bg-[#394931] dark:bg-[#5d624c] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <svg className="w-4 h-4 relative z-10 group-hover:text-[#f5f5ec] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="relative z-10 group-hover:text-[#f5f5ec] transition-colors duration-300">View Certificates</span>
            </button>
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <a href="https://x.com/reya_emaypi" className="hover:text-[#394931] dark:text-[#f5f5ec] dark:hover:text-[#9ca089] transition-colors ">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/share/1AMGejFcPN/" className="hover:text-[#394931] dark:text-[#f5f5ec] dark:hover:text-[#9ca089] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://github.com/reeyahPacifiCode" className="hover:text-[#394931] dark:text-[#f5f5ec] dark:hover:text-[#9ca089] transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/its_supercalifrajilistic" className="hover:text-[#394931] dark:text-[#f5f5ec] dark:hover:text-[#fffff] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="relative">
          {/* Decorative circles */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#394931] dark:bg-[#5d624c] rounded-full opacity-20"></div>
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#394931] dark:bg-[#5d624c] rounded-full opacity-15"></div>
          <div className="absolute top-1/2 -right-6 w-24 h-24 bg-[#9ca089] dark:bg-[#7a7d6a] rounded-full opacity-25"></div>
          <div className="absolute -top-4 right-1/4 w-16 h-16 bg-[#394931] dark:bg-[#5d624c] rounded-full opacity-30"></div>
          
          {/* Original blur effect */}
          <div className="absolute inset-0 bg-[#394931] dark:bg-[#5d624c] rounded-full blur-3xl opacity-20"></div>
          
          {/* Profile image */}
          <div className="relative bg-[#9ca089] dark:bg-[#5d624c] rounded-full overflow-hidden aspect-square">
            <img src="rhea.jpg" alt="My Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
      `}</style>
    </section>
  );
}