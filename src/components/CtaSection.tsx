
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const CtaSection = () => {
  return (
    <section id="download" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-brand-darkBlue to-dark-900"></div>
      
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-dark-grid"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in" data-aos="fade-up">
              Ready to Transform Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-indigo text-shadow-glow">Investment Strategy?</span>
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="100">
              Download InvestAI today and join over 100,000 investors who are growing their wealth with the power of artificial intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="200">
              <a 
                href="#" 
                className="group relative overflow-hidden inline-flex items-center justify-center rounded-full glass-morphism px-6 py-3 font-medium text-white shadow-glow transition-all hover:shadow-neon hover:bg-white/10 active:bg-white/5"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.21 2.33-.91 3.57-.84 1.5.09 2.63.74 3.37 1.9-3 1.81-2.53 5.4.26 6.65-.67 1.8-1.5 3.56-3.28 5.26zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.18 2.4-2.19 4.31-3.74 4.25z" />
                  </svg>
                  iOS App Store
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a 
                href="#" 
                className="group relative overflow-hidden inline-flex items-center justify-center rounded-full glass-morphism px-6 py-3 font-medium text-white shadow-glow transition-all hover:shadow-neon hover:bg-white/10 active:bg-white/5"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.61 1.814L13.75 12l-10.14 10.186c-.33-.314-.61-.694-.61-1.116V2.93c0-.422.28-.802.61-1.116zM15 13.25l2.82-2.836c.2-.2.33-.48.33-.764 0-.284-.13-.564-.33-.764L15 6.05l3.13 3.13L21.44 12l-3.31 2.82-3.13 3.13zM14.19 12.75L4 22.97h15.06c.7 0 1.26-.56 1.26-1.26 0-.252-.75-.504-.19-.7l-5.94-8.26zM4 1.03h15.06c.7 0 1.26.56 1.26 1.26 0 .25-.07.5-.19.7l-5.94 8.26L4 1.03z" />
                  </svg>
                  Google Play
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </div>
            
            <div className="mt-8 text-sm opacity-75" data-aos="fade-up" data-aos-delay="300">
              <p>Available for iOS 13+ and Android 8+</p>
            </div>
          </div>
          
          <div className="relative max-w-md mx-auto" data-aos="fade-left">
            <div className="absolute inset-0 bg-brand-blue/10 rounded-[40px] blur-[30px] z-0" />
            
            <div className="relative bg-dark-700/40 backdrop-blur-lg border border-dark-600/50 rounded-3xl p-6 z-10 shadow-glow animate-float" style={{ animationDuration: '7s' }}>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Portfolio Overview</h3>
                  <p className="text-sm text-white/70">Last updated: Just now</p>
                </div>
                <span className="text-xl bg-gradient-to-br from-brand-blue to-brand-indigo rounded-full p-2 shadow-glow">📊</span>
              </div>
              
              <div className="bg-dark-600/50 backdrop-blur-sm rounded-xl p-4 mb-6 border border-dark-600/80">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-white/80">Total Value</span>
                  <span className="font-semibold text-white">$42,584.26</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-white/80">Total Gain</span>
                  <span className="font-semibold text-green-400">+$5,241.32 (14.2%)</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-dark-600/50 backdrop-blur-sm rounded-lg border border-dark-600/80 hover:bg-dark-600/80 transition-colors duration-300">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center mr-3 text-white shadow-glow">
                      T
                    </div>
                    <div>
                      <p className="font-medium text-white">Tesla Inc.</p>
                      <p className="text-xs text-white/70">12 shares</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-white">$2,340.56</p>
                    <p className="text-xs text-green-400">+24.5%</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-dark-600/50 backdrop-blur-sm rounded-lg border border-dark-600/80 hover:bg-dark-600/80 transition-colors duration-300">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center mr-3 text-white shadow-glow">
                      A
                    </div>
                    <div>
                      <p className="font-medium text-white">Apple Inc.</p>
                      <p className="text-xs text-white/70">30 shares</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-white">$5,102.70</p>
                    <p className="text-xs text-green-400">+12.8%</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-dark-600/50 backdrop-blur-sm rounded-lg border border-dark-600/80 hover:bg-dark-600/80 transition-colors duration-300">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center mr-3 text-white shadow-glow">
                      G
                    </div>
                    <div>
                      <p className="font-medium text-white">Google</p>
                      <p className="text-xs text-white/70">8 shares</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-white">$1,840.24</p>
                    <p className="text-xs text-green-400">+8.2%</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-3 bg-gradient-to-r from-brand-blue to-brand-indigo text-white rounded-xl font-semibold flex items-center justify-center shadow-glow hover:shadow-neon transition-all duration-300 hover:brightness-110 group">
                View Complete Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl opacity-30 -z-10 animate-pulse-slow" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-indigo/20 rounded-full blur-3xl opacity-30 -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default CtaSection;
