import React, { useState } from 'react';
import { X, Github, ExternalLink, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function ProjectModal({ selectedProject, setSelectedProject }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  if (!selectedProject) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsImageFullscreen(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={closeModal}
    >
      <div
        className="bg-white dark:bg-[#2D2D2D] rounded-2xl max-w-6xl w-full h-[90vh] overflow-hidden relative shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 bg-white dark:bg-[#394931] p-2 rounded-full hover:bg-[#E1DBCB] dark:hover:bg-[#5d624c] transition shadow-lg"
        >
          <X className="w-6 h-6 text-[#2D2D2D] dark:text-[#E1DBCB]" />
        </button>

        {/* Image Gallery */}
        <div className="relative flex-shrink-0">
          <div className="relative h-[380px] bg-[#E1DBCB] dark:bg-[#394931]">
            <img
              src={selectedProject.images[currentImageIndex]}
              alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain cursor-zoom-in"
              onClick={() => setIsImageFullscreen(true)}
            />

            {/* Fullscreen Button */}
            <button
              onClick={() => setIsImageFullscreen(true)}
              className="absolute top-4 left-4 bg-white/90 dark:bg-[#394931]/90 p-2 rounded-full hover:bg-white dark:hover:bg-[#5d624c] transition shadow-lg"
            >
              <Maximize2 className="w-5 h-5 text-[#2D2D2D] dark:text-[#E1DBCB]" />
            </button>

            {/* Navigation Arrows */}
            {selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-[#394931]/90 p-3 rounded-full hover:bg-white dark:hover:bg-[#5d624c] transition shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6 text-[#2D2D2D] dark:text-[#E1DBCB]" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-[#394931]/90 p-3 rounded-full hover:bg-white dark:hover:bg-[#5d624c] transition shadow-lg"
                >
                  <ChevronRight className="w-6 h-6 text-[#2D2D2D] dark:text-[#E1DBCB]" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-semibold">
              {currentImageIndex + 1} / {selectedProject.images.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          {selectedProject.images.length > 1 && (
            <div className="flex gap-2 p-3 overflow-x-auto bg-[#f5f5ec] dark:bg-[#394931]/30 custom-scrollbar">
              {selectedProject.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
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
        <div className="flex-grow p-8 overflow-y-auto">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-[#394931] dark:text-[#9ca089] text-sm font-semibold px-4 py-1.5 bg-[#394931]/10 dark:bg-[#9ca089]/10 rounded-full">
              {selectedProject.category}
            </span>
            {selectedProject.featured && (
              <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 flex items-center gap-1">
                ⭐ Featured Project
              </span>
            )}
            <span className="text-sm text-[#868b6b] dark:text-[#9ca089] ml-auto">
              {selectedProject.images.length} Images
            </span>
          </div>

          <h2 className="text-3xl font-bold text-[#2D2D2D] dark:text-[#E1DBCB] mb-3">
            {selectedProject.title}
          </h2>

          <p className="text-[#5d624c] dark:text-[#c5beab] leading-relaxed text-base mb-6">
            {selectedProject.description}
          </p>

         

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={selectedProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#2D2D2D] dark:bg-[#394931] text-[#E1DBCB] px-6 py-2.5 rounded-lg hover:bg-[#394931] dark:hover:bg-[#5d624c] transition font-semibold shadow-md transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>

            {selectedProject.liveUrl && (
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#394931] dark:bg-[#5d624c] text-[#E1DBCB] px-6 py-2.5 rounded-lg hover:bg-[#5d624c] dark:hover:bg-[#868b6b] transition font-semibold shadow-md transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {isImageFullscreen && (
        <div
          className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
          onClick={() => setIsImageFullscreen(false)}
        >
          <button
            onClick={() => setIsImageFullscreen(false)}
            className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition"
          >
            <X className="w-6 h-6 text-white" />
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
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold">
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

        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #9ca089;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #868b6b;
        }
      `}</style>
    </div>
  );
}
