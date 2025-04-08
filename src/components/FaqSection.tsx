
import React from 'react';
import { Plus, Minus, ChefHat } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FaqItem = ({ question, answer, isOpen, onClick, index }: FaqItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 overflow-hidden"
    >
      <button 
        onClick={onClick}
        className="w-full px-6 py-5 flex justify-between items-center text-left transition-colors duration-300 focus:outline-none group"
      >
        <h3 className="font-medium text-gray-900 text-lg group-hover:text-purple-700">{question}</h3>
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-5 w-5 text-purple-700" />
          ) : (
            <Plus className="h-5 w-5 text-purple-700" />
          )}
        </div>
      </button>
      
      <div className={cn(
        "px-6 overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
      )}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </motion.div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = React.useState(0);
  
  const faqs = [
    // For Product Managers
    {
      question: "How much faster can we actually launch new products with SalesChef?",
      answer: "Our customers cut their time-to-market by 80% on average. What used to take 6-8 weeks now happens in DAYS. You'll eliminate the endless back-and-forth between product teams, marketing, and sales when creating content. One client launched 1,200 new SKUs in a single week—something that would've taken them 6 months before SalesChef."
    },
    // For Marketing Directors
    {
      question: "How does SalesChef eliminate the constant struggle with inconsistent product information?",
      answer: "SalesChef gives you a single source of truth that updates EVERYWHERE simultaneously. No more finding outdated specs on your website while your Amazon listings show something different. When you make a change, it propagates across ALL channels instantly—your website, retailer listings, sales materials, everything. One client reduced content-related customer service tickets by 73% after implementing SalesChef."
    },
    // For E-commerce Managers
    {
      question: "What kind of conversion improvements can we expect on our product pages?",
      answer: "Our clients see a 20-40% jump in conversion rates within 90 days. Why? Because SalesChef analyzes thousands of successful product listings to understand exactly what drives purchases in your category. We transform boring specs into benefit-focused content that actually answers customer questions. One sporting goods client increased their average order value by 32% just by improving product descriptions."
    },
    // For Sales Directors
    {
      question: "How will SalesChef help my sales team win more retail shelf space?",
      answer: "SalesChef automatically generates killer sell sheets, pitch decks, and training materials that make your products irresistible to retailers. Your team will have instant access to customized presentations for each buyer meeting—no more scrambling the night before. One CPG client landed distribution in 400 new stores after arming their sales team with SalesChef-generated materials."
    },
    // For Content Teams
    {
      question: "How much content creation work will this actually save my team?",
      answer: "Most clients report 70-90% reduction in content creation workload. Your team can stop wasting time on repetitive writing tasks and focus on high-value creative work instead. SalesChef can generate 500 product descriptions in the time it takes a writer to create 5—and they'll be tailored to each specific channel's requirements. One fashion client redeployed 4 full-time writers to more strategic projects after implementing SalesChef."
    },
    // For IT Directors
    {
      question: "Is SalesChef going to be yet another complicated system that my team needs to maintain?",
      answer: "Absolutely not. SalesChef deploys in days, not months, with zero code required from your team. Our pre-built connectors handle 95% of integration scenarios without custom development. Most clients need just 2-3 hours of IT involvement for the entire implementation. And our platform handles all the heavy lifting of pushing content to different channels—no need for your team to build or maintain those integrations."
    },
    // For CFOs
    {
      question: "What's the real ROI timeline for SalesChef?",
      answer: "Most clients achieve positive ROI within 60-90 days. The math is simple: reduced content creation costs (70-90% savings), faster time-to-market (80% reduction), higher conversion rates (20-40% increase), and elimination of costly errors. One electronics manufacturer calculated a 387% ROI in the first year, primarily from being able to launch products 12 weeks earlier than their previous timeline."
    },
    // For CEOs
    {
      question: "How will SalesChef give us a competitive advantage in our market?",
      answer: "Three ways: Speed, Scale, and Smarts. You'll get products to market faster than competitors (weeks sooner), scale your product catalog without adding headcount (one client went from 500 to 10,000 SKUs with the same team size), and leverage AI-driven insights about what actually sells (continuously improving based on sales data). In a recent survey, 86% of our clients reported gaining market share within 6 months of implementing SalesChef."
    }
  ];
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="chef-section bg-white">
      <div className="chef-container">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="chef-header"
        >
          <h2 className="text-gradient-primary text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Got questions? We've got straight-talking answers about how SalesChef will transform your business—no fluff, just facts.
          </p>
        </motion.div>
        
        {/* FAQ list */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-chef-lg shadow-chef-sm border border-gray-100 mb-16"
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
              index={index}
            />
          ))}
        </motion.div>
        
        {/* Additional Support */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-chef-lg shadow-chef-sm transform transition-all duration-300 hover:shadow-chef-md"
        >
          <ChefHat className="h-10 w-10 text-purple-700 mx-auto mb-4 animate-pulse-soft" />
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Our team is ready to show you exactly how SalesChef will work for YOUR specific products and challenges.</p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white shadow-lg"
          >
            Get a Personalized Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
