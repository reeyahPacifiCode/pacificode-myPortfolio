import React, { useState } from 'react';
import { Twitter, Facebook, Github, Instagram } from 'lucide-react';
import { TermsModal, PrivacyModal, modalScrollbarStyles } from '../components/Modals/LegalModals';

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="bg-[#2D2D2D] dark:bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 dark:text-[#c5beab]">
              © 2024 Pacificode. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-[#868b6b] text-sm mt-2">
             
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center justify-center space-x-4 mt-4">
              <a
                href="https://x.com/reya_emaypi"
                className="text-gray-400 hover:text-[#9ca089] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1AMGejFcPN/"
                className="text-gray-400 hover:text-[#9ca089] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/reeyahPacifiCode"
                className="text-gray-400 hover:text-[#9ca089] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/its_supercalifrajilistic?igsh=YWp6bHBmbnlzbXhz"
                className="text-gray-400 hover:text-[#9ca089] transition"
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
                className="text-gray-400 hover:text-[#9ca089] transition underline-offset-4 hover:underline"
              >
                Terms of Service
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setShowPrivacy(true)}
                className="text-gray-400 hover:text-[#9ca089] transition underline-offset-4 hover:underline"
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