
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroActions = () => {
  return (
    <div className="flex justify-center space-x-4">
      <Button variant="default" size="lg" className="px-8">
        Start Free Trial
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
      <Button variant="outline" size="lg" className="px-8">
        Book Demo
      </Button>
    </div>
  );
};

export default HeroActions;
