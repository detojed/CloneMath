import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={className}>
      <span className="text-primary font-bold text-2xl">
        WM<span className="text-yellow-500">Math</span>
      </span>
    </div>
  );
}

export default Logo;
