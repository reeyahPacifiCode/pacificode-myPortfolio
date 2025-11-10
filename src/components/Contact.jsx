import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo — integrate with your backend)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-[#E1DBCB] mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#394931] bg-white dark:bg-[#2D2D2D] text-gray-900 dark:text-[#E1DBCB] focus:ring-2 focus:ring-[#394931] dark:focus:ring-[#9ca089] outline-none transition"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#394931] bg-white dark:bg-[#2D2D2D] text-gray-900 dark:text-[#E1DBCB] focus:ring-2 focus:ring-[#394931] dark:focus:ring-[#9ca089] outline-none transition"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#394931] bg-white dark:bg-[#2D2D2D] text-gray-900 dark:text-[#E1DBCB] focus:ring-2 focus:ring-[#394931] dark:focus:ring-[#9ca089] outline-none transition resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#394931] dark:bg-[#5d624c] text-white dark:text-[#E1DBCB] py-3 rounded-lg hover:bg-[#5d624c] dark:hover:bg-[#868b6b] transition font-semibold flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
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
