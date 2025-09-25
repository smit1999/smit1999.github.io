import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Play, Info } from 'lucide-react';

const Hero = ({ setSelectedSection }) => {
  const [textIndex, setTextIndex] = useState(0);
  const titles = ["Software Engineer", "Full Stack Developer", "Backend Expert"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-teal-900/30 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 w-full">
        <div className="max-w-8xl">
          <div className="mb-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Smit Manish Vora
            </h1>
            <div className="h-8 mb-3">
              <p className="text-2xl md:text-3xl text-red-400 font-semibold animate-pulse">
                {titles[textIndex]}
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 text-gray-300 mb-8">
            <div className="flex items-center space-x-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
              <MapPin size={16} className="text-red-400" />
              <span>Jersey City, NJ</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
              <Phone size={16} className="text-blue-400" />
              <span>+1 201-687-1565</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
              <Mail size={16} className="text-blue-400" />
              <span>smitvora.dev@gmail.com</span>
            </div>
          </div>
          
          <p className="text-md mb-6 text-gray-200 leading-tight">
            Passionate Software Engineer with <span className="text-red-400 font-semibold">3+ years</span> of experience in fintech solutions, 
            building scalable applications, and delivering high-performance software. Specialized in 
            <span className="text-blue-400 font-semibold"> Python, Javascript, AWS,</span> .
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setSelectedSection('experience')}
              className="group bg-red-600 hover:bg-red-700 text-white px-2 py-2 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
            >
              <Play size={12} className="mr-3 group-hover:scale-104 transition-transform" fill="white" />
              <span className="text-lg font-semibold">Explore My Journey</span>
            </button>
            <button 
              onClick={() => setSelectedSection('projects')}
              className="group bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <Info size={12} className="mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold">View Projects</span>
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};
export default Hero

