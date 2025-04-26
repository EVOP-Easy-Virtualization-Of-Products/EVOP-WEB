'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    // Initial calculation
    updateScrollProgress();

    // Add event listener
    window.addEventListener('scroll', updateScrollProgress);

    // Clean up
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="sticky top-[60px] sm:top-[64px] md:top-[68px] left-0 z-40 w-full h-1 bg-gray-200">
      <div 
        className="h-full bg-gradient-to-r from-[#287eff] to-[#1855F1] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
} 