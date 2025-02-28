
import React from 'react';
import { BarChart3, PieChart, TrendingUp, Shield, BellRing, Zap, Brain, Robot } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'AI-Powered Analysis',
    description: 'Get investment recommendations using advanced AI that learns your preferences and risk tolerance.',
    bgGradient: 'from-brand-blue/20 to-brand-purple/10',
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Real-Time Analysis',
    description: 'Stay informed with real-time market data and AI-driven insights on your investments.',
    bgGradient: 'from-brand-purple/20 to-brand-indigo/10',
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: 'Smart Diversification',
    description: 'AI ensures your portfolio is properly diversified across sectors and asset classes.',
    bgGradient: 'from-brand-indigo/20 to-brand-blue/10',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Risk Management',
    description: 'Advanced algorithms protect your investments from market volatility and downturns.',
    bgGradient: 'from-brand-blue/20 to-brand-purple/10',
  },
  {
    icon: <BellRing className="h-6 w-6" />,
    title: 'Smart Alerts',
    description: 'Receive timely notifications about market changes and investment opportunities.',
    bgGradient: 'from-brand-purple/20 to-brand-indigo/10',
  },
  {
    icon: <Robot className="h-6 w-6" />,
    title: 'AI Companion',
    description: 'Your 24/7 AI companion adapts to your style and provides real-time feedback.',
    bgGradient: 'from-brand-indigo/20 to-brand-blue/10',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-28 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dark-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 opacity-90"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-brand-purple/30 to-brand-indigo/5 blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-purple/5 blur-3xl opacity-40"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-4 backdrop-blur-sm">
            <span className="mr-2">✨</span>
            AI-Powered Features
          </div>
          
          <h2 className="section-title text-balance bg-gradient-to-r from-brand-blue via-brand-purple to-brand-indigo bg-clip-text text-transparent text-shadow-glow animate-fade-in" data-aos="fade-up">
            Powerful Features That Make Investing Simple
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Experience the future of investing with powerful AI tools designed to maximize your returns and minimize effort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-xl backdrop-blur-sm border border-white/5 p-6 transition-all duration-300 hover:border-brand-blue/30 hover:shadow-glow"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${feature.bgGradient.split(" ")[0].replace("from-", "")} 0%, rgba(26, 31, 43, 0.8) 70%)`,
              }}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Feature card inner glow */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 rounded-full bg-gradient-to-b ${feature.bgGradient} blur-3xl opacity-60 group-hover:opacity-80 transition-opacity`}></div>
              
              <div className="relative">
                <div className="feature-icon mb-6 group-hover:bg-gradient-to-r from-brand-blue to-brand-indigo group-hover:text-white group-hover:shadow-glow transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-blue transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-dark-700/50 to-transparent"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="inline-block rounded-full px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-muted-foreground">
            And many more features to explore...
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
