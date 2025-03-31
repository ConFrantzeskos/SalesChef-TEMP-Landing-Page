
import React from 'react';
import { 
  ChefHat,
  Database, 
  Search, 
  Users, 
  Palette, 
  FileUp, 
  BarChart3
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  agentName: string;
  number: number;
  className?: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  agentName,
  number,
  className
}: FeatureCardProps) => {
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
      
      {/* Agent name */}
      <div className="mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">
          {agentName} Agent
        </span>
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

const FeaturesSection = () => {
  const features = [
    {
      icon: Database,
      agentName: "Drop",
      title: "Clean-up From Chaos",
      description: "Ingest, correct, standardize and categorize any product data, regardless of format or source."
    },
    {
      icon: Search,
      agentName: "Discover",
      title: "Context Enrichment",
      description: "Extract reasons to buy, keywords, and insights from reviews, social media, and competitor data."
    },
    {
      icon: Users,
      agentName: "Define",
      title: "Persona Intelligence",
      description: "Define who needs what info and tailor content for each stakeholder, from sales to retail staff."
    },
    {
      icon: Palette,
      agentName: "Design",
      title: "Brand & Tone Consistency",
      description: "Ensure all content matches your brand guidelines and create sales sheets, PDPs, and other templates for every channel and format."
    },
    {
      icon: FileUp,
      agentName: "Develop",
      title: "Multimodal Content Generation",
      description: "Create optimized text, images, videos, and more for every channel and purpose."
    },
    {
      icon: BarChart3,
      agentName: "Dissect",
      title: "Closed-loop Intelligence",
      description: "Analyze content performance and continuously improve based on real-world results."
    }
  ];

  return (
    <section className="chef-section bg-gray-50 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <ChefHat className="h-8 w-8 text-purple-700 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary">
              Our AI Chef Team
            </h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Like a professional kitchen, SalesChef's AI agents work together to transform raw product data into delicious, revenue-driving content.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              agentName={feature.agentName}
              title={feature.title}
              description={feature.description}
              number={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
