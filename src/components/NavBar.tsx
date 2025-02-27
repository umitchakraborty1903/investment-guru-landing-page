
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/95 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center text-xl font-bold text-brand-blue transition hover:opacity-90">
            <span className="mr-2 text-2xl">📊</span>
            InvestAI
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-foreground transition hover:text-brand-blue">Features</a>
          <a href="#testimonials" className="text-sm font-medium text-foreground transition hover:text-brand-blue">Testimonials</a>
          <a href="#faq" className="text-sm font-medium text-foreground transition hover:text-brand-blue">FAQ</a>
          <Button className="btn-primary" onClick={() => window.location.href = '#download'}>
            Download App
          </Button>
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
        className={`md:hidden absolute left-0 right-0 bg-white shadow-md transition-all overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 border-b' : 'max-h-0'
        }`}
      >
        <div className="container py-4 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="text-foreground transition hover:text-brand-blue px-4 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className="text-foreground transition hover:text-brand-blue px-4 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className="text-foreground transition hover:text-brand-blue px-4 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#download" 
            className="btn-primary text-center mx-4"
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
