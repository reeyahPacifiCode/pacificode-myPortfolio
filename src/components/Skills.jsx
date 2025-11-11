import React from 'react';
export default function Skills() {
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


  return (
    <section id="skills" className="py-20 bg-[#f5f5ec] dark:bg-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2D2D2D] dark:text-[#c5beab] mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2 animate-fadeIn">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#2D2D2D] dark:text-[#c5beab]">{skill.name}</span>
                <span className="text-[#394931] dark:text-[#9ca089] font-semibold">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-[#9ca089] dark:bg-[#394931] rounded-full h-3">
                <div
                  className="bg-[#394931] dark:bg-[#9ca089] h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}
