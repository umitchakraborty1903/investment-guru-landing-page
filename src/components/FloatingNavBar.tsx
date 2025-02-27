
import React, { useState, useEffect } from 'react';
import { Home, BarChart2, MessageSquare, HelpCircle, Download } from 'lucide-react';

const FloatingNavBar = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Function to determine active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // Offset for better UX
      
      // Get all sections
      const sections = [
        { id: 'home', element: document.getElementById('home') },
        { id: 'features', element: document.getElementById('features') },
        { id: 'testimonials', element: document.getElementById('testimonials') },
        { id: 'faq', element: document.getElementById('faq') },
        { id: 'download', element: document.getElementById('download') }
      ];
      
      // Find the current visible section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling to section on click
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 px-2 py-3 rounded-2xl bg-dark-800/90 backdrop-blur-xl border border-dark-700/50 shadow-lg">
      <div className="flex items-center gap-1 relative">
        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-brand-purple/10 to-brand-indigo/10 rounded-2xl blur-xl"></div>
        
        {/* Navigation Items */}
        <button 
          className={`relative group px-4 py-2 rounded-xl transition-all duration-300 ${
            activeSection === 'home' 
              ? 'bg-gradient-to-r from-brand-blue to-brand-indigo text-white shadow-lg' 
              : 'hover:bg-dark-700/50 text-gray-400'
          }`}
          onClick={() => scrollToSection('home')}
          aria-label="Home"
        >
          <Home className="w-5 h-5" />
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-white">
            Home
          </span>
        </button>
        
        <button 
          className={`relative group px-4 py-2 rounded-xl transition-all duration-300 ${
            activeSection === 'features' 
              ? 'bg-gradient-to-r from-brand-blue to-brand-indigo text-white shadow-lg' 
              : 'hover:bg-dark-700/50 text-gray-400'
          }`}
          onClick={() => scrollToSection('features')}
          aria-label="Features"
        >
          <BarChart2 className="w-5 h-5" />
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-white">
            Features
          </span>
        </button>
        
        <button 
          className={`relative group px-4 py-2 rounded-xl transition-all duration-300 ${
            activeSection === 'testimonials' 
              ? 'bg-gradient-to-r from-brand-blue to-brand-indigo text-white shadow-lg' 
              : 'hover:bg-dark-700/50 text-gray-400'
          }`}
          onClick={() => scrollToSection('testimonials')}
          aria-label="Testimonials"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-white">
            Reviews
          </span>
        </button>
        
        <button 
          className={`relative group px-4 py-2 rounded-xl transition-all duration-300 ${
            activeSection === 'faq' 
              ? 'bg-gradient-to-r from-brand-blue to-brand-indigo text-white shadow-lg' 
              : 'hover:bg-dark-700/50 text-gray-400'
          }`}
          onClick={() => scrollToSection('faq')}
          aria-label="FAQ"
        >
          <HelpCircle className="w-5 h-5" />
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-white">
            FAQ
          </span>
        </button>
        
        <button 
          className={`relative group px-4 py-2 rounded-xl transition-all duration-300 ${
            activeSection === 'download' 
              ? 'bg-gradient-to-r from-brand-blue to-brand-indigo text-white shadow-lg' 
              : 'hover:bg-dark-700/50 text-gray-400'
          }`}
          onClick={() => scrollToSection('download')}
          aria-label="Download"
        >
          <Download className="w-5 h-5" />
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-white">
            Download
          </span>
        </button>

        {/* Active Section Indicator */}
        <div 
          className="absolute bottom-0 h-0.5 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-indigo transition-all duration-300 rounded-full"
          style={{
            left: `${(activeSection === 'home' ? 0 : activeSection === 'features' ? 1 : activeSection === 'testimonials' ? 2 : activeSection === 'faq' ? 3 : 4) * 20}%`,
            width: '20%'
          }}
        />
      </div>
    </div>
  );
};

export default FloatingNavBar;
