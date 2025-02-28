
import React from 'react';
import { TestimonialsSection as TestimonialsMarquee } from '@/components/blocks/testimonials-with-marquee';

const testimonials = [
  {
    author: {
      name: "Sarah Johnson",
      handle: "Marketing Director",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    text: "InvestAI has completely transformed my approach to investing. The personalized recommendations have already increased my returns by 18% in just three months."
  },
  {
    author: {
      name: "Michael Chen",
      handle: "Software Engineer",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    text: "As someone new to investing, I needed guidance. This app provides exactly that with clear explanations and smart suggestions based on my goals."
  },
  {
    author: {
      name: "Emma Rodriguez",
      handle: "Small Business Owner",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg"
    },
    text: "The real-time market analysis has saved me from making several poor investment decisions. It's like having a financial advisor in my pocket."
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-28 relative overflow-hidden bg-gradient-to-b from-dark-900 via-dark-700 to-dark-900"> {/* Increased padding */}
      <div className="absolute inset-0 bg-dark-glow bg-no-repeat bg-center opacity-40 mix-blend-soft-light"></div>
      
      <div className="container relative z-10 max-w-4xl"> {/* Reduced width */}
        <TestimonialsMarquee
          title="What Our Users Are Saying"
          description="Join thousands of satisfied investors who have transformed their financial future with InvestAI."
          testimonials={testimonials}
          className="bg-transparent"
        />
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center rounded-full glass-morphism px-4 py-2 text-sm font-medium shadow-glow">
            <span className="mr-2">⭐</span>
            4.9/5 average rating from over 12,000 reviews
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-to-br from-brand-purple/10 to-brand-indigo/10 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1.5s' }}/>
    </section>
  );
};

export default TestimonialsSection;
