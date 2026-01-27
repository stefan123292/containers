'use client';

import { Loader2 } from 'lucide-react';

interface LoadingProps {
  fullScreen?: boolean;
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export function Loading({ fullScreen = false, size = 'md', text }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const containerClasses = fullScreen
    ? 'fixed inset-0 z-50 flex items-center justify-center bg-industrial-900/80 backdrop-blur-sm'
    : 'flex items-center justify-center py-24';

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative">
          <Loader2 className={`${sizeClasses[size]} text-primary animate-spin`} />
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" />
        </div>
        
        {/* Loading text */}
        {text && (
          <p className="text-industrial-300 font-medium animate-pulse">{text}</p>
        )}
        
        {/* Loading dots animation */}
        {!text && (
          <div className="flex gap-1.5">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        )}
      </div>
    </div>
  );
}
