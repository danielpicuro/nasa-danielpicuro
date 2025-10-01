"use client";

import React, { useEffect, useState } from 'react';

/**
 * Componente ParallaxSection: Crea secciones con efecto parallax
 * Permite crear secciones visualmente impactantes con movimiento al hacer scroll
 */
interface ParallaxSectionProps {
  backgroundImage: string;
  height?: string;
  children: React.ReactNode;
  overlayOpacity?: number;
  speed?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  backgroundImage,
  height = '100vh',
  children,
  overlayOpacity = 0.5,
  speed = 0.5,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate background position based on scroll
  const yPos = -(scrollPosition * speed);
  const backgroundPositionY = `${yPos}px`;

  return (
    <div 
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundPositionY,
          transform: `translateZ(0)`,
          willChange: 'transform'
        }}
      />
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative z-10 container mx-auto px-4">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;