
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI investment assistant work?",
    answer: "InvestAI analyzes thousands of market data points, economic indicators, and your personal financial goals to generate tailored investment recommendations. The AI continuously learns from market trends and your preferences to improve its suggestions over time."
  },
  {
    question: "Is my financial data secure?",
    answer: "Yes, we take security very seriously. InvestAI uses bank-level encryption to protect your data, and we never store your credentials. We employ multi-factor authentication and regular security audits to ensure your information remains private and secure."
  },
  {
    question: "What are the fees for using InvestAI?",
    answer: "InvestAI offers a freemium model. Basic features are available for free, while advanced AI analysis and personalized strategies are available through our premium subscription at $9.99/month. We don't charge commissions on trades or hidden fees."
  },
  {
    question: "Can I connect my existing brokerage account?",
    answer: "Yes, InvestAI integrates with major brokerages including Robinhood, E*TRADE, TD Ameritrade, and more. This allows you to view your portfolio and execute trades directly through our app while maintaining your existing accounts."
  },
  {
    question: "What kind of returns can I expect?",
    answer: "While we can't guarantee specific returns (and no investment app should), our users typically see portfolio performance improvements of 5-20% compared to their previous strategies. The AI focuses on optimizing returns while respecting your risk tolerance."
  },
  {
    question: "Is InvestAI suitable for beginners?",
    answer: "Absolutely! InvestAI is designed to be accessible for investors of all experience levels. For beginners, we provide educational resources and simplified recommendations. As you grow more comfortable, you can access more advanced features and detailed analytics."
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-28 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden"> {/* Increased padding */}
      <div className="container relative z-10 max-w-4xl"> {/* Reduced width */}
        <div className="text-center max-w-2xl mx-auto mb-20"> {/* Increased margin and reduced width */}
          <h2 className="section-title bg-gradient-to-r from-brand-blue via-brand-purple to-brand-indigo bg-clip-text text-transparent text-shadow-glow" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Get answers to common questions about InvestAI and how it can help you achieve your financial goals.
          </p>
        </div>

        <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200"> {/* Reduced width */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-dark-600/80 rounded-lg overflow-hidden bg-dark-700/50 backdrop-blur-sm shadow-md transition-all duration-300 hover:shadow-glow hover:border-brand-blue/20"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-dark-600/50 transition-colors data-[state=open]:bg-brand-lightBlue/10 data-[state=open]:text-brand-blue">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-muted-foreground border-t border-dark-600/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="300">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a 
            href="#" 
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-brand-blue to-brand-indigo px-6 py-3 font-medium text-white shadow-glow transition-all hover:shadow-neon hover:brightness-105 active:brightness-95"
          >
            <span className="relative z-10">Contact Support</span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-gradient-to-br from-brand-purple/10 to-brand-indigo/10 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1.5s' }}/>
    </section>
  );
};

export default FaqSection;
