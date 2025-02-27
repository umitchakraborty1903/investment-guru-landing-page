
import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 pb-12 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center text-xl font-bold text-brand-blue mb-4">
              <span className="mr-2 text-2xl">📊</span>
              InvestAI
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming investing with AI-powered insights, personalized strategies, and automated portfolio management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Press</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Investment Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Market Updates</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Accessibility</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Cookie Preferences</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} InvestAI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
