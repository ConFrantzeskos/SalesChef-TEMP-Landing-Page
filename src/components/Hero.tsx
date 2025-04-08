import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
                AI-Powered Enterprise PXM
              </span>
              <span className="chef-chip bg-pink-100 text-pink-800 shadow-sm">
                Transformative Revenue Results
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient-primary">Transform Product Data</span> <br />
              into <span className="text-pink-600">Enterprise Revenue</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-xl leading-relaxed mb-8">
              The enterprise AI platform that helps Fortune 500 marketing and eCommerce leaders deliver exceptional product experiences that drive conversion across every digital touchpoint.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white shadow-lg transition-all duration-300 text-base"
              >
                Schedule Executive Demo
                <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-200 text-purple-800 hover:bg-purple-50 transition-all duration-300 flex items-center gap-2 text-base"
              >
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-1">
                  <Play className="h-3.5 w-3.5 text-purple-800 ml-0.5" />
                </div>
                Watch Platform Overview
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="Customer" />
                <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="Customer" />
                <img src="https://randomuser.me/api/portraits/women/22.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="Customer" />
              </div>
              <span>Trusted by 200+ Fortune 500 enterprise teams</span>
            </div>
          </div>

          {/* Stats Card */}
          <div className="hidden lg:block">
            <Card className="bg-white/80 backdrop-blur-sm border border-purple-100/50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
                    <p className="text-sm text-purple-700 font-medium mb-1">Average ROI</p>
                    <p className="text-3xl font-bold text-purple-900">327%</p>
                    <p className="text-xs text-purple-600 mt-1">Year-over-year</p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
                    <p className="text-sm text-purple-700 font-medium mb-1">Time Savings</p>
                    <p className="text-3xl font-bold text-purple-900">85%</p>
                    <p className="text-xs text-purple-600 mt-1">Content operation time</p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
                    <p className="text-sm text-purple-700 font-medium mb-1">Revenue Lift</p>
                    <p className="text-3xl font-bold text-purple-900">42%</p>
                    <p className="text-xs text-purple-600 mt-1">Conversion increase</p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
                    <p className="text-sm text-purple-700 font-medium mb-1">Global Scale</p>
                    <p className="text-3xl font-bold text-purple-900">143+</p>
                    <p className="text-xs text-purple-600 mt-1">Countries supported</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Central Platform Showcase - KEEPING THIS AS REQUESTED */}
        <div className="w-full max-w-7xl mx-auto chef-gradient-bg rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
            {/* Unstructured Data Section */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="bg-white/15 backdrop-blur-sm px-6 py-2 rounded-full mb-8 shadow-sm">
                <span className="text-white/90 font-medium text-sm tracking-wider uppercase">Enterprise Data Sources</span>
              </div>
              
              <div className="relative h-64 w-full rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-sm shadow-lg">
                {/* Data points and connections */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {/* Data points with consistent sizes and animation */}
                  <div className="absolute top-[5%] left-[10%] w-3 h-3 rounded-full bg-white/70 animate-pulse-soft"></div>
                  <div className="absolute top-[25%] left-[5%] w-3 h-3 rounded-full bg-white/70 animate-pulse-soft" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-[70%] left-[15%] w-3 h-3 rounded-full bg-white/70 animate-pulse-soft" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-[40%] left-[25%] w-3 h-3 rounded-full bg-white/70 animate-pulse-soft" style={{animationDelay: '1.3s'}}></div>
                  
                  {/* Document tags */}
                  <div className="absolute top-[8%] left-[45%] text-[10px] text-white/90 bg-white/10 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm font-medium">
                    legacy ERP systems
                  </div>
                  <div className="absolute top-[32%] left-[45%] text-[10px] text-white/90 bg-white/10 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm font-medium">
                    global PLM platforms
                  </div>
                  <div className="absolute top-[55%] left-[20%] text-[10px] text-white/90 bg-white/10 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm font-medium">
                    regional catalog data
                  </div>
                  
                  {/* File type icons */}
                  <div className="absolute top-[18%] left-[15%] text-[10px] text-white/90 bg-white/10 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm font-medium">
                    DAM systems
                  </div>
                  <div className="absolute top-[45%] left-[35%] text-[10px] text-white/90 bg-white/10 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm font-medium">
                    supplier data
                  </div>
                  <div className="absolute top-[65%] left-[30%] text-[10px] text-white/90 bg-white/10 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm font-medium">
                    master data
                  </div>
                </div>
              </div>
            </div>
            
            {/* Central Platform */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
              <Card className="w-full bg-white/15 backdrop-blur-lg border-white/30 mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="px-4 py-4">
                  <div className="text-center mb-2">
                    <h3 className="text-sm font-medium text-white tracking-wide">Enterprise AI Orchestration</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {/* Enrichment items */}
                    <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-2 text-white/90 shadow-sm hover:bg-white/20 transition-all group">
                      <span className="text-xs font-medium">Competitive Intel</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-2 text-white/90 shadow-sm hover:bg-white/20 transition-all group">
                      <span className="text-xs font-medium">Market Trends</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-2 text-white/90 shadow-sm hover:bg-white/20 transition-all group">
                      <span className="text-xs font-medium">Review Analysis</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-2 text-white/90 shadow-sm hover:bg-white/20 transition-all group">
                      <span className="text-xs font-medium">Search Trends</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-2 text-white/90 shadow-sm hover:bg-white/20 transition-all group">
                      <span className="text-xs font-medium">Taxonomy Builder</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-2 text-white/90 shadow-sm hover:bg-white/20 transition-all group">
                      <span className="text-xs font-medium">Portfolio Analysis</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Logo with consistent styling */}
              <div className="relative w-36 h-36 bg-white/95 rounded-full shadow-chef flex items-center justify-center animate-float">
                <img 
                  src="/lovable-uploads/a97abb90-7ede-47ed-a0c8-fd19c5ecc583.png" 
                  alt="SalesChef Logo" 
                  className="w-4/5 h-4/5 object-contain" 
                />
              </div>
              
              {/* SalesChef PIM/DAM with consistent styling */}
              <Card className="w-full bg-white/15 backdrop-blur-lg border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 mt-6">
                <CardContent className="px-4 py-4">
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-white tracking-wide">Enterprise PXM Platform</h3>
                    <div className="text-xs text-white/90 font-medium mt-1">
                      Unified Product Experience Management
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Content Output */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="bg-white/15 backdrop-blur-sm px-6 py-2 rounded-full mb-8 shadow-sm">
                <span className="text-white/90 font-medium text-sm tracking-wider uppercase">Omnichannel Outputs</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3 w-full">
                {/* Output channels with consistent styling and size */}
                <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg h-16 flex flex-col">
                  <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                    <p className="text-xs font-semibold text-gray-800 text-center">Global Marketplaces</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg h-16 flex flex-col">
                  <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                    <p className="text-xs font-semibold text-gray-800 text-center">D2C Platforms</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg h-16 flex flex-col">
                  <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                    <p className="text-xs font-semibold text-gray-800 text-center">Executive Dashboards</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg h-16 flex flex-col">
                  <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                    <p className="text-xs font-semibold text-gray-800 text-center">Campaign Assets</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg h-16 flex flex-col">
                  <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                    <p className="text-xs font-semibold text-gray-800 text-center">Rich Media</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg h-16 flex flex-col">
                  <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                    <p className="text-xs font-semibold text-gray-800 text-center">Chatbot Content</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg h-16 flex flex-col">
                  <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                    <p className="text-xs font-semibold text-gray-800 text-center">SEO Content</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg h-16 flex flex-col">
                  <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                    <p className="text-xs font-semibold text-gray-800 text-center">Growth Reports</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg h-16 flex flex-col">
                  <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                    <p className="text-xs font-semibold text-gray-800 text-center">Multi-Format Assets</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg h-16 flex flex-col">
                  <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                    <p className="text-xs font-semibold text-gray-800 text-center">Channel Syndication</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg h-16 flex flex-col">
                  <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                    <p className="text-xs font-semibold text-gray-800 text-center">Global Brand Assets</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/95 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border-none rounded-lg h-16 flex flex-col">
                  <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                    <p className="text-xs font-semibold text-gray-800 text-center">Compliance Docs</p>
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
    </div>
  );
};

export default Hero;
