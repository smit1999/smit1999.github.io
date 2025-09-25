import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Code, Briefcase, GraduationCap, User, Award } from 'lucide-react';
// Header Component
const Navbar = ({ selectedSection, setSelectedSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-gradient-to-b from-black/80 to-transparent'} p-4`}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-red-600 text-2xl font-bold tracking-wider">
          <button onClick={() => setSelectedSection('hero')}>
          <span className="bg-red-600 text-white px-1 py-1 rounded mr-3">
            SV</span>
            Smit Vora
            </button>
        </div>
        <div className="hidden md:flex space-x-8">
          {[
            { key: 'hero', label: 'Home', icon: User },
            { key: 'experience', label: 'Experience', icon: Briefcase },
            { key: 'projects', label: 'Projects', icon: Code },
            { key: 'skills', label: 'Skills', icon: Award },
            { key: 'education', label: 'Education', icon: GraduationCap }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setSelectedSection(key)}
              className={`flex items-center space-x-1 hover:text-red-400 transition-all duration-300 transform hover:scale-105 ${selectedSection === key ? 'text-red-500 border-b-2 border-red-500' : 'text-white'}`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </div>
        <div className="flex space-x-4">
          {[
            { href: 'mailto:smitvora.dev@gmail.com', icon: Mail, color: 'hover:text-blue-400' },
            { href: 'https://linkedin.com/in/smitvora99', icon: Linkedin, color: 'hover:text-blue-600' },
            { href: 'https://github.com/smit1999', icon: Github, color: 'hover:text-gray-400' }
          ].map(({ href, icon: Icon, color }, idx) => (
            <a key={idx} href={href} target={"_blank"} className={`${color} transition-all duration-300 transform hover:scale-110`}>
              <Icon size={20} />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar