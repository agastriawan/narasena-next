import React from 'react';
import Link from 'next/link';
import { 
  Signpost, 
  Store, 
  Type, 
  Lightbulb, 
  Frame, 
  Monitor,
  LucideIcon 
} from 'lucide-react';
import { Service } from '@/types';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  signpost: Signpost,
  store: Store,
  type: Type,
  lightbulb: Lightbulb,
  frame: Frame,
  monitor: Monitor,
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Signpost;

  return (
    <div className={cn('card-minimal group', className)}>
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-50 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-navy group-hover:shadow-glow">
        <IconComponent className="h-10 w-10" strokeWidth={1.5} />
      </div>
      
      <h3 className="mb-4 text-2xl font-bold text-primary text-navy">{service.title}</h3>
      
      <p className="mb-6 leading-relaxed text-gray-600">{service.description}</p>
      
      {service.benefits && service.benefits.length > 0 && (
        <ul className="mb-6 space-y-3">
          {service.benefits.slice(0, 3).map((benefit, index) => (
            <li key={index} className="flex items-start text-gray-600">
              <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"></span>
              {benefit}
            </li>
          ))}
        </ul>
      )}
      
      <Link 
        href={`/services#${service.id}`}
        className="mt-auto inline-flex items-center text-base font-semibold text-accent transition-all hover:gap-2 hover:text-accent-600"
      >
        Pelajari Lebih Lanjut
        <svg 
          className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
