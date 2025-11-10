import React, { useState } from 'react';
import { X, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectModal({ selectedProject, setSelectedProject }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!selectedProject) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={() => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
      }}
    >
      <div
        className="bg-white dark:bg-[#2D2D2D] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setSelectedProject(null);
            setCurrentImageIndex(0);
          }}
          className="absolute top-4 right-4 z-10 bg-white dark:bg-[#394931] p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#5d624c] transition shadow-lg"
        >
          <X className="w-6 h-6 text-gray-900 dark:text-[#E1DBCB]" />
        </button>

        {/* Image Gallery */}
        <div className="relative">
          <div className="relative h-96 bg-gray-100 dark:bg-[#394931]">
            <img
              src={selectedProject.images[currentImageIndex]}
              alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Navigation Arrows */}
            {selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-[#394931]/90 p-3 rounded-full hover:bg-white dark:hover:bg-[#5d624c] transition shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-[#E1DBCB]" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-[#394931]/90 p-3 rounded-full hover:bg-white dark:hover:bg-[#5d624c] transition shadow-lg"
                >
                  <ChevronRight className="w-6 h-6 text-gray-900 dark:text-[#E1DBCB]" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {selectedProject.images.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          {selectedProject.images.length > 1 && (
            <div className="flex gap-2 p-4 overflow-x-auto bg-gray-50 dark:bg-[#394931]/30 custom-scrollbar">
              {selectedProject.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                    idx === currentImageIndex
                      ? 'border-[#394931] dark:border-[#9ca089] scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#394931] dark:text-[#9ca089] text-sm font-semibold px-4 py-1.5 bg-[#394931]/10 dark:bg-[#9ca089]/10 rounded-full">
              {selectedProject.category}
            </span>
            {selectedProject.featured && (
              <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                ⭐ Featured Project
              </span>
            )}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-[#E1DBCB] mb-4">
            {selectedProject.title}
          </h2>

          <p className="text-gray-600 dark:text-[#c5beab] leading-relaxed mb-6">
            {selectedProject.description}
          </p>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 dark:text-[#E1DBCB] mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#394931] dark:bg-[#9ca089] rounded"></span>
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#394931]/10 dark:bg-[#5d624c]/30 text-[#394931] dark:text-[#9ca089] rounded-lg text-sm font-semibold border border-[#394931]/20 dark:border-[#9ca089]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={selectedProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 dark:bg-[#394931] text-white dark:text-[#E1DBCB] px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-[#5d624c] transition font-semibold shadow-lg transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>View Code</span>
            </a>
            
            {selectedProject.liveUrl && (
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#394931] dark:bg-[#5d624c] text-white dark:text-[#E1DBCB] px-6 py-3 rounded-lg hover:bg-[#5d624c] dark:hover:bg-[#868b6b] transition font-semibold shadow-lg transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #9ca089;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #868b6b;
        }
        
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #9ca089 transparent;
        }
      `}</style>
    </div>
  );
}