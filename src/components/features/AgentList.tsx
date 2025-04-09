
import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { AgentProps } from '@/types/agent';
import AgentCard from './AgentCard';

interface AgentListProps {
  agents: AgentProps[];
}

const AgentList = ({ agents }: AgentListProps) => {
  return (
    <div className="space-y-16 md:space-y-28">
      {agents.map((agent, index) => (
        <AgentCard key={index} agent={agent} position={agent.position} />
      ))}
      
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
  );
};

export default AgentList;
