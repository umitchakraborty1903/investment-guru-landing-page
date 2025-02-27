
import React, { useState, useEffect } from 'react';
import { Home, BookOpen, Github, Linkedin, Twitter, Youtube, Sun } from 'lucide-react';

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
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-lg animate-fade-in">
      <div className="flex items-center divide-x divide-white/10 px-3 relative">
        <button 
          className="relative group p-3.5 text-white/80 hover:text-white transition-colors"
          onClick={() => scrollToSection('home')}
          aria-label="Home"
        >
          <Home className={`w-5 h-5 ${activeSection === 'home' ? 'text-white' : ''}`} />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 bg-dark-800/90 text-white px-2 py-1 rounded whitespace-nowrap">
            Home
          </span>
        </button>
        
        <button 
          className="relative group p-3.5 text-white/80 hover:text-white transition-colors"
          onClick={() => scrollToSection('features')}
          aria-label="Features"
        >
          <BookOpen className={`w-5 h-5 ${activeSection === 'features' ? 'text-white' : ''}`} />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 bg-dark-800/90 text-white px-2 py-1 rounded whitespace-nowrap">
            Features
          </span>
        </button>
        
        <button 
          className="relative group p-3.5 text-white/80 hover:text-white transition-colors"
          onClick={() => scrollToSection('testimonials')}
          aria-label="Testimonials"
        >
          <Github className={`w-5 h-5 ${activeSection === 'testimonials' ? 'text-white' : ''}`} />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 bg-dark-800/90 text-white px-2 py-1 rounded whitespace-nowrap">
            Reviews
          </span>
        </button>
        
        <button 
          className="relative group p-3.5 text-white/80 hover:text-white transition-colors"
          onClick={() => scrollToSection('faq')}
          aria-label="FAQ"
        >
          <Linkedin className={`w-5 h-5 ${activeSection === 'faq' ? 'text-white' : ''}`} />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 bg-dark-800/90 text-white px-2 py-1 rounded whitespace-nowrap">
            FAQ
          </span>
        </button>
        
        <button 
          className="relative group p-3.5 text-white/80 hover:text-white transition-colors"
          onClick={() => scrollToSection('download')}
          aria-label="Download"
        >
          <Twitter className={`w-5 h-5 ${activeSection === 'download' ? 'text-white' : ''}`} />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 bg-dark-800/90 text-white px-2 py-1 rounded whitespace-nowrap">
            Download
          </span>
        </button>
        
        <button 
          className="relative group p-3.5 text-white/80 hover:text-white transition-colors"
          aria-label="Theme"
        >
          <Youtube className="w-5 h-5" />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 bg-dark-800/90 text-white px-2 py-1 rounded whitespace-nowrap">
            Videos
          </span>
        </button>
        
        <button 
          className="relative group p-3.5 text-white/80 hover:text-white transition-colors"
          aria-label="Toggle Light Mode"
        >
          <Sun className="w-5 h-5" />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 bg-dark-800/90 text-white px-2 py-1 rounded whitespace-nowrap">
            Theme
          </span>
        </button>
      </div>
    </div>
  );
};

export default FloatingNavBar;
