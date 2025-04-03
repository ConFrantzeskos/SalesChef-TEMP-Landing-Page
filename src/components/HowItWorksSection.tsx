
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
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-pink-100">
              <span className="text-xl font-bold text-purple-800">{number}</span>
            </div>
            <div className="h-full w-[1px] bg-gradient-to-b from-purple-300 to-pink-300 mx-auto mt-4 mb-4 hidden md:block"></div>
          </div>
          
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
      description: "Dump your messy data on us—no cleaning required! We handle inconsistent formats, multiple sources, and product specs in minutes, not weeks. Connect via API or just upload Excel files."
    },
    {
      number: 2,
      icon: ChefHat,
      title: "Discover",
      description: "Unlock the full story behind your products. We dive deep into reviews, competitive insights, and consumer sentiment—turning boring product specs into killer sales narratives that retailers and customers can't resist."
    },
    {
      number: 3,
      icon: ChefHat,
      title: "Define",
      description: "Get exactly what each stakeholder needs—from executive summaries to detailed sell sheets. We tailor content for retailers, sales teams, and customers so everyone gets information that actually makes sense to them."
    },
    {
      number: 4,
      icon: ChefHat,
      title: "Design",
      description: "Your brand voice, perfectly consistent everywhere. We apply your guidelines to every piece of content, ensuring your products sound like YOU—whether it's on Amazon, Walmart, or your sales team's lips."
    },
    {
      number: 5,
      icon: ChefHat,
      title: "Develop",
      description: "Stop copying and pasting! We create ready-to-upload content for every channel—PDPs that convert, training materials that educate, and sales sheets that actually close deals. Different formats, same great messaging."
    },
    {
      number: 6,
      icon: Globe,
      title: "Distribute",
      description: "Push a button, watch your content fly! Our system connects to thousands of marketplaces and platforms so you can update content everywhere instantly. No more tedious uploading to 20 different retailer backends."
    },
    {
      number: 7,
      icon: BarChart3,
      title: "Dissect",
      description: "See what's actually working. Our analytics show which product stories drive sales, which content needs tweaking, and where you're beating competitors. Real data to continuously improve conversions and win more shelf space."
    }
  ];

  return (
    <section className="chef-section bg-white">
      <div className="chef-container">
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
