import React from 'react';
import { Twitter, Facebook, Github, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 dark:text-[#c5beab]">
          © 2024 Pacificode. All rights reserved.
        </p>
        <p className="text-gray-500 dark:text-[#868b6b] text-sm mt-2">
          Developed with assistance from Claude AI
        </p>

        <div className="flex items-center justify-center space-x-4 mt-4">
          <a
            href="https://x.com/reya_emaypi"
            className="text-gray-400 hover:text-[#9ca089] transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/share/1AMGejFcPN/"
            className="text-gray-400 hover:text-[#9ca089] transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/reeyahPacifiCode"
            className="text-gray-400 hover:text-[#9ca089] transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/its_supercalifrajilistic?igsh=YWp6bHBmbnlzbXhz"
            className="text-gray-400 hover:text-[#9ca089] transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      <style>{`
        footer {
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        footer a:hover svg {
          transform: scale(1.2);
          transition: transform 0.2s ease;
        }
      `}</style>
    </footer>
  );
}
