import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Projects({ setSelectedProject, navigateToWorks }) {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'PHP',
      description: 'A full-featured online shopping platform with cart functionality, payment integration, user authentication, and comprehensive admin dashboard for managing products and orders.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      featured: true,
      githubUrl: 'https://github.com/yourusername/ecommerce',
      liveUrl: '#',
      thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 2,
      title: 'Student Management System',
      category: 'Java',
      description: 'Comprehensive student management system with enrollment tracking, grade management, and attendance monitoring features.',
      tech: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
      featured: true,
      githubUrl: 'https://github.com/yourusername/student-system',
      liveUrl: null,
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 3,
      title: 'Network Infrastructure Design',
      category: 'Cisco',
      description: 'Complete network topology design and implementation using Cisco Packet Tracer, including VLAN configuration and routing protocols.',
      tech: ['Cisco Packet Tracer', 'Networking', 'VLAN', 'Routing'],
      featured: true,
      githubUrl: 'https://github.com/yourusername/network-design',
      liveUrl: null,
      thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 4,
      title: 'Portfolio UI/UX Design',
      category: 'UI/UX',
      description: 'Modern and clean portfolio design with smooth animations, interactive elements, and responsive layouts for various devices.',
      tech: ['Figma', 'Adobe XD', 'Canva', 'Prototyping'],
      featured: true,
      githubUrl: 'https://github.com/yourusername/portfolio-design',
      liveUrl: 'https://figma.com/your-design',
      thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#4a5851]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2D2D2D] dark:text-[#E1DBCB] mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto"></div>
          <p className="text-[#5d624c] dark:text-[#c5beab] mt-6 max-w-2xl mx-auto">
            Explore my featured projects across various technologies and domains
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white dark:bg-[#2D2D2D] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-semibold mb-2">Click to view details</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#394931] dark:text-[#9ca089] text-sm font-semibold px-3 py-1 bg-[#394931]/10 dark:bg-[#9ca089]/10 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-yellow-600 dark:text-yellow-400">
                    ⭐ Featured
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] dark:text-[#E1DBCB] mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-[#5d624c] dark:text-[#c5beab] text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button
            onClick={navigateToWorks}
            className="group inline-flex items-center gap-3 bg-[#394931] dark:bg-[#5d624c] text-[#E1DBCB] px-10 py-4 rounded-full hover:bg-[#5d624c] dark:hover:bg-[#868b6b] transition-all duration-300 font-semibold shadow-xl transform hover:scale-105"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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