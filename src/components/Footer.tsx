
import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-dark-900 pt-16 pb-12 border-t border-dark-700/50 overflow-hidden">
      <div className="absolute inset-0 bg-dark-grid opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center text-xl font-bold text-gradient bg-gradient-to-r from-brand-blue to-brand-indigo mb-4">
              <span className="mr-2 text-2xl">📊</span>
              InvestAI
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming investing with AI-powered insights, personalized strategies, and automated portfolio management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors hover:scale-110 transform duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors hover:scale-110 transform duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors hover:scale-110 transform duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors hover:scale-110 transform duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gradient bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:translate-x-1 inline-block">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:translate-x-1 inline-block">Press</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:translate-x-1 inline-block">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:translate-x-1 inline-block">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gradient bg-gradient-to-r from-brand-purple to-brand-indigo bg-clip-text text-transparent">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:translate-x-1 inline-block">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:translate-x-1 inline-block">Investment Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:translate-x-1 inline-block">API Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:translate-x-1 inline-block">Market Updates</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:translate-x-1 inline-block">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gradient bg-gradient-to-r from-brand-blue to-brand-indigo bg-clip-text text-transparent">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:translate-x-1 inline-block">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:translate-x-1 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:translate-x-1 inline-block">Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:translate-x-1 inline-block">Accessibility</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:translate-x-1 inline-block">Cookie Preferences</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-dark-700/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} InvestAI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:underline">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:underline">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-brand-blue transition-all duration-300 hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-900 to-transparent -z-10" />
      <div className="absolute -bottom-24 right-0 w-72 h-72 bg-gradient-to-br from-brand-blue/5 to-brand-indigo/5 rounded-full blur-3xl -z-10" />
      <div className="absolute -top-24 left-0 w-72 h-72 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 rounded-full blur-3xl -z-10" />
    </footer>
  );
};

export default Footer;
