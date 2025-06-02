
import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2014 - 2016",
      location: "Stanford, CA",
      details: [
        "Specialization in Software Engineering and Systems",
        "GPA: 3.8/4.0",
        "Relevant Coursework: Advanced Algorithms, Distributed Systems, Machine Learning",
        "Teaching Assistant for CS106A Programming Methodology"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      period: "2010 - 2014",
      location: "Berkeley, CA",
      details: [
        "Magna Cum Laude, Phi Beta Kappa",
        "GPA: 3.7/4.0",
        "Relevant Coursework: Data Structures, Computer Architecture, Database Systems",
        "President of Computer Science Student Association"
      ]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect - Professional (2023)",
    "Google Cloud Professional Developer (2022)",
    "Certified Kubernetes Administrator (2021)",
    "MongoDB Certified Developer (2020)"
  ];

  return (
    <section id="education" className="py-16 px-6 bg-white dark:bg-slate-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
          Education & Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                {edu.degree}
              </h3>
              <div className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                {edu.institution}
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                {edu.period} • {edu.location}
              </div>
              
              <ul className="space-y-2">
                {edu.details.map((detail, i) => (
                  <li key={i} className="text-slate-600 dark:text-slate-300 text-sm flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-4 rounded-lg text-center">
                <span className="text-slate-700 dark:text-slate-200 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
