import React, { useState } from 'react';
import { Filter, Search, Grid, List, ArrowLeft } from 'lucide-react'; // 🆕 Added ArrowLeft
import { useNavigate } from 'react-router-dom'; // 🆕 Added useNavigate

export default function WorksPage({ setSelectedProject }) {
  const navigate = useNavigate(); // 🆕 enables navigation
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [itemsToShow, setItemsToShow] = useState(12);

  // Sample data - you'll replace this with your 35 projects
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
    // Add more projects here to reach 35
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

  return (
    <div className="min-h-screen bg-[#f5f5ec] dark:bg-[#2D2D2D] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🆕 BACK TO HOME BUTTON */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-[#394931] dark:text-[#E1DBCB] font-semibold mb-10 hover:underline"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </button>
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#2D2D2D] dark:text-[#E1DBCB] mb-4">
            All Projects
          </h1>
          <div className="w-24 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto mb-6"></div>
          <p className="text-[#5d624c] dark:text-[#c5beab] text-lg max-w-3xl mx-auto">
            Browse through my complete portfolio of {allProjects.length} projects across various technologies
          </p>
        </div>

        {/* Search and View Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#868b6b]" />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#394931] border-2 border-transparent focus:border-[#394931] dark:focus:border-[#9ca089] rounded-lg text-[#2D2D2D] dark:text-[#E1DBCB] placeholder-[#868b6b] transition-all outline-none"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#394931] dark:bg-[#5d624c] text-[#E1DBCB]'
                  : 'bg-white dark:bg-[#394931] text-[#868b6b] hover:text-[#394931] dark:hover:text-[#9ca089]'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-lg transition-all ${
                viewMode === 'list'
                  ? 'bg-[#394931] dark:bg-[#5d624c] text-[#E1DBCB]'
                  : 'bg-white dark:bg-[#394931] text-[#868b6b] hover:text-[#394931] dark:hover:text-[#9ca089]'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-[#394931] dark:text-[#9ca089]" />
            <h3 className="text-lg font-semibold text-[#2D2D2D] dark:text-[#E1DBCB]">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setItemsToShow(12);
                }}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#394931] dark:bg-[#5d624c] text-[#E1DBCB] scale-105 shadow-lg'
                    : 'bg-white dark:bg-[#394931] text-[#5d624c] dark:text-[#c5beab] hover:bg-[#E1DBCB] dark:hover:bg-[#5d624c]/50 shadow'
                }`}
              >
                {category}
                {category !== 'All' && (
                  <span className="ml-2 text-xs opacity-70">
                    ({allProjects.filter(p => p.category === category).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-[#5d624c] dark:text-[#c5beab]">
          Showing {displayedProjects.length} of {filteredProjects.length} projects
        </div>

        {/* Projects Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white dark:bg-[#394931] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#394931]/90 dark:bg-[#2D2D2D]/90 backdrop-blur-sm text-[#E1DBCB] px-3 py-1 rounded-full text-xs font-semibold">
                    {project.images.length} images
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#394931] dark:text-[#9ca089] text-xs font-semibold px-3 py-1 bg-[#394931]/10 dark:bg-[#9ca089]/10 rounded-full">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-xs font-semibold text-yellow-600 dark:text-yellow-400">⭐</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#2D2D2D] dark:text-[#E1DBCB] mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-[#5d624c] dark:text-[#c5beab] text-sm line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs text-[#868b6b] dark:text-[#9ca089] bg-[#E1DBCB] dark:bg-[#5d624c]/30 px-2 py-1 rounded">
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
        ) : (
          <div className="space-y-4 mb-12">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white dark:bg-[#394931] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex gap-6 p-6"
              >
                <div className="relative overflow-hidden w-64 h-40 flex-shrink-0 rounded-lg">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#394931] dark:text-[#9ca089] text-sm font-semibold px-3 py-1 bg-[#394931]/10 dark:bg-[#9ca089]/10 rounded-full">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">⭐ Featured</span>
                    )}
                    <span className="text-xs text-[#868b6b] dark:text-[#9ca089]">{project.images.length} images</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D2D2D] dark:text-[#E1DBCB] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#5d624c] dark:text-[#c5beab] mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-sm text-[#868b6b] dark:text-[#9ca089] bg-[#E1DBCB] dark:bg-[#5d624c]/30 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center">
            <button
              onClick={() => setItemsToShow(prev => prev + 12)}
              className="bg-[#394931] dark:bg-[#5d624c] text-[#E1DBCB] px-8 py-3 rounded-full hover:bg-[#5d624c] dark:hover:bg-[#868b6b] transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
            >
              Load More Projects
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#868b6b] dark:text-[#9ca089] text-xl mb-2">No projects found</p>
            <p className="text-[#868b6b] dark:text-[#c5beab]">Try adjusting your filters or search query</p>
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
    </div>
  );
}