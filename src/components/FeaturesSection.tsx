
import React from 'react';
import { 
  ChefHat,
  Database, 
  Target, 
  Users, 
  Palette, 
  Layers,
  LineChart,
  ArrowRight,
  Upload,
  Search,
  Edit,
  Paintbrush,
  Send,
  BarChart3
} from 'lucide-react';
import { AgentProps } from '@/types/agent';
import SectionHeader from './features/SectionHeader';
import AgentList from './features/AgentList';

const FeaturesSection = () => {
  const agents: AgentProps[] = [
    {
      name: "Drop",
      tagline: "Ingests and cleans",
      description: "Keep your existing stack. SalesChef connects to everything.",
      icon: Upload,
      ctaIcon: ArrowRight,
      color: "from-blue-500 to-blue-700",
      features: ["Any data source", "Automatic cleaning", "Format standardization", "Data validation"],
      cta: "Connect your data",
      position: "left"
    },
    {
      name: "Discover",
      tagline: "Researches, enriches",
      description: "AI agents research and enrich your product data with market intelligence.",
      icon: Search,
      ctaIcon: ArrowRight,
      color: "from-purple-500 to-purple-700",
      features: ["Competitive analysis", "Customer reviews", "Market trends", "SEO insights"],
      cta: "Enrich your catalog",
      position: "right"
    },
    {
      name: "Draft",
      tagline: "Writes compelling content",
      description: "Transform specs into persuasive, benefit-driven content that converts.",
      icon: Edit,
      ctaIcon: ArrowRight,
      color: "from-indigo-500 to-indigo-700",
      features: ["Product descriptions", "Feature bullets", "Benefits copy", "SEO content"],
      cta: "Write better copy",
      position: "left"
    },
    {
      name: "Design",
      tagline: "Formats to brand",
      description: "Maintain perfect brand consistency across every channel and touchpoint.",
      icon: Paintbrush,
      ctaIcon: ArrowRight,
      color: "from-pink-500 to-pink-700",
      features: ["Brand guidelines", "Channel formats", "Visual templates", "Style consistency"],
      cta: "Brand your content",
      position: "right"
    },
    {
      name: "Deploy",
      tagline: "Publishes everywhere",
      description: "Distribute content across all your channels with one click.",
      icon: Send,
      ctaIcon: ArrowRight,
      color: "from-amber-500 to-amber-700",
      features: ["Multi-channel publishing", "Format optimization", "Automated syndication", "Real-time updates"],
      cta: "Go live instantly",
      position: "left"
    },
    {
      name: "Dissect",
      tagline: "Optimizes and learns",
      description: "Continuous optimization based on performance data and market feedback.",
      icon: BarChart3,
      ctaIcon: ArrowRight,
      color: "from-emerald-500 to-emerald-700",
      features: ["Performance analytics", "A/B testing", "Content optimization", "Feedback loops"],
      cta: "Optimize results",
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
          title="SalesChef changes everything"
          description="(except your existing tech stack). Keep your existing stack. SalesChef is a team of AI agents - like chefs - each trained to transform raw product specs into full-funnel, high-performance content; manipulating your content, not your systems."
        />
        
        {/* AI Chef Agents showcase */}
        <AgentList agents={agents} />
      </div>
    </section>
  );
};

export default FeaturesSection;
