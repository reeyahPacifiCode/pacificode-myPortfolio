import React from 'react';
import { ArrowRightFromLineIcon } from 'lucide-react';

export default function Projects({ setSelectedProject, navigateToWorks }) {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform | Condominum',
      category: 'PHP',
      description: 'A comprehensive condominium e-commerce platform featuring property listings, unit reservations, payment processing, resident authentication, and an advanced admin dashboard for managing properties, amenities, and resident services.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      featured: true,
      githubUrl: 'https://github.com/reeyahPacifiCode/php_activity_5.git',
      thumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      images: 
      [ '/PHP-E-COMMERCE/P1.png',
      '/PHP-E-COMMERCE/P2.png',
      '/PHP-E-COMMERCE/P3.png',
      '/PHP-E-COMMERCE/P3a.png',
      '/PHP-E-COMMERCE/P3b.png',
      '/PHP-E-COMMERCE/P3c.png',
      '/PHP-E-COMMERCE/P3c1.png',
      '/PHP-E-COMMERCE/P3c2.png',
      '/PHP-E-COMMERCE/P3d.png',
      '/PHP-E-COMMERCE/P3e.png',
      '/PHP-E-COMMERCE/P3f.png',
      '/PHP-E-COMMERCE/P3g.png',
      '/PHP-E-COMMERCE/P3h.png',
      '/PHP-E-COMMERCE/P3i.png',
      '/PHP-E-COMMERCE/P4.png',
      '/PHP-E-COMMERCE/P5.png',
      '/PHP-E-COMMERCE/P6.png',
      '/PHP-E-COMMERCE/P7.png',
      '/PHP-E-COMMERCE/P7a.png',
      '/PHP-E-COMMERCE/P7b.png',
      '/PHP-E-COMMERCE/P7c.png',
      '/PHP-E-COMMERCE/P7d.png',
      '/PHP-E-COMMERCE/P7e.png', ]
    },
    {
      id: 2,
      title: 'Block of codes | Scratch ',
      category: 'Block Of Codes',
      description: 'A visual programming project built with block-based coding logic, demonstrating fundamental programming concepts like loops, conditionals, variables, and event handling through an intuitive drag-and-drop interface.',
      tech: ['Scratch'],
      featured: true,
      githubUrl: 'https://github.com/reeyahPacifiCode/scratch_project.git',
      thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop',
      images: 
       ['/BOC-SCRATCH/Capture.JPG ',
        '/BOC-SCRATCH/7.JPG ',
        '/BOC-SCRATCH/6.JPG ',
        '/BOC-SCRATCH/5.JPG ',
        '/BOC-SCRATCH/4.JPG ',
        '/BOC-SCRATCH/3.JPG ',
        '/BOC-SCRATCH/2.JPG ',
       '/BOC-SCRATCH/1A.JPG ',
       '/BOC-SCRATCH/1B.JPG ',
       '/BOC-SCRATCH/1C.JPG ',
       '/BOC-SCRATCH/1D.JPG ',
       '/BOC-SCRATCH/1E.JPG ',
       '/BOC-SCRATCH/1F.JPG ',
       '/BOC-SCRATCH/1G.JPG ',
       '/BOC-SCRATCH/1H.JPG ',
       '/BOC-SCRATCH/1I.JPG ',
       '/BOC-SCRATCH/1J.JPG ',
       '/BOC-SCRATCH/1K.JPG ',
       '/BOC-SCRATCH/1L.JPG ',
       '/BOC-SCRATCH/1M.JPG ',
       '/BOC-SCRATCH/1N.JPG ',
       '/BOC-SCRATCH/1O.JPG ',
       '/BOC-SCRATCH/1P.JPG ',
       '/BOC-SCRATCH/1Q.JPG ',
       '/BOC-SCRATCH/1R.JPG ',
       '/BOC-SCRATCH/1T.JPG ', ]
    },

    {
      id: 3,
      title: 'HTML AND CSS | PSALM',
      category: 'HTML/CSS',
      description: 'A responsive web page featuring biblical psalms with clean typography and modern CSS styling. Demonstrates internal CSS implementation, semantic HTML structure, and effective layout design principles.',
      tech: ['HTML/CSS INTERNAL'],
      featured: true,
      githubUrl: 'https://github.com/reeyahPacifiCode/htmlcss_activity-5.git',
      thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
      images: [
        '/HTML-PASLM/1.png',
        '/HTML-PASLM/2.png',
      ]
    },

    {
      id: 4,
      title: 'Portfolio UI/UX Design | Sign Language App',
      category: 'UI/UX',
      description: 'An accessible and intuitive UI/UX design for a sign language learning application. Features user-friendly navigation, interactive learning modules, visual gesture demonstrations, and inclusive design principles to enhance communication accessibility.',
      tech: ['Canva', 'Prototyping'],
      featured: true,
      githubUrl: 'https://github.com/reeyahPacifiCode/UXUIDesign_project.git',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      images: [
        '/UX-UI DESIGN/ONE.png',
        '/UX-UI DESIGN/TWO.png',
        '/UX-UI DESIGN/THREE.png',
        '/UX-UI DESIGN/FOUR.png',
        '/UX-UI DESIGN/FIVE.png',
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#DCE2D6] dark:bg-[#4a5851]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2D2D2D] dark:text-[#E1DBCB] mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto"></div>
          <p className="text-[#4E5652] dark:text-[#c5beab] mt-6 max-w-2xl mx-auto">
            Explore my featured projects across various technologies and domains
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
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
        <div className="text-center">
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