
import React from 'react';
import { ChevronRight, Download, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-radial from-dark-800 via-dark-900 to-dark-900"> {/* Increased top padding */}
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 animate-fadeIn"> {/* Increased spacing */}
            <div className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-dark-700/50 text-brand-blue font-medium backdrop-blur-sm border border-dark-600/50 shadow-sm">
              <span className="mr-2">🚀</span>
              AI-Powered Investment Assistant
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight animate-float" style={{ animationDelay: '0.3s' }}>
              Smarter Investments, <span className="text-gradient bg-gradient-to-r from-brand-blue via-brand-purple to-brand-indigo text-shadow-glow">Higher Returns</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Let AI handle your investments with personalized strategies, real-time analysis, and risk management—all in one elegant app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-2"> {/* Increased button spacing */}
              <a 
                href="#download" 
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-brand-blue to-brand-indigo px-6 py-3 font-medium text-white shadow-lg transition-all hover:shadow-neon hover:brightness-105 active:brightness-95"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Download Now
                  <Download className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
              </a>
              
              <a 
                href="#features" 
                className="group relative overflow-hidden rounded-full border border-brand-blue/50 bg-dark-800/30 backdrop-blur-sm px-6 py-3 font-medium text-brand-blue transition-all hover:bg-brand-blue/10 active:bg-brand-blue/20"
              >
                <span className="relative z-10 flex items-center justify-center">
                  See Features
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-4 text-sm text-muted-foreground"> {/* Increased padding */}
              <div className="flex -space-x-2">
                <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" className="h-8 w-8 rounded-full border-2 border-dark-800 object-cover" />
                <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="User" className="h-8 w-8 rounded-full border-2 border-dark-800 object-cover" />
                <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="User" className="h-8 w-8 rounded-full border-2 border-dark-800 object-cover" />
                <div className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-dark-800 bg-gradient-to-br from-brand-blue to-brand-indigo text-white text-xs font-bold">
                  +2K
                </div>
              </div>
              <p>Joined by <span className="font-medium text-white">2,000+</span> smart investors this month</p>
            </div>
          </div>
          
          <div className="relative animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto max-w-[320px]">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/20 via-brand-purple/20 to-brand-indigo/20 rounded-[40px] blur-[50px] z-0" />
              
              <div className="relative z-10 animate-float" style={{ animationDuration: '5s' }}>
                <div className="overflow-hidden rounded-[32px] border border-dark-600/50 bg-dark-800/90 backdrop-blur-sm shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&q=85&w=600"
                    alt="InvestAI App Interface"
                    className="w-full object-cover mix-blend-luminosity opacity-90"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Small floating elements */}
              <div className="absolute -left-16 top-1/3 animate-float" style={{ animationDelay: '1s', animationDuration: '4s' }}>
                <div className="flex items-center gap-3 rounded-lg glass-morphism p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-indigo shadow-glow">
                    <span className="text-white text-xl">📈</span>
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Tesla Inc.</p>
                    <p className="text-sm font-medium text-green-400">+24.5%</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-12 bottom-1/4 animate-float" style={{ animationDelay: '1.5s', animationDuration: '6s' }}>
                <div className="rounded-lg glass-morphism p-3">
                  <p className="text-xs text-white/70">Portfolio Value</p>
                  <p className="text-sm font-medium text-white">$42,584.26</p>
                  <div className="mt-1 h-1 w-full rounded-full bg-dark-600">
                    <div className="h-1 w-3/4 rounded-full bg-gradient-to-r from-brand-blue to-brand-indigo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-10 bottom-10 w-64 h-64 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute right-10 top-10 w-64 h-64 bg-gradient-to-br from-brand-indigo/10 to-brand-blue/10 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-dark-grid opacity-30 -z-20"></div>
    </section>
  );
};

export default HeroSection;
