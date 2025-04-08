
import React from 'react';
import { motion } from 'framer-motion';

const EnterpriseLogos = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Trusted by global enterprise leaders</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {/* Using generic enterprise-looking logos with appropriate styling */}
          {[...Array(6)].map((_, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-10 w-32 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
            >
              <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <rect width="120" height="40" rx="4" fill="#4A5568" fillOpacity="0.1" />
                {renderLogoShape(index)}
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to render different logo shapes
const renderLogoShape = (index: number) => {
  switch (index % 6) {
    case 0:
      return (
        <path d="M25 20C25 16.6863 27.6863 14 31 14H89C92.3137 14 95 16.6863 95 20V20C95 23.3137 92.3137 26 89 26H31C27.6863 26 25 23.3137 25 20V20Z" fill="#4A5568" fillOpacity="0.7" />
      );
    case 1:
      return (
        <path d="M30 15L45 25L60 15L75 25L90 15" stroke="#4A5568" strokeWidth="3" strokeLinecap="round" />
      );
    case 2:
      return (
        <path d="M60 14L74 20V32H46V20L60 14Z" fill="#4A5568" fillOpacity="0.7" />
      );
    case 3:
      return (
        <>
          <circle cx="60" cy="20" r="10" stroke="#4A5568" strokeWidth="3" />
          <path d="M52 20H68" stroke="#4A5568" strokeWidth="3" strokeLinecap="round" />
          <path d="M60 12V28" stroke="#4A5568" strokeWidth="3" strokeLinecap="round" />
        </>
      );
    case 4:
      return (
        <>
          <path d="M40 14H80V26H40V14Z" stroke="#4A5568" strokeWidth="3" />
          <path d="M50 14V26" stroke="#4A5568" strokeWidth="3" />
          <path d="M70 14V26" stroke="#4A5568" strokeWidth="3" />
        </>
      );
    default:
      return (
        <>
          <circle cx="50" cy="20" r="8" fill="#4A5568" fillOpacity="0.7" />
          <circle cx="70" cy="20" r="8" fill="#4A5568" fillOpacity="0.4" />
        </>
      );
  }
};

export default EnterpriseLogos;
