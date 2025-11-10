import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTopButton({ show }) {
  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 bg-[#394931] dark:bg-[#5d624c] text-white dark:text-[#E1DBCB] p-3 rounded-full shadow-lg hover:bg-[#5d624c] dark:hover:bg-[#868b6b] transition-all duration-300 animate-bounce z-50"
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6" />
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
