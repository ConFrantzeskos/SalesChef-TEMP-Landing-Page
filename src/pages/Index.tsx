
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FaqSection from '@/components/FaqSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import { ArrowUp, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturesSection />
        <HowItWorksSection />
        <FaqSection />
      </main>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <Button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-purple-700 hover:bg-purple-800 text-white shadow-lg z-50"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
      
      <footer className="bg-gray-50 py-12 text-center text-gray-600">
        <div className="chef-container">
          <div className="mb-8 flex items-center justify-center">
            <ChefHat className="h-6 w-6 text-purple-700 mr-2" />
            <span className="text-xl font-semibold text-gradient-primary">SalesChef</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left max-w-5xl mx-auto">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-gray-600 hover:text-purple-700">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-600 hover:text-purple-700">How It Works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700">Integrations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700">Enterprise</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-purple-700">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700">Case Studies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700">Webinars</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-purple-700">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700">Partners</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-purple-700">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700">Compliance</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm">© {new Date().getFullYear()} SalesChef. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
