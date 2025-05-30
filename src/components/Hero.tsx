
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, Play, Upload, Eye, BarChart3, Database, Layers, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-72 h-72 bg-pink-100/50 rounded-full blur-3xl"></div>
        <div className="circuit-pattern absolute inset-0 opacity-[0.03]"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 max-w-7xl mx-auto">
        {/* Hero Text and CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-left">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="chef-chip bg-purple-100 text-purple-800 shadow-sm">
                <ChefHat className="h-3 w-3" />
                AI-Powered Content Kitchen
              </span>
              <span className="chef-chip bg-pink-100 text-pink-800 shadow-sm">
                Transform Any Data Source
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient-primary">From Raw Specs</span> <br />
              to a <span className="text-pink-600">Feast of Sales-Ready Content</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-xl leading-relaxed mb-8">
              SalesChef transforms messy product data—no matter where it lives—into persuasive, high-converting content for every channel.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white shadow-lg transition-all duration-300 text-base"
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload 5 SKUs → Watch it Cook
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-200 text-purple-800 hover:bg-purple-50 transition-all duration-300 flex items-center gap-2 text-base"
              >
                <Eye className="h-4 w-4" />
                See a Sample Transformation
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>

            <div className="text-sm text-gray-500">
              Drop a CSV. See what your content could become.
            </div>
          </div>

          {/* SKU Transformation Animation */}
          <div className="hidden lg:block">
            <Card className="bg-white/80 backdrop-blur-sm border border-purple-100/50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">SKU Transformation Preview</h3>
                  <div className="w-full h-32 bg-gradient-to-r from-gray-100 to-purple-50 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Database className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <span className="text-sm text-gray-600">Raw Spreadsheet Data</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center my-4">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center animate-spin">
                      <ChefHat className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: Layers, label: "Rich PDP" },
                      { icon: BarChart3, label: "Social Tiles" },
                      { icon: LineChart, label: "SEO Tags" },
                      { icon: Database, label: "Training Decks" }
                    ].map((item, index) => (
                      <div key={index} className="p-2 bg-purple-50 rounded text-center">
                        <item.icon className="h-4 w-4 text-purple-600 mx-auto mb-1" />
                        <span className="text-xs text-purple-800">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
