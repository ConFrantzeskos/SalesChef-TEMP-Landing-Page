
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Clock, CheckCircle, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ResultsSection = () => {
  const results = [
    {
      icon: TrendingDown,
      title: "Slash SEM and SEO costs",
      description: "Better content = higher organic rankings = lower paid acquisition costs",
      color: "text-green-600"
    },
    {
      icon: BarChart3,
      title: "Scale content without scaling headcount",
      description: "AI agents work 24/7 to transform your entire catalog",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Lift PDP conversion and search rankings",
      description: "Compelling, benefit-driven content that converts browsers to buyers",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Accelerate time-to-shelf",
      description: "From weeks to minutes - get products live faster than ever",
      color: "text-orange-600"
    },
    {
      icon: CheckCircle,
      title: "Empower your whole retail chain",
      description: "From supplier to shop floor - everyone gets the content they need",
      color: "text-pink-600"
    }
  ];

  return (
    <section className="chef-section bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="chef-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Results <span className="text-gradient-primary">Speak for Themselves</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Before/After PDP Comparison */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Before vs After</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Before */}
              <Card className="border-red-200">
                <CardContent className="p-4">
                  <h4 className="text-sm font-medium text-red-800 mb-3">Before SalesChef</h4>
                  <div className="space-y-2 text-xs">
                    <div className="bg-red-50 p-2 rounded border-red-200 border">Generic product title</div>
                    <div className="bg-red-50 p-2 rounded border-red-200 border">Basic specs only</div>
                    <div className="bg-red-50 p-2 rounded border-red-200 border">No SEO optimization</div>
                    <div className="bg-red-50 p-2 rounded border-red-200 border">Stock imagery</div>
                    <div className="bg-red-50 p-2 rounded border-red-200 border">Corporate tone</div>
                  </div>
                </CardContent>
              </Card>
              
              {/* After */}
              <Card className="border-green-200">
                <CardContent className="p-4">
                  <h4 className="text-sm font-medium text-green-800 mb-3">After SalesChef</h4>
                  <div className="space-y-2 text-xs">
                    <div className="bg-green-50 p-2 rounded border-green-200 border">Compelling, benefit-driven title</div>
                    <div className="bg-green-50 p-2 rounded border-green-200 border">Rich feature bullets</div>
                    <div className="bg-green-50 p-2 rounded border-green-200 border">SEO-optimized tags</div>
                    <div className="bg-green-50 p-2 rounded border-green-200 border">Lifestyle imagery</div>
                    <div className="bg-green-50 p-2 rounded border-green-200 border">Persuasive copy</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          
          {/* Performance Charts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 text-center">Performance Impact</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">PDP Conversion Rate</span>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="text-xs text-green-600 mt-1">+42% increase</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">SEM Cost per Sale</span>
                  <TrendingDown className="h-4 w-4 text-blue-500" />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <div className="text-xs text-blue-600 mt-1">-38% reduction</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Time to Publish</span>
                  <Clock className="h-4 w-4 text-purple-500" />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="text-xs text-purple-600 mt-1">-85% faster</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Results List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="bg-white hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <result.icon className={`h-8 w-8 ${result.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{result.title}</h3>
                      <p className="text-gray-600 text-sm">{result.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
