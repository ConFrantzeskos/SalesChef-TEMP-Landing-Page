
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ChefHat, ShieldCheck, Star, Zap } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-purple-700 via-purple-800 to-pink-700 shadow-xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="circuit-pattern absolute inset-0"></div>
          </div>
          
          <div className="relative z-10 px-6 py-16 md:py-20 lg:py-24 max-w-4xl mx-auto text-center">
            <ChefHat className="h-12 w-12 text-white/90 mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to transform your enterprise product content strategy?
            </h2>
            
            <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto">
              Join the Fortune 500 companies who are leveraging SalesChef to increase conversion, accelerate time-to-market, and drive measurable revenue growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-purple-800 hover:bg-gray-100 shadow-lg text-base font-medium px-6"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Executive Demo
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 text-base font-medium px-6"
              >
                Request Custom ROI Analysis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left">
                <div className="flex items-start mb-3">
                  <div className="p-2 rounded-md bg-white/20">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Implementation in 30 Days</h3>
                <p className="text-sm text-white/80">Enterprise-ready deployment with dedicated success team</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left">
                <div className="flex items-start mb-3">
                  <div className="p-2 rounded-md bg-white/20">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Enterprise Security</h3>
                <p className="text-sm text-white/80">SOC 2 Type II, GDPR, CCPA compliant platform</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left">
                <div className="flex items-start mb-3">
                  <div className="p-2 rounded-md bg-white/20">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">24/7 Priority Support</h3>
                <p className="text-sm text-white/80">Dedicated customer success manager and team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
