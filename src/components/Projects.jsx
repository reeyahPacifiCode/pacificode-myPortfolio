import React, { useState } from 'react';
import { Filter } from 'lucide-react';

export default function Projects({ setSelectedProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const projects = [
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
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop'
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
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=600&fit=crop'
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
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 5,
      title: 'Data Structures Implementation',
      category: 'C++',
      description: 'Implementation of various data structures including linked lists, binary trees, and hash tables with comprehensive testing.',
      tech: ['C++', 'Data Structures', 'Algorithms', 'OOP'],
      featured: false,
      githubUrl: 'https://github.com/yourusername/data-structures',
      liveUrl: null,
      thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 6,
      title: 'Adolescents Website',
      category: 'HTML/CSS',
      description: 'Informational website about adolescent health and development with responsive design and accessible content.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      featured: false,
      githubUrl: 'https://github.com/yourusername/adolescents',
      liveUrl: 'https://yourusername.github.io/adolescents',
      thumbnail: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 7,
      title: 'Food Business Landing Page',
      category: 'HTML/CSS',
      description: 'Modern landing page for a food business with menu showcase, online ordering system, and contact information.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      featured: false,
      githubUrl: 'https://github.com/yourusername/food-business',
      liveUrl: 'https://yourusername.github.io/food-business',
      thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 8,
      title: 'Accessible List Component',
      category: 'PHP',
      description: 'PHP-based accessible list management system with CRUD operations and user-friendly interface.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Accessibility'],
      featured: false,
      githubUrl: 'https://github.com/yourusername/accessible-list',
      liveUrl: null,
      thumbnail: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 9,
      title: 'MIT Journal App',
      category: 'Block of Codes',
      description: 'Mobile journaling application built with MIT App Inventor featuring note-taking, tagging, and search functionality.',
      tech: ['MIT App Inventor', 'Mobile Development', 'Database'],
      featured: false,
      githubUrl: 'https://github.com/yourusername/journal-app',
      liveUrl: null,
      thumbnail: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 10,
      title: 'Scratch Game Collection',
      category: 'Block of Codes',
      description: 'Collection of interactive games and animations created using Scratch visual programming.',
      tech: ['Scratch', 'Game Development', 'Animation'],
      featured: false,
      githubUrl: 'https://github.com/yourusername/scratch-games',
      liveUrl: 'https://scratch.mit.edu/users/yourusername',
      thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop'
      ]
    }
  ];

  const categories = ['All', 'PHP', 'Java', 'C++', 'Cisco', 'UI/UX', 'HTML/CSS', 'Block of Codes'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);
  const hasMore = filteredProjects.length > 4;

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#394931]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-[#E1DBCB] mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto"></div>
          <p className="text-gray-600 dark:text-[#c5beab] mt-12 max-w-2xl mx-auto">
            Explore my collection of projects across various technologies and domains
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          <Filter className="w-5 h-5 text-[#394931] dark:text-[#9ca089]" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#394931] dark:bg-[#5d624c] text-white scale-105 shadow-lg'
                  : 'bg-white dark:bg-[#2D2D2D] text-gray-700 dark:text-[#c5beab] hover:bg-gray-100 dark:hover:bg-[#2D2D2D]/80 shadow'
              }`}
            >
              {category}
              {category !== 'All' && (
                <span className="ml-2 text-xs opacity-70">
                  ({projects.filter(p => p.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {displayedProjects.map((project) => (
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
                  {project.featured && (
                    <span className="text-xs font-semibold text-yellow-600 dark:text-yellow-400">
                      ⭐ Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-[#E1DBCB] mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-[#c5beab] text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {hasMore && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 bg-[#394931] dark:bg-[#5d624c] text-white px-8 py-4 rounded-full hover:bg-[#5d624c] dark:hover:bg-[#868b6b] transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
            >
              <span>{showAll ? 'Show Less' : 'See More Projects'}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-[#c5beab] text-lg">
              No projects found in this category yet.
            </p>
          </div>
        )}
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