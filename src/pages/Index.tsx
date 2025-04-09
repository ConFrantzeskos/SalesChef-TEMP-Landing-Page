
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FaqSection from '@/components/FaqSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EnterpriseLogos from '@/components/EnterpriseLogos';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { ScrollToTopButton } from '@/components/ui/scroll-to-top-button';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

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
      
      <ScrollToTopButton show={showScrollTop} />
      
      <Footer />
    </div>
  );
};

export default Index;
