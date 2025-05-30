
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Copy, DollarSign } from 'lucide-react';

const ProblemFramingSection = () => {
  return (
    <section className="chef-section bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-red-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-orange-100/20 rounded-full blur-3xl"></div>
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
            Why is retail content so <span className="text-red-600">broken?</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Problem description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Retailers juggle thousands of SKUs and dozens of systems—PIMs, CMSs, ERPs, spreadsheets, PDFs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Content teams can't keep up. So they copy and paste.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>The result?</strong>
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Copy className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  Generic PDPs
                </li>
                <li className="flex items-center">
                  <Copy className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  Identical to competitors
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  No benefits, no brand, no conversion
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-6">
                Meanwhile, performance teams spend millions trying to drive traffic to content that doesn't convert.
              </p>
            </div>
          </motion.div>
          
          {/* Right side - Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Broken PDP */}
            <div className="bg-gray-50 border-2 border-dashed border-red-300 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Broken PDP</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="bg-white p-2 rounded border">Generic title</div>
                <div className="bg-white p-2 rounded border">Basic specs only</div>
                <div className="bg-white p-2 rounded border">No compelling copy</div>
                <div className="bg-white p-2 rounded border">Stock photo</div>
              </div>
            </div>
            
            {/* Budget burning */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <DollarSign className="h-6 w-6 text-red-600 mr-2" />
                  <h3 className="text-lg font-semibold text-red-900">Google Ads Budget</h3>
                </div>
                <TrendingDown className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">$50,000/month</div>
                <div className="text-sm text-red-700">Driving traffic to content that doesn't convert</div>
              </div>
            </div>
            
            {/* Missing piece */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Content is the missing piece
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemFramingSection;
