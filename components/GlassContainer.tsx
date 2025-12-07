import React from 'react';

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassContainer: React.FC<GlassContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
};