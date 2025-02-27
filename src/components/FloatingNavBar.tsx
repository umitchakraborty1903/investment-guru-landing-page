
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
    <div className="floating-navbar animate-glow">
      <div className="flex items-center">
        <button 
          className={`nav-item ${activeSection === 'home' ? 'nav-item-active' : ''}`}
          onClick={() => scrollToSection('home')}
          aria-label="Home"
        >
          <Home className="w-5 h-5" />
          {activeSection === 'home' && <div className="nav-indicator"></div>}
        </button>
        
        <button 
          className={`nav-item ${activeSection === 'features' ? 'nav-item-active' : ''}`}
          onClick={() => scrollToSection('features')}
          aria-label="Features"
        >
          <BarChart2 className="w-5 h-5" />
          {activeSection === 'features' && <div className="nav-indicator"></div>}
        </button>
        
        <button 
          className={`nav-item ${activeSection === 'testimonials' ? 'nav-item-active' : ''}`}
          onClick={() => scrollToSection('testimonials')}
          aria-label="Testimonials"
        >
          <MessageSquare className="w-5 h-5" />
          {activeSection === 'testimonials' && <div className="nav-indicator"></div>}
        </button>
        
        <button 
          className={`nav-item ${activeSection === 'faq' ? 'nav-item-active' : ''}`}
          onClick={() => scrollToSection('faq')}
          aria-label="FAQ"
        >
          <HelpCircle className="w-5 h-5" />
          {activeSection === 'faq' && <div className="nav-indicator"></div>}
        </button>
        
        <button 
          className={`nav-item ${activeSection === 'download' ? 'nav-item-active' : ''}`}
          onClick={() => scrollToSection('download')}
          aria-label="Download"
        >
          <Download className="w-5 h-5" />
          {activeSection === 'download' && <div className="nav-indicator"></div>}
        </button>
      </div>
    </div>
  );
};

export default FloatingNavBar;
