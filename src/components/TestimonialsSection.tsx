
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "InvestAI has completely transformed my approach to investing. The personalized recommendations have already increased my returns by 18% in just three months.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    content: "As someone new to investing, I needed guidance. This app provides exactly that with clear explanations and smart suggestions based on my goals.",
    author: "Michael Chen",
    position: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5
  },
  {
    content: "The real-time market analysis has saved me from making several poor investment decisions. It's like having a financial advisor in my pocket.",
    author: "Emma Rodriguez",
    position: "Small Business Owner",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    rating: 4
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title" data-aos="fade-up">
            What Our Users Are Saying
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Join thousands of satisfied investors who have transformed their financial future with InvestAI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-foreground mb-6 flex-grow">"{testimonial.content}"</p>
              
              <div className="flex items-center mt-auto">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full mr-4 object-cover" 
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-medium">
            <span className="mr-2">⭐</span>
            4.9/5 average rating from over 12,000 reviews
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default TestimonialsSection;
