import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Mail, Github, Facebook, Twitter, Instagram, ArrowUp, X, ExternalLink, Menu } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const titles = ['Web Developer', 'UI/UX Designer', 'IT Student', 'Front-End Developer'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentTitle = titles[titleIndex];
      
      if (!isDeleting && charIndex < currentTitle.length) {
        setTypedText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  // Scroll detection for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  // Certificate data
  const certificates = [
    {
      id: 1,
      title: 'Cisco Networking Certificate 1',
      image: '/Cert1.png',  // ← Replace with your actual file
      description: 'Completed comprehensive training in network fundamentals.',
      date: '2024'
    },
    {
      id: 2,
      title: 'Cisco Networking Certificate 2',
      image: '/Cert2.png',  // ← Replace with your actual file
      description: 'Advanced networking certification covering switching.',
      date: '2024'
    },
  ];

  const nextCertificate = () => {
    setCurrentCertIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };


  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      description: 'A full-featured online shopping platform with cart, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Portfolio Design',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
      description: 'Modern and clean portfolio design with smooth animations and interactive elements.',
      tech: ['Figma', 'Adobe XD', 'Canva'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      description: 'A productivity app to manage tasks, set reminders, and track progress.',
      tech: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      description: 'Analytics dashboard for tracking social media metrics and engagement.',
      tech: ['Vue.js', 'Chart.js', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const skills = [
    { name: 'React JS', level: 70 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'JavaScript', level: 65 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Java & C++', level: 60 },
    { name: 'Computer Networking', level: 70 }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo - integrate with your backend)');
    setFormData({ name: '', email: '', message: '' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/PACIFICADOR,RHEAMAE.pdf';
    link.download = 'PACIFICADOR_RHEAMAE_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-[#2D2D2D] transition-colors duration-300">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-[#2D2D2D]/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-[#394931]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <span className="text-xl font-bold text-gray-900 dark:text-[#E1DBCB]">PacifiCode</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
                <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
                <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
                <NavLink onClick={() => scrollToSection('skills')}>Skills</NavLink>
                <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
                
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setDarkMode(!darkMode)} 
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#394931] transition"
                  >
                    {darkMode ? <Sun className="w-5 h-5 text-[#9ca089]" /> : <Moon className="w-5 h-5 text-gray-700" />}
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <button onClick={() => setDarkMode(!darkMode)} className="p-2">
                  {darkMode ? <Sun className="w-5 h-5 text-[#9ca089]" /> : <Moon className="w-5 h-5 text-gray-700" />}
                </button>
                <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                  {menuOpen ? <X className="w-6 h-6 dark:text-[#E1DBCB]" /> : <Menu className="w-6 h-6 dark:text-[#E1DBCB]" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white dark:bg-[#2D2D2D] border-t border-gray-200 dark:border-[#394931]">
              <div className="px-4 py-4 space-y-3">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 dark:text-[#E1DBCB] py-2">Home</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 dark:text-[#E1DBCB] py-2">About</button>
                <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-700 dark:text-[#E1DBCB] py-2">Projects</button>
                <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-700 dark:text-[#E1DBCB] py-2">Skills</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 dark:text-[#E1DBCB] py-2">Contact</button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-[#f5f5ec] dark:bg-[#2D2D2D]">          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-[#E1DBCB]">
                    Hi! I'm Rhea Mae
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#394931] dark:text-[#9ca089]">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-[#c5beab] text-lg">
                  A dedicated and hardworking IT Student with basic knowledge of web development, UI/UX design, and programming. 
                  Currently building experience and skills, eager to learn and explore new opportunities.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="font-semibold text-gray-900 dark:text-[#E1DBCB]">Email:</span>
                    <span className="text-gray-600 dark:text-[#c5beab]">reeyuhpacific@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="font-semibold text-gray-900 dark:text-[#E1DBCB]">Location:</span>
                    <span className="text-gray-600 dark:text-[#c5beab]">Dasmariñas, Cavite, Philippines</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <button 
                    onClick={downloadCV}
                    className="flex items-center space-x-2 bg-[#394931] dark:bg-[#5d624c] text-white dark:text-[#E1DBCB] px-6 py-3 rounded-lg hover:bg-[#5d624c] dark:hover:bg-[#868b6b] transition font-semibold"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download CV</span>
                  </button>
                  <button onClick={() => setShowCertificates(true)}  // ← CHANGED THIS
                  className="bg-[#394931] dark:bg-[#5d624c] text-white dark:text-[#E1DBCB] px-6 py-3 rounded-lg hover:bg-[#5d624c] dark:hover:bg-[#868b6b] transition font-semibold">
                  View Certificates  {/* ← CHANGED THIS */}
                  </button>
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <a href="https://x.com/reya_emaypi" className="text-gray-600 dark:text-[#c5beab] hover:text-[#394931] dark:hover:text-[#9ca089] transition">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://www.facebook.com/share/1AMGejFcPN/" className="text-gray-600 dark:text-[#c5beab] hover:text-[#394931] dark:hover:text-[#9ca089] transition">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/reeyahPacifiCode" 
                  className="text-gray-600 dark:text-[#c5beab] hover:text-[#394931] dark:hover:text-[#9ca089] transition">
                  <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/its_supercalifrajilistic?igsh=YWp6bHBmbnlzbXhz" 
                  className="text-gray-600 dark:text-[#c5beab] hover:text-[#394931] dark:hover:text-[#9ca089] transition">
                  <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-[#394931] dark:bg-[#5d624c] rounded-full blur-3xl opacity-20"></div>
                <div className="relative bg-[#9ca089] dark:bg-[#5d624c] rounded-full overflow-hidden aspect-square">
                  <img 
                    src="rhea.jpg"
                    alt="My Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#394931] dark:bg-[#2D2D2D] rounded-full opacity-50"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-[#394931] dark:border-[#9ca089] rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-[#394931]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-[#E1DBCB] mb-4">About Me</h2>
              <div className="w-20 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto"></div>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 dark:text-[#E1DBCB] text-lg leading-relaxed mb-6">
                I'm currently pursuing a Bachelor's degree in Information Technology at Cavite State University - Silang Campus. 
                I have gained experience through internships and certifications in front-end development, computer networking, and UI/UX design.
              </p>
              <p className="text-gray-600 dark:text-[#E1DBCB] text-lg leading-relaxed">
                My goal is to create user-friendly and visually appealing digital solutions while continuously learning and improving my technical skills.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-[#E1DBCB] mb-4">My Skills</h2>
              <div className="w-20 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900 dark:text-[#E1DBCB]">{skill.name}</span>
                    <span className="text-[#394931] dark:text-[#9ca089] font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-[#394931] rounded-full h-3">
                    <div 
                      className="bg-[#394931] dark:bg-[#9ca089] h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-[#394931]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-[#E1DBCB] mb-4">My Projects</h2>
              <div className="w-20 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white dark:bg-[#2D2D2D] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[#394931] dark:text-[#9ca089] text-sm font-semibold">{project.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-[#E1DBCB] mt-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-[#c5beab] mt-2 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-[#E1DBCB] mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-[#394931] dark:bg-[#9ca089] mx-auto"></div>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#394931] bg-white dark:bg-[#2D2D2D] text-gray-900 dark:text-[#E1DBCB] focus:ring-2 focus:ring-[#394931] dark:focus:ring-[#9ca089] outline-none transition"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#394931] bg-white dark:bg-[#2D2D2D] text-gray-900 dark:text-[#E1DBCB] focus:ring-2 focus:ring-[#394931] dark:focus:ring-[#9ca089] outline-none transition"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#394931] bg-white dark:bg-[#2D2D2D] text-gray-900 dark:text-[#E1DBCB] focus:ring-2 focus:ring-[#394931] dark:focus:ring-[#9ca089] outline-none transition resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#394931] dark:bg-[#5d624c] text-white dark:text-[#E1DBCB] py-3 rounded-lg hover:bg-[#5d624c] dark:hover:bg-[#868b6b] transition font-semibold flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400 dark:text-[#c5beab]">© 2024 Pacificode. All rights reserved.</p>
            <p className="text-gray-500 dark:text-[#868b6b] text-sm mt-2">
              Developed with assistance from Claude AI
            </p>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <a href="https://x.com/reya_emaypi" className="text-gray-400 hover:text-[#9ca089] transition"><Twitter className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/share/1AMGejFcPN/" className="text-gray-400 hover:text-[#9ca089] transition"><Facebook className="w-5 h-5" /></a>
              <a href="https://github.com/reeyahPacifiCode" className="text-gray-400 hover:text-[#9ca089] transition"><Github className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/its_supercalifrajilistic?igsh=YWp6bHBmbnlzbXhz" className="text-gray-400 hover:text-[#9ca089] transition"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-[#394931] dark:bg-[#5d624c] text-white dark:text-[#E1DBCB] p-3 rounded-full shadow-lg hover:bg-[#5d624c] dark:hover:bg-[#868b6b] transition-all duration-300 animate-bounce z-50"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}

        {/* Certificate Modal */}
        {showCertificates && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setShowCertificates(false)}>
            <div className="bg-white dark:bg-[#2D2D2D] rounded-2xl max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setShowCertificates(false)}
                  className="absolute top-4 right-4 bg-white dark:bg-[#394931] p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#5d624c] transition z-10"
                >
                  <X className="w-6 h-6 text-gray-900 dark:text-[#E1DBCB]" />
                </button>

                {/* Image Container */}
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
                    <svg className="w-6 h-6 text-gray-900 dark:text-[#E1DBCB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {/* Right Arrow */}
                  <button
                    onClick={nextCertificate}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-[#394931] p-3 rounded-full hover:bg-gray-100 dark:hover:bg-[#5d624c] transition shadow-lg"
                  >
                    <svg className="w-6 h-6 text-gray-900 dark:text-[#E1DBCB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Description */}
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
            </div>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <div className="bg-white dark:bg-[#2D2D2D] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-t-2xl" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white dark:bg-[#394931] p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#5d624c] transition"
                >
                  <X className="w-6 h-6 text-gray-900 dark:text-[#E1DBCB]" />
                </button>
              </div>
              <div className="p-8">
                <span className="text-[#394931] dark:text-[#9ca089] text-sm font-semibold">{selectedProject.category}</span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-[#E1DBCB] mt-2">{selectedProject.title}</h2>
                <p className="text-gray-600 dark:text-[#c5beab] mt-4 leading-relaxed">{selectedProject.description}</p>
                
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 dark:text-[#E1DBCB] mb-3">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span key={index} className="px-4 py-2 bg-[#394931]/20 dark:bg-[#5d624c]/30 text-[#394931] dark:text-[#9ca089] rounded-full text-sm font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-8">
                  <a href={selectedProject.liveUrl} className="flex items-center space-x-2 bg-[#394931] dark:bg-[#5d624c] text-white dark:text-[#E1DBCB] px-6 py-3 rounded-lg hover:bg-[#5d624c] dark:hover:bg-[#868b6b] transition font-semibold">
                    <ExternalLink className="w-5 h-5" />
                    <span>View Live</span>
                  </a>
                  <a href={selectedProject.githubUrl} className="flex items-center space-x-2 bg-gray-900 dark:bg-[#394931] text-white dark:text-[#E1DBCB] px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-[#5d624c] transition font-semibold">
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// NavLink component with hover effect
function NavLink({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative text-gray-700 dark:text-[#E1DBCB] hover:text-[#394931] dark:hover:text-[#9ca089] transition group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#394931] dark:bg-[#9ca089] group-hover:w-full transition-all duration-300"></span>
    </button>
  );
}