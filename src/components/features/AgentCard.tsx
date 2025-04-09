
import React from 'react';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AgentProps } from '@/types/agent';

const AgentCard = ({ agent, position }: { agent: AgentProps, position: 'left' | 'right' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className={`flex flex-col ${position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
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
          initial={{ opacity: 0, x: position === 'right' ? -20 : 20 }}
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
            <agent.ctaIcon className="ml-2 h-4 w-4 group-hover:animate-bounce-x" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AgentCard;
