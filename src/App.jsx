import { useState } from 'react';

import Experiences from "./components/Experiences/Experiences";
import Project from "./components/Projects/Project";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import SkillsSection from './components/Skills/Skill';
import EducationSection from './components/Education/Education';
import MobileNavigation from './components/Mobile/Mobile';
const App =() => {
const [selectedSection, setSelectedSection] = useState('hero');

  const renderSection = () => {
    switch (selectedSection) {
      case 'hero':
        return <Hero setSelectedSection={setSelectedSection} />;
      case 'experience':
        return <Experiences />;
      case 'projects':
        return <Project />;
      case 'skills':
        return <SkillsSection />;
      case 'education':
        return <EducationSection />;
      default:
        return <Hero setSelectedSection={setSelectedSection} />;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <Navbar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      <main className="transition-all duration-500">
        {renderSection()}
      </main>
      <MobileNavigation selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
    </div>
  );
};
export default App;