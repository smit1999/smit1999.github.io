import React, { useState, useEffect } from 'react';

import { Mail, Phone, MapPin, Github, Linkedin, Play, Info, Star, Calendar, ChevronLeft, ChevronRight, Code, Briefcase, GraduationCap, User, Award } from 'lucide-react';
// Header Component
const ProjectCard = ({ project, isActive }) => {
  return (
    <div className={`transition-all duration-900 transform ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-70'}`}>
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="space-y-10">
            <div className="flex items-center justify-between">
              {/* <div className="flex items-center space-x-3">
                <Star size={20} fill="gold" className="text-yellow-400" />
                <span className="text-2xl font-bold text-white">{project.rating}</span>
              </div> */}
              {/* <div className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </div> */}
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white leading-tight">
                {project.title}
              </h3>
              <p className="text-md text-gray-300 mb-6 leading-relaxed">
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
                      <span className="text-gray-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="h-80  relative overflow-hidden shadow-2xl"
              
            >
              <div className="absolute inset-0 bg-black/30" />
              
                <div className="text-6xl text-white/20 font-bold">
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
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "Voiced Prescription For Doctors",
      description: "Revolutionary AI-powered voice recognition system that transforms doctor-patient interactions by automatically generating prescriptions from voice commands, ensuring complete focus on patient care.",
      tech: "Python, Flask, NLTK, Bootstrap, Pandas, PostgreSQL, MD5",
      features: [
        "90% accuracy in voice detection and keyword recognition using NLTK",
        "Real-time prescription generation without manual input",
        "Secure email delivery with password-protected reports",
        "Complete elimination of documentation distractions during consultations"
      ],
      thumbnail: <img src={voice}/>,
      rating: 9.1
    },
    {
      id: 2,
      title: "Diabetes Mellitus Detector",
      description: "Comprehensive ML-powered healthcare platform combining diabetes detection with retinopathy screening, providing rapid health assessments and personalized recommendations for early intervention.",
      tech: "Python, Flask, Machine Learning, ReactJS, MongoDB",
      features: [
        "93% accuracy using advanced Random Forest algorithms",
        "Interactive ReactJS dashboard with real-time visualizations",
        "Automated health chart generation with anomaly detection",
        "Lightning-fast analysis and recommendations delivered in  2 minutes"
      ],
      thumbnail: <img src={logo}/>,
      rating: 8.8
    }
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Personal Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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