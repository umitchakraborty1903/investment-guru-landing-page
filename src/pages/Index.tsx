
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
    <div className="min-h-screen bg-dark-900">
      <FloatingNavBar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6"> {/* Reduced width and added padding */}
        <div id="home" className="pt-16"> {/* Added more top margin */}
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
