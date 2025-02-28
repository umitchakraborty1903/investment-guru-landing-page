
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import FloatingNavBar from '@/components/FloatingNavBar';

const Index = () => {
  // Smooth scroll functionality
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjust for navbar height
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  // Add scroll animation data attributes on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          
          if (entry.isIntersecting) {
            el.classList.add('animate-fadeIn');
            if (el.style) {
              el.style.opacity = '1';
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );
    
    const elementsToAnimate = document.querySelectorAll('[data-aos]');
    elementsToAnimate.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.classList.add('opacity-0');
        observer.observe(el);
      }
    });
    
    return () => {
      elementsToAnimate.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 bg-dots-pattern relative">
      {/* Subtle patterns and background decorations */}
      <div className="fixed inset-0 bg-dark-grid opacity-10 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-radial from-dark-900/0 to-dark-900 pointer-events-none"></div>
      
      {/* Gradient orbs */}
      <div className="fixed top-1/3 -left-64 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-purple/10 blur-3xl opacity-30 animate-pulse-slow pointer-events-none"></div>
      <div className="fixed bottom-1/3 -right-64 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-brand-purple/20 to-brand-indigo/10 blur-3xl opacity-30 animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }}></div>
      
      <FloatingNavBar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10"> 
        <div id="home" className="pt-16">
          <HeroSection />
        </div>
        <FeaturesSection />
        <TestimonialsSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
