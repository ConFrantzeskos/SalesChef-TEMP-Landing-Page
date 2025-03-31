
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const FeaturesGrid = () => {
  return (
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
  );
};

export default FeaturesGrid;
