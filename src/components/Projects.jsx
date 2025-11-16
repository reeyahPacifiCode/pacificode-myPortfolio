import React, { useEffect, useRef, useState } from 'react';
import { ArrowRightFromLineIcon } from 'lucide-react';
import { allProjects} from '../data/projects';

export default function Projects({ setSelectedProject, navigateToWorks }) {
    // Get featured projects and limit to 4
     const featuredProjects = allProjects
    .filter(project => project.featured === true)
    .slice(0, 4); // KUMUHA LANG NG FIRST 4

  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          } else {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: false,
            }));
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-[#DCE2D6] dark:bg-[#4a5851]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={(el) => (sectionRefs.current.header = el)}
          data-section="header"
          className={`text-center mb-12 transition-all duration-[1500ms] ${visibleSections.header ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
        >
          <h2 className="text-4xl font-bold text-[#2D2D2D] dark:text-[#E1DBCB] mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto"></div>
          <p className="text-[#4E5652] dark:text-[#c5beab] mt-6 max-w-2xl mx-auto">
            Explore my featured projects across various technologies and domains
          </p>
        </div>
        {/* Featured Projects Grid */}
        <div 
          ref={(el) => (sectionRefs.current.grid = el)}
          data-section="grid"
          className={`grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto transition-all duration-1000 delay-200 ${visibleSections.grid ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
        >
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#f5f5ec] dark:bg-[#2D2D2D] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
            <div className="relative overflow-hidden h-60">
              <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-[#394931]/90 via-[#868b6b]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-5 text-[#f5f5ec] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-semibold mb-2">Click to view details</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#f5f5ec]/20 backdrop-blur-sm rounded text-xs">
                          {tech}
                        </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[#4E5652] dark:text-[#9ca089] text-sm font-semibold px-3 py-1 bg-[#394931]/10 dark:bg-[#9ca089]/20 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-600">
                    ⭐ Featured
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] dark:text-[#E1DBCB] mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-[#4E5652] dark:text-[#c5beab] text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* See more Button */}
        <div 
          ref={(el) => (sectionRefs.current.button = el)}
          data-section="button"
          className={`text-center transition-all duration-1000 delay-400 ${visibleSections.button ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
        >
          <button
            onClick={navigateToWorks}
            className="group inline-flex items-center space-x-2 border-2 border-[#394931] dark:border-[#9ca089] text-[#394931] dark:text-[#9ca089] px-3 py-2 rounded-md transition font-semibold relative overflow-hidden text-sm"
          >
            <span className="absolute inset-0 bg-[#394931] dark:bg-[#868b6b] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#f5f5ec] dark:group-hover:text-[#f5f5ec]">
              See More
            </span>
            <ArrowRightFromLineIcon className="w-4 h-4 relative z-10 transition-colors duration-300 group-hover:text-[#f5f5ec] dark:group-hover:text-[#f5f5ec]" />
          </button>
        </div>
      </div>

      <style>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}