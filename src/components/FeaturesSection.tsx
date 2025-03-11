
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
  iconClassName?: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className,
  iconClassName 
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "p-6 rounded-2xl transition-all duration-300 hover:shadow-xl group relative overflow-hidden backdrop-blur-sm",
      className
    )}>
      {/* Feature card background */}
      <div className="absolute inset-0 bg-white/80 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-br from-purple-300 to-purple-500" />
      
      <div className={cn(
        "p-3 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 inline-flex mb-4 relative shadow-sm group-hover:shadow-md transition-all duration-300 border border-purple-100/80",
        iconClassName
      )}>
        <Icon className="h-7 w-7 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-purple-700 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Database,
      title: "Automated Data Ingestion",
      description: "Import messy product data from any source—ERP, supplier docs, or POS—in minutes, not months.",
      className: "bg-gradient-to-br from-purple-50/80 to-white border border-purple-100/60",
      iconClassName: "bg-gradient-to-br from-purple-100 to-white"
    },
    {
      icon: Sparkles,
      title: "AI-Generated Content",
      description: "Transform basic specs into SEO-optimized, conversion-focused product descriptions automatically.",
      className: "bg-gradient-to-br from-blue-50/80 to-white border border-blue-100/60",
      iconClassName: "bg-gradient-to-br from-blue-100 to-white"
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "Get real-time competitive insights and performance tracking for every SKU in your catalog.",
      className: "bg-gradient-to-br from-green-50/80 to-white border border-green-100/60",
      iconClassName: "bg-gradient-to-br from-green-100 to-white"
    },
    {
      icon: RefreshCw,
      title: "Continuous Optimization",
      description: "Your product content is never \"done\"—SalesChef continually tests and improves to maximize sales.",
      className: "bg-gradient-to-br from-amber-50/80 to-white border border-amber-100/60",
      iconClassName: "bg-gradient-to-br from-amber-100 to-white"
    },
    {
      icon: Zap,
      title: "Real-Time Deployment",
      description: "Push updated product content to all channels instantly, without the PIM bottleneck.",
      className: "bg-gradient-to-br from-pink-50/80 to-white border border-pink-100/60",
      iconClassName: "bg-gradient-to-br from-pink-100 to-white"
    },
    {
      icon: FileText,
      title: "Retail Readiness",
      description: "Ensure every SKU meets marketplace requirements and brand guidelines automatically.",
      className: "bg-gradient-to-br from-indigo-50/80 to-white border border-indigo-100/60",
      iconClassName: "bg-gradient-to-br from-indigo-100 to-white"
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-green-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700">
            Powerful Features That Drive Results
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
              className={feature.className}
              iconClassName={feature.iconClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
