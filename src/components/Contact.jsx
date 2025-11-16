import React, { useState, useEffect, useRef } from 'react';
import { Mail, X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: '', // 'success' or 'error'
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 5000);
  };

  // Auto-resize textarea function
  const handleTextareaChange = (e) => {
    const textarea = textareaRef.current;
    if (textarea) {
      // Reset height to recalculate
      textarea.style.height = 'auto';
      // Set to scrollHeight with a small buffer for mobile
      const newHeight = textarea.scrollHeight;
      textarea.style.height = newHeight + 'px';
    }
    setFormData({ ...formData, message: e.target.value });
  };

  // Initialize textarea height on mount and when message changes externally
  useEffect(() => {
    if (textareaRef.current && formData.message === '') {
      textareaRef.current.style.height = 'auto';
    }
  }, [formData.message]);

  const handleSubmit = async () => {
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      showNotification('error', 'Please fill in all fields');
      return;
    }

     // Email validation - Must have @ symbol and proper format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if email contains @
    if (!formData.email.includes('@')) {
      showNotification('error', 'Email must contain @ symbol (e.g., example@gmail.com)');
      return;
    }
    
    // Check complete email format
    if (!emailRegex.test(formData.email)) {
      showNotification('error', 'Please enter a valid email address (e.g., example@gmail.com)');
      return;
    }

    setIsLoading(true);

    // EmailJS Configuration
    const SERVICE_ID = 'service_zl18q39';
    const TEMPLATE_ID = 'template_z1gjgvs';
    const PUBLIC_KEY = 'KIJ2gBv8vOLYPgOfV';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Your Name',
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: templateParams,
        }),
      });

      if (response.ok) {
        showNotification('success', 'Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        // Reset textarea height after clearing
        if (textareaRef.current) {
          textareaRef.current.style.height = 'auto';
        }
      } else {
        const errorData = await response.text();
        console.error('EmailJS Error:', errorData);
        showNotification('error', 'Failed to send message. Please try again or email me directly.');
      }
    } catch (error) {
      console.error('Network Error:', error);
      showNotification('error', 'Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-[#f5f5ec] dark:bg-[#2D2D2D] relative transition-colors duration-300">
      {/* Notification Modal */}
      {notification.show && (
        <div className="fixed top-4 right-4 z-50 animate-slideIn">
          <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl ${
            notification.type === 'success' 
              ? 'bg-green-50 dark:bg-[#394931] border-2 border-green-500 dark:border-[#9ca089]' 
              : 'bg-red-50 dark:bg-[#5d624c] border-2 border-red-500 dark:border-red-400'
          }`}>
            {notification.type === 'success' ? (
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-[#9ca089]" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
            )}
            <p className={`font-medium ${
              notification.type === 'success' ? 'text-green-800 dark:text-[#E1DBCB]' : 'text-red-800 dark:text-[#E1DBCB]'
            }`}>
              {notification.message}
            </p>
            <button
              onClick={() => setNotification({ show: false, type: '', message: '' })}
              className="ml-2 hover:opacity-70 transition"
            >
              <X className={`w-5 h-5 ${
                notification.type === 'success' ? 'text-green-600 dark:text-[#9ca089]' : 'text-red-600 dark:text-red-400'
              }`} />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-[800ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-[#2D2D2D] dark:text-[#E1DBCB] mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto"></div>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}>
              <label className="block text-sm font-medium text-[#4E5652] dark:text-[#c5beab] mb-2 uppercase">
                Fullname
              </label>
              <input
                type="text"
                placeholder="Example: Adam Wathan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value.toUpperCase() })}
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#DCE2D6] text-[#394931] dark:border-[#5d624c] dark:bg-[#9ca089] dark:text-[#2D2D2D] placeholder:text-gray-400 dark:placeholder:text-[#5d624c] focus:ring-2 focus:ring-[#4E5652] dark:focus:ring-[#4E5652] focus:border-transparent outline-none transition disabled:opacity-50 disabled:cursor-not-allowed uppercase"
              />
            </div>
            <div className={`transition-all duration-500 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}>
              <label className="block text-sm font-medium text-[#4E5652] dark:text-[#c5beab] mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="adam@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#DCE2D6] text-[#394931] dark:border-[#5d624c] dark:bg-[#9ca089] dark:text-[#2D2D2D] placeholder:text-gray-400 dark:placeholder:text-[#5d624c] focus:ring-2 focus:ring-[#4E5652] dark:focus:ring-[#4E5652]  focus:border-transparent outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div className={`transition-all duration-500 delay-[225ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}>
              <label className="block text-sm font-medium text-[#4E5652] dark:text-[#c5beab] mb-2">
                Message
              </label>
              <textarea
                ref={textareaRef}
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleTextareaChange}
                rows={5}
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#DCE2D6] text-[#394931] dark:border-[#5d624c] dark:bg-[#9ca089] dark:text-[#2D2D2D] placeholder:text-gray-400 dark:placeholder:text-[#5d624c] focus:ring-2 focus:ring-[#4E5652] dark:focus:ring-[#4E5652]  focus:border-transparent outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden min-h-[120px] max-h-[400px]"
                style={{ fieldSizing: 'content' }}
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full border-2 border-[#394931] dark:border-[#9ca089] text-[#394931] dark:text-[#9ca089] py-2 rounded-md transition-all font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group duration-700 delay-[400ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}
            >
              <span className="absolute inset-0 bg-[#394931] dark:bg-[#5d624c] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin relative z-10 group-hover:text-[#f5f5ec] transition-colors" />
                  <span className="relative z-10 group-hover:text-[#f5f5ec] transition-colors duration-200">Sending...</span>
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5 relative z-10 group-hover:text-[#f5f5ec] transition-colors duration-200" />
                  <span className="relative z-10 group-hover:text-[#f5f5ec] transition-colors duration-100">Send Message</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        #contact input:focus, #contact textarea:focus {
          transform: scale(1.01);
        }

        .dark #contact input:focus, .dark #contact textarea:focus {
          box-shadow: 0 0 0 3px rgba(156, 160, 137, 0.2);
        }

        #contact input:not(.dark input):focus, #contact textarea:not(.dark textarea):focus {
          box-shadow: 0 0 0 3px rgba(57, 73, 49, 0.1);
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </section>
  );
}