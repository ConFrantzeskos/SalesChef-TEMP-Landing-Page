
import React from 'react';
import { cn } from '@/lib/utils';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  role: string;
  rating?: number;
  className?: string;
}

const Testimonial = ({ quote, author, company, role, rating = 5, className }: TestimonialProps) => {
  return (
    <div className={cn(
      "p-6 md:p-8 rounded-2xl bg-white/80 backdrop-blur-sm relative overflow-hidden",
      "border border-purple-100/60 shadow-lg hover:shadow-xl transition-all duration-300",
      className
    )}>
      {/* Decorative elements */}
      <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full opacity-10 bg-gradient-to-tl from-purple-500 to-blue-500" />
      
      {/* Quote mark */}
      <div className="text-6xl leading-none text-purple-200 font-serif absolute top-4 left-4 opacity-30">"</div>
      
      {/* Stars */}
      {rating > 0 && (
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      )}
      
      {/* Quote text */}
      <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 relative">{quote}</p>
      
      {/* Author info */}
      <div className="flex items-center">
        <div className="mr-4 h-12 w-12 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-xl font-semibold text-purple-700">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "SalesChef transformed our product listings from basic spec sheets to compelling stories that actually convert. Our online sales increased by 34% within the first three months.",
      author: "Sarah Johnson",
      company: "HomeGoods Direct",
      role: "VP of E-commerce",
      rating: 5
    },
    {
      quote: "What used to take our content team weeks now happens automatically. We've expanded to three new marketplaces without adding a single content writer.",
      author: "Michael Chen",
      company: "TechWorld",
      role: "Director of Digital",
      rating: 5
    },
    {
      quote: "The AI-generated content is actually better than what our copywriters were producing. It's more consistent, accurate, and optimized for search. Our organic traffic is up 42%.",
      author: "Rebecca Martinez",
      company: "OutdoorElite",
      role: "Chief Marketing Officer",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-24 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Trusted by leading retailers and brands to transform their product content strategy.
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="p-3 rounded-full bg-white/80 shadow-md hover:shadow-lg border border-purple-100/60 text-purple-700 hover:bg-purple-50 transition-all duration-300">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="p-3 rounded-full bg-white/80 shadow-md hover:shadow-lg border border-purple-100/60 text-purple-700 hover:bg-purple-50 transition-all duration-300">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
