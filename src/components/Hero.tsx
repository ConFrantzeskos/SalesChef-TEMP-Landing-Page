
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, Sparkles } from "lucide-react";

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

          {/* Right Column - Chef Hat Circuit Board */}
          <div className="relative h-full min-h-[400px] rounded-2xl chef-gradient-bg p-8 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 circuit-pattern opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                <img 
                  src="/lovable-uploads/a97abb90-7ede-47ed-a0c8-fd19c5ecc583.png" 
                  alt="SalesChef Logo" 
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                />
                <div className="absolute bottom-0 left-0 right-0 text-center text-white text-xl font-semibold">
                  PXM Platform
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
