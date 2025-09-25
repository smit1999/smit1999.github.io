import {Code,Database,Cloud,Library } from 'lucide-react';
const SkillCategory = ({ category, skillList, icon: Icon, delay }) => {
  return (
    <div 
      className="bg-gradient-to-br from-gray-900 to-black p-3 rounded-xl border border-gray-800 hover:border-red-500/30 transition-all duration-500 transform hover:scale-103 hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-red-600/20 p-3 rounded-lg mr-4">
          <Icon size={18} className="text-red-400" />
        </div>
        <h3 className="text-md font-bold text-white">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skillList.map((skill, idx) => (
          <div
            key={idx}
            className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-red-500/30"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const skills = {
    "Programming Languages": {
      skills: ["Python", "C++", "JavaScript", "TypeScript", "Java", "PHP", "HTML", "CSS"],
      icon: Code
    },
    "Databases": {
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Google Firebase"],
      icon: Database
    },
    "Frameworks & Libraries": {
      skills: ["Django", "Flask", "ReactJS", "Poetry", "Pytest", "Node.js", "Scikit-learn", "FastAPI"],
      icon: Library
    },
    "Cloud & DevOps": {
      skills: ["AWS (EC2, S3, RDS, Lambda)", "Docker", "GitHub Actions"],
      icon: Cloud
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 mb-2">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-md text-gray-400 max-w-2xl mx-auto">
            Comprehensive skill set spanning modern development technologies and cloud platforms
          </p>
        </div>
        <div className="grid gap-6">
          {Object.entries(skills).map(([category, { skills: skillList, icon }], idx) => (
            <SkillCategory
              key={category}
              category={category}
              skillList={skillList}
              icon={icon}
              delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection