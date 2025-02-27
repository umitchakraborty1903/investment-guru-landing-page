
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
    <section id="faq" className="py-20 bg-accent/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Get answers to common questions about InvestAI and how it can help you achieve your financial goals.
          </p>
        </div>

        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg overflow-hidden bg-white shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-accent/30 transition-colors">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-muted-foreground">
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
            className="btn-outline inline-flex items-center"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
