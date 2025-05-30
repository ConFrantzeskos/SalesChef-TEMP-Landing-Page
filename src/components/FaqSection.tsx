
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
    {
      question: "Marketers: How does SalesChef lift conversion and ROI?",
      answer: "By turning raw specs into persuasive, benefit-led content, SalesChef increases PDP relevance and search visibility while slashing SEM waste. Customers see richer pages sooner, leading to higher add-to-cart rates and measurable revenue uplift."
    },
    {
      question: "Marketers: Will the copy match our brand voice?",
      answer: "Yes. The Design Agent ingests your tone-of-voice guides, style manuals and legal guard-rails, then locks them as non-editable constraints. Every Draft Agent output automatically passes a Diligence Agent QA checkpoint before anything is published."
    },
    {
      question: "Merchandisers: Can SalesChef help us decide which SKUs to range?",
      answer: "Absolutely. The Discover and Detect Agents surface search demand, competitive gaps and trend signals; the Define Agent maps segments to product benefits. Together they create evidence-based \"range rationales\" so you back the right eight TVs, not 400."
    },
    {
      question: "Merchandisers: Does SalesChef generate line-review decks?",
      answer: "One click. SalesChef assembles spec sheets, feature/benefit ladders, pricing comps and lifestyle imagery into ready-to-present PDFs or slides, freeing your team from manual cut-and-paste."
    },
    {
      question: "eCommerce Managers: Will it break my Shopify/Magento/Amazon feeds?",
      answer: "No. SalesChef is deliberately PIM-less and stateless. The Deploy Agent maps clean output to each channel's schema, validates against every rule (title length, prohibited terms, etc.) and keeps rollback versions for safety."
    },
    {
      question: "eCommerce Managers: How long from upload to live content?",
      answer: "For a typical CSV of 50 SKUs: ingest < 2 min, enrichment 3-5 min, QA 1 min. You can publish inside 10 minutes—hours if you prefer scheduled drops."
    },
    {
      question: "Retail Executives: What's the business case?",
      answer: "Customers report: 15–30 % lower paid-media bills, 8–12 % conversion-rate uplift, and 4–6× content throughput without extra head-count. Payback is usually < 90 days on an enterprise licence."
    },
    {
      question: "Retail Executives: Is this another system of record to maintain?",
      answer: "No. SalesChef never tries to be your \"single source of truth\". It ingests data, transforms it, publishes, then forgets—leaving your ERP, OMS or DAM untouched. Zero-storage means zero migration risk."
    },
    {
      question: "All buyers: What file types and sources can we drop in?",
      answer: "CSV, XLS/XLSM, JSON, PDF, Images, live PDP URLs, ERP/REST/GraphQL feeds—anything with product data. The Drop Agent auto-detects delimiters, encodings and units, and virus-scans in-flight."
    },
    {
      question: "All buyers: How does SalesChef handle global roll-outs?",
      answer: "Internationalisation is baked in: auto-translation to 30+ languages, locale-specific units (cm vs inches), currency symbols, right-to-left previews, and hreflang tagging. You can localise once and publish everywhere."
    },
    {
      question: "Tourism: Can SalesChef enrich tour or hotel listings?",
      answer: "Yes. Swap \"SKU\" for \"room night\" or \"day tour\". The same agents extract amenities, craft compelling benefit bullets (\"sunrise views of Uluru\"), generate multilingual copy and prepare OTA-ready feeds—no extra code."
    },
    {
      question: "Media & Entertainment: We manage a catalogue of 5 000 films. What's in it for us?",
      answer: "SalesChef ingests title metadata, scripts and key art, then produces platform-specific synopses, SEO tags, subtitles, social trailers and accessibility audio—all under your studio style guide—ready for IMDb, YouTube, FAST or OTT storefronts."
    },
    {
      question: "Industrial / Manufacturing: Our specs are highly technical. Will the AI hallucinate?",
      answer: "Technical accuracy is enforced: the Drop Agent locks invariant fields, while the Diligence Agent cross-checks generated text against source values and your compliance-flag table. If a claim isn't in the data, it doesn't make the page."
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
