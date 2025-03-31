
import React from 'react';
import { cn } from '@/lib/utils';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  role: string;
  rating?: number;
}

const Testimonial = ({ quote, author, company, role, rating = 5 }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 h-full flex flex-col">      
      {/* Stars */}
      {rating > 0 && (
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      )}
      
      {/* Quote text */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow">{quote}</p>
      
      {/* Author info */}
      <div className="flex items-center">
        <div className="mr-4 h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-semibold text-indigo-800">
          {author.charAt(0)}
        </div>
        <div className="text-left">
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
    <section className="evorra-section evorra-gradient-bg text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg opacity-80 leading-relaxed">
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
          <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
