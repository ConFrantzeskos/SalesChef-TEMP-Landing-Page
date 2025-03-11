
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 min-h-[80vh] flex items-center bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Tags */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
                <Zap size={14} />
                AI-Powered
              </span>
              <span className="inline-flex items-center py-1.5 px-3 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                PIM Alternative
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              From <span className="text-purple-600">Specs</span> to{" "}
              <span className="text-purple-600">Sales</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 max-w-xl">
              SalesChef transforms messy product data into revenue-driving retail success—automatically.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                See How It Works
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Trusted by leading retailers</p>
              <div className="grid grid-cols-3 gap-6 opacity-50">
                {/* Replace these divs with actual company logos */}
                <div className="h-8 bg-gray-200 rounded"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Decorative Element */}
          <div className="relative h-full min-h-[400px] rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 p-8">
            {/* This is a placeholder for an illustration or product screenshot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-purple-300 text-lg">
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
