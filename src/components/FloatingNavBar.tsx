
import React, { useState, useEffect } from 'react';
import { Home, BookOpen, MessageSquare, HelpCircle, Download, User, Star } from 'lucide-react';

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
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 glass-morphism rounded-full shadow-glow animate-fade-in">
      <div className="flex items-center px-2 py-1 relative">
        <button 
          className={`relative group p-3 transition-all duration-300 ${activeSection === 'home' ? 'text-brand-blue' : 'text-white/80 hover:text-white'}`}
          onClick={() => scrollToSection('home')}
          aria-label="Home"
        >
          <Home className="w-5 h-5" />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 bg-dark-800/90 text-white px-2 py-1 rounded whitespace-nowrap">
            Home
          </span>
          {activeSection === 'home' && (
            <span className="absolute -bottom-1 left-1/2 w-5 h-1 bg-brand-blue rounded-full transform -translate-x-1/2"></span>
          )}
        </button>
        
        <button 
          className={`relative group p-3 transition-all duration-300 ${activeSection === 'features' ? 'text-brand-blue' : 'text-white/80 hover:text-white'}`}
          onClick={() => scrollToSection('features')}
          aria-label="Features"
        >
          <BookOpen className="w-5 h-5" />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 bg-dark-800/90 text-white px-2 py-1 rounded whitespace-nowrap">
            Features
          </span>
          {activeSection === 'features' && (
            <span className="absolute -bottom-1 left-1/2 w-5 h-1 bg-brand-blue rounded-full transform -translate-x-1/2"></span>
          )}
        </button>
        
        <button 
          className={`relative group p-3 transition-all duration-300 ${activeSection === 'testimonials' ? 'text-brand-blue' : 'text-white/80 hover:text-white'}`}
          onClick={() => scrollToSection('testimonials')}
          aria-label="Testimonials"
        >
          <Star className="w-5 h-5" />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 bg-dark-800/90 text-white px-2 py-1 rounded whitespace-nowrap">
            Reviews
          </span>
          {activeSection === 'testimonials' && (
            <span className="absolute -bottom-1 left-1/2 w-5 h-1 bg-brand-blue rounded-full transform -translate-x-1/2"></span>
          )}
        </button>
        
        <button 
          className={`relative group p-3 transition-all duration-300 ${activeSection === 'faq' ? 'text-brand-blue' : 'text-white/80 hover:text-white'}`}
          onClick={() => scrollToSection('faq')}
          aria-label="FAQ"
        >
          <HelpCircle className="w-5 h-5" />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 bg-dark-800/90 text-white px-2 py-1 rounded whitespace-nowrap">
            FAQ
          </span>
          {activeSection === 'faq' && (
            <span className="absolute -bottom-1 left-1/2 w-5 h-1 bg-brand-blue rounded-full transform -translate-x-1/2"></span>
          )}
        </button>
        
        <button 
          className={`relative group p-3 transition-all duration-300 ${activeSection === 'download' ? 'text-brand-blue' : 'text-white/80 hover:text-white'}`}
          onClick={() => scrollToSection('download')}
          aria-label="Download"
        >
          <Download className="w-5 h-5" />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 bg-dark-800/90 text-white px-2 py-1 rounded whitespace-nowrap">
            Download
          </span>
          {activeSection === 'download' && (
            <span className="absolute -bottom-1 left-1/2 w-5 h-1 bg-brand-blue rounded-full transform -translate-x-1/2"></span>
          )}
        </button>
        
        <button 
          className="relative group p-3 text-white/80 hover:text-white transition-colors"
          aria-label="Contact"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 bg-dark-800/90 text-white px-2 py-1 rounded whitespace-nowrap">
            Contact
          </span>
        </button>
        
        <button 
          className="relative group p-3 text-white/80 hover:text-white transition-colors"
          aria-label="Account"
        >
          <User className="w-5 h-5" />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 bg-dark-800/90 text-white px-2 py-1 rounded whitespace-nowrap">
            Account
          </span>
        </button>
      </div>
    </div>
  );
};

export default FloatingNavBar;
