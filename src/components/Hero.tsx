
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, FileText, ShoppingBag, BarChart2, Sparkles, MessageSquare, Clipboard, ScrollText, Factory, Package2, Image, MessageCircle, TrendingUp, LineChart, Shield, ShieldCheck, Users, Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="px-4 py-16 md:py-24 sm:px-6 lg:px-8 min-h-[85vh] flex flex-col justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50/30">
      {/* Data Transformation Visualization - Full Width */}
      <div className="w-full chef-gradient-bg rounded-2xl shadow-2xl p-6 overflow-hidden relative">
        {/* Circuit pattern background */}
        <div className="absolute inset-0 circuit-pattern opacity-20"></div>
        
        {/* Data Transformation Animation */}
        <div className="flex items-center justify-between h-[300px] md:h-[350px] relative">
          {/* Input: Unstructured Data Visualization */}
          <div className="w-1/3 flex flex-col items-center h-full relative px-4">
            <div className="text-white/80 font-bold mb-3 text-xs">UNSTRUCTURED DATA</div>
            
            {/* Chaotic data elements with fade-in/out animation */}
            <div className="relative h-48 w-full">
              {/* Random dots with animation */}
              <div className="absolute top-[10%] left-[20%] w-3 h-3 rounded-full bg-white/70 animate-pulse"></div>
              <div className="absolute top-[40%] left-[10%] w-2 h-2 rounded-full bg-white/60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-[70%] left-[30%] w-4 h-4 rounded-full bg-white/80 animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Random slashes with fade animations */}
              <div className="absolute top-[15%] left-[50%] w-12 h-[2px] bg-white/60 rotate-45 opacity-70 animate-pulse" style={{animationDelay: '1.2s'}}></div>
              <div className="absolute top-[35%] left-[40%] w-10 h-[2px] bg-white/70 -rotate-30 opacity-80 animate-pulse" style={{animationDelay: '0.8s'}}></div>
              <div className="absolute top-[60%] left-[45%] w-14 h-[2px] bg-white/50 rotate-15 opacity-60 animate-pulse" style={{animationDelay: '1.5s'}}></div>
              
              {/* Text fragments - first set with fade-in/out animation */}
              <div className="absolute top-[15%] left-[25%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '0.3s', animationDuration: '3s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>supplier forms</div>
              <div className="absolute top-[35%] left-[15%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '0.7s', animationDuration: '4s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>compliance specs</div>
              <div className="absolute top-[55%] left-[20%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '1.1s', animationDuration: '3.5s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>factory specs</div>
              <div className="absolute top-[75%] left-[25%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '0.5s', animationDuration: '4.2s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>product specs</div>
              
              {/* New text fragments - additional set */}
              <div className="absolute top-[25%] left-[55%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '1.3s', animationDuration: '3.7s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>
                <Image className="h-3 w-3 inline mr-1" />
                images
              </div>
              <div className="absolute top-[45%] left-[60%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '0.9s', animationDuration: '4.5s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>
                <Users className="h-3 w-3 inline mr-1" />
                user generated content
              </div>
              <div className="absolute top-[65%] left-[52%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '1.7s', animationDuration: '3.9s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>
                <Star className="h-3 w-3 inline mr-1" />
                reviews
              </div>
              
              {/* Additional text fragments - second set */}
              <div className="absolute top-[20%] left-[5%] text-[9px] text-white/80 bg-white/10 px-1 rounded animate-fade-in" style={{animationDelay: '2s', animationDuration: '3s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>inseam</div>
              <div className="absolute top-[50%] left-[65%] text-[8px] text-white/70 bg-white/10 px-1 rounded animate-fade-in" style={{animationDelay: '1.4s', animationDuration: '3.3s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>lore</div>
              
              {/* Code-like fragments */}
              <div className="absolute top-[40%] left-[70%] text-[6px] text-white/60 font-mono animate-fade-in" style={{animationDelay: '0.6s', animationDuration: '3.7s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>{"{data:[]}"}</div>
              <div className="absolute top-[65%] left-[60%] text-[7px] text-white/60 font-mono animate-fade-in" style={{animationDelay: '1.2s', animationDuration: '4.1s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>{"<attr>"}</div>
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
          
          {/* Center: SalesChef Logo - Made Larger */}
          <div className="absolute z-20 inset-x-0 mx-auto flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 bg-white/90 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)] flex items-center justify-center">
              <img 
                src="/lovable-uploads/a97abb90-7ede-47ed-a0c8-fd19c5ecc583.png" 
                alt="SalesChef Logo" 
                className="w-4/5 h-4/5 object-contain" 
              />
            </div>
            <span className="mt-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-1.5 text-white text-sm font-semibold">
              PXM Platform
            </span>
          </div>
          
          {/* Output: Structured Content Tiles */}
          <div className="w-1/3 flex flex-col items-center h-full relative">
            {/* New heading above the output section */}
            <div className="text-white/80 font-bold mb-1 text-xs">COMPLETE SOURCE OF TRUTH</div>
            <div className="text-white/80 font-bold mb-3 text-xs">STRUCTURED OUTPUT</div>
            
            {/* Animated arrows pointing from center */}
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
            
            {/* Original Output Tiles */}
            <div className="grid grid-cols-2 gap-2 mb-3">
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
            </div>
            
            {/* Additional Output Tiles */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/90 rounded-lg shadow-lg p-2 transform transition-transform hover:scale-105">
                <Image className="h-8 w-8 text-indigo-600 mx-auto" />
                <p className="text-xs font-bold text-gray-800 text-center mt-1">Social Media</p>
              </div>
              
              <div className="bg-white/90 rounded-lg shadow-lg p-2 transform transition-transform hover:scale-105">
                <MessageCircle className="h-8 w-8 text-emerald-600 mx-auto" />
                <p className="text-xs font-bold text-gray-800 text-center mt-1">Service Scripts</p>
              </div>
              
              <div className="bg-white/90 rounded-lg shadow-lg p-2 transform transition-transform hover:scale-105">
                <TrendingUp className="h-8 w-8 text-amber-600 mx-auto" />
                <p className="text-xs font-bold text-gray-800 text-center mt-1">Sell Points</p>
              </div>
              
              <div className="bg-white/90 rounded-lg shadow-lg p-2 transform transition-transform hover:scale-105">
                <LineChart className="h-8 w-8 text-cyan-600 mx-auto" />
                <p className="text-xs font-bold text-gray-800 text-center mt-1">Insights</p>
              </div>
            </div>
            
            {/* Product Compliance Tile */}
            <div className="mt-3 w-full grid grid-cols-2 gap-2">
              <div className="bg-white/90 rounded-lg shadow-lg p-2 transform transition-transform hover:scale-105">
                <MessageSquare className="h-8 w-8 text-green-600 mx-auto" />
                <p className="text-xs font-bold text-gray-800 text-center mt-1">FAQs</p>
              </div>
              
              <div className="bg-white/90 rounded-lg shadow-lg p-2 transform transition-transform hover:scale-105">
                <ShieldCheck className="h-8 w-8 text-purple-600 mx-auto" />
                <p className="text-xs font-bold text-gray-800 text-center mt-1">Product Compliance</p>
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
      
      {/* Text Content Section */}
      <div className="max-w-7xl mx-auto w-full mt-16">
        <div className="text-left">
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gradient-primary mt-6">
            From <span className="text-purple-700">Specs</span> to{" "}
            <span className="text-pink-600">Sales</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 max-w-xl leading-relaxed mt-6">
            The world's first AI-native Product Information Management platform that transforms messy data into delicious content.
          </p>

          {/* Chef Metaphor */}
          <div className="flex items-center pt-2 pb-6 mt-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 mr-4">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <p className="text-sm text-gray-600 italic">
              "Like a professional chef, we take your raw product ingredients and create perfect dishes for every stakeholder."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
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
          <div className="pt-8 mt-4">
            <p className="text-sm text-gray-500 mb-4 font-medium">Trusted by leading retailers</p>
            <div className="grid grid-cols-3 gap-6 opacity-80">
              {/* Replace these divs with actual company logos */}
              <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg" />
              <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg" />
              <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
