import React, { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsVisible(false), 1100); // Reset after animation completes
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-[#DCE2D6] dark:bg-[#4a5851]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2D2D2D] dark:text-[#E1DBCB] mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className={`text-[#4E5652] dark:text-[#c5beab] text-lg leading-relaxed mb-6 ${isVisible ? 'slide-in-left' : ''}`}>
            I'm currently pursuing a Bachelor's degree in Information Technology at Cavite State
            University - Silang Campus. I have gained experience through internships and
            certifications in front-end development, computer networking, and UI/UX design.
          </p>
          <p className={`text-[#4E5652] dark:text-[#c5beab] text-lg leading-relaxed ${isVisible ? 'slide-in-right' : ''}`}>
            My goal is to create user-friendly and visually appealing digital solutions while
            continuously learning and improving my technical skills.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .slide-in-right {
          animation: slideInRight 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        #about p {
          transition: transform 0.3s ease;
        }
        #about p:hover {
          transform: scale(1.01);
        }
      `}</style>
    </section>
  );
}