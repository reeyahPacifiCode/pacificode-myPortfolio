import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Mail, Github, Linkedin, Twitter, Instagram, ArrowUp, X, ExternalLink, Menu } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const titles = ['UI/UX Designer', 'Web Developer', 'Creative Designer', 'Programmer'];
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
      tech: ['Figma', 'Adobe XD', 'Photoshop'],
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
    { name: 'React JS', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Node.js', level: 80 },
    { name: 'Figma', level: 87 }
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
    alert('CV Download started! (Connect your actual CV file here)');
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">N</span>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">NIMBUS</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition">About</button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition">Projects</button>
                <button onClick={() => scrollToSection('skills')} className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition">Skills</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition">Contact</button>
                
                <div className="flex items-center space-x-4">
                  <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                    {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
                  </button>
                  <button onClick={downloadCV} className="bg-gray-900 dark:bg-yellow-400 text-white dark:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-yellow-500 transition">
                    Contact Me
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <button onClick={() => setDarkMode(!darkMode)} className="p-2">
                  {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
                </button>
                <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                  {menuOpen ? <XIcon className="w-6 h-6 dark:text-white" /> : <Menu className="w-6 h-6 dark:text-white" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              <div className="px-4 py-4 space-y-3">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 dark:text-gray-300">Home</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 dark:text-gray-300">About</button>
                <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-700 dark:text-gray-300">Projects</button>
                <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-700 dark:text-gray-300">Skills</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 dark:text-gray-300">Contact</button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
                    Hi! I'm Ameli Nimbus -
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-yellow-500">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Product Designer and Digital Creative Director working in design field for 13 years so far, specialized in UI/UX, Branding and digital design.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="font-semibold text-gray-900 dark:text-white">Email:</span>
                    <span className="text-gray-600 dark:text-gray-400">nimbus2000@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="font-semibold text-gray-900 dark:text-white">Behance:</span>
                    <span className="text-gray-600 dark:text-gray-400">behance.net/nimbus2000</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <button onClick={downloadCV} className="flex items-center space-x-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition font-semibold">
                    <Download className="w-5 h-5" />
                    <span>Download CV</span>
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="bg-gray-900 dark:bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition font-semibold">
                    Hire Me Now
                  </button>
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
                <div className="relative bg-yellow-400 rounded-full overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-900 dark:bg-gray-800 rounded-full opacity-50"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                I'm a passionate designer and developer with over 13 years of experience in creating beautiful, functional digital experiences. I specialize in UI/UX design, branding, and web development.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                My goal is to bridge the gap between design and technology, creating solutions that are not only visually appealing but also user-friendly and technically sound.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-yellow-500 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-yellow-400 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
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
                    <span className="text-yellow-500 text-sm font-semibold">{project.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">{project.description}</p>
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
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
            </div>
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 outline-none transition resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg hover:bg-yellow-500 transition font-semibold flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">© 2024 Nimbus Portfolio. All rights reserved.</p>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 animate-bounce z-50"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-t-2xl" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <X className="w-6 h-6 text-gray-900 dark:text-white" />
                </button>
              </div>
              <div className="p-8">
                <span className="text-yellow-500 text-sm font-semibold">{selectedProject.category}</span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{selectedProject.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">{selectedProject.description}</p>
                
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span key={index} className="px-4 py-2 bg-yellow-400/20 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-8">
                  <a href={selectedProject.liveUrl} className="flex items-center space-x-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition font-semibold">
                    <ExternalLink className="w-5 h-5" />
                    <span>View Live</span>
                  </a>
                  <a href={selectedProject.githubUrl} className="flex items-center space-x-2 bg-gray-900 dark:bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition font-semibold">
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