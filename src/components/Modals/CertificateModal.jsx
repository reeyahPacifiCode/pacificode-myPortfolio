import React from 'react';
import { X } from 'lucide-react';

export default function CertificateModal({
  show,
  setShow,
  currentCertIndex,
  setCurrentCertIndex,
}) {
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

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={() => setShow(false)}
    >
      <div
        className="bg-white dark:bg-[#2D2D2D] rounded-2xl max-w-4xl w-full relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 bg-white dark:bg-[#394931] p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#5d624c] transition z-10"
        >
          <X className="w-6 h-6 text-gray-900 dark:text-[#E1DBCB]" />
        </button>

        {/* Certificate Image */}
        <div className="relative">
          <img
            src={certificates[currentCertIndex].image}
            alt={certificates[currentCertIndex].title}
            className="w-full h-96 object-contain bg-gray-100 dark:bg-[#394931] rounded-t-2xl"
          />

          {/* Left Arrow */}
          <button
            onClick={prevCertificate}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-[#394931] p-3 rounded-full hover:bg-gray-100 dark:hover:bg-[#5d624c] transition shadow-lg"
          >
            <svg
              className="w-6 h-6 text-gray-900 dark:text-[#E1DBCB]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextCertificate}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-[#394931] p-3 rounded-full hover:bg-gray-100 dark:hover:bg-[#5d624c] transition shadow-lg"
          >
            <svg
              className="w-6 h-6 text-gray-900 dark:text-[#E1DBCB]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Certificate Details */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-[#E1DBCB]">
              {certificates[currentCertIndex].title}
            </h3>
            <span className="text-sm text-gray-500 dark:text-[#9ca089]">
              {certificates[currentCertIndex].date}
            </span>
          </div>

          <p className="text-gray-600 dark:text-[#c5beab] leading-relaxed">
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

      <style>{`
        .dark .transition svg {
          transition: transform 0.2s ease;
        }
        .dark .transition:hover svg {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
