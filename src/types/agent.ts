
import { LucideIcon } from 'lucide-react';

export interface AgentProps {
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  ctaIcon: LucideIcon;
  color: string;
  features: string[];
  cta: string;
  position: 'left' | 'right';
}
