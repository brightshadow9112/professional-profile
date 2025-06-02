
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-slate-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">
              Professional Summary
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with over 8 years of experience in building 
              scalable web applications. My expertise spans across modern JavaScript frameworks, 
              cloud technologies, and team leadership. I thrive in collaborative environments 
              and have a proven track record of delivering high-quality solutions that drive business growth.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Beyond coding, I'm passionate about mentoring junior developers, contributing to 
              open-source projects, and staying current with emerging technologies. I believe 
              in writing clean, maintainable code and following best practices in software development.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">
              Values & Interests
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span className="text-slate-600 dark:text-slate-300">
                  <strong>Innovation:</strong> Always exploring new technologies and methodologies
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span className="text-slate-600 dark:text-slate-300">
                  <strong>Collaboration:</strong> Fostering inclusive team environments
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span className="text-slate-600 dark:text-slate-300">
                  <strong>Quality:</strong> Committed to writing maintainable, tested code
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span className="text-slate-600 dark:text-slate-300">
                  <strong>Growth:</strong> Continuous learning and skill development
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
