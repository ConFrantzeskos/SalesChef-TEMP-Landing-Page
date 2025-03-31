
import React from 'react';
import { 
  ChefHat,
  Database, 
  Search, 
  Users, 
  Palette, 
  FileUp, 
  BarChart3,
  Presentation
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  agentName: string;
  className?: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  agentName,
  className
}: FeatureCardProps) => {
  return (
    <Card className={cn(
      "chef-card overflow-hidden",
      className
    )}>
      <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 to-pink-500" />
      <CardContent className="p-6">
        <div className="mb-6">
          <div className="p-3 rounded-full bg-purple-100 inline-flex items-center justify-center">
            <Icon className="h-6 w-6 text-purple-800" />
          </div>
        </div>
        
        <div className="mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">
            {agentName} Agent
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
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
      description: "Ensure all content matches your brand guidelines, voice, and style requirements."
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
    },
    {
      icon: Presentation,
      agentName: "Demonstrate",
      title: "Executive Communication",
      description: "Generate sales presentations, sell sheets, range comparisons, and training materials instantly."
    },
  ];

  return (
    <section className="chef-section bg-gray-50 px-4 sm:px-6 lg:px-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              agentName={feature.agentName}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
