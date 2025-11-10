import React from 'react';
import { X, Github, ExternalLink } from 'lucide-react';

export default function ProjectModal({ selectedProject, setSelectedProject }) {
  if (!selectedProject) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={() => setSelectedProject(null)}
    >
      <div
        className="bg-white dark:bg-[#2D2D2D] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Project Image */}
        <div className="relative">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 bg-white dark:bg-[#394931] p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#5d624c] transition"
          >
            <X className="w-6 h-6 text-gray-900 dark:text-[#E1DBCB]" />
          </button>
        </div>

        {/* Project Details */}
        <div className="p-8">
          <span className="text-[#394931] dark:text-[#9ca089] text-sm font-semibold">
            {selectedProject.category}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-[#E1DBCB] mt-2">
            {selectedProject.title}
          </h2>
          <p className="text-gray-600 dark:text-[#c5beab] mt-4 leading-relaxed">
            {selectedProject.description}
          </p>

          {/* Technologies */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 dark:text-[#E1DBCB] mb-3">
              Technologies Used:
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#394931]/20 dark:bg-[#5d624c]/30 text-[#394931] dark:text-[#9ca089] rounded-full text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4 mt-8">
            <a
              href={selectedProject.liveUrl}
              className="flex items-center space-x-2 bg-[#394931] dark:bg-[#5d624c] text-white dark:text-[#E1DBCB] px-6 py-3 rounded-lg hover:bg-[#5d624c] dark:hover:bg-[#868b6b] transition font-semibold"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Live</span>
            </a>
            <a
              href={selectedProject.githubUrl}
              className="flex items-center space-x-2 bg-gray-900 dark:bg-[#394931] text-white dark:text-[#E1DBCB] px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-[#5d624c] transition font-semibold"
            >
              <Github className="w-5 h-5" />
              <span>View Code</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        #project-modal {
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
