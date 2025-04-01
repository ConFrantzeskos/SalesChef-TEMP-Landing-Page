
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FaqSection from '@/components/FaqSection';
import HowItWorksSection from '@/components/HowItWorksSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorksSection />
        <FaqSection />
      </main>
      <footer className="bg-gray-50 py-8 text-center text-gray-500 text-sm">
        <div className="chef-container">
          <p>© {new Date().getFullYear()} SalesChef. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
