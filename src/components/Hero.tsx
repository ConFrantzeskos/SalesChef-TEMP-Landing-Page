
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, Play, Shield, Zap, Trophy, BarChart3, Database, Layers, LineChart } from "lucide-react";
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
        
        {/* Transformation Engine Showcase - REDESIGNED */}
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-2xl">
          <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 p-10 md:p-14 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-grid-purple-500 bg-[size:24px_24px]"></div>
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-white/10 rounded-full animate-spin-slow" style={{ animationDuration: '40s' }}></div>
              <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-white/5 rounded-full animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
            </div>
            
            {/* Section Title */}
            <div className="relative mb-12 text-center">
              <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
                <ChefHat className="w-4 h-4 text-purple-300 mr-2" />
                <h3 className="text-white font-medium text-sm tracking-wider">DATA TRANSFORMATION ENGINE</h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Turning Enterprise Complexity Into Revenue
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6"></div>
            </div>
            
            {/* Data Flow Diagram - Completely Redesigned */}
            <div className="relative z-10">
              {/* Flow diagram with three interconnected hubs */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0">
                
                {/* Input Hub: Enterprise Data Sources */}
                <div className="relative">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 relative overflow-hidden"
                  >
                    {/* Input Hub Title */}
                    <div className="flex items-center mb-4">
                      <Database className="w-6 h-6 text-blue-300 mr-3" />
                      <h3 className="text-xl font-bold text-white">Enterprise Data</h3>
                    </div>
                    
                    {/* Data Sources Flow */}
                    <div className="relative flex flex-col gap-3 mb-4">
                      {[
                        { name: "ERP Systems", color: "from-blue-500/20 to-blue-600/20" },
                        { name: "PLM Platforms", color: "from-blue-400/20 to-blue-500/20" },
                        { name: "DAM Systems", color: "from-blue-300/20 to-blue-400/20" },
                        { name: "Supplier Networks", color: "from-blue-200/20 to-blue-300/20" },
                        { name: "Master Data", color: "from-blue-100/20 to-blue-200/20" }
                      ].map((source, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`bg-gradient-to-r ${source.color} hover:bg-white/10 rounded-lg p-3 text-white/90 text-sm flex items-center justify-between group transition-all duration-300`}
                        >
                          <span>{source.name}</span>
                          <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white/90 transition-all" />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Connection to next hub */}
                    <div className="hidden lg:flex justify-center mt-6">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-0.5 bg-gradient-to-r from-blue-400/50 to-purple-500/50 w-full"
                      />
                    </div>
                  </motion.div>

                  {/* Mobile connector */}
                  <div className="flex justify-center lg:hidden my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400/50 to-purple-500/50" />
                  </div>
                </div>
                
                {/* Processing Hub: AI Engine */}
                <div className="relative z-20">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 transform lg:scale-110 relative lg:-mx-4 lg:z-10 shadow-xl overflow-hidden"
                  >
                    {/* AI Engine glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 animate-pulse-soft" />
                    
                    {/* Engine Hub Title */}
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 mr-3">
                        <Zap className="w-5 h-5 text-purple-200" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">AI Transformation Engine</h3>
                        <p className="text-xs text-white/60">Unified Product Experience Management</p>
                      </div>
                    </div>

                    {/* SalesChef Logo */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-glow-white">
                        <img 
                          src="/lovable-uploads/a97abb90-7ede-47ed-a0c8-fd19c5ecc583.png" 
                          alt="SalesChef Logo" 
                          className="w-4/5 h-4/5 object-contain" 
                        />
                      </div>
                    </div>
                    
                    {/* AI Capabilities - Interactive Hexagon Grid */}
                    <div className="flex flex-wrap justify-center gap-2 relative z-10">
                      {[
                        "Competitive Intel", "Market Analysis", 
                        "Taxonomy Builder", "Attribute Mapping",
                        "Content Generation", "Audience Insights"
                      ].map((capability, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="hex-button relative group"
                        >
                          <div className="hex-bg absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300" />
                          <div className="hex-content relative z-10 text-xs text-white/90 group-hover:text-white font-medium py-2 px-3 text-center">
                            {capability}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Processing animations */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/20 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                      <div className="absolute top-1/2 left-1/2 w-60 h-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-500/10 animate-ping opacity-10" style={{ animationDuration: '4s' }} />
                    </div>
                    
                    {/* Connection to next hub */}
                    <div className="hidden lg:flex justify-center mt-6">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="h-0.5 bg-gradient-to-r from-purple-500/50 to-green-400/50 w-full"
                      />
                    </div>
                  </motion.div>
                  
                  {/* Mobile connector */}
                  <div className="flex justify-center lg:hidden my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500/50 to-green-400/50" />
                  </div>
                </div>
                
                {/* Output Hub: Revenue-Driving Assets */}
                <div className="relative">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 relative overflow-hidden"
                  >
                    {/* Output Hub Title */}
                    <div className="flex items-center mb-4">
                      <Layers className="w-6 h-6 text-green-300 mr-3" />
                      <h3 className="text-xl font-bold text-white">Revenue Assets</h3>
                    </div>
                    
                    {/* Output Channels - Dynamic Smart Grid */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        "Marketplaces", "D2C Sites", "Retail Channels",
                        "SEO Content", "Campaign Assets", "Digital Catalogs",
                        "Social Media", "Analytics Dashboards", "Sales Enablement"
                      ].map((output, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: 0.5 + index * 0.05 }}
                          viewport={{ once: true }}
                          className="output-tile relative overflow-hidden group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 group-hover:from-green-500/30 group-hover:to-teal-500/30 transition-all duration-300" />
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-green-400/40" />
                          <div className="p-2 text-center">
                            <span className="text-xs font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                              {output}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Results Bar - Key Business Metrics */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 relative z-10"
              >
                <div className="flex flex-col md:flex-row items-center justify-between px-6 py-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="flex items-center mb-4 md:mb-0">
                    <LineChart className="w-5 h-5 text-purple-300 mr-2" />
                    <span className="text-white font-medium text-sm">Business Impact</span>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-bold text-white">7.8x</p>
                      <p className="text-xs text-white/60">Faster to Market</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-bold text-white">42%</p>
                      <p className="text-xs text-white/60">Conversion Lift</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-bold text-white">85%</p>
                      <p className="text-xs text-white/60">Time Saved</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-bold text-white">327%</p>
                      <p className="text-xs text-white/60">Average ROI</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
