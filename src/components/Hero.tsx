
import React from 'react';
import { ChevronRight, ArrowRight, Globe, Zap, Database, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Hero = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center relative z-10">
        {/* Top Section with Data and Content Enrichment Box */}
        <div className="mb-8 flex justify-center">
          <Card className="max-w-xl w-full bg-white/80 backdrop-blur-md border-gray-200 shadow-lg">
            <CardHeader className="pb-0 pt-6 flex flex-row items-center justify-center gap-3">
              <Globe className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-800">Data and Content Enrichment</h3>
            </CardHeader>
            <CardContent className="pt-4 pb-6 text-gray-600">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, label: 'Web Scraping' },
                  { icon: Database, label: 'Social Media' },
                  { icon: Settings, label: 'Google Keywords' },
                  { icon: Globe, label: 'Competitor Info' }
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center justify-center gap-2">
                    <Icon className="h-4 w-4 text-purple-500" />
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SalesChef <span className="text-gradient-primary">PIM/DAM</span>: Product Source of Truth and Assets
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform unstructured product data into compelling, consistent content across all channels
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card className="bg-white/80 backdrop-blur-md border-gray-200 shadow-lg">
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-800">UNSTRUCTURED DATA</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Centralize raw product information from diverse sources</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-md border-gray-200 shadow-lg">
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-800">PIM/DAM</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Manage, enrich, and standardize product data and digital assets</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-md border-gray-200 shadow-lg">
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-800">CONTENT TRANSFORMATION</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Generate optimized content for multiple channels and platforms</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center space-x-4">
            <Button variant="default" size="lg" className="px-8">
              Start Free Trial
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Book Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
