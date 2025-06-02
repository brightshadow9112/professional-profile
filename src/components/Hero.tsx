
import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // This would link to the actual PDF resume uploaded by the developer
    const resumeUrl = '/resume.pdf'; // This should be replaced with the actual uploaded resume URL
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Alex_Thompson_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold animate-pulse">
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
            <div className="bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/30 dark:to-teal-800/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-emerald-200 dark:border-emerald-700 animate-pulse">
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-2 text-lg">Top Skills</h3>
              <p className="text-emerald-700 dark:text-emerald-200 text-sm font-medium">
                React, TypeScript, Node.js, AWS, PostgreSQL
              </p>
              <div className="mt-3 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-800/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-blue-200 dark:border-blue-700 animate-pulse">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 text-lg">Current Role</h3>
              <p className="text-blue-700 dark:text-blue-200 text-sm font-medium">
                Senior Developer at TechCorp (2022-Present)
              </p>
              <div className="mt-3 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/30 dark:to-pink-800/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-purple-200 dark:border-purple-700 animate-pulse">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2 text-lg">Education</h3>
              <p className="text-purple-700 dark:text-purple-200 text-sm font-medium">
                M.S. Computer Science, Stanford University
              </p>
              <div className="mt-3 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
              </div>
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
              onClick={handleDownloadResume}
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 font-medium flex items-center justify-center gap-2 hover:scale-105 transform"
            >
              <Download size={20} />
              Download PDF Resume
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
