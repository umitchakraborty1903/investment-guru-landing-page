
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-xl shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center text-xl font-bold text-gradient bg-gradient-to-r from-brand-blue to-brand-darkBlue transition hover:opacity-90">
            <span className="mr-2 text-2xl animate-float" style={{ animationDuration: '3s' }}>📊</span>
            InvestAI
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-foreground transition-all duration-300 hover:text-brand-blue hover:scale-105">Features</a>
          <a href="#testimonials" className="text-sm font-medium text-foreground transition-all duration-300 hover:text-brand-blue hover:scale-105">Testimonials</a>
          <a href="#faq" className="text-sm font-medium text-foreground transition-all duration-300 hover:text-brand-blue hover:scale-105">FAQ</a>
          <a 
            href="#download"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-brand-blue to-brand-darkBlue px-6 py-2.5 font-medium text-white shadow-lg transition-all hover:shadow-xl hover:brightness-105 active:brightness-95"
          >
            <span className="relative z-10">Download App</span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-darkBlue opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <MenuIcon className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 border-b' : 'max-h-0'
        }`}
      >
        <div className="container py-4 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="text-foreground transition-all duration-300 hover:text-brand-blue px-4 py-2 rounded-lg hover:bg-brand-lightBlue/20"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className="text-foreground transition-all duration-300 hover:text-brand-blue px-4 py-2 rounded-lg hover:bg-brand-lightBlue/20"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className="text-foreground transition-all duration-300 hover:text-brand-blue px-4 py-2 rounded-lg hover:bg-brand-lightBlue/20"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#download" 
            className="rounded-full bg-gradient-to-r from-brand-blue to-brand-darkBlue text-white text-center py-2.5 px-4 font-medium shadow-md mx-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Download App
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
