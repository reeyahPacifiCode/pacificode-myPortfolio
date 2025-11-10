import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    // ========================================
    // PALITAN MO ITO NG IYONG EMAILJS IDs:
    // ========================================
    const SERVICE_ID = 'service_zl18q39';      // Example: 'service_abc1234'
    const TEMPLATE_ID = 'template_z1gjgvs';    // Example: 'template_xyz5678'
    const PUBLIC_KEY = 'KlJ2gBv8vOLYPgOfV';      // Example: 'xvW9Hn7kQr2pLmJ8'

    // Template parameters - ito yung mga variables sa EmailJS template mo
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully! I will get back to you soon.');
          setFormData({ name: '', email: '', message: '' });
          setIsLoading(false);
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again or email me directly.');
          setIsLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-[#f5f5ec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-[#E1DBCB] mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto"></div>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#394931] bg-white dark:bg-[#2D2D2D] text-gray-900 dark:text-[#E1DBCB] focus:ring-2 focus:ring-[#394931] dark:focus:ring-[#9ca089] outline-none transition disabled:opacity-50"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#394931] bg-white dark:bg-[#2D2D2D] text-gray-900 dark:text-[#E1DBCB] focus:ring-2 focus:ring-[#394931] dark:focus:ring-[#9ca089] outline-none transition disabled:opacity-50"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#394931] bg-white dark:bg-[#2D2D2D] text-gray-900 dark:text-[#E1DBCB] focus:ring-2 focus:ring-[#394931] dark:focus:ring-[#9ca089] outline-none transition resize-none disabled:opacity-50"
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-[#394931] dark:bg-[#5d624c] text-white dark:text-[#E1DBCB] py-3 rounded-lg hover:bg-[#5d624c] dark:hover:bg-[#868b6b] transition font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Mail className="w-5 h-5" />
              <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
            </button>
          </div>
        </div>
      </div>
      <style>{`
        #contact input, #contact textarea {
          transition: transform 0.2s ease, box-shadow 0.3s ease;
        }
        #contact input:focus, #contact textarea:focus {
          transform: scale(1.01);
          box-shadow: 0 0 10px rgba(57, 73, 49, 0.3);
        }
      `}</style>
    </section>
  );
}