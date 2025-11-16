import React, { useState } from 'react';
import { X, Github, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectModal({ selectedProject, setSelectedProject }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  if (!selectedProject) return null;

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsImageFullscreen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <div
      className="fixed inset-0 bg-[#4a5851]/50 z-[60] flex items-center justify-center p-4 animate-fadeIn"
      onClick={closeModal}
    >
      <div
        className="bg-[#f5f5ec] dark:bg-[#2D2D2D] rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden relative shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 md:top-3 md:right-3 z-20 bg-[#f5f5ec] dark:bg-[#394931] p-2 rounded-full hover:bg-[#9ca089]/40 dark:hover:bg-[#5d624c] transition shadow-md"
        >
          <X className="w-6 h-6 text-[#2D2D2D] dark:text-[#E1DBCB]" />
        </button>

        {/* Image Gallery */}
        <div className="relative flex-shrink-0">
          <div className="relative h-[280px] md:h-[320px] bg-[#DCE2D6] dark:bg-[#394931]/30 flex items-center justify-center">
            <img
              src={selectedProject.images[currentImageIndex]}
              alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain cursor-zoom-in"
              onClick={() => setIsImageFullscreen(true)}
            />

            {/* Image Counter */}
            <div className="absolute bottom-2 md:bottom-10 left-1/2 -translate-x-1/2 bg-[#4E5652]/50 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs font-semibold">
              {currentImageIndex + 1} / {selectedProject.images.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          {selectedProject.images.length > 1 && (
            <div className="flex gap-2 p-2 md:p-3 overflow-x-auto bg-[#DCE2D6]/40 dark:bg-[#394931]/50 custom-scrollbar">
              {selectedProject.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition ${
                    idx === currentImageIndex
                      ? 'border-[#394931] dark:border-[#9ca089] scale-105 shadow-lg'
                      : 'border-transparent opacity-60 hover:opacity-100 hover:border-[#868b6b]'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="flex-grow p-4 md:p-6 overflow-y-auto">
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 flex-wrap">
            <span className="text-[#394931] dark:text-[#9ca089] text-xs md:text-sm font-semibold px-3 py-1 md:px-4 md:py-1.5 bg-[#394931]/10 dark:bg-[#9ca089]/10 rounded-full">
              {selectedProject.category}
            </span>
            {selectedProject.featured && (
              <span className="text-xs md:text-sm font-semibold text-yellow-600 dark:text-yellow-400 flex items-center gap-1">
                ⭐ Featured Project
              </span>
            )}
            <span className="text-xs md:text-sm text-[#868b6b] dark:text-[#9ca089] ml-auto">
              {selectedProject.images.length} Images
            </span>
          </div>

          <h2 className="text-xl md:text-3xl font-bold text-[#2D2D2D] dark:text-[#E1DBCB] mb-2 md:mb-3">
            {selectedProject.title}
          </h2>

          <p className="text-[#5d624c] dark:text-[#c5beab] leading-relaxed text-sm md:text-base mb-3 md:mb-4 line-clamp-4 md:line-clamp-none">
            {selectedProject.description}
          </p>

          {/* Action Button */}
          <div className="mt-3 md:mt-4">
            <a
              href={selectedProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#394931] dark:border-[#9ca089] text-[#394931] dark:text-[#9ca089] px-3 py-1.5 md:px-4 md:py-2 rounded-md transition font-semibold relative overflow-hidden group text-sm md:text-base leading-none whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-[#394931] dark:bg-[#5d624c] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none"></span>
              <Github className="w-4 h-4 md:w-5 md:h-5 relative z-10 block group-hover:text-[#f5f5ec] transition-colors duration-300" />
              <span className="relative z-10 group-hover:text-[#f5f5ec] transition-colors duration-300">View on GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {isImageFullscreen && (
        <div
          className="fixed inset-0 bg-[#5d624c] dark:bg-[#394931]/70 z-50 flex items-center justify-center p-4 animate-fadeOut"
          onClick={() => setIsImageFullscreen(false)}
        >
           {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsImageFullscreen(false);
            }}
            className="absolute top-2 right-2 md:top-4 md:right-4 bg-[#f5f5ec]/70 backdrop-blur-sm p-2 md:p-3 rounded-full hover:bg-[#f5f5ec] transition z-10"
          >
            <X className="w-4 h-4 md:w-6 md:h-6 text-[#2d2d2d]" />
          </button>
          <img
            src={selectedProject.images[currentImageIndex]}
            alt="Fullscreen view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {selectedProject.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-[#DCE2D6]/100 backdrop-blur-sm p-2 md:p-4 rounded-full hover:bg-[#f5f5ec] transition"
              >
                <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 text-[#2D2D2D]" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-[#DCE2D6]/100 backdrop-blur-sm p-2 md:p-4 rounded-full hover:bg-[#f5f5ec] transition"
              >
                <ChevronRight className="w-5 h-5 md:w-8 md:h-8 text-[#2D2D2D]" />
              </button>
            </>
          )}

          <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 bg-[#DCE2D6]/100 backdrop-blur-sm text-[#2D2D2D] px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold">
            {currentImageIndex + 1} / {selectedProject.images.length}
          </div>
        </div>
      )}

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

        /* Line clamp for mobile */
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Horizontal Scrollbar (for thumbnail strip) */
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent !important;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #394931 !important;
          border-radius: 4px !important;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #5d624c !important;
        }
        
        .custom-scrollbar {
          scrollbar-width: thin !important;
          scrollbar-color: #394931 transparent !important;
        }

        /* Dark mode scrollbar */
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #9ca089 !important;
        }
        
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #868b6b !important;
        }
        
        .dark .custom-scrollbar {
          scrollbar-color: #9ca089 transparent !important;
        }
      `}</style>
    </div>
  );
}