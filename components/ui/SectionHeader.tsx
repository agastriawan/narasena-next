import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-16 md:mb-20 lg:mb-24', alignmentClasses[align], className)}>
      {subtitle && (
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">
          {subtitle}
        </p>
      )}
      <h2 className="heading-lg mb-6">{title}</h2>
      {description && (
        <p className="text-body-lg mx-auto max-w-3xl text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}
