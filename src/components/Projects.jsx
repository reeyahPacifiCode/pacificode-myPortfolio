import React from 'react';

export default function Projects({ setSelectedProject }) {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      description:
        'A full-featured online shopping platform with cart, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Portfolio Design',
      category: 'UI/UX Design',
      image:
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
      description:
        'Modern and clean portfolio design with smooth animations and interactive elements.',
      tech: ['Figma', 'Adobe XD', 'Canva'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      category: 'Mobile App',
      image:
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      description:
        'A productivity app to manage tasks, set reminders, and track progress.',
      tech: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      category: 'Web Development',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      description:
        'Analytics dashboard for tracking social media metrics and engagement.',
      tech: ['Vue.js', 'Chart.js', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#394931]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-[#E1DBCB] mb-4">
            My Projects
          </h2>
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
                <span className="text-[#394931] dark:text-[#9ca089] text-sm font-semibold">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-[#E1DBCB] mt-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-[#c5beab] mt-2 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        #projects .group:hover img {
          filter: brightness(0.9);
        }
      `}</style>
    </section>
  );
}
