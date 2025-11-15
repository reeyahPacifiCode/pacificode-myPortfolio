import React, { useState, useEffect, useRef } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState({});
  const sectionRef = useRef(null);

  const skills = [
    { name: 'Block of Codes', level: 77 },
    { name: 'React JS', level: 56 },
    { name: 'JavaScript', level: 51 },
    { name: 'Java & C++', level: 50 },
    { name: 'UI/UX Design', level: 70 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Computer Networking', level: 47 },
    { name: 'Python', level: 53 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            // Check if skills section is actually in the middle of viewport
            const rect = entry.target.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionMiddle = rect.top + (rect.height / 2);
            const viewportMiddle = windowHeight / 2;
            
            // Trigger animation only when section middle is near viewport middle
            if (Math.abs(sectionMiddle - viewportMiddle) < windowHeight * 0.3) {
              setIsVisible(true);
              animateSkills();
            }
          }
        });
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const animateSkills = () => {
    skills.forEach((skill, index) => {
      setTimeout(() => {
        let currentLevel = 0;
        const increment = skill.level / 50;
        const timer = setInterval(() => {
          currentLevel += increment;
          if (currentLevel >= skill.level) {
            currentLevel = skill.level;
            clearInterval(timer);
          }
          setAnimatedLevels((prev) => ({
            ...prev,
            [index]: Math.round(currentLevel)
          }));
        }, 20);
      }, index * 100);
    });
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-[#f5f5ec] dark:bg-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2D2D2D] dark:text-[#c5beab] mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="space-y-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease ${index * 0.1}s`
              }}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#2D2D2D] dark:text-[#c5beab]">{skill.name}</span>
                <span className="text-[#394931] dark:text-[#9ca089] font-semibold">
                  {animatedLevels[index] || 0}%
                </span>
              </div>
              <div className="w-full bg-[#9ca089] dark:bg-[#394931] rounded-full h-3 overflow-hidden">
                <div
                  className="bg-[#394931] dark:bg-[#9ca089] h-3 rounded-full relative"
                  style={{ 
                    width: `${animatedLevels[index] || 0}%`,
                    transition: 'width 1s ease-out'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          5%, 15% { opacity: 0.3; }
          10% { transform: translateX(100%); }
          20%, 100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-shimmer {
          animation: shimmer 4s infinite;
        }
      `}</style>
    </section>
  );
}