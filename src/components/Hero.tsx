
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ChefHat, 
  FileText, 
  ShoppingBag, 
  BarChart2, 
  Sparkles, 
  MessageCircle, 
  ShieldCheck, 
  Image, 
  LineChart, 
  TrendingUp, 
  Star, 
  Palette,
  UserRound,
  Code,
  Database,
  FileSpreadsheet,
  Globe,
  Search,
  Hash,
  Target,
  MessagesSquare,
  Radar
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <div className="px-4 py-20 md:py-32 sm:px-6 lg:px-8 min-h-[90vh] flex flex-col justify-start bg-gradient-to-br from-purple-50 via-white to-pink-50/30">
      {/* Hero Text and CTA Section (Moved to the top) */}
      <div className="max-w-7xl mx-auto w-full mb-24">
        <div className="text-left">
          <div className="flex items-center gap-2">
            <span className="chef-chip bg-purple-100 text-purple-800 shadow-sm">
              <Sparkles className="h-3 w-3" />
              AI-Powered
            </span>
            <span className="chef-chip bg-pink-100 text-pink-800 shadow-sm">
              PXM Platform
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gradient-primary mt-6">
            From <span className="text-purple-700">Specs</span> to{" "}
            <span className="text-pink-600">Sales</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-xl leading-relaxed mt-6">
            The world's first AI-native Product Information Management platform that transforms messy data into delicious content.
          </p>

          <div className="flex items-center pt-2 pb-6 mt-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 mr-4 shadow-md">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <p className="text-sm text-gray-600 italic">
              "Like a professional chef, we take your raw product ingredients and create perfect dishes for every stakeholder."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white shadow-lg transition-all duration-300"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-200 text-purple-800 hover:bg-purple-50 transition-all duration-300"
            >
              How It Works
            </Button>
          </div>
        </div>
      </div>
      
      {/* Central Platform Showcase (Moved below the intro section) */}
      <div className="w-full max-w-7xl mx-auto chef-gradient-bg rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden relative">
        {/* Circuit Pattern Background */}
        <div className="absolute inset-0 circuit-pattern opacity-15"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
          {/* Unstructured Data Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="bg-white/15 backdrop-blur-sm px-6 py-2 rounded-full mb-8 shadow-sm">
              <span className="text-white/90 font-medium text-sm tracking-wider uppercase">Unstructured Data</span>
            </div>
            
            <div className="relative h-64 w-full rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-sm shadow-lg">
              {/* Data points and connections with consistent styling */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {/* Data points with consistent sizes and animation timing */}
                <div className="absolute top-[5%] left-[10%] w-3 h-3 rounded-full bg-white/70 animate-pulse-soft"></div>
                <div className="absolute top-[25%] left-[5%] w-3 h-3 rounded-full bg-white/70 animate-pulse-soft" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-[70%] left-[15%] w-3 h-3 rounded-full bg-white/70 animate-pulse-soft" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-[40%] left-[25%] w-3 h-3 rounded-full bg-white/70 animate-pulse-soft" style={{animationDelay: '1.3s'}}></div>
                <div className="absolute top-[85%] left-[30%] w-3 h-3 rounded-full bg-white/70 animate-pulse-soft" style={{animationDelay: '0.7s'}}></div>
                <div className="absolute top-[15%] left-[40%] w-3 h-3 rounded-full bg-white/70 animate-pulse-soft" style={{animationDelay: '1.5s'}}></div>
                
                {/* Connection lines with consistent styling */}
                <div className="absolute top-[10%] left-[35%] w-12 h-[1px] bg-white/60 rotate-45 opacity-70"></div>
                <div className="absolute top-[30%] left-[15%] w-14 h-[1px] bg-white/60 -rotate-30 opacity-70"></div>
                <div className="absolute top-[60%] left-[40%] w-16 h-[1px] bg-white/60 rotate-15 opacity-70"></div>
                <div className="absolute top-[75%] left-[10%] w-10 h-[1px] bg-white/60 -rotate-15 opacity-70"></div>
                
                {/* Document tags with consistent styling */}
                <div className="absolute top-[8%] left-[45%] text-[10px] text-white/90 bg-white/10 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm font-medium">
                  supplier forms
                </div>
                <div className="absolute top-[32%] left-[45%] text-[10px] text-white/90 bg-white/10 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm font-medium">
                  compliance specs
                </div>
                <div className="absolute top-[55%] left-[20%] text-[10px] text-white/90 bg-white/10 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm font-medium">
                  factory specs
                </div>
                <div className="absolute top-[78%] left-[50%] text-[10px] text-white/90 bg-white/10 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm font-medium">
                  product specs
                </div>
                
                {/* File type icons with consistent styling */}
                <div className="absolute top-[18%] left-[15%] text-[10px] text-white/90 bg-white/10 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm font-medium">
                  <Image className="h-3 w-3 inline mr-1" />
                  images
                </div>
                <div className="absolute top-[45%] left-[35%] text-[10px] text-white/90 bg-white/10 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm font-medium">
                  <FileSpreadsheet className="h-3 w-3 inline mr-1" />
                  spreadsheets
                </div>
                <div className="absolute top-[65%] left-[30%] text-[10px] text-white/90 bg-white/10 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm font-medium">
                  <Database className="h-3 w-3 inline mr-1" />
                  databases
                </div>
                
                {/* Code snippets with consistent styling */}
                <div className="absolute top-[22%] left-[65%] text-[8px] text-white/70 font-mono bg-white/5 px-1.5 py-0.5 rounded-sm">{"{data:[]}"}</div>
                <div className="absolute top-[80%] left-[40%] text-[8px] text-white/70 font-mono bg-white/5 px-1.5 py-0.5 rounded-sm">{"function() { }"}</div>
                <div className="absolute top-[53%] left-[65%] text-[8px] text-white/70 font-mono bg-white/5 px-1.5 py-0.5 rounded-sm">{"{id:15483}"}</div>
              </div>
            </div>
            
            {/* Arrow pointing to Central Platform - Desktop */}
            <div className="hidden md:flex justify-center w-full mt-8">
              <div className="w-12 h-16 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-0.5 h-full bg-white/50 animate-pulse-soft"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-white/50"></div>
              </div>
            </div>
            
            {/* Arrow pointing to Central Platform - Mobile */}
            <div className="flex md:hidden justify-center w-full my-8">
              <div className="h-8 w-12 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-0.5 w-full bg-white/50 animate-pulse-soft"></div>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 border-t-[6px] border-b-[6px] border-r-[8px] border-t-transparent border-b-transparent border-r-white/50"></div>
              </div>
            </div>
          </div>
          
          {/* Central Platform */}
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
            {/* Data and Content Enrichment Card */}
            <Card className="w-full max-w-sm bg-white/15 backdrop-blur-lg border-white/30 mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Radar className="h-4 w-4 text-white" />
                  <CardTitle className="text-sm font-medium text-white tracking-wide">Data Enrichment</CardTitle>
                  <Radar className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-4 pt-0">
                <div className="grid grid-cols-2 gap-2">
                  {/* Consistent styling for all enrichment items */}
                  <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-2 text-white/90 shadow-sm hover:bg-white/20 transition-all group">
                    <Globe className="h-3.5 w-3.5 group-hover:text-white transition-colors" />
                    <span className="text-xs font-medium">Web Scraping</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-2 text-white/90 shadow-sm hover:bg-white/20 transition-all group">
                    <MessagesSquare className="h-3.5 w-3.5 group-hover:text-white transition-colors" />
                    <span className="text-xs font-medium">Social Media</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-2 text-white/90 shadow-sm hover:bg-white/20 transition-all group">
                    <Star className="h-3.5 w-3.5 group-hover:text-white transition-colors" />
                    <span className="text-xs font-medium">Review Sites</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-2 text-white/90 shadow-sm hover:bg-white/20 transition-all group">
                    <Search className="h-3.5 w-3.5 group-hover:text-white transition-colors" />
                    <span className="text-xs font-medium">Keywords</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-2 text-white/90 shadow-sm hover:bg-white/20 transition-all group">
                    <Hash className="h-3.5 w-3.5 group-hover:text-white transition-colors" />
                    <span className="text-xs font-medium">Product Attributes</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-2 text-white/90 shadow-sm hover:bg-white/20 transition-all group">
                    <Target className="h-3.5 w-3.5 group-hover:text-white transition-colors" />
                    <span className="text-xs font-medium">Competitive Insights</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Arrow pointing to SalesChef Logo */}
            <div className="hidden md:flex justify-center w-full my-4">
              <div className="w-12 h-8 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-0.5 h-full bg-white/50 animate-pulse-soft"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-white/50"></div>
              </div>
            </div>

            {/* Logo with consistent styling */}
            <div className="relative w-48 h-48 bg-white/95 rounded-full shadow-chef flex items-center justify-center animate-float">
              <img 
                src="/lovable-uploads/a97abb90-7ede-47ed-a0c8-fd19c5ecc583.png" 
                alt="SalesChef Logo" 
                className="w-4/5 h-4/5 object-contain" 
              />
            </div>
            
            {/* Arrow pointing to SalesChef PIM/DAM */}
            <div className="hidden md:flex justify-center w-full mt-6">
              <div className="w-12 h-8 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-0.5 h-full bg-white/50 animate-pulse-soft"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-white/50"></div>
              </div>
            </div>
            
            {/* SalesChef PIM/DAM with consistent styling */}
            <Card className="w-full max-w-sm mt-6 bg-white/15 backdrop-blur-lg border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Database className="h-4 w-4 text-white" />
                  <CardTitle className="text-sm font-medium text-white tracking-wide">SalesChef PIM/DAM</CardTitle>
                  <Database className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-white/90 font-medium text-center">
                  Product Source of Truth and Assets
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Content Output */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="bg-white/15 backdrop-blur-sm px-6 py-2 rounded-full mb-8 shadow-sm">
              <span className="text-white/90 font-medium text-sm tracking-wider uppercase">Content Transformation</span>
            </div>
            
            {/* Arrow pointing from SalesChef to Content Transformation (mobile) */}
            <div className="flex md:hidden justify-center w-full mb-8">
              <div className="h-8 w-12 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-0.5 w-full bg-white/50 animate-pulse-soft"></div>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 border-t-[6px] border-b-[6px] border-r-[8px] border-t-transparent border-b-transparent border-r-white/50"></div>
              </div>
            </div>
            
            {/* Arrow pointing from SalesChef to Content Transformation (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-y-1/4">
              <div className="h-0.5 w-16 bg-white/50 relative animate-pulse-soft">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 border-t-[6px] border-b-[6px] border-r-[8px] border-t-transparent border-b-transparent border-r-white/50"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 w-full">
              {/* Output channels with consistent styling */}
              <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <FileText className="h-5 w-5 text-purple-600 mb-1.5" />
                  <p className="text-xs font-semibold text-gray-800 text-center">Sales Sheet</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-purple-600 mb-1.5" />
                  <p className="text-xs font-semibold text-gray-800 text-center">PDP</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <BarChart2 className="h-5 w-5 text-purple-600 mb-1.5" />
                  <p className="text-xs font-semibold text-gray-800 text-center">Analytics</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <FileText className="h-5 w-5 text-purple-600 mb-1.5" />
                  <p className="text-xs font-semibold text-gray-800 text-center">PDF</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <Image className="h-5 w-5 text-purple-600 mb-1.5" />
                  <p className="text-xs font-semibold text-gray-800 text-center">Social</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-purple-600 mb-1.5" />
                  <p className="text-xs font-semibold text-gray-800 text-center">Scripts</p>
                </CardContent>
              </Card>
              
              {/* Additional tiles with consistent styling */}
              <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-purple-600 mb-1.5" />
                  <p className="text-xs font-semibold text-gray-800 text-center">SEO Content</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <LineChart className="h-5 w-5 text-purple-600 mb-1.5" />
                  <p className="text-xs font-semibold text-gray-800 text-center">Reports</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <UserRound className="h-5 w-5 text-purple-600 mb-1.5" />
                  <p className="text-xs font-semibold text-gray-800 text-center">Personas</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <Code className="h-5 w-5 text-purple-600 mb-1.5" />
                  <p className="text-xs font-semibold text-gray-800 text-center">API Data</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <Palette className="h-5 w-5 text-purple-600 mb-1.5" />
                  <p className="text-xs font-semibold text-gray-800 text-center">Design</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-purple-600 mb-1.5" />
                  <p className="text-xs font-semibold text-gray-800 text-center">Compliance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
