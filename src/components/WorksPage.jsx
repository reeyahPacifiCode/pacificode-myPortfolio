import React, { useState } from 'react';
import { Filter, Search, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WorksPage({ setSelectedProject, darkMode }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [itemsToShow, setItemsToShow] = useState(12);

  // Sample data - replace with your actual 35 projects
  const allProjects = [
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
      images: Array(5).fill('https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop')
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
      images: Array(3).fill('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop')
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
      images: Array(2).fill('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop')
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
      images: Array(8).fill('https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop')
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
      images: Array(4).fill('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop')
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
      images: Array(6).fill('https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&h=600&fit=crop')
    },
  ];

  const categories = ['All', 'PHP', 'Java', 'C++', 'Cisco', 'UI/UX', 'HTML/CSS', 'Python', 'React', 'Node.js', 'Mobile', 'Block of Codes'];

  // Filter and search logic
  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const displayedProjects = filteredProjects.slice(0, itemsToShow);
  const hasMore = filteredProjects.length > itemsToShow;

  const scrollToProjects = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="relative z-0 min-h-screen bg-[#f5f5ec] dark:bg-[#2D2D2D] pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 text-[#394931] dark:text-[#E1DBCB] font-semibold mb-6 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </button>
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] dark:text-[#E1DBCB] mb-3">
              All Projects
            </h1>
            <div className="w-16 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto mb-4"></div>
            <p className="text-[#5d624c] dark:text-[#c5beab] text-base max-w-2xl mx-auto">
              Browse through my complete portfolio of {allProjects.length} projects
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#868b6b]" />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#394931] border-2 border-transparent focus:border-[#394931] dark:focus:border-[#9ca089] rounded-lg text-[#2D2D2D] dark:text-[#E1DBCB] placeholder-[#868b6b] text-sm transition-all outline-none"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-[#394931] dark:text-[#9ca089]" />
              <h3 className="text-base font-semibold text-[#2D2D2D] dark:text-[#E1DBCB]">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setItemsToShow(12);
                  }}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#394931] dark:bg-[#5d624c] text-[#E1DBCB] scale-105 shadow-lg'
                      : 'bg-white dark:bg-[#394931] text-[#5d624c] dark:text-[#c5beab] hover:bg-[#E1DBCB] dark:hover:bg-[#5d624c]/50 shadow'
                  }`}
                >
                  {category}
                  {category !== 'All' && (
                    <span className="ml-1.5 text-xs opacity-70">
                      ({allProjects.filter(p => p.category === category).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4 text-[#5d624c] dark:text-[#c5beab] text-sm">
            Showing {displayedProjects.length} of {filteredProjects.length} projects
          </div>

          {/* Projects Grid - 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white dark:bg-[#394931] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden h-40">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2 bg-yellow-500/90 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                      ⭐ Featured
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-[#394931] dark:text-[#9ca089] text-xs font-semibold px-2.5 py-1 bg-[#394931]/10 dark:bg-[#9ca089]/10 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-base font-bold text-[#2D2D2D] dark:text-[#E1DBCB] mt-2 mb-1.5 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-[#5d624c] dark:text-[#c5beab] text-xs line-clamp-2 mb-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs text-[#868b6b] dark:text-[#9ca089] bg-[#E1DBCB] dark:bg-[#5d624c]/30 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-[#868b6b] dark:text-[#9ca089]">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center">
              <button
                onClick={() => setItemsToShow(prev => prev + 12)}
                className="bg-[#394931] dark:bg-[#5d624c] text-[#E1DBCB] px-6 py-2.5 rounded-full hover:bg-[#5d624c] dark:hover:bg-[#868b6b] transition-all duration-300 font-semibold shadow-lg transform hover:scale-105 text-sm"
              >
                Load More Projects
              </button>
            </div>
          )}

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#868b6b] dark:text-[#9ca089] text-lg mb-2">No projects found</p>
              <p className="text-[#868b6b] dark:text-[#c5beab] text-sm">Try adjusting your filters or search query</p>
            </div>
          )}
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
    </div>
  );
}