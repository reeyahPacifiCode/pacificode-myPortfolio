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
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-[#E1DBCB]">
            Hi! I'm Rhea Mae
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
              className="flex items-center space-x-2 bg-[#394931] dark:bg-[#5d624c] text-white px-6 py-3 rounded-lg hover:bg-[#5d624c] transition font-semibold"
            >
              <Download className="w-5 h-5" /> <span>Download CV</span>
            </button>
            <button
              onClick={() => setShowCertificates(true)}
              className="bg-[#394931] dark:bg-[#5d624c] text-white px-6 py-3 rounded-lg hover:bg-[#5d624c] transition font-semibold"
            >
              View Certificates
            </button>
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <a href="https://x.com/reya_emaypi" className="hover:text-[#394931] dark:hover:text-[#9ca089]">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/share/1AMGejFcPN/" className="hover:text-[#394931] dark:hover:text-[#9ca089]">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://github.com/reeyahPacifiCode" className="hover:text-[#394931] dark:hover:text-[#9ca089]">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/its_supercalifrajilistic" className="hover:text-[#394931] dark:hover:text-[#9ca089]">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[#394931] dark:bg-[#5d624c] rounded-full blur-3xl opacity-20"></div>
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
