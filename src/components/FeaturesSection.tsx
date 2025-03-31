
import React from 'react';
import { 
  Zap, 
  BarChart3, 
  Database, 
  FileText, 
  Sparkles, 
  RefreshCw
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "p-8 rounded-xl transition-all duration-300 hover:shadow-lg group relative bg-white border border-gray-100",
      className
    )}>
      <div className="mb-6">
        <div className="p-3 rounded-full bg-indigo-100 inline-flex items-center justify-center">
          <Icon className="h-6 w-6 text-indigo-800" />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Database,
      title: "Automated Data Ingestion",
      description: "Import messy product data from any source—ERP, supplier docs, or POS—in minutes, not months."
    },
    {
      icon: Sparkles,
      title: "AI-Generated Content",
      description: "Transform basic specs into SEO-optimized, conversion-focused product descriptions automatically."
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "Get real-time competitive insights and performance tracking for every SKU in your catalog."
    },
    {
      icon: RefreshCw,
      title: "Continuous Optimization",
      description: "Your product content is never \"done\"—SalesChef continually tests and improves to maximize sales."
    },
    {
      icon: Zap,
      title: "Real-Time Deployment",
      description: "Push updated product content to all channels instantly, without the PIM bottleneck."
    },
    {
      icon: FileText,
      title: "Retail Readiness",
      description: "Ensure every SKU meets marketplace requirements and brand guidelines automatically."
    },
  ];

  return (
    <section className="evorra-section bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            SalesChef transforms your product data management workflow with AI-powered tools that save time and boost revenue.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
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
