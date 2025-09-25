import React, { useState, useEffect } from 'react';

import { Mail, Phone, MapPin, Github, Linkedin, Play, Info, Star, Calendar, ChevronLeft, ChevronRight, Code, Briefcase, GraduationCap, User, Award } from 'lucide-react';
// Header Component

const EducationCard = ({ education, index }) => {
  return (
    <div className={`bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-red-500/30 transition-all duration-500 transform hover:scale-103 hover:-translate-y-2`}>
      <div className="flex items-center justify-between mb-6">
        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-lg">
          GPA: {education.gpa}
        </div>
        <GraduationCap size={32} className="text-red-400" />
      </div>
      
      <h3 className="text-2xl font-bold mb-3 text-white leading-tight">
        {education.degree}
      </h3>
      <p className="text-xl text-gray-300 mb-4 font-semibold">{education.school}</p>
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400 text-sm mb-6">
        <div className="flex items-center space-x-2">
          <MapPin size={16} className="text-red-400" />
          <span>{education.location}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar size={16} className="text-blue-400" />
          <span>{education.duration}</span>
        </div>
      </div>
      
      <div className="bg-gray-800/30 p-4 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Key Courses
        </h4>
        <p className="text-gray-300 leading-relaxed">{education.courses}</p>
      </div>
    </div>
  );
};

// Education Section Component
const EducationSection = () => {
  const education = [
    {
      degree: "Masters of Science - Computer Science",
      school: "Stevens Institute of Technology",
      location: "New Jersey, USA",
      duration: "Sep 2023 - May 2025",
      gpa: "3.9",
      courses: "Database Design, Software Development Life Cycle, Cloud Computing, Mathematics for ML, Data Mining, Tableau"
    },
    {
      degree: "Bachelors of Technology - Computer Science",
      school: "University of Mumbai",
      location: "Mumbai, India",
      duration: "Jul 2017 - May 2021",
      gpa: "3.6",
      courses: "Software Engineering, Object Oriented Programming, Operating Systems, Web Development, Machine Learning"
    }
  ];

  return (
    <section className="pt-24 pb-64 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-md text-gray-400 max-w-2xl mx-auto">
            Strong academic foundation in computer science and emerging technologies
          </p>
        </div>
        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {education.map((edu, idx) => (
            <EducationCard key={idx} education={edu} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection