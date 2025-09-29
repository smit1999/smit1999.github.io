import { useState } from 'react';

import { ChevronLeft, ChevronRight, Github, Icon, Link } from 'lucide-react';
// Header Component
const ProjectCard = ({ project, isActive }) => {
  return (
    <div className={`transition-all duration-900 transform ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-70'}`}>
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl pb-4 pl-6 pr-6 pt-1 border border-gray-800 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              {/* <div className="flex items-center space-x-3">
                <Star size={20} fill="gold" className="text-yellow-400" />
                <span className="text-2xl font-bold text-white">{project.rating}</span>
              </div> */}
              {/* <div className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </div> */}
            </div>
            
            <div >
              <h3 className="flex text-xl font-bold mb-4 text-white" style={{gap:10}}>
                {project.title}<a href={project.github} target={"_blank"} className={`hover:text-gray-400 transition-all duration-300 transform hover:scale-110`}>
              <Link size={20}/>
            </a>
              </h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Technologies
                </span>
                <p className="text-blue-400 font-medium mt-1">{project.tech}</p>
              </div>
              
              <div>
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 block">
                  Key Features
                </span>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 leading-relaxed text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="h-25 relative pl-10"
              
            >
              
              
                <div className="text-2xl text-white/20 font-bold ">
                  {project.thumbnail}
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const logo = require('./diebetes.png')
  const voice = require('./voice.png')
  const salary = require('./download.png')
  const tcp = require('./images.png')
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "Voiced Prescription For Doctors",
      github:"https://github.com/smit1999/Doctors-Prescription",
      description: "Revolutionary AI-powered voice recognition system that transforms doctor-patient interactions by automatically generating prescriptions from voice commands, ensuring complete focus on patient care.",
      tech: "Python, Flask, NLTK, Bootstrap, Pandas, PostgreSQL, MD5",
      features: [
        "90% accuracy in voice detection and keyword recognition using NLTK",
        "Real-time prescription generation without manual input",
        "Secure email delivery with password-protected reports",
        "Complete elimination of documentation distractions during consultations"
      ],
      thumbnail: <img src={voice} width={"80%"} />,
      rating: 9.1
    },
    {
      id: 2,
      title: "Diabetes Mellitus Detector",
      github:"https://github.com/smit1999",
      description: "Comprehensive ML-powered healthcare platform combining diabetes detection with retinopathy screening, providing rapid health assessments and personalized recommendations for early intervention.",
      tech: "Python, Flask, Machine Learning, ReactJS, MongoDB",
      features: [
        "93% accuracy using advanced Random Forest algorithms",
        "Interactive ReactJS dashboard with real-time visualizations",
        "Automated health chart generation with anomaly detection",
        "Lightning-fast analysis and recommendations delivered in  2 minutes"
      ],
      thumbnail: <img src={logo} width={"80%"}/>,
      rating: 8.8
    },
    
    {
      id: 3,
      title: "Income Classifier Above 80k",
      github:"https://github.com/smit1999/employee-salary-classifier",
      description: "Revolutionary machine learning classifier that predicts whether US employees earn above $80k based on comprehensive employment factors including education, experience, compensation, and sector data.",
      tech: "Python, Fuzzy-wuzzy, Pandas, sklearn, numpy, Naive Bayes, Decision Tree",
      features: [
        "87% accuracy achieved using Naive Bayes and regression models on 32k+ records",
        "17-feature classifier analyzing degree, work experience, bonus, title and more",
        "Fuzzy-wuzzy implementation for grouping misspelled states under common name",
        "Column transformer API for feature transformation and dataset optimization"
      ],
      thumbnail: <img src={salary} width={"80%"}/>,
      rating: 8.8
    },
    {
      id: 4,
      title: "TCP Chat Server",
      github:"https://github.com/smit1999/tcp-chat-server",
      description: "Comprehensive chat server that was build completely using GO, allowing users to give themselves nicknames, create multiple rooms or join the existing rooms - one at a time.Server has the messaging feature where users can chat within the group.",
      tech: "Go, subroutines, channels",
      features: [
        "User can connect to the server having private connection",
        "User can set their nickname ,create multiple rooms joining one at a time",
        "can broadcast a message or chat from the room you are currently in.",
        "User can receive the message with sender details if they are the part of the group."
      ],
      thumbnail: <img src={tcp} width={"80%"}/>,
      rating: 8.8
    },

  ];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Personal Projects
          </h2>
          <p className="text-md text-gray-400 max-w-2xl mx-auto">
            Innovative solutions leveraging AI, machine learning, and modern web technologies
          </p>
        </div>
        
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={prevProject}
              className="group bg-red-600/20 hover:bg-red-600/40 border border-red-500/30 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft size={24} className="text-red-400 group-hover:text-white transition-colors" />
            </button>
            
            <div className="flex space-x-3">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentProjectIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentProjectIndex ? 'bg-red-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextProject}
              className="group bg-red-600/20 hover:bg-red-600/40 border border-red-500/30 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight size={24} className="text-red-400 group-hover:text-white transition-colors" />
            </button>
          </div>
          
          <ProjectCard project={projects[currentProjectIndex]} isActive={true} />
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection