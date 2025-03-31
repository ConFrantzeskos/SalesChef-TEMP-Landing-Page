
import React from 'react';
import { Database, ChefHat, BarChart3, ArrowRight } from 'lucide-react';
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
    <div className="relative bg-white rounded-xl shadow-md border border-gray-100 p-8 transition-all duration-300 hover:shadow-lg group">
      {/* Step number */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 font-semibold text-sm">
        {number}
      </div>
      
      {/* Icon */}
      <div className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 inline-flex mb-6">
        <Icon className="h-6 w-6 text-purple-800" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      
      {/* Connecting line */}
      {number < 6 && (
        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transform -translate-y-1/2 z-10"></div>
      )}
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: Database,
      title: "Drop",
      description: "Connect to your existing systems or upload files—we handle messy data, multiple sources, and inconsistent formats."
    },
    {
      number: 2,
      icon: ChefHat,
      title: "Discover",
      description: "Our AI enriches your product data with competitive insights, consumer sentiment, and market trends."
    },
    {
      number: 3,
      icon: ChefHat,
      title: "Define",
      description: "Identify who needs what information and how to structure it for each stakeholder, from executives to retail staff."
    },
    {
      number: 4,
      icon: ChefHat,
      title: "Design",
      description: "Apply your brand guidelines, tone of voice, and style rules consistently across all product content."
    },
    {
      number: 5,
      icon: ChefHat,
      title: "Develop",
      description: "Create optimized content for every channel—from PDPs to sales sheets to training materials."
    },
    {
      number: 6,
      icon: BarChart3,
      title: "Dissect",
      description: "Analyze what's working, what's not, and continuously improve your product content for better results."
    }
  ];

  return (
    <section className="chef-section bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <ChefHat className="h-8 w-8 text-purple-700 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary">
              How SalesChef Works
            </h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our six-step recipe transforms raw product data into delicious content that drives sales across all channels.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
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
          <div className="inline-block p-8 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 shadow-md">
            <ChefHat className="h-10 w-10 mx-auto mb-4 text-purple-700" />
            <p className="text-lg font-medium text-gray-800 mb-4">
              Ready to transform your product content strategy?
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
