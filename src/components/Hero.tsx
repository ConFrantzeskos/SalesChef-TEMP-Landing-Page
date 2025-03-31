import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, FileText, ShoppingBag, BarChart2, Sparkles, MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <div className="px-4 py-16 md:py-24 sm:px-6 lg:px-8 min-h-[85vh] flex items-center bg-gradient-to-br from-purple-50 via-white to-pink-50/30">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-left">
            {/* Tags */}
            <div className="flex items-center gap-2">
              <span className="chef-chip bg-purple-100 text-purple-800">
                <Sparkles className="h-3 w-3" />
                AI-Powered
              </span>
              <span className="chef-chip bg-pink-100 text-pink-800">
                PXM Platform
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gradient-primary">
              From <span className="text-purple-700">Specs</span> to{" "}
              <span className="text-pink-600">Sales</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              The world's first AI-native Product Information Management platform that transforms messy data into delicious content.
            </p>

            {/* Chef Metaphor */}
            <div className="flex items-center pt-2 pb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 mr-4">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm text-gray-600 italic">
                "Like a professional chef, we take your raw product ingredients and create perfect dishes for every stakeholder."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white shadow-lg"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-200 text-purple-800 hover:bg-purple-50"
              >
                How It Works
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4 font-medium">Trusted by leading retailers</p>
              <div className="grid grid-cols-3 gap-6 opacity-80">
                {/* Replace these divs with actual company logos */}
                <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg" />
                <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg" />
                <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg" />
              </div>
            </div>
          </div>

          {/* Right Column - Data Transformation Visualization */}
          <div className="relative h-full min-h-[500px] rounded-2xl chef-gradient-bg p-6 shadow-2xl overflow-hidden">
            {/* Circuit pattern background */}
            <div className="absolute inset-0 circuit-pattern opacity-20"></div>
            
            {/* Data Transformation Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Input: Unstructured Data Visualization */}
              <div className="absolute left-0 top-0 bottom-0 w-1/3 flex flex-col items-center justify-center px-4">
                <div className="text-white/80 font-bold mb-3 text-xs">UNSTRUCTURED DATA</div>
                
                {/* Chaotic data elements */}
                <div className="relative h-48 w-full">
                  {/* Random dots */}
                  <div className="absolute top-[10%] left-[20%] w-3 h-3 rounded-full bg-white/70 animate-pulse"></div>
                  <div className="absolute top-[40%] left-[10%] w-2 h-2 rounded-full bg-white/60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-[70%] left-[30%] w-4 h-4 rounded-full bg-white/80 animate-pulse" style={{animationDelay: '1s'}}></div>
                  
                  {/* Random slashes */}
                  <div className="absolute top-[15%] left-[50%] w-12 h-[2px] bg-white/60 rotate-45"></div>
                  <div className="absolute top-[35%] left-[40%] w-10 h-[2px] bg-white/70 -rotate-30"></div>
                  <div className="absolute top-[60%] left-[45%] w-14 h-[2px] bg-white/50 rotate-15"></div>
                  
                  {/* Text fragments */}
                  <div className="absolute top-[20%] left-[25%] text-[8px] text-white/80 bg-white/10 px-1 rounded">lore</div>
                  <div className="absolute top-[50%] left-[15%] text-[7px] text-white/70 bg-white/10 px-1 rounded">inseam</div>
                  <div className="absolute top-[80%] left-[20%] text-[9px] text-white/90 bg-white/10 px-1 rounded">specs</div>
                  
                  {/* Code-like fragments */}
                  <div className="absolute top-[30%] left-[50%] text-[6px] text-white/60 font-mono">{"{data:[]}"}</div>
                  <div className="absolute top-[65%] left-[45%] text-[7px] text-white/60 font-mono">{"<attr>"}</div>
                </div>

                {/* Animated arrows pointing to center */}
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Center: SalesChef Logo */}
              <div className="absolute z-20 flex flex-col items-center justify-center">
                <div className="relative w-36 h-36 bg-white/90 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)] flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/a97abb90-7ede-47ed-a0c8-fd19c5ecc583.png" 
                    alt="SalesChef Logo" 
                    className="w-4/5 h-4/5 object-contain" 
                  />
                </div>
                <span className="mt-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-white text-sm font-semibold">
                  PXM Platform
                </span>
              </div>
              
              {/* Output: Structured Content Tiles */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 flex flex-col items-center justify-center">
                <div className="text-white/80 font-bold mb-3 text-xs">STRUCTURED OUTPUT</div>
                
                {/* Animated arrows pointing from center */}
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
                
                {/* Output Tiles */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/90 rounded-lg shadow-lg p-2 transform transition-transform hover:scale-105">
                    <FileText className="h-8 w-8 text-purple-600 mx-auto" />
                    <p className="text-xs font-bold text-gray-800 text-center mt-1">Sales Sheet</p>
                  </div>
                  
                  <div className="bg-white/90 rounded-lg shadow-lg p-2 transform transition-transform hover:scale-105">
                    <ShoppingBag className="h-8 w-8 text-pink-600 mx-auto" />
                    <p className="text-xs font-bold text-gray-800 text-center mt-1">PDP</p>
                  </div>
                  
                  <div className="bg-white/90 rounded-lg shadow-lg p-2 transform transition-transform hover:scale-105">
                    <BarChart2 className="h-8 w-8 text-blue-600 mx-auto" />
                    <p className="text-xs font-bold text-gray-800 text-center mt-1">Analytics</p>
                  </div>
                  
                  <div className="bg-white/90 rounded-lg shadow-lg p-2 transform transition-transform hover:scale-105">
                    <FileText className="h-8 w-8 text-red-600 mx-auto" />
                    <p className="text-xs font-bold text-gray-800 text-center mt-1">PDF</p>
                  </div>
                  
                  <div className="bg-white/90 rounded-lg shadow-lg p-2 transform transition-transform hover:scale-105" style={{gridColumn: "span 2"}}>
                    <MessageSquare className="h-8 w-8 text-green-600 mx-auto" />
                    <p className="text-xs font-bold text-gray-800 text-center mt-1">FAQs</p>
                  </div>
                </div>
              </div>
              
              {/* Background animated elements */}
              <div className="absolute inset-0 z-0">
                <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
