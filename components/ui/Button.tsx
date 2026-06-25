import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonVariant, ButtonSize } from '@/types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className, ...props }, ref) => {
    const baseStyles = 'btn-base';

    const variantStyles = {
      primary: 'bg-accent text-navy hover:bg-accent-600 hover:shadow-glow hover:scale-105 focus:ring-accent',
      secondary: 'bg-primary text-navy hover:bg-primary-700 hover:scale-105 focus:ring-primary',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-navy hover:scale-105 focus:ring-primary',
      ghost: 'text-primary hover:bg-primary-50 hover:scale-105 focus:ring-primary',
    };

    const sizeStyles = {
      sm: 'px-6 py-3 text-sm',
      md: 'px-8 py-4 text-base',
      lg: 'px-10 py-5 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
