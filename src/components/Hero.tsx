
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, FileText, ShoppingBag, BarChart2, Sparkles } from "lucide-react";

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

          {/* Right Column - Enhanced visual with data transformation graphic */}
          <div className="relative h-full min-h-[500px] rounded-2xl chef-gradient-bg p-6 shadow-2xl overflow-hidden">
            {/* Circuit pattern background */}
            <div className="absolute inset-0 circuit-pattern opacity-20"></div>
            
            {/* Data Transformation Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Data particles */}
              <div className="absolute w-full h-full">
                <div className="absolute top-5 left-10 animate-pulse opacity-60 bg-white/40 rounded-md w-16 h-8"></div>
                <div className="absolute top-20 right-20 animate-pulse delay-300 opacity-60 bg-white/40 rounded-md w-24 h-4"></div>
                <div className="absolute bottom-20 left-16 animate-pulse delay-500 opacity-60 bg-white/40 rounded-md w-10 h-10"></div>
                <div className="absolute bottom-40 right-24 animate-pulse delay-700 opacity-60 bg-white/40 rounded-md w-20 h-6"></div>
              </div>
              
              {/* Output content examples */}
              <div className="absolute z-10">
                {/* PDF icon */}
                <div className="absolute -top-24 -right-16 transform rotate-12 bg-white/90 rounded-lg shadow-lg p-3">
                  <FileText className="h-10 w-10 text-pink-600" />
                  <p className="text-xs font-bold text-purple-800">Sales Sheet</p>
                </div>
                
                {/* PDP icon */}
                <div className="absolute -bottom-20 -left-24 transform -rotate-6 bg-white/90 rounded-lg shadow-lg p-3">
                  <ShoppingBag className="h-10 w-10 text-purple-600" />
                  <p className="text-xs font-bold text-purple-800">PDP</p>
                </div>
                
                {/* Chart icon */}
                <div className="absolute -bottom-16 -right-16 transform rotate-6 bg-white/90 rounded-lg shadow-lg p-3">
                  <BarChart2 className="h-10 w-10 text-blue-600" />
                  <p className="text-xs font-bold text-purple-800">Analytics</p>
                </div>
                
                {/* Center logo - much bigger now */}
                <div className="relative w-80 h-80">
                  <img 
                    src="/lovable-uploads/a97abb90-7ede-47ed-a0c8-fd19c5ecc583.png" 
                    alt="SalesChef Logo" 
                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.9)] filter contrast-150 brightness-125" 
                  />
                </div>
              </div>
              
              {/* Animated connection lines */}
              <div className="absolute inset-0 z-5">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-t-2 border-white/30 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
                <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
              </div>
            </div>
            
            {/* Platform label */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white text-lg font-semibold shadow-lg">
                PXM Platform
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
