
import React from 'react';
import { Database, ChefHat, BarChart3, ArrowRight, Globe, Utensils, Palette, FileType, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface StepProps {
  number: number;
  title: string;
  kitchenDescription: string;
  chefDescription: string;
  icon: React.ElementType;
}

const Step = ({ number, title, kitchenDescription, chefDescription, icon: Icon }: StepProps) => {
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
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2 flex items-center">
                  <Utensils className="h-4 w-4 mr-2" />
                  The Kitchen (Core PIM)
                </h4>
                <p className="text-gray-600">{kitchenDescription}</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2 flex items-center">
                  <ChefHat className="h-4 w-4 mr-2" />
                  The Chef (SalesChef)
                </h4>
                <p className="text-purple-700">{chefDescription}</p>
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
      title: "Stock the Pantry (Data Import & Normalization)",
      kitchenDescription: "Receives raw product data in bulk (CSV, Excel, PDFs, etc.). Basic structure for categorizing and storing it (like shelves in a pantry). Some manual cleanup and reformatting tools.",
      chefDescription: "Drop — Enterprise-grade data foundation! Automatically processes and integrates complex product data from multiple sources, legacy systems, and third-party vendors. Normalizes and standardizes data across departments, regions, and product lines while maintaining compliance with your enterprise taxonomy."
    },
    {
      number: 2,
      icon: ChefHat,
      title: "Gather Extra Flavors (Data Enrichment & Tagging)",
      kitchenDescription: "Lets you add attributes, tags, or categories. Stores references for competitor info or notes. Basic library for images, documents (like the pantry for extra spices).",
      chefDescription: "Discover — Automated competitive intelligence! Provides eCommerce leaders with market insights, competitor positioning, and customer sentiment analysis at scale. Maps your product portfolio against market trends and creates enriched product data that drives conversion across all channels."
    },
    {
      number: 3,
      icon: FileType,
      title: "Tailor the Recipe (Defining Stakeholder Views)",
      kitchenDescription: "Creates separate \"views\" of product data for different channels (retail, marketing, internal teams). Often requires manual effort to format or refine each view.",
      chefDescription: "Define — Align cross-functional teams! Creates role-specific information views for CMOs, eCommerce directors, channel managers, and regional teams. Develops customized templates and dashboards that deliver actionable data to each executive stakeholder based on KPIs and strategic objectives."
    },
    {
      number: 4,
      icon: Palette,
      title: "Ensure Brand Consistency (Branding & Design)",
      kitchenDescription: "Stores brand guidelines, assets, logos. Houses product images, letting you attach them to SKUs. Typically reliant on manual checks to match brand standards.",
      chefDescription: "Design — Enterprise brand governance! Ensures brand consistency across all global markets and channels with automated style guide enforcement. Integrates with your existing DAM systems to apply brand standards to all content outputs while supporting localization and region-specific requirements."
    },
    {
      number: 5,
      icon: ChefHat,
      title: "Whip Up the Dish (Content Creation)",
      kitchenDescription: "Can generate basic export templates (PDF sell sheets, product feeds). Usually demands manual copy/paste or separate tools for real creative work.",
      chefDescription: "Develop — Scale content operations! Automates the creation of omnichannel assets that marketing leaders need: product launch kits, digital shelf content, campaign materials, and localized assets. Reduces content production time by 80% while maintaining compliance with regulatory requirements."
    },
    {
      number: 6,
      icon: Send,
      title: "Serve Across Channels (Syndication/Distribution)",
      kitchenDescription: "Distributes product data to online channels (e.g., Amazon, Shopify), often just exporting standard specs. Maintains feeds for pricing/stock, but each channel integration can be tedious.",
      chefDescription: "Distribute — Omnichannel orchestration! Synchronizes product content across all enterprise touchpoints: global marketplaces, retailer portals, direct-to-consumer platforms, and internal systems. Provides digital shelf analytics and optimization while supporting complex distribution workflows."
    },
    {
      number: 7,
      icon: BarChart3,
      title: "Taste & Refine (Reporting & Analytics)",
      kitchenDescription: "Basic checks on data completeness (which fields are missing?). Possibly shows usage stats, but rarely ties to deeper performance metrics.",
      chefDescription: "Dissect — Actionable business intelligence! Delivers comprehensive analytics dashboards for C-suite visibility into product performance, content ROI, and digital shelf presence. Integrates with your enterprise BI tools to connect product content directly to revenue impact and growth KPIs."
    }
  ];

  return (
    <section className="chef-section bg-white">
      <div className="chef-container">
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
              kitchenDescription={step.kitchenDescription}
              chefDescription={step.chefDescription}
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
