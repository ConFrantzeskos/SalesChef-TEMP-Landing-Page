
import React from 'react';
import { ChefHat, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  index: number;
}

const Testimonial = ({ quote, author, role, company, image, index }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-2">
        <CardContent className="p-8">
          <Quote className="h-8 w-8 text-purple-200 mb-6" />
          
          <p className="text-lg font-medium leading-relaxed text-gray-700 mb-6">{quote}</p>
          
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full mr-4 overflow-hidden shadow-md border-2 border-purple-100">
              <img 
                src={image}
                alt={author} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{author}</h4>
              <p className="text-sm text-gray-600">{role}, {company}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "SalesChef transformed our enterprise PIM strategy. We're now able to syndicate product content to 47 global marketplaces in 17 languages without increasing headcount. The ROI has been exceptional.",
      author: "Alexandra Chen",
      role: "SVP of Global eCommerce",
      company: "RetailCorp Enterprises",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "The platform's AI engine has allowed us to reduce time-to-market by 78% while increasing conversion rates across all digital channels. SalesChef is now a critical part of our enterprise tech stack.",
      author: "Marcus Johnson",
      role: "Chief Digital Officer",
      company: "Global Manufacturing Inc.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "After evaluating 7 enterprise PXM solutions, SalesChef was the clear winner. Their unified approach to product experience management has transformed how we create and distribute content at scale.",
      author: "Sophia Williams",
      role: "VP of Digital Marketing",
      company: "Luxury Brands Group",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className="chef-section bg-gradient-to-br from-purple-50 via-white to-pink-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-100/50 rounded-full blur-3xl"></div>
        <div className="circuit-pattern absolute inset-0 opacity-[0.02]"></div>
      </div>
      
      <div className="chef-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="chef-header"
        >
          <div className="flex items-center justify-center mb-6">
            <ChefHat className="h-8 w-8 text-purple-700 mr-2" />
            <h2 className="text-gradient-primary text-3xl md:text-4xl font-bold">
              Enterprise Success Stories
            </h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            See how global enterprise leaders are leveraging SalesChef to transform their product experience management and drive measurable business results.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Card className="bg-gradient-to-r from-purple-900 to-purple-800 text-white rounded-xl max-w-md mx-auto overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ChefHat className="h-5 w-5 text-purple-300" />
                  <h3 className="font-semibold">Enterprise Results</h3>
                </div>
                <span className="bg-purple-700 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse-soft">Verified</span>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="transform transition-all duration-300 hover:scale-105">
                  <p className="text-3xl font-bold text-white mb-1">327%</p>
                  <p className="text-purple-300 text-sm">Average ROI</p>
                </div>
                <div className="transform transition-all duration-300 hover:scale-105">
                  <p className="text-3xl font-bold text-white mb-1">85%</p>
                  <p className="text-purple-300 text-sm">Time Savings</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
