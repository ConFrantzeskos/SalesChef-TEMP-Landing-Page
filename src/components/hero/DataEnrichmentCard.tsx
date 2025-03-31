
import React from 'react';
import { Globe, Zap, Database, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const DataEnrichmentCard = () => {
  return (
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
  );
};

export default DataEnrichmentCard;
