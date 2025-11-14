import React, { useState } from 'react';
import { Filter, Search, ArrowLeftFromLine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { allProjects, categories } from '../data/projects'; // 👈 Import dito

export default function WorksPage({ setSelectedProject, darkMode }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [itemsToShow, setItemsToShow] = useState(12);

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
      <div className="relative z-0 min-h-screen bg-[#DCE2D6] dark:bg-[#4a5851] pt-4 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center space-x-2 border-2 border-[#2D2D2D] dark:border-[#9ca089] text-[#2D2D2D] dark:text-[#9ca089] px-3 py-2 rounded-md transition font-semibold relative overflow-hidden text-sm"
          >
            <span className="absolute inset-0 bg-[#2D2D2D] dark:bg-[#868b6b] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <ArrowLeftFromLine className="w-4 h-4 relative z-10 transition-colors duration-300 group-hover:text-[#f5f5ec] dark:group-hover:text-[#f5f5ec]" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#f5f5ec] dark:group-hover:text-[#f5f5ec]">
              Back To Projects
            </span>
          </button>
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] dark:text-[#E1DBCB] mb-4">
              All Projects
            </h1>
            <div className="w-16 h-1 bg-[#2D2D2D] dark:bg-[#9ca089] mx-auto mb-4"></div>
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
                className="w-full pl-10 pr-4 py-2.5 bg-[#f5f5ec] dark:bg-[#2D2D2D] border-2 border-transparent focus:border-[#2D2D2D] dark:focus:border-[#9ca089] rounded-lg text-[#2D2D2D] dark:text-[#E1DBCB] placeholder-[#868b6b] text-sm transition-all outline-none"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-[#2D2D2D] dark:text-[#9ca089]" />
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
                  className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#2D2D2D] dark:bg-[#5d624c] text-[#E1DBCB] scale-105 shadow-lg'
                      : 'bg-[#f5f5ec] dark:bg-[#2D2D2D] border-2 dark:border-[#5d624c] text-[#5d624c] dark:text-[#c5beab] hover:bg-[#E1DBCB] dark:hover:bg-[#5d624c]/50 shadow'
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

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 ">
          {displayedProjects.map((project) => (
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

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center">
              <button
                onClick={() => setItemsToShow(prev => prev + 12)}
                className="bg-[#2D2D2D] dark:bg-[#5d624c] text-[#E1DBCB] px-6 py-2.5 rounded-full hover:bg-[#5d624c] dark:hover:bg-[#868b6b] transition-all duration-300 font-semibold shadow-lg transform hover:scale-105 text-sm"
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