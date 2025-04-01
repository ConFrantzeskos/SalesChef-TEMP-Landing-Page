
import React from 'react';
import { Database, ChefHat, BarChart3, ArrowRight, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const Step = ({ number, title, description, icon: Icon }: StepProps) => {
  return (
    <Card className="relative bg-white rounded-chef-lg shadow-chef-sm border border-gray-100 transition-all duration-300 hover:shadow-chef-md group">
      <CardContent className="p-8">
        <div className="flex items-start gap-6">
          {/* Step number and icon */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-pink-100">
              <span className="text-xl font-bold text-purple-800">{number}</span>
            </div>
            <div className="h-full w-[1px] bg-gradient-to-b from-purple-300 to-pink-300 mx-auto mt-4 mb-4 hidden md:block"></div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <div className="mb-4">
              <Icon className="h-8 w-8 text-purple-700 mb-3" />
              <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
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
      icon: Globe,
      title: "Distribute",
      description: "Native integration with thousands of marketplaces, ERPs, CRMs, and other endpoints for seamless content distribution."
    },
    {
      number: 7,
      icon: BarChart3,
      title: "Dissect",
      description: "Analyze what's working, what's not, and continuously improve your product content for better results."
    }
  ];

  return (
    <section className="chef-section bg-white">
      <div className="chef-container">
        {/* Section header */}
        <div className="chef-header">
          <div className="flex items-center justify-center mb-6">
            <ChefHat className="h-8 w-8 text-purple-700 mr-2" />
            <h2 className="text-gradient-primary">
              How SalesChef Works
            </h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our seven-step recipe transforms raw product data into delicious content that drives sales across all channels.
          </p>
        </div>
        
        {/* Process Steps - Vertical Layout */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {steps.map((step, index) => (
            <Step 
              key={index}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        
        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-chef-lg bg-gradient-to-r from-purple-50 to-pink-50 shadow-chef-sm">
            <ChefHat className="h-10 w-10 mx-auto mb-6 text-purple-700" />
            <p className="text-lg font-medium text-gray-800 mb-6">
              Ready to transform your product content strategy?
            </p>
            <Button 
              size="lg" 
              className="chef-button-primary"
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
