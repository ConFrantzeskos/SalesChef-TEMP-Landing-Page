
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8 min-h-[90vh] flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50/30">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-left">
            {/* Tags */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                AI-Powered
              </span>
              <span className="inline-flex items-center py-1.5 px-3 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                PIM Alternative
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gradient-primary">
              From <span className="text-purple-700">Specs</span> to{" "}
              <span className="text-purple-700">Sales</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              SalesChef transforms messy product data into revenue-driving retail success—automatically.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-indigo-800 hover:bg-indigo-900 text-white shadow-lg"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-indigo-200 text-indigo-800 hover:bg-indigo-50"
              >
                See How It Works
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

          {/* Right Column - Decorative Element */}
          <div className="relative h-full min-h-[400px] rounded-2xl bg-gradient-to-br from-indigo-900 to-purple-900 p-8 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJWMTZoLTJ2MmgtMnYyaDJ2MTRoLTJ2MmgydjJoMnYtMmgydi0yaC0ydi0xNGgydjJoMnYtMmgtMnYtMmgtMnYtMmgtMnYyaC0ydjJoMnYxNGgtMnYyaDJ2Mmgydi0yaDJ2LTJ6TTIwIDEwSDEwdjEwaDEwVjEweiBNMjAgMzBIMTB2MTBoMTBWMzB6IE0yMCA1MEgxMHYxMGgxMFY1MHogTTQwIDEwSDMwdjEwaDEwVjEweiBNNDAgMzBIMzB2MTBoMTBWMzB6IE00MCA1MEgzMHYxMGgxMFY1MHogTTYwIDEwSDUwdjEwaDEwVjEweiBNNjAgMzBINTB2MTBoMTBWMzB6IE02MCA1MEg1MHYxMGgxMFY1MHoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-[length:30px_30px] opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-lg font-medium">
                Product Visualization
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
