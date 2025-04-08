
import React from 'react';
import { Database, ChefHat, BarChart3, ArrowRight, Globe, Utensils, Palette, FileType, Send, LineChart, Target, Layers, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface StepProps {
  number: number;
  title: string;
  traditionalApproach: string;
  salesChefSolution: string;
  icon: React.ElementType;
}

const Step = ({ number, title, traditionalApproach, salesChefSolution, icon: Icon }: StepProps) => {
  return (
    <Card className="relative bg-white rounded-chef-lg shadow-chef-sm border border-gray-100 transition-all duration-300 hover:shadow-chef-md group overflow-hidden">
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
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                  <Utensils className="h-4 w-4 mr-2 text-gray-500" />
                  Traditional PIM Approach
                </h4>
                <p className="text-gray-600">{traditionalApproach}</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2 flex items-center">
                  <ChefHat className="h-4 w-4 mr-2" />
                  SalesChef Enterprise Solution
                </h4>
                <p className="text-purple-700">{salesChefSolution}</p>
              </div>
            </div>
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
      title: "Enterprise Data Integration",
      traditionalApproach: "Manual data imports and exports, tedious cleanup of inconsistent formats, and resource-intensive normalization processes that can take months to complete.",
      salesChefSolution: "Drop — Seamless enterprise integration! Connect directly to your ERP, PLM, and supplier portals to automatically normalize and standardize product data across your global organization with no manual reformatting."
    },
    {
      number: 2,
      icon: Target,
      title: "Market & Competitive Intelligence",
      traditionalApproach: "Separate, siloed market research efforts across departments with inconsistent methodologies and no integration with product data management.",
      salesChefSolution: "Discover — Real-time competitive insights! Continuously monitor your digital shelf position, track competitors, and identify market opportunities with AI-powered analysis that enriches your product data automatically."
    },
    {
      number: 3,
      icon: Shield,
      title: "Stakeholder & Compliance Management",
      traditionalApproach: "Manual creation of separate views for different departments, with tedious version control and compliance verification that causes delays in go-to-market.",
      salesChefSolution: "Define — Streamlined cross-functional alignment! Create role-specific dashboards for executives, marketers, regional teams, and channel managers that ensure perfect regulatory compliance in each market."
    },
    {
      number: 4,
      icon: Palette,
      title: "Global Brand Governance",
      traditionalApproach: "Multiple, fragmented design systems with inconsistent brand application across regions and channels requiring extensive manual review and correction.",
      salesChefSolution: "Design — Enterprise brand consistency at scale! Implement automated brand governance that ensures perfect consistency while supporting regional variations and channel-specific requirements across your global footprint."
    },
    {
      number: 5,
      icon: Layers,
      title: "Omnichannel Content Creation",
      traditionalApproach: "Resource-intensive production of content for each channel, with duplicate effort, inconsistent messaging, and limited scalability for global operations.",
      salesChefSolution: "Develop — AI-powered content engine! Scale your content operations by automatically generating channel-optimized assets, marketing materials, and localized content that meets regulatory requirements in each market."
    },
    {
      number: 6,
      icon: Send,
      title: "Global Channel Syndication",
      traditionalApproach: "Manual publishing processes to each channel with tedious data transformation, formatting issues, and no visibility into marketplace performance.",
      salesChefSolution: "Distribute — Seamless omnichannel orchestration! Synchronize perfect product content across all enterprise touchpoints: global marketplaces, retailer portals, direct-to-consumer platforms, and internal systems."
    },
    {
      number: 7,
      icon: LineChart,
      title: "Enterprise Performance Analytics",
      traditionalApproach: "Basic usage metrics with no connection to revenue impact, making it impossible to demonstrate ROI or optimize product content strategy.",
      salesChefSolution: "Dissect — Executive-level business intelligence! Connect product content directly to revenue with C-suite dashboards, predictive analytics, and comprehensive reports that drive portfolio optimization and growth."
    }
  ];

  return (
    <section className="chef-section bg-white relative overflow-hidden" id="how-it-works">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-72 h-72 bg-pink-100/30 rounded-full blur-3xl"></div>
        <div className="circuit-pattern absolute inset-0 opacity-[0.01]"></div>
      </div>
      
      <div className="chef-container relative z-10">
        <div className="chef-header">
          <div className="flex items-center justify-center mb-6">
            <ChefHat className="h-8 w-8 text-purple-700 mr-2" />
            <h2 className="text-gradient-primary">
              Enterprise-Grade PIM Automation
            </h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Our AI-powered platform transforms complex enterprise product data into strategic business assets, enabling marketing and eCommerce leaders to accelerate time-to-market and drive digital shelf performance.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8 mb-16">
          {steps.map((step, index) => (
            <Step 
              key={index}
              number={step.number}
              icon={step.icon}
              title={step.title}
              traditionalApproach={step.traditionalApproach}
              salesChefSolution={step.salesChefSolution}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-chef-lg bg-gradient-to-r from-purple-50 to-pink-50 shadow-chef-sm">
            <ChefHat className="h-10 w-10 mx-auto mb-6 text-purple-700" />
            <p className="text-lg font-medium text-gray-800 mb-6">
              Ready to transform your enterprise product content strategy?
            </p>
            <Button 
              size="lg" 
              className="chef-button-primary"
            >
              Request Executive Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
