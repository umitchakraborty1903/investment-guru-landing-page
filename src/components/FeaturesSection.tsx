
import React from 'react';
import { ChartBar, BarChart3, PieChart, TrendingUp, Shield, Users, BellRing, Zap } from 'lucide-react';

const features = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Personalized Portfolio',
    description: 'Get investment recommendations tailored to your financial goals and risk tolerance.',
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Real-Time Analysis',
    description: 'Stay informed with real-time market data and AI-driven insights on your investments.',
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: 'Automated Diversification',
    description: 'AI ensures your portfolio is properly diversified across sectors and asset classes.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Risk Management',
    description: 'Advanced algorithms protect your investments from market volatility and downturns.',
  },
  {
    icon: <BellRing className="h-6 w-6" />,
    title: 'Smart Alerts',
    description: 'Receive timely notifications about market changes and investment opportunities.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'One-Tap Investing',
    description: 'Execute trades instantly with secure, one-tap investing directly from the app.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-accent/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title" data-aos="fade-up">
            AI-Powered Features That Make Investing Simple
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Experience the future of investing with powerful tools designed to maximize your returns and minimize effort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="feature-icon group-hover:bg-brand-blue group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
