
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
    </>
  );
};

export default Index;
