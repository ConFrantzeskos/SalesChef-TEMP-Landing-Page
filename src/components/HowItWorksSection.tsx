
import React from 'react';
import { Database, Sparkles, BarChart3, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
}

const Step = ({ number, title, description, icon: Icon, className }: StepProps) => {
  return (
    <div className={cn(
      "relative p-6 rounded-2xl transition-all duration-300 hover:shadow-xl group",
      className
    )}>
      {/* Background */}
      <div className="absolute inset-0 bg-white/90 rounded-2xl -z-10" />
      
      {/* Decorative background gradient */}
      <div className="absolute inset-0 opacity-20 -z-5 rounded-2xl bg-gradient-to-br from-purple-100 via-white to-purple-50" />

      {/* Step number */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 font-semibold text-sm">
        {number}
      </div>
      
      {/* Icon */}
      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-white inline-flex mb-4 relative shadow-sm border border-purple-100/80">
        <Icon className="h-7 w-7 text-purple-600" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
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
      description: "Connect to your existing systems or upload files—we handle messy data, multiple sources, and inconsistent formats automatically.",
      className: "border border-purple-100/60"
    },
    {
      number: 2,
      icon: Sparkles,
      title: "Enrich & Optimize Content",
      description: "Our AI transforms basic product specs into compelling, SEO-optimized product content that sells. No writers or agencies needed.",
      className: "border border-blue-100/60"
    },
    {
      number: 3,
      icon: BarChart3,
      title: "Deploy & Sell More",
      description: "Push optimized content to all channels instantly and watch performance improve. No more manual updates or content bottlenecks.",
      className: "border border-green-100/60"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-24 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700">
            How SalesChef Works
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Three simple steps to transform your product data into revenue-driving content.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <Step 
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
                className={step.className}
              />
              
              {/* Arrow connecting steps (except last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex justify-center items-center h-8">
                  <ArrowRight className="w-6 h-6 text-purple-300" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Final CTA */}
        <div className="text-center mt-12">
          <div className="inline-block p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border border-purple-100/60">
            <p className="text-lg font-medium text-gray-800 mb-4">
              Ready to revolutionize your product content strategy?
            </p>
            <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
              Start Your Free Trial
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
