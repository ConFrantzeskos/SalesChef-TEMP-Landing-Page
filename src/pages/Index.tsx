
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FaqSection from '@/components/FaqSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EnterpriseLogos from '@/components/EnterpriseLogos';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { ArrowUp } from 'lucide-react';
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
        <EnterpriseLogos />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CtaSection />
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
      
      <Footer />
    </div>
  );
};

export default Index;
