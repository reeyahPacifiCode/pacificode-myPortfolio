import React, { useState } from 'react';
import { Twitter, Facebook, Github, Instagram } from 'lucide-react';
import { TermsModal, PrivacyModal, modalScrollbarStyles } from '../components/Modals/LegalModals';

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="bg-[#2D2D2D] dark:bg-[#4E5652] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#c5beab] dark:text-[#9ca089]">
              © 2024 Pacificode. All rights reserved.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center justify-center space-x-4 mt-4">
              <a
                href="https://x.com/reya_emaypi"
                className="text-[#f5f5ec] hover:text-[#9ca089] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1AMGejFcPN/"
                className="text-[#f5f5ec] hover:text-[#9ca089] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/reeyahPacifiCode"
                className="text-[#f5f5ec] hover:text-[#9ca089] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/its_supercalifrajilistic?igsh=YWp6bHBmbnlzbXhz"
                className="text-[#f5f5ec] hover:text-[#9ca089] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            {/* Legal Links */}
            <div className="flex items-center justify-center space-x-6 mt-6 text-sm">
              <button
                onClick={() => setShowTerms(true)}
                className="relative text-[#c5beab] dark:text-[#9ca089] hover:text-[#868b6b] dark:hover:text-[#c5beab] transition-colors duration-300 group underline decoration-[#c5beab] dark:decoration-[#9ca089] underline-offset-4"
              >
                Terms of Service
              </button>
              <span className="text-gray-600 dark:text-gray-500">|</span>
              <button
                onClick={() => setShowPrivacy(true)}
                className="relative text-[#c5beab] dark:text-[#9ca089] hover:text-[#868b6b] dark:hover:text-[#c5beab] transition-colors duration-300 group underline decoration-[#c5beab] dark:decoration-[#9ca089] underline-offset-4"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>
      {/* Modals */}
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />

      <style>{`
        footer {
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        footer a:hover svg {
          transform: scale(1.2);
          transition: transform 0.2s ease;
        }
        ${modalScrollbarStyles}
      `}</style>
    </>
  );
}