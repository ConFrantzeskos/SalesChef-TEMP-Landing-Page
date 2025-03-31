
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ChefHat, 
  FileText, 
  ShoppingBag, 
  BarChart2, 
  Sparkles, 
  MessageSquare, 
  ShieldCheck, 
  Image, 
  MessageCircle, 
  TrendingUp, 
  LineChart, 
  Star, 
  Palette,
  UserRound,
  Code,
  Database,
  Table,
  FileSpreadsheet,
  FileJson,
  FileInput,
  Pencil,
  Text,
  Clipboard,
  Binary,
  FileDigit,
  Upload,
  LayoutGrid,
  CheckCircle,
  FileCheck,
  Globe,
  Search,
  Radar,
  MessagesSquare,
  Hash,
  Target,
  BarChart
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <div className="px-4 py-20 md:py-32 sm:px-6 lg:px-8 min-h-[90vh] flex flex-col justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50/30">
      {/* Central Platform Showcase */}
      <div className="w-full max-w-7xl mx-auto chef-gradient-bg rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden relative">
        <div className="absolute inset-0 circuit-pattern opacity-15"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          {/* Unstructured Data Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-white/90 font-semibold text-sm">UNSTRUCTURED DATA</span>
            </div>
            
            <div className="relative h-64 w-full rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-sm">
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {/* Dots and connections */}
                <div className="absolute top-[5%] left-[10%] w-3 h-3 rounded-full bg-white/70 animate-pulse"></div>
                <div className="absolute top-[25%] left-[5%] w-2 h-2 rounded-full bg-white/60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-[70%] left-[15%] w-4 h-4 rounded-full bg-white/80 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-[40%] left-[25%] w-3 h-3 rounded-full bg-white/70 animate-pulse" style={{animationDelay: '1.3s'}}></div>
                <div className="absolute top-[85%] left-[30%] w-2 h-2 rounded-full bg-white/60 animate-pulse" style={{animationDelay: '0.7s'}}></div>
                <div className="absolute top-[15%] left-[40%] w-3 h-3 rounded-full bg-white/75 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                
                {/* Connection lines */}
                <div className="absolute top-[10%] left-[35%] w-12 h-[2px] bg-white/60 rotate-45 opacity-70"></div>
                <div className="absolute top-[30%] left-[15%] w-14 h-[2px] bg-white/70 -rotate-30 opacity-80"></div>
                <div className="absolute top-[60%] left-[40%] w-16 h-[2px] bg-white/50 rotate-15 opacity-60"></div>
                <div className="absolute top-[75%] left-[10%] w-10 h-[2px] bg-white/65 -rotate-15 opacity-75"></div>
                
                {/* Document tags */}
                <div className="absolute top-[8%] left-[45%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded">
                  supplier forms
                </div>
                <div className="absolute top-[32%] left-[45%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded">
                  compliance specs
                </div>
                <div className="absolute top-[55%] left-[20%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded">
                  factory specs
                </div>
                <div className="absolute top-[78%] left-[50%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded">
                  product specs
                </div>
                
                {/* File type icons */}
                <div className="absolute top-[18%] left-[15%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded">
                  <Image className="h-3 w-3 inline mr-1" />
                  images
                </div>
                <div className="absolute top-[45%] left-[35%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded">
                  <FileSpreadsheet className="h-3 w-3 inline mr-1" />
                  spreadsheets
                </div>
                <div className="absolute top-[65%] left-[30%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded">
                  <Database className="h-3 w-3 inline mr-1" />
                  databases
                </div>
                
                {/* Code snippets */}
                <div className="absolute top-[22%] left-[65%] text-[7px] text-white/60 font-mono">{"{data:[]}"}</div>
                <div className="absolute top-[80%] left-[40%] text-[7px] text-white/60 font-mono">{"function() { }"}</div>
                <div className="absolute top-[53%] left-[65%] text-[7px] text-white/60 font-mono">{"{id:15483}"}</div>
              </div>
            </div>
          </div>
          
          {/* Central Platform */}
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
            {/* Data and Content Enrichment Card */}
            <Card className="w-full max-w-sm bg-white/15 backdrop-blur-lg border-white/30 mb-6 shadow-lg">
              <CardHeader className="pb-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Radar className="h-4 w-4 text-white" />
                  <CardTitle className="text-sm font-semibold text-white">Data Enrichment</CardTitle>
                  <Radar className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-1 bg-white/15 rounded px-2 py-1.5 text-white/90">
                    <Globe className="h-3.5 w-3.5" />
                    <span className="text-xs">Web Scraping</span>
                  </div>
                  
                  <div className="flex items-center gap-1 bg-white/15 rounded px-2 py-1.5 text-white/90">
                    <MessagesSquare className="h-3.5 w-3.5" />
                    <span className="text-xs">Social Media</span>
                  </div>
                  
                  <div className="flex items-center gap-1 bg-white/15 rounded px-2 py-1.5 text-white/90">
                    <Star className="h-3.5 w-3.5" />
                    <span className="text-xs">Review Sites</span>
                  </div>
                  
                  <div className="flex items-center gap-1 bg-white/15 rounded px-2 py-1.5 text-white/90">
                    <Search className="h-3.5 w-3.5" />
                    <span className="text-xs">Keywords</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Logo */}
            <div className="relative w-48 h-48 bg-white/90 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.6)] flex items-center justify-center">
              <img 
                src="/lovable-uploads/a97abb90-7ede-47ed-a0c8-fd19c5ecc583.png" 
                alt="SalesChef Logo" 
                className="w-4/5 h-4/5 object-contain" 
              />
            </div>
            
            {/* SalesChef PIM/DAM */}
            <Card className="w-full max-w-sm mt-6 bg-white/15 backdrop-blur-lg border-white/30 shadow-lg">
              <CardHeader className="pb-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Database className="h-4 w-4 text-white" />
                  <CardTitle className="text-sm font-semibold text-white">SalesChef PIM/DAM</CardTitle>
                  <Database className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-white/90 font-mono text-center">
                  Product Source of Truth and Assets
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Content Output */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-white/90 font-semibold text-sm">CONTENT TRANSFORMATION</span>
            </div>
            
            <div className="grid grid-cols-3 gap-3 w-full">
              {/* Output channels */}
              <Card className="bg-white/90 hover:shadow-lg hover:scale-105 transition-all">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <FileText className="h-5 w-5 text-purple-600 mb-1.5" />
                  <p className="text-xs font-bold text-gray-800 text-center">Sales Sheet</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/90 hover:shadow-lg hover:scale-105 transition-all">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-pink-600 mb-1.5" />
                  <p className="text-xs font-bold text-gray-800 text-center">PDP</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/90 hover:shadow-lg hover:scale-105 transition-all">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <BarChart2 className="h-5 w-5 text-blue-600 mb-1.5" />
                  <p className="text-xs font-bold text-gray-800 text-center">Analytics</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/90 hover:shadow-lg hover:scale-105 transition-all">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <FileText className="h-5 w-5 text-red-600 mb-1.5" />
                  <p className="text-xs font-bold text-gray-800 text-center">PDF</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/90 hover:shadow-lg hover:scale-105 transition-all">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <Image className="h-5 w-5 text-indigo-600 mb-1.5" />
                  <p className="text-xs font-bold text-gray-800 text-center">Social</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/90 hover:shadow-lg hover:scale-105 transition-all">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-emerald-600 mb-1.5" />
                  <p className="text-xs font-bold text-gray-800 text-center">Scripts</p>
                </CardContent>
              </Card>
              
              {/* Additional tiles */}
              <Card className="bg-white/90 hover:shadow-lg hover:scale-105 transition-all">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-amber-600 mb-1.5" />
                  <p className="text-xs font-bold text-gray-800 text-center">SEO Content</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/90 hover:shadow-lg hover:scale-105 transition-all">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <LineChart className="h-5 w-5 text-cyan-600 mb-1.5" />
                  <p className="text-xs font-bold text-gray-800 text-center">Reports</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/90 hover:shadow-lg hover:scale-105 transition-all">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <UserRound className="h-5 w-5 text-purple-600 mb-1.5" />
                  <p className="text-xs font-bold text-gray-800 text-center">Personas</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/90 hover:shadow-lg hover:scale-105 transition-all">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <Code className="h-5 w-5 text-blue-600 mb-1.5" />
                  <p className="text-xs font-bold text-gray-800 text-center">API Data</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/90 hover:shadow-lg hover:scale-105 transition-all">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <Palette className="h-5 w-5 text-rose-600 mb-1.5" />
                  <p className="text-xs font-bold text-gray-800 text-center">Design</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/90 hover:shadow-lg hover:scale-105 transition-all">
                <CardContent className="p-3 flex flex-col items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-green-600 mb-1.5" />
                  <p className="text-xs font-bold text-gray-800 text-center">Compliance</p>
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
      
      {/* Hero Text and CTA Section */}
      <div className="max-w-7xl mx-auto w-full mt-16">
        <div className="text-left">
          <div className="flex items-center gap-2">
            <span className="chef-chip bg-purple-100 text-purple-800">
              <Sparkles className="h-3 w-3" />
              AI-Powered
            </span>
            <span className="chef-chip bg-pink-100 text-pink-800">
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
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 mr-4">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <p className="text-sm text-gray-600 italic">
              "Like a professional chef, we take your raw product ingredients and create perfect dishes for every stakeholder."
            </p>
          </div>

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

          <div className="pt-8 mt-4">
            <p className="text-sm text-gray-500 mb-4 font-medium">Trusted by leading retailers</p>
            <div className="grid grid-cols-3 gap-6 opacity-80">
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
