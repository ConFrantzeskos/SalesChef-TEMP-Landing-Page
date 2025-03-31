
import React from 'react';
import { Database, Sparkles, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const Step = ({ number, title, description, icon: Icon }: StepProps) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md border border-gray-100 p-8">
      {/* Step number */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-semibold text-sm">
        {number}
      </div>
      
      {/* Icon */}
      <div className="p-3 rounded-full bg-indigo-100 inline-flex mb-6">
        <Icon className="h-6 w-6 text-indigo-800" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: Database,
      title: "Ingest Your SKU Data",
      description: "Connect to your existing systems or upload files—we handle messy data, multiple sources, and inconsistent formats automatically."
    },
    {
      number: 2,
      icon: Sparkles,
      title: "Enrich & Optimize Content",
      description: "Our AI transforms basic product specs into compelling, SEO-optimized product content that sells. No writers or agencies needed."
    },
    {
      number: 3,
      icon: BarChart3,
      title: "Deploy & Sell More",
      description: "Push optimized content to all channels instantly and watch performance improve. No more manual updates or content bottlenecks."
    }
  ];

  return (
    <section className="evorra-section bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">
            How SalesChef Works
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Three simple steps to transform your product data into revenue-driving content.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <Step 
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            </div>
          ))}
        </div>
        
        {/* Final CTA */}
        <div className="text-center mt-12">
          <div className="inline-block p-8 rounded-xl bg-indigo-50 shadow-md">
            <p className="text-lg font-medium text-gray-800 mb-4">
              Ready to revolutionize your product content strategy?
            </p>
            <Button 
              size="lg" 
              className="bg-indigo-800 hover:bg-indigo-900 text-white"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
