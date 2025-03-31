
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

const Hero = () => {
  return (
    <div className="px-4 py-16 md:py-24 sm:px-6 lg:px-8 min-h-[85vh] flex flex-col justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50/30">
      <div className="w-full chef-gradient-bg rounded-2xl shadow-2xl p-6 overflow-hidden relative">
        <div className="absolute inset-0 circuit-pattern opacity-20"></div>
        
        <div className="flex items-center justify-between h-[300px] md:h-[350px] relative">
          <div className="w-1/3 flex flex-col items-center h-full relative px-4">
            <div className="text-white/80 font-bold mb-3 text-xs">UNSTRUCTURED DATA</div>
            
            <div className="relative h-48 w-full">
              <div className="absolute top-[5%] left-[10%] w-3 h-3 rounded-full bg-white/70 animate-pulse"></div>
              <div className="absolute top-[25%] left-[5%] w-2 h-2 rounded-full bg-white/60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-[70%] left-[15%] w-4 h-4 rounded-full bg-white/80 animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-[40%] left-[25%] w-3 h-3 rounded-full bg-white/70 animate-pulse" style={{animationDelay: '1.3s'}}></div>
              <div className="absolute top-[85%] left-[30%] w-2 h-2 rounded-full bg-white/60 animate-pulse" style={{animationDelay: '0.7s'}}></div>
              <div className="absolute top-[15%] left-[40%] w-3 h-3 rounded-full bg-white/75 animate-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-[92%] left-[8%] w-4 h-4 rounded-full bg-white/65 animate-pulse" style={{animationDelay: '0.9s'}}></div>
              <div className="absolute top-[55%] left-[7%] w-2 h-2 rounded-full bg-white/60 animate-pulse" style={{animationDelay: '1.2s'}}></div>
              <div className="absolute top-[77%] left-[45%] w-3 h-3 rounded-full bg-white/70 animate-pulse" style={{animationDelay: '0.6s'}}></div>
              
              <div className="absolute top-[10%] left-[35%] w-12 h-[2px] bg-white/60 rotate-45 opacity-70 animate-pulse" style={{animationDelay: '1.2s'}}></div>
              <div className="absolute top-[30%] left-[15%] w-14 h-[2px] bg-white/70 -rotate-30 opacity-80 animate-pulse" style={{animationDelay: '0.8s'}}></div>
              <div className="absolute top-[60%] left-[40%] w-16 h-[2px] bg-white/50 rotate-15 opacity-60 animate-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-[75%] left-[10%] w-10 h-[2px] bg-white/65 -rotate-15 opacity-75 animate-pulse" style={{animationDelay: '1.1s'}}></div>
              <div className="absolute top-[50%] left-[60%] w-12 h-[2px] bg-white/55 rotate-30 opacity-65 animate-pulse" style={{animationDelay: '0.9s'}}></div>
              <div className="absolute top-[22%] left-[25%] w-14 h-[2px] bg-white/60 rotate-60 opacity-70 animate-pulse" style={{animationDelay: '1.4s'}}></div>
              <div className="absolute top-[80%] left-[35%] w-16 h-[2px] bg-white/55 -rotate-45 opacity-60 animate-pulse" style={{animationDelay: '0.7s'}}></div>
              <div className="absolute top-[40%] left-[10%] w-12 h-[2px] bg-white/65 rotate-20 opacity-70 animate-pulse" style={{animationDelay: '1.6s'}}></div>
              
              <div className="absolute top-[8%] left-[40%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '0.3s', animationDuration: '3s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>supplier forms</div>
              <div className="absolute top-[32%] left-[45%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '0.7s', animationDuration: '4s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>compliance specs</div>
              <div className="absolute top-[55%] left-[20%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '1.1s', animationDuration: '3.5s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>factory specs</div>
              <div className="absolute top-[78%] left-[50%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '0.5s', animationDuration: '4.2s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>product specs</div>
              <div className="absolute top-[95%] left-[20%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '1.8s', animationDuration: '3.8s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>manufacturing docs</div>
              <div className="absolute top-[43%] left-[55%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '1.4s', animationDuration: '3.3s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>raw material data</div>
              <div className="absolute top-[67%] left-[5%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '0.8s', animationDuration: '4.5s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>certification docs</div>
              
              <div className="absolute top-[18%] left-[15%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '1.3s', animationDuration: '3.7s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>
                <Image className="h-3 w-3 inline mr-1" />
                images
              </div>
              <div className="absolute top-[45%] left-[35%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '0.9s', animationDuration: '4.5s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>
                <UserRound className="h-3 w-3 inline mr-1" />
                user content
              </div>
              <div className="absolute top-[65%] left-[30%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '1.7s', animationDuration: '3.9s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>
                <Star className="h-3 w-3 inline mr-1" />
                reviews
              </div>
              <div className="absolute top-[25%] left-[60%] text-[9px] text-white/90 bg-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '1.2s', animationDuration: '4.3s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>
                <FileSpreadsheet className="h-3 w-3 inline mr-1" />
                spreadsheets
              </div>
              <div className="absolute top-[85%] left-[60%] text-[9px] text-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '0.4s', animationDuration: '3.6s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>
                <Table className="h-3 w-3 inline mr-1" />
                tables
              </div>
              <div className="absolute top-[10%] left-[68%] text-[9px] text-white/10 px-2 py-1 rounded animate-fade-in" style={{animationDelay: '1.5s', animationDuration: '4.0s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>
                <Database className="h-3 w-3 inline mr-1" />
                databases
              </div>
              
              <div className="absolute top-[22%] left-[65%] text-[6px] text-white/60 font-mono animate-fade-in" style={{animationDelay: '0.6s', animationDuration: '3.7s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>{"{data:[]}"}</div>
              <div className="absolute top-[90%] left-[25%] text-[7px] text-white/60 font-mono animate-fade-in" style={{animationDelay: '1.2s', animationDuration: '4.1s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>{"<attr>"}</div>
              <div className="absolute top-[38%] left-[8%] text-[7px] text-white/60 font-mono animate-fade-in" style={{animationDelay: '1.4s', animationDuration: '3.3s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>{"[specs]"}</div>
              <div className="absolute top-[82%] left-[40%] text-[7px] text-white/60 font-mono animate-fade-in" style={{animationDelay: '0.8s', animationDuration: '3.8s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>{"function() { }"}</div>
              <div className="absolute top-[53%] left-[65%] text-[7px] text-white/60 font-mono animate-fade-in" style={{animationDelay: '1.6s', animationDuration: '3.5s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>{"{id:15483}"}</div>
              <div className="absolute top-[10%] left-[30%] text-[7px] text-white/60 font-mono animate-fade-in" style={{animationDelay: '0.3s', animationDuration: '4.2s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>{"SELECT * FROM"}</div>
              <div className="absolute top-[72%] left-[18%] text-[7px] text-white/60 font-mono animate-fade-in" style={{animationDelay: '1.1s', animationDuration: '3.9s', animationIterationCount: 'infinite', animationDirection: 'alternate'}}>{"#include"}</div>
            </div>

            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
          
          <div className="absolute z-20 inset-x-0 mx-auto flex flex-col items-center justify-center">
            {/* Data and Content Enrichment Box */}
            <div className="relative w-64 bg-white/20 backdrop-blur-sm rounded-lg border-2 border-white/30 p-3 mb-4 shadow-lg">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Radar className="h-4 w-4 text-white" />
                <span className="text-sm text-white font-semibold">Data and Content Enrichment</span>
                <Radar className="h-4 w-4 text-white" />
              </div>
              
              <div className="grid grid-cols-2 gap-1.5 w-full">
                <div className="flex items-center gap-1 bg-white/15 rounded px-1.5 py-0.5 text-white/90">
                  <Globe className="h-3 w-3" />
                  <span className="text-[8px]">Web Scraping</span>
                </div>
                
                <div className="flex items-center gap-1 bg-white/15 rounded px-1.5 py-0.5 text-white/90">
                  <MessagesSquare className="h-3 w-3" />
                  <span className="text-[8px]">Social Media</span>
                </div>
                
                <div className="flex items-center gap-1 bg-white/15 rounded px-1.5 py-0.5 text-white/90">
                  <Star className="h-3 w-3" />
                  <span className="text-[8px]">Review Sites</span>
                </div>
                
                <div className="flex items-center gap-1 bg-white/15 rounded px-1.5 py-0.5 text-white/90">
                  <Search className="h-3 w-3" />
                  <span className="text-[8px]">Google Keywords</span>
                </div>
                
                <div className="flex items-center gap-1 bg-white/15 rounded px-1.5 py-0.5 text-white/90">
                  <Target className="h-3 w-3" />
                  <span className="text-[8px]">Competitor Info</span>
                </div>
                
                <div className="flex items-center gap-1 bg-white/15 rounded px-1.5 py-0.5 text-white/90">
                  <BarChart className="h-3 w-3" />
                  <span className="text-[8px]">Market Trends</span>
                </div>
              </div>
              
              {/* Animated data flow arrows */}
              <div className="absolute -bottom-3 left-1/4 h-3 w-10 overflow-hidden rotate-180">
                <div className="absolute top-0 left-0 w-full h-full animate-pulse" style={{animationDuration: '1.5s'}}>
                  <div className="h-[1px] w-2 bg-white/80 absolute left-0"></div>
                  <div className="h-[1px] w-2 bg-white/80 absolute left-3" style={{animationDelay: '0.3s'}}></div>
                  <div className="h-[1px] w-2 bg-white/80 absolute left-6" style={{animationDelay: '0.6s'}}></div>
                  <div className="h-[1px] w-2 bg-white/80 absolute left-9" style={{animationDelay: '0.9s'}}></div>
                </div>
              </div>
              
              <div className="absolute -bottom-3 right-1/4 h-3 w-10 overflow-hidden rotate-180">
                <div className="absolute top-0 left-0 w-full h-full animate-pulse" style={{animationDuration: '1.5s'}}>
                  <div className="h-[1px] w-2 bg-white/80 absolute left-0"></div>
                  <div className="h-[1px] w-2 bg-white/80 absolute left-3" style={{animationDelay: '0.3s'}}></div>
                  <div className="h-[1px] w-2 bg-white/80 absolute left-6" style={{animationDelay: '0.6s'}}></div>
                  <div className="h-[1px] w-2 bg-white/80 absolute left-9" style={{animationDelay: '0.9s'}}></div>
                </div>
              </div>
            </div>

            <div className="relative w-44 h-44 bg-white/90 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)] flex items-center justify-center">
              <img 
                src="/lovable-uploads/a97abb90-7ede-47ed-a0c8-fd19c5ecc583.png" 
                alt="SalesChef Logo" 
                className="w-4/5 h-4/5 object-contain" 
              />
            </div>
            
            <div className="relative mt-3 px-4 py-3 bg-white/20 rounded-lg border-2 border-white/30 backdrop-blur-sm shadow-lg">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Database className="h-5 w-5 text-white" />
                <span className="text-sm text-white font-semibold">SalesChef PIM/DAM</span>
                <Database className="h-5 w-5 text-white" />
              </div>
              
              <div className="text-xs text-white/90 font-mono text-center">
                Product Source of Truth and Assets
              </div>
              
              <div className="absolute left-0 right-0 top-12 h-[1px] bg-white/20"></div>
              <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-white/20"></div>
              <div className="absolute right-1/3 top-0 bottom-0 w-[1px] bg-white/20"></div>
              
              <div className="absolute -top-3 left-1/4 h-3 w-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full animate-pulse" style={{animationDuration: '1.5s'}}>
                  <div className="h-[1px] w-2 bg-white/80 absolute left-0"></div>
                  <div className="h-[1px] w-2 bg-white/80 absolute left-3" style={{animationDelay: '0.3s'}}></div>
                  <div className="h-[1px] w-2 bg-white/80 absolute left-6" style={{animationDelay: '0.6s'}}></div>
                  <div className="h-[1px] w-2 bg-white/80 absolute left-9" style={{animationDelay: '0.9s'}}></div>
                </div>
              </div>
              
              <div className="absolute -top-3 right-1/4 h-3 w-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full animate-pulse" style={{animationDuration: '1.5s'}}>
                  <div className="h-[1px] w-2 bg-white/80 absolute left-0"></div>
                  <div className="h-[1px] w-2 bg-white/80 absolute left-3" style={{animationDelay: '0.3s'}}></div>
                  <div className="h-[1px] w-2 bg-white/80 absolute left-6" style={{animationDelay: '0.6s'}}></div>
                  <div className="h-[1px] w-2 bg-white/80 absolute left-9" style={{animationDelay: '0.9s'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-1/3 flex flex-col items-center h-full relative">
            <div className="text-white/80 font-bold mb-1 text-xs">CONTENT TRANSFORMATION</div>
            <div className="text-white/80 font-bold mb-3 text-xs">AND OUTPUT</div>
            
            <div className="grid grid-cols-3 gap-1.5 mb-1.5 w-full">
              <div className="bg-white/90 rounded-lg shadow-lg p-1.5 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <FileText className="h-4 w-4 text-purple-600 mb-0.5" />
                <p className="text-[7px] font-bold text-gray-800 text-center">Sales Sheet</p>
              </div>
              
              <div className="bg-white/90 rounded-lg shadow-lg p-1.5 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <ShoppingBag className="h-4 w-4 text-pink-600 mb-0.5" />
                <p className="text-[7px] font-bold text-gray-800 text-center">PDP</p>
              </div>
              
              <div className="bg-white/90 rounded-lg shadow-lg p-1.5 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <BarChart2 className="h-4 w-4 text-blue-600 mb-0.5" />
                <p className="text-[7px] font-bold text-gray-800 text-center">Analytics</p>
              </div>
              
              <div className="bg-white/90 rounded-lg shadow-lg p-1.5 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <FileText className="h-4 w-4 text-red-600 mb-0.5" />
                <p className="text-[7px] font-bold text-gray-800 text-center">PDF</p>
              </div>
              
              <div className="bg-white/90 rounded-lg shadow-lg p-1.5 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <Image className="h-4 w-4 text-indigo-600 mb-0.5" />
                <p className="text-[7px] font-bold text-gray-800 text-center">Social Media</p>
              </div>
              
              <div className="bg-white/90 rounded-lg shadow-lg p-1.5 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <MessageCircle className="h-4 w-4 text-emerald-600 mb-0.5" />
                <p className="text-[7px] font-bold text-gray-800 text-center">Scripts</p>
              </div>
              
              <div className="bg-white/90 rounded-lg shadow-lg p-1.5 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <TrendingUp className="h-4 w-4 text-amber-600 mb-0.5" />
                <p className="text-[7px] font-bold text-gray-800 text-center">Sell Points</p>
              </div>
              
              <div className="bg-white/90 rounded-lg shadow-lg p-1.5 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <Palette className="h-4 w-4 text-cyan-600 mb-0.5" />
                <p className="text-[7px] font-bold text-gray-800 text-center">Artwork</p>
              </div>
              
              <div className="bg-white/90 rounded-lg shadow-lg p-1.5 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <MessageSquare className="h-4 w-4 text-green-600 mb-0.5" />
                <p className="text-[7px] font-bold text-gray-800 text-center">FAQs</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-1.5 w-full">
              <div className="bg-white/90 rounded-lg shadow-lg p-1.5 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <ShieldCheck className="h-4 w-4 text-purple-600 mb-0.5" />
                <p className="text-[7px] font-bold text-gray-800 text-center">Compliance</p>
              </div>
              
              <div className="bg-white/90 rounded-lg shadow-lg p-1.5 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <Sparkles className="h-4 w-4 text-fuchsia-600 mb-0.5" />
                <p className="text-[7px] font-bold text-gray-800 text-center">AI Features</p>
              </div>
              
              <div className="bg-white/90 rounded-lg shadow-lg p-1.5 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <CheckCircle className="h-4 w-4 text-teal-600 mb-0.5" />
                <p className="text-[7px] font-bold text-gray-800 text-center">Corrected Specs</p>
              </div>
              
              <div className="bg-white/90 rounded-lg shadow-lg p-1.5 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <FileCheck className="h-4 w-4 text-orange-600 mb-0.5" />
                <p className="text-[7px] font-bold text-gray-800 text-center">Sell Sheets</p>
              </div>
              
              <div className="bg-white/90 rounded-lg shadow-lg p-1.5 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <LayoutGrid className="h-4 w-4 text-violet-600 mb-0.5" />
                <p className="text-[7px] font-bold text-gray-800 text-center">Marketplace</p>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
      </div>
      
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
