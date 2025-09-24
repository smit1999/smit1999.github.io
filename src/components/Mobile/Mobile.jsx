import {Code, Briefcase, GraduationCap, User, Award } from 'lucide-react';

const MobileNavigation = ({ selectedSection, setSelectedSection }) => {
  const navItems = [
    { key: 'hero', label: 'Home', icon: User },
    { key: 'experience', label: 'Work', icon: Briefcase },
    { key: 'projects', label: 'Projects', icon: Code },
    { key: 'skills', label: 'Skills', icon: Award },
    { key: 'education', label: 'Education', icon: GraduationCap }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800 p-4 z-50">
      <div className="flex justify-around">
        {navItems.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setSelectedSection(key)}
            className={`flex flex-col items-center space-y-1 transition-all duration-300 transform ${
              selectedSection === key ? 'text-red-500 scale-110' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Icon size={20} />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation