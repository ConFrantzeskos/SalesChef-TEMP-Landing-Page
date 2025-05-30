
import React from 'react';
import { Button } from "@/components/ui/button";
import { Upload, Eye, Calendar, ChefHat, ShieldCheck, Star, Zap, ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-br from-purple-700 via-purple-800 to-pink-700 shadow-xl overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="circuit-pattern absolute inset-0"></div>
          </div>
          
          <div className="relative z-10 px-6 py-16 md:py-20 lg:py-24 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ChefHat className="h-12 w-12 text-white/90 mx-auto mb-6 animate-float" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              You already have the specs. <br />
              Let's make them sell.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-white/80 mb-10 max-w-3xl mx-auto"
            >
              Upload a CSV. See what SalesChef can do with five of your real products.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-4"
            >
              <Button 
                size="lg" 
                className="bg-white text-purple-800 hover:bg-gray-100 shadow-lg text-base font-medium px-6 group"
              >
                <Upload className="mr-2 h-5 w-5 group-hover:animate-pulse-soft" />
                Upload SKUs → Watch it Cook
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 text-base font-medium px-6 group"
              >
                <Eye className="mr-2 h-4 w-4" />
                See a Sample Transformation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-bounce-x" />
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-white/80 mb-12"
            >
              Drop a CSV. See what your content could become.
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  icon: Zap,
                  title: "Implementation in 30 Days",
                  description: "Enterprise-ready deployment with dedicated success team",
                  delay: 0.7
                },
                {
                  icon: ShieldCheck,
                  title: "Enterprise Security",
                  description: "SOC 2 Type II, GDPR, CCPA compliant platform",
                  delay: 0.8
                },
                {
                  icon: Star,
                  title: "24/7 Priority Support",
                  description: "Dedicated customer success manager and team",
                  delay: 0.9
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left transform transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className="flex items-start mb-3">
                    <div className="p-2 rounded-md bg-white/20">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
