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
          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-bold text-[#2D2D2D] dark:text-[#E1DBCB]">
            Hi! I'm Rhea
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#868b6b] dark:text-[#5d624c]">
            {typedText}
            <span className="animate-pulse">|</span>
          </h3>

          {/* Description */}
          <p className="text-[#4E5652] dark:text-[#c5beab] text-lg">
            A dedicated and hardworking IT Student with basic knowledge of web development, UI/UX design, and programming.
          </p>

          {/* Buttons Here */}
          <div className="flex space-x-4 pt-4">
          {/* Download CV */}
            <button
              onClick={downloadCV}
              className="inline-flex items-center gap-2 border-2 border-[#394931] dark:border-[#9ca089] text-[#394931] dark:text-[#9ca089] px-3 py-2 md:px-4 md:py-2 rounded-md transition font-semibold relative overflow-hidden group text-md md:text-base leading-none whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-[#394931] dark:bg-[#5d624c] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none"></span>
              <Download className="w-4 h-4 md:w-5 md:h-5 relative z-10 block group-hover:text-[#f5f5ec] transition-colors duration-300" />
              <span className="relative z-10 group-hover:text-[#f5f5ec] transition-colors duration-300">Download CV</span>
            </button>
          {/* View Certificates */}
           <button
              onClick={() => setShowCertificates(true)}
              className="inline-flex items-center gap-2 border-2 border-[#394931] dark:border-[#9ca089] text-[#394931] dark:text-[#9ca089] px-3 py-2 md:px-4 md:py-2 rounded-md transition font-semibold relative overflow-hidden group text-md md:text-base leading-none whitespace-nowrap"
            >
                <span className="absolute inset-0 bg-[#394931] dark:bg-[#5d624c] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none"></span>
                <svg className="w-4 h-4 md:w-5 md:h-5 relative z-10 block group-hover:text-[#f5f5ec] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="relative z-10 group-hover:text-[#f5f5ec] transition-colors duration-300">View Cert</span>
            </button>
          </div>

          {/* Enhanced Social Media Icons with hover scale effect */}
          <div className="flex items-center space-x-4 pt-4">
            <a href="https://x.com/reya_emaypi" 
              className="text-[#4E5652] dark:text-[#f5f5ec] hover:text-[#394931] dark:hover:text-[#9ca089] transition-all duration-300 transform hover:scale-125"
              target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/share/1AMGejFcPN/" 
              className="text-[#4E5652] dark:text-[#f5f5ec] hover:text-[#394931] dark:hover:text-[#9ca089] transition-all duration-300 transform hover:scale-125"
              target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://github.com/reeyahPacifiCode" 
              className="text-[#4E5652] dark:text-[#f5f5ec] hover:text-[#394931] dark:hover:text-[#9ca089] transition-all duration-300 transform hover:scale-125"
              target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/its_supercalifrajilistic" 
              className="text-[#4E5652] dark:text-[#f5f5ec] hover:text-[#394931] dark:hover:text-[#9ca089] transition-all duration-300 transform hover:scale-125"
              target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Enhanced Profile Image Section with Beautiful Decorative Circles */}
        <div className="relative flex items-center justify-center">
          {/* Large decorative circles */}
          <div className="absolute -top-12 -left-10 w-40 h-40 bg-[#394931] dark:bg-[#5d624c] rounded-full opacity-10 animate-float"></div>
          <div className="absolute -top-9 right-1/4 w-24 h-24 bg-[#394931] dark:bg-[#5d624c] rounded-full opacity-25 animate-float"></div>
          
          {/* Outline circles */}
          <div className="absolute top-8 -left-4 w-20 h-20 border-4 border-[#394931] dark:border-[#9ca089] rounded-full opacity-30 animate-spin-slow"></div>
          <div className="absolute -bottom-8 right-12 w-28 h-28 border-3 border-[#9ca089] dark:border-[#5d624c] rounded-full opacity-25 animate-reverse-spin"></div>
          <div className="absolute -bottom-15 right-4 w-28 h-28 border-3 border-[#9ca089] dark:border-[#5d624c] rounded-full opacity-25 animate-reverse-spin"></div>
          <div className="absolute -bottom-16 -left-16 w-48 h-48 border-4 border-[#394931] dark:bg-[#5d624c] rounded-full opacity-30 animate-float-delayed"></div>
          
          {/* Mini circles */}
          <div className="absolute top-16 right-8 w-6 h-6 bg-[#9ca089] dark:bg-[#7a7d6a] rounded-full opacity-40 animate-bounce-slow"></div>
          <div className="absolute bottom-20 -left-2 w-8 h-8 bg-[#394931] dark:bg-[#5d624c] rounded-full opacity-35 animate-float"></div>
          <div className="absolute top-3/4 -right-2 w-5 h-5 bg-[#9ca089] dark:bg-[#868b6b] rounded-full opacity-45 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-4 w-7 h-7 border-2 border-[#394931] dark:border-[#9ca089] rounded-full opacity-30 animate-float-delayed"></div>
          <div className="absolute top-1 left-8 w-4 h-4 bg-[#394931] dark:bg-[#5d624c] rounded-full opacity-50 animate-bounce-slow"></div>
          
          {/* Blur effect circles */}
          <div className="absolute inset-0 bg-[#394931] dark:bg-[#5d624c] rounded-full blur-3xl opacity-15 scale-75"></div>
          <div className="absolute top-12 right-12 w-32 h-32 bg-[#9ca089] dark:bg-[#7a7d6a] rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
          
          {/* Profile image */}
          <div className="relative bg-[#9ca089] dark:bg-[#5d624c] rounded-full overflow-hidden aspect-square w-full">
            <img src="rhea.jpg" alt="My Profile" className="w-full h-full object-cover" />
          </div>
          
        </div>
      </div>

<style>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
          }
          50% { 
            transform: translateY(-20px) translateX(10px); 
          }
        }

        @keyframes float-delayed {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
          }
          50% { 
            transform: translateY(-15px) translateX(-10px); 
          }
        }

        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.15;
            transform: scale(1);
          }
          50% { 
            opacity: 0.3;
            transform: scale(1.05);
          }
        }

        @keyframes spin-slow {
          from { 
            transform: rotate(0deg); 
          }
          to { 
            transform: rotate(360deg); 
          }
        }

        @keyframes reverse-spin {
          from { 
            transform: rotate(360deg); 
          }
          to { 
            transform: rotate(0deg); 
          }
        }

        @keyframes bounce-slow {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-10px); 
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-reverse-spin {
          animation: reverse-spin 25s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          #home .relative > div:first-child {
            width: 240px !important;
            height: 240px !important;
          }
        }
      `}</style>
    </section>
  );
}