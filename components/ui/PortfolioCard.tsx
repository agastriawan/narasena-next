import React from 'react';
import Image from 'next/image';
import { PortfolioItem } from '@/types';
import { cn } from '@/lib/utils';
import { MapPin, Building2 } from 'lucide-react';

interface PortfolioCardProps {
  item: PortfolioItem;
  className?: string;
}

export function PortfolioCard({ item, className }: PortfolioCardProps) {
  return (
    <div className={cn('group overflow-hidden rounded-card-lg bg-white transition-all duration-300 hover:scale-[1.02]', className)}>
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Category Badge */}
        <div className="absolute right-6 top-6">
          <span className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-lg">
            {item.category}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="mb-3 text-2xl font-bold text-primary transition-colors group-hover:text-accent">
          {item.title}
        </h3>
        
        <div className="mb-4 flex flex-wrap gap-4 text-gray-500">
          {item.client && (
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span className="text-sm">{item.client}</span>
            </div>
          )}
          {item.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{item.location}</span>
            </div>
          )}
        </div>
        
        <p className="leading-relaxed text-gray-600 line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}
