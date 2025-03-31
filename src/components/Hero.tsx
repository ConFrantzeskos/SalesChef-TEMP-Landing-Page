
import React from 'react';
import DataEnrichmentCard from './hero/DataEnrichmentCard';
import HeroTitle from './hero/HeroTitle';
import FeaturesGrid from './hero/FeaturesGrid';
import HeroActions from './hero/HeroActions';

const Hero = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center relative z-10">
        {/* Top Section with Data and Content Enrichment Box */}
        <div className="mb-8 flex justify-center">
          <DataEnrichmentCard />
        </div>

        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto">
          <HeroTitle />

          {/* Features Grid */}
          <FeaturesGrid />

          {/* CTA Buttons */}
          <HeroActions />
        </div>
      </div>
    </section>
  );
};

export default Hero;
