
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveDemo: "https://demo-ecommerce.com",
      github: "https://github.com/alexthompson/ecommerce-platform",
      image: "🛍️"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern React patterns and Socket.io.",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Docker"],
      liveDemo: "https://taskmaster-app.com",
      github: "https://github.com/alexthompson/task-manager",
      image: "📝"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Interactive dashboard for weather data visualization using Chart.js and D3.js. Integrates with multiple weather APIs and provides historical data analysis.",
      technologies: ["Vue.js", "D3.js", "Python", "Flask", "Redis"],
      liveDemo: "https://weather-analytics.com",
      github: "https://github.com/alexthompson/weather-dashboard",
      image: "🌤️"
    },
    {
      title: "Open Source UI Library",
      description: "Comprehensive React component library with TypeScript support, Storybook documentation, and comprehensive testing suite. Used by 500+ developers.",
      technologies: ["React", "TypeScript", "Storybook", "Jest", "Rollup"],
      liveDemo: "https://ui-lib-docs.com",
      github: "https://github.com/alexthompson/react-ui-lib",
      image: "🎨"
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-white dark:bg-slate-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{project.image}</div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
