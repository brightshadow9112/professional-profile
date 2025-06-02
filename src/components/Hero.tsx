
import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              AT
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4">
              Alex Thompson
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6">
              Senior Full-Stack Developer
            </p>
          </div>

          <div className="mb-8 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Passionate developer with 8+ years of experience building scalable web applications. 
            Specialized in React, Node.js, and cloud technologies with a track record of leading 
            high-performing teams and delivering innovative solutions.
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Top Skills</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                React, TypeScript, Node.js, AWS, PostgreSQL
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Current Role</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Senior Developer at TechCorp (2022-Present)
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Education</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                M.S. Computer Science, Stanford University
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              View Full Resume
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 font-medium"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
