
import React from 'react';
import { 
  ChefHat,
  Database, 
  Zap, 
  Target, 
  Users, 
  Lightbulb,
  Palette, 
  Layers,
  LineChart,
  Shield,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const AgentSection = () => {
  const agents = [
    {
      name: "Drop",
      tagline: "Enterprise Data Integration",
      description: "Connect siloed data across your entire organization",
      icon: Database,
      color: "from-blue-500 to-blue-700",
      features: ["Legacy ERP systems", "PLM platforms", "DAM systems", "Master data"],
      cta: "Unlock your data",
      position: "left"
    },
    {
      name: "Discover",
      tagline: "Market Intelligence",
      description: "Harness AI to identify opportunities and trends",
      icon: Target,
      color: "from-purple-500 to-purple-700",
      features: ["Competitive positioning", "Customer sentiment", "Search trends", "Market gaps"],
      cta: "Reveal insights",
      position: "right"
    },
    {
      name: "Define",
      tagline: "Cross-Functional Alignment",
      description: "Create personalized views for every stakeholder",
      icon: Users,
      color: "from-indigo-500 to-indigo-700",
      features: ["C-suite dashboards", "Regional views", "Department KPIs", "Channel metrics"],
      cta: "Align teams",
      position: "left"
    },
    {
      name: "Design",
      tagline: "Global Brand Governance",
      description: "Maintain perfect brand consistency at enterprise scale",
      icon: Palette,
      color: "from-pink-500 to-pink-700",
      features: ["Brand guidelines", "Regional variations", "Channel templates", "Approval workflows"],
      cta: "Elevate your brand",
      position: "right"
    },
    {
      name: "Develop",
      tagline: "Automated Content Operations",
      description: "Generate channel-optimized assets and content at scale",
      icon: Layers,
      color: "from-amber-500 to-amber-700",
      features: ["Product content", "Marketing assets", "Technical specs", "Localized materials"],
      cta: "Scale content",
      position: "left"
    },
    {
      name: "Dissect",
      tagline: "Enterprise Performance Analytics",
      description: "Connect content directly to revenue impact",
      icon: LineChart,
      color: "from-emerald-500 to-emerald-700",
      features: ["Executive reporting", "Portfolio optimization", "Predictive analytics", "ROI tracking"],
      cta: "Measure impact",
      position: "right"
    }
  ];

  return (
    <section className="chef-section bg-gray-50 relative overflow-hidden" id="features">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl"></div>
        <div className="circuit-pattern absolute inset-0 opacity-[0.02]"></div>
      </div>
      
      <div className="chef-container relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <ChefHat className="h-8 w-8 text-purple-600 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary">
              Enterprise AI Agents
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Six specialized AI agents working in harmony to transform complex product data into revenue-driving content across your entire enterprise.
          </p>
        </motion.div>
        
        {/* Agents showcase - New design with alternating left/right pattern */}
        <div className="space-y-16 md:space-y-28">
          {agents.map((agent, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${agent.position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
            >
              {/* Agent visualization */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  {/* Background shape */}
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0.5 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${agent.color} p-8 flex items-center justify-center shadow-xl`}
                  >
                    {/* Concentric animated circles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 rounded-full border-2 border-white/20 animate-pulse-soft"></div>
                      <div className="absolute w-1/2 h-1/2 rounded-full border border-white/10 animate-spin-slow"></div>
                    </div>
                    
                    {/* Icon */}
                    <div className="relative z-10 transform transition-transform hover:scale-110">
                      <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
                        <agent.icon className="w-14 h-14 text-white" />
                      </div>
                    </div>
                    
                    {/* Agent name overlay */}
                    <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center">
                        <Zap className="w-5 h-5 text-white/80 mr-2" />
                        <span className="font-bold text-white text-xl">{agent.name} Agent</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Agent description */}
              <div className="w-full md:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, x: agent.position === 'right' ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{agent.tagline}</h3>
                    <p className="text-xl text-gray-600">{agent.description}</p>
                  </div>
                  
                  {/* Feature list */}
                  <ul className="grid grid-cols-2 gap-3">
                    {agent.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className={`bg-gradient-to-r ${agent.color} w-5 h-5 rounded-full flex items-center justify-center mt-1`}>
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="ml-2 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className={`border-2 border-gray-300 hover:border-${agent.color.split(' ')[0].replace('from-', '')} rounded-full group transition-all duration-300`}
                  >
                    <span>{agent.cta}</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-bounce-x" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enterprise Ready Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 max-w-md mx-auto"
        >
          <div className="flex items-center justify-center py-4 px-6 bg-gradient-to-r from-purple-900 to-purple-800 rounded-full text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Shield className="h-5 w-5 text-purple-300 mr-2" />
            <span className="text-sm font-medium">Enterprise-Grade. SOC 2 Type II Certified.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentSection;
