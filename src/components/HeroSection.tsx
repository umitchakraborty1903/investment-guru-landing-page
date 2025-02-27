
import React from 'react';
import { ChevronRight, Download, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-brand-lightBlue text-brand-blue font-medium">
              <span className="mr-2">🚀</span>
              AI-Powered Investment Assistant
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
              Smarter Investments, <span className="text-gradient">Higher Returns</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Let AI handle your investments with personalized strategies, real-time analysis, and risk management—all in one elegant app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#download" 
                className="btn-primary group"
              >
                Download Now
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a 
                href="#features" 
                className="btn-outline group"
              >
                See Features
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="User" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="User" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                <div className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-white bg-brand-lightBlue text-brand-blue text-xs font-bold">
                  +2K
                </div>
              </div>
              <p>Joined by 2,000+ smart investors this month</p>
            </div>
          </div>
          
          <div className="relative animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto max-w-[320px]">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/10 to-brand-green/10 rounded-[40px] blur-[50px] z-0" />
              
              <div className="relative z-10 animate-float">
                <div className="overflow-hidden rounded-[32px] border border-white/20 bg-white shadow-soft">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&q=85&w=600"
                    alt="InvestAI App Interface"
                    className="w-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
              
              {/* Small floating elements */}
              <div className="absolute -left-16 top-1/3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3 rounded-lg bg-white shadow-medium p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-lightBlue">
                    <span className="text-brand-blue text-xl">📈</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Tesla Inc.</p>
                    <p className="text-sm font-medium">+24.5%</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-12 bottom-1/4 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="rounded-lg bg-white shadow-medium p-3">
                  <p className="text-xs text-muted-foreground">Portfolio Value</p>
                  <p className="text-sm font-medium">$42,584.26</p>
                  <div className="mt-1 h-1 w-full rounded-full bg-gray-100">
                    <div className="h-1 w-3/4 rounded-full bg-brand-green" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-10 bottom-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute right-10 top-10 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default HeroSection;
