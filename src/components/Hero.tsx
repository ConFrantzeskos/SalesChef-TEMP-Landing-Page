
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 min-h-[80vh] flex items-center bg-gradient-to-br from-purple-50 via-white to-purple-50/30 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Tags */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 shadow-sm hover:shadow-md transition-shadow duration-300">
                <Sparkles size={14} className="animate-pulse" />
                AI-Powered
              </span>
              <span className="inline-flex items-center py-1.5 px-3 rounded-full text-xs font-semibold bg-green-100 text-green-700 shadow-sm hover:shadow-md transition-shadow duration-300">
                <Zap size={14} />
                PIM Alternative
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900">
              From <span className="text-purple-600">Specs</span> to{" "}
              <span className="text-purple-600">Sales</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              SalesChef transforms messy product data into revenue-driving retail success—automatically.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-200 text-purple-700 hover:bg-purple-50 shadow-md hover:shadow-lg transition-all duration-300"
              >
                See How It Works
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4 font-medium">Trusted by leading retailers</p>
              <div className="grid grid-cols-3 gap-6 opacity-80">
                {/* Replace these divs with actual company logos */}
                <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg shadow-sm" />
                <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg shadow-sm" />
                <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg shadow-sm" />
              </div>
            </div>
          </div>

          {/* Right Column - Decorative Element */}
          <div className="relative h-full min-h-[400px] rounded-2xl bg-gradient-to-br from-purple-100 via-white to-purple-50 p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-500 backdrop-blur-sm">
            <div className="absolute inset-0 bg-white/50 rounded-2xl backdrop-blur-sm" />
            {/* Decorative grid */}
            <div className="absolute inset-0 bg-grid-purple-500/[0.05] bg-[size:20px_20px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-purple-400 text-lg font-medium">
                Placeholder for product visualization
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
