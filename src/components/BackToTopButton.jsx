import React from 'react';
import {ArrowUpFromLineIcon } from 'lucide-react';

export default function BackToTopButton({ show }) {
  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 border-2 bg-[#DCE2D6] border-[#394931] dark:bg-[#4a5851] text-[#2D2D2D] dark:text-[#f5f5ec] dark:border-[#f5f5ec] p-3 rounded-md shadow-lg hover:bg-[#868b6b] dark:hover:bg-[#868b6b] transition-all duration-300 animate-bounce z-50"
      aria-label="Back to top"
    >
      <ArrowUpFromLineIcon className="w-6 h-6" />
      <style>{`
        .animate-bounce {
          animation: bounce 1.5s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </button>
  );
}

  

