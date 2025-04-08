
import React from 'react';
import { 
  ChefHat,
  Database, 
  Search, 
  Users, 
  Palette, 
  FileUp, 
  BarChart3,
  Globe,
  Shield,
  Workflow,
  Target,
  LineChart,
  Layers
} from 'lucide-react';

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
    <div className="relative bg-white rounded-chef-lg shadow-chef-sm border border-gray-100 p-8 transition-all duration-300 hover:shadow-chef-md group">
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
      title: "Enterprise Data Integration",
      description: "Connect and normalize product data from legacy systems, PLM software, ERP platforms, and global supplier networks with zero data transformation overhead."
    },
    {
      icon: Target,
      agentName: "Discover",
      title: "Market Intelligence",
      description: "Monitor competitive positioning, capture customer sentiment, and identify market gaps to inform product strategy and positioning across your entire portfolio."
    },
    {
      icon: Users,
      agentName: "Define",
      title: "Cross-Functional Alignment",
      description: "Create personalized dashboards for C-suite executives, regional directors, and channel managers with role-specific KPIs and data visualization."
    },
    {
      icon: Palette,
      agentName: "Design",
      title: "Global Brand Governance",
      description: "Maintain perfect brand consistency while supporting regional variations, localization requirements, and channel-specific guidelines at enterprise scale."
    },
    {
      icon: Layers,
      agentName: "Develop",
      title: "Automated Content Operations",
      description: "Generate channel-optimized digital assets, marketing materials, product launch kits, and localized content that meets regulatory requirements in each market."
    },
    {
      icon: LineChart,
      agentName: "Dissect",
      title: "Enterprise Performance Analytics",
      description: "Connect product content directly to revenue impact with comprehensive dashboards, executive reporting, and predictive analytics for portfolio optimization."
    }
  ];

  return (
    <section className="chef-section bg-gray-50 relative overflow-hidden" id="features">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-100/50 rounded-full blur-3xl"></div>
        <div className="circuit-pattern absolute inset-0 opacity-[0.02]"></div>
      </div>
      
      <div className="chef-container relative z-10">
        {/* Section header */}
        <div className="chef-header">
          <div className="flex items-center justify-center mb-6">
            <ChefHat className="h-8 w-8 text-purple-700 mr-2" />
            <h2 className="text-gradient-primary">
              Enterprise AI Platform
            </h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            SalesChef delivers an end-to-end product experience management solution that enables marketing and eCommerce leaders to transform complex product data into revenue-driving content across all channels.
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
        
        {/* Enterprise Ready Badge */}
        <div className="mt-16 max-w-md mx-auto">
          <div className="flex items-center justify-center py-4 px-6 bg-purple-900 rounded-full text-white">
            <Shield className="h-5 w-5 text-purple-300 mr-2" />
            <span className="text-sm font-medium">Enterprise-Grade. SOC 2 Type II Certified.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
