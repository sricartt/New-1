'use client';

import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function LiveProjectButton({ onClick, className = '', href }: LiveProjectButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        rounded-full 
        border-2 
        border-[#D7E2EA] 
        text-[#D7E2EA] 
        font-medium 
        uppercase 
        tracking-widest 
        transition-colors 
        duration-200 
        hover:bg-[#D7E2EA]/10 
        active:scale-98
        cursor-pointer
        px-8 py-3 
        sm:px-10 sm:py-3.5 
        text-xs sm:text-sm md:text-base
        ${className}
      `}
    >
      Live Project
    </button>
  );
}
