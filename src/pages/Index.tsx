
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </main>
  );
};

export default Index;
