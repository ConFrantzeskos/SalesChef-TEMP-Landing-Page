
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import FaqSection from '@/components/FaqSection';

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <FeaturesSection />
        <FaqSection />
      </main>
    </>
  );
};

export default Index;
