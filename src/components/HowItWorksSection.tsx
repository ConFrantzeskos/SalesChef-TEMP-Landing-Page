
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
      chefDescription: "Drop — DUMP YOUR MESSY DATA ON US! Automatically ingests messy data with minimal prep. Quickly maps and normalizes product fields (no fuss over formats). Clears duplicates and flags missing info, so the kitchen stays tidy."
    },
    {
      number: 2,
      icon: ChefHat,
      title: "Gather Extra Flavors (Data Enrichment & Tagging)",
      kitchenDescription: "Lets you add attributes, tags, or categories. Stores references for competitor info or notes. Basic library for images, documents (like the pantry for extra spices).",
      chefDescription: "Discover — UNLOCK THE FULL STORY! Seamlessly pulls in competitor listings, reviews, social sentiment. Feeds real-time market intel back into the PIM. Ensures every product is enriched with insights beyond the bare specs."
    },
    {
      number: 3,
      icon: FileType,
      title: "Tailor the Recipe (Defining Stakeholder Views)",
      kitchenDescription: "Creates separate \"views\" of product data for different channels (retail, marketing, internal teams). Often requires manual effort to format or refine each view.",
      chefDescription: "Define — GET EXACTLY WHAT EACH STAKEHOLDER NEEDS! Automatically adjusts content for each channel/audience. Chooses the right \"ingredients\" (details, tone, length) for each persona. Eliminates guesswork so each stakeholder gets precisely what they need."
    },
    {
      number: 4,
      icon: Palette,
      title: "Ensure Brand Consistency (Branding & Design)",
      kitchenDescription: "Stores brand guidelines, assets, logos. Houses product images, letting you attach them to SKUs. Typically reliant on manual checks to match brand standards.",
      chefDescription: "Design — YOUR BRAND VOICE, PERFECTLY CONSISTENT! Applies brand style and voice to every output. Automatically chooses layouts, colors, tone based on brand rules. Makes sure all content looks and feels consistent—like a chef plating each dish beautifully."
    },
    {
      number: 5,
      icon: ChefHat,
      title: "Whip Up the Dish (Content Creation)",
      kitchenDescription: "Can generate basic export templates (PDF sell sheets, product feeds). Usually demands manual copy/paste or separate tools for real creative work.",
      chefDescription: "Develop — STOP COPYING AND PASTING! Uses AI to create product detail pages, training decks, sales sheets. Adapts text/imagery for each platform or retailer automatically. Slashes the time from concept to final content—like a sous-chef who preps everything at lightning speed."
    },
    {
      number: 6,
      icon: Send,
      title: "Serve Across Channels (Syndication/Distribution)",
      kitchenDescription: "Distributes product data to online channels (e.g., Amazon, Shopify), often just exporting standard specs. Maintains feeds for pricing/stock, but each channel integration can be tedious.",
      chefDescription: "Distribute — PUSH A BUTTON, WATCH YOUR CONTENT FLY! Instantly delivers brand-aligned, fully enriched content. Connects to thousands of marketplaces, retailers, and internal teams. Automates those multi-platform updates so you can \"serve\" each channel in one go."
    },
    {
      number: 7,
      icon: BarChart3,
      title: "Taste & Refine (Reporting & Analytics)",
      kitchenDescription: "Basic checks on data completeness (which fields are missing?). Possibly shows usage stats, but rarely ties to deeper performance metrics.",
      chefDescription: "Dissect — SEE WHAT'S ACTUALLY WORKING! Collects real performance data: conversions, competitor comparisons, content engagement. Feeds back insights to every preceding step. Lets you continuously optimize and \"tweak the recipe\" to boost results."
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
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Our recipe for success combines a powerful Product Information Management system (The Kitchen) with AI-driven content automation (The Chef) to transform raw product data into delicious content that drives sales.
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
