import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#394931]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-[#E1DBCB] mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 dark:text-[#E1DBCB] text-lg leading-relaxed mb-6">
            I'm currently pursuing a Bachelor's degree in Information Technology at Cavite State
            University - Silang Campus. I have gained experience through internships and
            certifications in front-end development, computer networking, and UI/UX design.
          </p>
          <p className="text-gray-600 dark:text-[#E1DBCB] text-lg leading-relaxed">
            My goal is to create user-friendly and visually appealing digital solutions while
            continuously learning and improving my technical skills.
          </p>
        </div>
      </div>

      <style>{`
        #about p {
          transition: color 0.3s ease, transform 0.3s ease;
        }
        #about p:hover {
          transform: scale(1.01);
        }
      `}</style>
    </section>
  );
}
