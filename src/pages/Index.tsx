
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemFramingSection from '@/components/ProblemFramingSection';
import FeaturesSection from '@/components/FeaturesSection';
import ResultsSection from '@/components/ResultsSection';
import TrustSection from '@/components/TrustSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import FaqSection from '@/components/FaqSection';
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
        {/* 1. HERO SECTION – Immediate Impact + CTA */}
        <Hero />
        
        {/* 2. PROBLEM FRAMING – The Retail Content Crisis */}
        <ProblemFramingSection />
        
        {/* 3. INTRODUCING SALES.CHEF – The AI-Powered Kitchen */}
        <FeaturesSection />
        
        {/* 4. RESULTS – Clear, Tangible Outcomes */}
        <ResultsSection />
        
        {/* 5. TRUST SECTION – Social Proof, Security, Speed */}
        <TrustSection />
        
        {/* 6. FINAL CTA – Emotional and Actionable Close */}
        <CtaSection />
        
        {/* Additional sections */}
        <TestimonialsSection />
        <FaqSection />
      </main>
      
      <ScrollToTopButton show={showScrollTop} />
      
      <Footer />
    </div>
  );
};

export default Index;
