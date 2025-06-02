
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 75 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "Django", level: 75 },
        { name: "GraphQL", level: 80 },
        { name: "REST APIs", level: 95 }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 80 },
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 75 }
      ]
    },
    {
      title: "Tools & Methodologies",
      skills: [
        { name: "Git", level: 95 },
        { name: "Jest/Testing", level: 85 },
        { name: "CI/CD", level: 80 },
        { name: "Agile/Scrum", level: 90 },
        { name: "Team Leadership", level: 85 },
        { name: "Code Review", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-600 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
