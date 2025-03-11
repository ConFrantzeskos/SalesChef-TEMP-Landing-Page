
import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="border border-purple-100/60 rounded-xl overflow-hidden mb-4 transition-all duration-300 shadow-sm hover:shadow-md">
      <button 
        onClick={onClick}
        className={cn(
          "w-full px-6 py-4 flex justify-between items-center text-left transition-colors duration-300",
          isOpen ? "bg-purple-50/70" : "bg-white hover:bg-purple-50/30"
        )}
      >
        <h3 className="font-medium text-gray-900 text-lg">{question}</h3>
        <div className="ml-4">
          {isOpen ? (
            <Minus className="h-5 w-5 text-purple-600" />
          ) : (
            <Plus className="h-5 w-5 text-purple-600" />
          )}
        </div>
      </button>
      
      <div className={cn(
        "px-6 overflow-hidden transition-all duration-300 bg-white",
        isOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Everything you need to know about SalesChef and how it can transform your product content strategy.
          </p>
        </div>
        
        {/* FAQ list */}
        <div className="space-y-6">
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
        <div className="mt-12 text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-100/60 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Still have questions?</h3>
          <p className="text-gray-600 mb-4">Our team is ready to help you get started with SalesChef.</p>
          <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
