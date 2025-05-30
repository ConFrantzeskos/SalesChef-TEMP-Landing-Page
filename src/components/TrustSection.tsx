
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, CheckCircle, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Settings,
      title: "Works with your existing tech stack",
      description: "No rip-and-replace. SalesChef integrates with your PIMs, CMSs, ERPs, and more."
    },
    {
      icon: Shield,
      title: "Secure, compliant, and scalable",
      description: "Enterprise-grade security with SOC 2 Type II certification and GDPR compliance."
    },
    {
      icon: Zap,
      title: "Transform content in minutes - not months",
      description: "What used to take weeks now happens in minutes. See results immediately."
    }
  ];

  return (
    <section className="chef-section bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-green-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="chef-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for <span className="text-gradient-primary">Enterprise Retail</span>. <br />
            Loved by <span className="text-pink-600">Lean Teams</span>.
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <Card className="bg-white hover:shadow-lg transition-all duration-300 h-full border-l-4 border-l-purple-600">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <point.icon className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
                  </div>
                  <p className="text-gray-600">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Placeholder for future social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-xl p-8 border-2 border-dashed border-gray-200">
            <p className="text-gray-500 italic">
              Client logos, case study links, and testimonials coming soon...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
