
import React from 'react';
import { cn } from '@/lib/utils';
import Card from './Card';

const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  change, 
  changeType = 'neutral', 
  className, 
  ...props 
}) => {
  const changeClasses = {
    positive: 'text-green-500',
    negative: 'text-red-500',
    neutral: 'text-gray-500'
  };

  return (
    <Card 
      className={cn('relative overflow-hidden', className)} 
      glass 
      animate
      {...props}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="mt-2 text-3xl font-bold">{value}</h3>
          {change && (
            <p className={cn('text-sm mt-1', changeClasses[changeType])}>
              {change > 0 ? '↑' : change < 0 ? '↓' : '●'} {Math.abs(change)}%
            </p>
          )}
        </div>
        {Icon && (
          <div className="rounded-full p-2 bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        )}
      </div>
    </Card>
  );
};

export default StatCard;
