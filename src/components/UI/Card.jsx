
import React from 'react';
import { cn } from '@/lib/utils';

const Card = ({ 
  children, 
  className, 
  glass = false, 
  hover = false, 
  animate = false, 
  ...props 
}) => {
  return (
    <div 
      className={cn(
        'rounded-xl border border-border bg-card p-6 shadow-sm',
        glass && 'glass',
        hover && 'hover:shadow-md transition-all',
        animate && 'animate-scale-in',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
