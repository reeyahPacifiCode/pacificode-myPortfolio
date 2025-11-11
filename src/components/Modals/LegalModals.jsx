import React from 'react';
import { X } from 'lucide-react';

export function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
      <div className="flex items-center justify-center relative p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mx-auto">
          Terms and Conditions
        </h2>
      </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)] text-gray-700 dark:text-gray-300 custom-scrollbar">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Updated April 21st, 2025
          </p>
          <p className="text-sm italic mb-6">
            By Rhea Mae Pacificador — Beginner Web Developer
          </p>
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                1. Scope of Work
              </h3>
              <p className="mb-2">I will create a custom website based on the client's needs:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Web design (layout, colors, typography)</li>
                <li>Frontend development (HTML, CSS, JS)</li>
                <li>Responsive design (mobile-friendly)</li>
                <li>Basic content integration</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                2. Timeline
              </h3>
              <p>The project will take approximately [X days/weeks], beginning after full payment and delivery of assets.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                3. Payment Terms
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>50% upfront (non-refundable)</li>
                <li>50% upon completion</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                4. Revisions
              </h3>
              <p>Up to 2 rounds of revisions. Additional edits cost ₱[your rate]/hr.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                5. Client Responsibilities
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide content & feedback promptly</li>
                <li>Stay responsive during development</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                6. Ownership
              </h3>
              <p>After full payment, the client owns the final website. Developer may showcase it in portfolio.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                7. Maintenance
              </h3>
              <p>No post-delivery support unless agreed separately.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                8. Cancellation
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Client may cancel anytime. 50% is non-refundable.</li>
                <li>Developer may cancel after 14+ days of no communication.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                9. Disclaimer
              </h3>
              <p>I am not liable for hosting/server issues or data loss after handover.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                10. Agreement
              </h3>
              <p>By paying and starting the project, both parties agree to these terms.</p>
            </section>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#9ca089] text-white rounded-lg hover:bg-[#868b6b] transition font-medium"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}

export function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Privacy Policy
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)] text-gray-700 dark:text-gray-300 custom-scrollbar">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Updated April 21st, 2025
          </p>

          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Introduction
              </h3>
              <p>Welcome to our website. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Information We Collect
              </h3>
              <p>We collect various types of information, including personal details, usage data, and other details that you provide while using our website.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                How We Use Your Information
              </h3>
              <p>Your information is used to improve our services, personalize your experience, and communicate with you regarding updates, news, and offers related to our website.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Data Protection
              </h3>
              <p>We take appropriate security measures to protect your personal data from unauthorized access, alteration, or destruction.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Third-Party Links
              </h3>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites and encourage you to review their policies.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Your Rights
              </h3>
              <p>You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us directly.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Changes to This Policy
              </h3>
              <p>We may update this privacy policy from time to time. Any changes will be posted on this page with the revised date.</p>
            </section>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-center ">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#9ca089] text-white rounded-lg hover:bg-[#868b6b] transition font-medium"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}

// Custom scrollbar styles
export const modalScrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
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
`;