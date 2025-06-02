
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced application load time by 40% through performance optimizations",
        "Mentored team of 5 junior developers and established code review processes",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "InnovateTech",
      period: "2019 - 2022",
      location: "Seattle, WA",
      achievements: [
        "Built responsive web applications using React and Node.js",
        "Integrated third-party APIs and payment gateways (Stripe, PayPal)",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Maintained 99.9% uptime for production applications"
      ]
    },
    {
      title: "Software Developer",
      company: "StartupXYZ",
      period: "2016 - 2019",
      location: "Austin, TX",
      achievements: [
        "Developed RESTful APIs and database schemas for core product features",
        "Implemented automated testing suite increasing code coverage to 90%",
        "Optimized database queries resulting in 50% faster response times",
        "Participated in agile development process and sprint planning"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
          Work Experience
        </h2>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-600"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-auto' : 'md:pl-8'}`}>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ml-12 md:ml-0">
                  <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full -translate-y-2"></div>
                  
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                    {exp.company}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm mb-1">
                    {exp.period} • {exp.location}
                  </div>
                  
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-300 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
