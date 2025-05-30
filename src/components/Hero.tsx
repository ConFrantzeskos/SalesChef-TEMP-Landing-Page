import React from 'react';
import { Button } from "@/components/ui/button";
import { Upload, Eye, ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/confetti-white-bg.svg')] bg-repeat mix-blend-soft-light"></div>
        <div className="circuit-pattern absolute inset-0"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Stop guessing. <br />
            Start <span className="text-gradient-primary">selling</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/80 mb-8 md:mb-12"
          >
            SalesChef uses AI to transform your product specs into compelling content that converts.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <div className="flex flex-col items-center gap-2">
              <Button 
                size="lg" 
                className="bg-white text-purple-800 hover:bg-gray-100 shadow-lg text-lg font-semibold px-8 py-4 group"
              >
                <Upload className="mr-2 h-5 w-5 group-hover:animate-pulse-soft" />
                Upload SKUs → Watch it Cook
              </Button>
              <p className="text-white/80 text-sm">Drop a CSV. See what your content could become.</p>
            </div>
            
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white hover:bg-white/10 transition-all duration-300 text-lg font-medium group"
            >
              <Eye className="mr-2 h-5 w-5" />
              See a Sample Transformation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:animate-bounce-x" />
            </Button>
          </motion.div>
          
          {/* Background Visual Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img 
              src="/img/hero-visual.png" 
              alt="SalesChef AI Interface" 
              className="w-full rounded-3xl shadow-2xl" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
