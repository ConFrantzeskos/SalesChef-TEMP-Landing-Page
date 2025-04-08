
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, Play, Shield, Zap, Trophy, BarChart3 } from "lucide-react";
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
        
        {/* Completely Redesigned Platform Showcase */}
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-2xl">
          {/* Main gradient background with enhanced depth */}
          <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 p-10 md:p-14 overflow-hidden">
            {/* Animated particles and decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-grid-purple-500 bg-[size:24px_24px]"></div>
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-white/10 rounded-full animate-spin-slow" style={{ animationDuration: '40s' }}></div>
              <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-white/5 rounded-full animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
            </div>
            
            {/* Section Title with visual anchor */}
            <div className="relative mb-10 text-center">
              <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
                <ChefHat className="w-4 h-4 text-purple-300 mr-2" />
                <h3 className="text-white font-medium text-sm tracking-wider">THE AI-POWERED TRANSFORMATION ENGINE</h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Turn Complex Data Into Revenue-Driving Assets
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6"></div>
            </div>
            
            {/* Three-column transformation story with visual flow */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Column 1: CHALLENGE - Complex Enterprise Data */}
              <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/20 backdrop-blur-sm mr-3">
                    <Shield className="w-5 h-5 text-red-300" />
                  </div>
                  <h3 className="font-semibold text-white text-lg">THE CHALLENGE</h3>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 h-full relative overflow-hidden group">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-orange-500/50"></div>
                  
                  <h4 className="font-bold text-white mb-3 text-xl">Complex Enterprise Data</h4>
                  <p className="text-white/70 mb-4 leading-relaxed">Fragmented, inconsistent product information trapped across disparate legacy systems</p>
                  
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {['Legacy ERP', 'PLM Platforms', 'Catalog Data', 'DAM Systems', 'Supplier Data', 'Master Data'].map((item, index) => (
                      <div 
                        key={index} 
                        className="relative bg-white/5 hover:bg-white/10 rounded-lg p-3 text-sm font-medium text-white/80 flex items-center justify-center text-center min-h-[60px] group transition-all duration-300"
                      >
                        <span className="group-hover:scale-105 transition-transform duration-300">{item}</span>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400/50 group-hover:w-full transition-all duration-500"></div>
                      </div>
                    ))}
                  </div>

                  {/* Path indicator */}
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 z-20">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 shadow-lg">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Column 2: TRANSFORMATION - SalesChef AI Platform */}
              <div className="transform transition-all duration-500 hover:translate-y-[-8px]">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20 backdrop-blur-sm mr-3">
                    <Zap className="w-5 h-5 text-purple-300" />
                  </div>
                  <h3 className="font-semibold text-white text-lg">THE TRANSFORMATION</h3>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/15 p-5 h-full relative overflow-hidden shadow-glow-purple group">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  
                  {/* Logo and Platform Name */}
                  <div className="flex flex-col items-center justify-center mb-6">
                    <div className="w-20 h-20 bg-white rounded-full shadow-glow-white flex items-center justify-center mb-2">
                      <img 
                        src="/lovable-uploads/a97abb90-7ede-47ed-a0c8-fd19c5ecc583.png" 
                        alt="SalesChef Logo" 
                        className="w-4/5 h-4/5 object-contain" 
                      />
                    </div>
                    <h4 className="font-bold text-white text-xl text-center">Enterprise PXM Platform</h4>
                    <p className="text-white/70 text-sm text-center">Unified Product Experience Management</p>
                  </div>
                  
                  {/* AI Engine Capabilities */}
                  <div className="relative z-10 mt-4">
                    <h5 className="text-center text-white/90 font-medium text-sm uppercase tracking-wider mb-3">AI Orchestration Engine</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {['Competitive Intel', 'Market Trends', 'Review Analysis', 'Search Trends', 'Taxonomy Builder', 'Portfolio Analysis'].map((feature, index) => (
                        <div 
                          key={index} 
                          className="bg-white/10 hover:bg-white/15 rounded-lg py-2 px-3 text-white/80 text-sm transition-all duration-300 group hover:shadow-inner hover:scale-[1.02] text-center"
                        >
                          <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Path indicator */}
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 z-20">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Column 3: OUTCOMES - Business Results */}
              <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20 backdrop-blur-sm mr-3">
                    <Trophy className="w-5 h-5 text-green-300" />
                  </div>
                  <h3 className="font-semibold text-white text-lg">THE OUTCOMES</h3>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 h-full relative overflow-hidden group">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500/50 to-emerald-500/50"></div>
                  
                  <h4 className="font-bold text-white mb-3 text-xl">Revenue-Driving Assets</h4>
                  <p className="text-white/70 mb-4 leading-relaxed">Optimized omnichannel content that drives measurable business growth</p>
                  
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {[
                      'Global Marketplaces', 'D2C Platforms', 'Executive Dashboards', 
                      'Campaign Assets', 'Rich Media', 'SEO Content',
                      'Growth Reports', 'Multi-Format Assets', 'Channel Syndication',
                      'Chatbot Content', 'Global Brand Assets', 'Compliance Docs'
                    ].map((output, index) => (
                      <div 
                        key={index} 
                        className="bg-white/90 hover:bg-white shadow-sm hover:shadow-md rounded-lg p-2 text-center transition-all duration-300 group hover:scale-105 relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400"></div>
                        <p className="text-xs font-semibold text-gray-800">{output}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Key Business Metrics */}
            <div className="mt-12 relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between px-4 py-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="flex items-center mb-4 md:mb-0">
                  <BarChart3 className="w-6 h-6 text-purple-300 mr-3" />
                  <span className="text-white font-medium">Enterprise Impact Metrics</span>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-white">7.8x</p>
                    <p className="text-xs text-white/60">Faster Time-to-Market</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-white">42%</p>
                    <p className="text-xs text-white/60">Conversion Increase</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-white">85%</p>
                    <p className="text-xs text-white/60">Operation Time Saved</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-white">327%</p>
                    <p className="text-xs text-white/60">Average ROI</p>
                  </div>
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
