
import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="border-b border-gray-200 overflow-hidden">
      <button 
        onClick={onClick}
        className="w-full px-6 py-5 flex justify-between items-center text-left transition-colors duration-300 focus:outline-none"
      >
        <h3 className="font-medium text-gray-900 text-lg">{question}</h3>
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-5 w-5 text-indigo-800" />
          ) : (
            <Plus className="h-5 w-5 text-indigo-800" />
          )}
        </div>
      </button>
      
      <div className={cn(
        "px-6 overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
      )}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = React.useState(0);
  
  const faqs = [
    {
      question: "How is SalesChef different from a traditional PIM?",
      answer: "Unlike traditional PIMs that just store and organize product data, SalesChef automatically transforms your raw product specs into sales-optimized content using AI. We focus on revenue generation rather than just data management, eliminating the need for content writers and speeding up your time to market."
    },
    {
      question: "Do I need technical expertise to use SalesChef?",
      answer: "Not at all! SalesChef is designed for business users. Our intuitive interface requires no coding skills, and implementation typically takes days, not months. We handle all the technical complexities behind the scenes."
    },
    {
      question: "Can SalesChef integrate with my existing systems?",
      answer: "Yes, SalesChef integrates with most popular e-commerce platforms, ERPs, marketplaces, and content management systems through our pre-built connectors. We also offer custom API integration for specialized systems."
    },
    {
      question: "How does SalesChef's AI generate product content?",
      answer: "Our AI analyzes your product specifications, market data, and consumer behavior patterns to create compelling, SEO-optimized product descriptions, features, and marketing copy that converts. The AI continuously improves based on performance data."
    },
    {
      question: "What ROI can I expect from SalesChef?",
      answer: "Most customers see a 20-40% increase in conversion rates within the first three months. Additionally, content creation costs are typically reduced by 70-90%, and time-to-market for new products decreases by 80% on average."
    }
  ];
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="chef-section bg-white">
      <div className="chef-container">
        {/* Section header */}
        <div className="chef-header">
          <h2 className="text-gradient-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Everything you need to know about SalesChef and how it can transform your product content strategy.
          </p>
        </div>
        
        {/* FAQ list */}
        <div className="bg-white rounded-chef-lg shadow-chef-sm border border-gray-100 mb-16">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
        
        {/* Additional Support */}
        <div className="mt-16 text-center p-8 bg-indigo-50 rounded-chef-lg shadow-chef-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Our team is ready to help you get started with SalesChef.</p>
          <Button 
            size="lg" 
            className="bg-indigo-800 hover:bg-indigo-900 text-white"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
