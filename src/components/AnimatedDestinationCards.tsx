import React from 'react';
import { useRef, useEffect, useState } from 'react';

import d1 from '@/assets/d1.png';
import d2 from '@/assets/d2.png';
import d3 from '@/assets/d3.png';
import d4 from '@/assets/d4.png';
import d5 from '@/assets/d5.png';
import d6 from '@/assets/d6.png';
import d7 from '@/assets/d7.png';
import d8 from '@/assets/d8.png';

const destinationImages = [
  { id: 1, src: d1, title: 'Paris, France' },
  { id: 2, src: d2, title: 'Tokyo, Japan' },
  { id: 3, src: d3, title: 'New York, USA' },
  { id: 4, src: d4, title: 'Rome, Italy' },
  { id: 5, src: d5, title: 'Sydney, Australia' },
  { id: 6, src: d6, title: 'Bali, Indonesia' },
  { id: 7, src: d7, title: 'Cape Town, South Africa' },
  { id: 8, src: d8, title: 'Rio de Janeiro, Brazil' },
];

const AnimatedDestinationCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 1;
  const scrollRef = useRef<number>();

  const scroll = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    if (scrollPosition >= maxScroll) {
      // Reset to start for infinite scroll
      container.scrollTo({ left: 0, behavior: 'instant' });
      setScrollPosition(0);
    } else {
      setScrollPosition(prev => {
        const newPos = prev + scrollSpeed;
        container.scrollTo({ left: newPos, behavior: 'auto' });
        return newPos;
      });
    }

    scrollRef.current = requestAnimationFrame(scroll);
  };

  useEffect(() => {
    scrollRef.current = requestAnimationFrame(scroll);
    return () => {
      if (scrollRef.current) {
        cancelAnimationFrame(scrollRef.current);
      }
    };
  }, [scrollPosition]);

  const handleScroll = () => {
    if (!containerRef.current) return;
    setScrollPosition(containerRef.current.scrollLeft);
  };

  const scrollBy = (amount: number) => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  // Duplicate the items to create a seamless loop
  const duplicatedDestinations = [...destinationImages, ...destinationImages];

  return (
    <div className="relative overflow-hidden py-8">
      <div 
        ref={containerRef}
        className="flex items-center gap-6 overflow-x-auto py-4"
        onScroll={handleScroll}
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        
        <style>{`
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {duplicatedDestinations.map((item, index) => {
         
          const isSmall = index % 2 === 0;
          const cardClass = isSmall 
            ? 'w-[162px] h-[198px]'     // Small card
            : 'w-[291px] h-[233.1px]';  // Large card
            
          return (
            <div 
              key={`${item.id}-${index}`}
              className={`flex-shrink-0 rounded-3xl overflow-hidden shadow-lg relative group ${cardClass}`}
            >
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://source.unsplash.com/random/400x500/?travel,${item.title.split(',')[0].toLowerCase()}`;
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedDestinationCards;
