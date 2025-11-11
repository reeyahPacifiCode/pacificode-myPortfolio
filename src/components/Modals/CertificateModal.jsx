import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function CertificateModal({
  show,
  setShow,
  currentCertIndex,
  setCurrentCertIndex,
}) {
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  if (!show) return null;

  const certificates = [
    {
      id: 1,
      title: 'Cisco Networking Certificate 1',
      image: '/Cert1.png',
      description: 'Completed comprehensive training in network fundamentals.',
      date: '2024',
    },
    {
      id: 2,
      title: 'Cisco Networking Certificate 2',
      image: '/Cert2.png',
      description: 'Advanced networking certification covering switching.',
      date: '2024',
    },
  ];

  const nextCertificate = () => {
    setCurrentCertIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const closeModal = () => {
    setShow(false);
    setIsImageFullscreen(false);
  };

  return (
    <>
      {/* Main Modal */}
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
            className="absolute top-4 right-4 z-10 bg-white dark:bg-[#394931] p-2 rounded-full hover:bg-[#f5f5ec] dark:hover:bg-[#5d624c] transition shadow-lg"
          >
            <X className="w-6 h-6 text-[#2D2D2D] dark:text-[#E1DBCB]" />
          </button>

          {/* Certificate Image Gallery */}
          <div className="relative flex-shrink-0">
            <div className="relative h-[380px] bg-[#E1DBCB] dark:bg-[#394931]">
              <img
                src={certificates[currentCertIndex].image}
                alt={certificates[currentCertIndex].title}
                className="w-full h-full object-contain cursor-zoom-in"
                onClick={() => setIsImageFullscreen(true)}
              />

              {/* Certificate Counter */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                {currentCertIndex + 1} / {certificates.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {certificates.length > 1 && (
              <div className="flex gap-2 p-3 overflow-x-auto bg-[#f5f5ec] dark:bg-[#394931]/30 custom-scrollbar">
                {certificates.map((cert, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentCertIndex(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                      idx === currentCertIndex
                        ? 'border-[#394931] dark:border-[#9ca089] scale-105 shadow-lg'
                        : 'border-transparent opacity-60 hover:opacity-100 hover:border-[#868b6b]'
                    }`}
                  >
                    <img src={cert.image} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Certificate Details */}
          <div className="flex-grow p-8 overflow-y-auto">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-[#394931] dark:text-[#9ca089] text-sm font-semibold px-4 py-1.5 bg-[#394931]/10 dark:bg-[#9ca089]/10 rounded-full">
                Certificate
              </span>
              <span className="text-sm text-[#868b6b] dark:text-[#9ca089] ml-auto">
                {certificates[currentCertIndex].date}
              </span>
            </div>

            <h2 className="text-3xl font-bold text-[#2D2D2D] dark:text-[#E1DBCB] mb-3">
              {certificates[currentCertIndex].title}
            </h2>

            <p className="text-[#5d624c] dark:text-[#c5beab] leading-relaxed text-base mb-6">
              {certificates[currentCertIndex].description}
            </p>

            {/* Progress Dots */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCertIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentCertIndex
                      ? 'w-8 bg-[#394931] dark:bg-[#9ca089]'
                      : 'w-2 bg-gray-300 dark:bg-[#5d624c]'
                  }`}
                />
              ))}
            </div>
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
            src={certificates[currentCertIndex].image}
            alt="Fullscreen view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {certificates.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevCertificate();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextCertificate();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold">
            {currentCertIndex + 1} / {certificates.length}
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
    </>
  );
}