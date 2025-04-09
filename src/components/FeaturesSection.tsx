
import React from 'react';
import { 
  ChefHat,
  Database, 
  Zap, 
  Target, 
  Users, 
  Lightbulb,
  Palette, 
  Layers,
  LineChart,
  Shield,
  ArrowRight
} from 'lucide-react';
import { AgentProps } from '@/types/agent';
import SectionHeader from './features/SectionHeader';
import AgentList from './features/AgentList';

const FeaturesSection = () => {
  const agents: AgentProps[] = [
    {
      name: "Drop",
      tagline: "Enterprise Data Integration",
      description: "Connect siloed data across your entire organization",
      icon: Database,
      ctaIcon: ArrowRight,
      color: "from-blue-500 to-blue-700",
      features: ["Legacy ERP systems", "PLM platforms", "DAM systems", "Master data"],
      cta: "Unlock your data",
      position: "left"
    },
    {
      name: "Discover",
      tagline: "Market Intelligence",
      description: "Harness AI to identify opportunities and trends",
      icon: Target,
      ctaIcon: ArrowRight,
      color: "from-purple-500 to-purple-700",
      features: ["Competitive positioning", "Customer sentiment", "Search trends", "Market gaps"],
      cta: "Reveal insights",
      position: "right"
    },
    {
      name: "Define",
      tagline: "Cross-Functional Alignment",
      description: "Create personalized views for every stakeholder",
      icon: Users,
      ctaIcon: ArrowRight,
      color: "from-indigo-500 to-indigo-700",
      features: ["C-suite dashboards", "Regional views", "Department KPIs", "Channel metrics"],
      cta: "Align teams",
      position: "left"
    },
    {
      name: "Design",
      tagline: "Global Brand Governance",
      description: "Maintain perfect brand consistency at enterprise scale",
      icon: Palette,
      ctaIcon: ArrowRight,
      color: "from-pink-500 to-pink-700",
      features: ["Brand guidelines", "Regional variations", "Channel templates", "Approval workflows"],
      cta: "Elevate your brand",
      position: "right"
    },
    {
      name: "Develop",
      tagline: "Automated Content Operations",
      description: "Generate channel-optimized assets and content at scale",
      icon: Layers,
      ctaIcon: ArrowRight,
      color: "from-amber-500 to-amber-700",
      features: ["Product content", "Marketing assets", "Technical specs", "Localized materials"],
      cta: "Scale content",
      position: "left"
    },
    {
      name: "Dissect",
      tagline: "Enterprise Performance Analytics",
      description: "Connect content directly to revenue impact",
      icon: LineChart,
      ctaIcon: ArrowRight,
      color: "from-emerald-500 to-emerald-700",
      features: ["Executive reporting", "Portfolio optimization", "Predictive analytics", "ROI tracking"],
      cta: "Measure impact",
      position: "right"
    }
  ];

  return (
    <section className="chef-section bg-gray-50 relative overflow-hidden" id="features">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl"></div>
        <div className="circuit-pattern absolute inset-0 opacity-[0.02]"></div>
      </div>
      
      <div className="chef-container relative z-10">
        {/* Section header */}
        <SectionHeader 
          icon={ChefHat}
          title="Enterprise AI Agents"
          description="Six specialized AI agents working in harmony to transform complex product data into revenue-driving content across your entire enterprise."
        />
        
        {/* Agents showcase */}
        <AgentList agents={agents} />
      </div>
    </section>
  );
};

export default FeaturesSection;
