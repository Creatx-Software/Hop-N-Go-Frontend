import { useState, useEffect, useRef } from 'react';
import { Star, ArrowUp, ArrowDown } from "lucide-react";
import eclipse1 from "@/assets/Ellipse 1.png";
import eclipse2 from "@/assets/Ellipse 2.png";
import eclipse3 from "@/assets/Ellipse 3.png";
import eclipse4 from "@/assets/Ellipse 4.png";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  image: string;
}

const sampleTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Smith',
    rating: 4,
    text: 'This was an unforgettable experience from start to finish. The views were absolutely stunning and the ride felt incredibly smooth. I would definitely recommend this to anyone looking for a memorable adventure.',
    image: eclipse1
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Absolutely amazing service! The tour guides were knowledgeable and made the whole experience enjoyable. The views were breathtaking and worth every penny. Will definitely come back again!',
    image: eclipse2
  },
  {
    id: 3,
    name: 'Michael Chen',
    rating: 5,
    text: 'One of the best travel experiences I\'ve ever had. The organization was flawless, and the sights were incredible. The team went above and beyond to make our trip special.',
    image: eclipse3
  },
  {
    id: 4,
    name: 'Emma Wilson',
    rating: 4,
    text: 'Lovely experience with great attention to detail. The itinerary was well-planned, and we got to see so many beautiful places. The guides were friendly and professional.',
    image: eclipse4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentTestimonial = sampleTestimonials[currentIndex];

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? sampleTestimonials.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === sampleTestimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };
  return (
    <section className="relative py-[5vw] bg-background -mt-20 md:-mt-10">
      <div className="container w-full md:px-0 mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[3vw] items-start">
          {/* Right side - Title and Image - Moved to top on mobile */}
          <div className="relative w-full flex flex-row-reverse lg:block order-1 lg:order-2">
            <div className="lg:absolute right-0 w-full h-[250px] lg:h-[30vw] xl:h-[25vw] 2xl:h-[22vw] overflow-hidden transform lg:translate-x-[3vw] lg:-translate-y-[5vw] ml-4 lg:ml-0" style={{ marginTop: 0, paddingTop: 0 }}>
              <div className="relative w-full h-full">
                {[eclipse1, eclipse2, eclipse3, eclipse4].map((img, index) => {
                  // Different sizes for each circle
                  const sizes = [
                    'w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]',
                    'w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px]',
                    'w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]',
                    'w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]'
                  ];
                  
                  // Different horizontal positions (more to the right)
                  const positions = ['right-20', 'right-0', 'right-12', 'right-0'];
                  
                  return (
                    <div 
                      key={index}
                      className={`absolute ${positions[index]} ${sizes[index]} rounded-full overflow-hidden`}
                      style={{
                        animation: `floatUp 8s cubic-bezier(0.2, 0.8, 0.2, 1) infinite ${index * 1.8}s`,
                        bottom: '-100px',
                        zIndex: 4 - index,
                        margin: 0,
                        padding: 0,
                        willChange: 'transform, opacity, bottom',
                        position: 'absolute',
                        animationFillMode: 'both',
                        animationTimingFunction: 'linear'
                      }}
                    >
                      <img 
                        src={img} 
                        alt={`Client ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
              <style dangerouslySetInnerHTML={{
                __html: `
                  @keyframes floatUp {
                    0% {
                      transform: translateY(0) scale(0.95);
                      opacity: 0;
                      bottom: -100px;
                    }
                    5% {
                      opacity: 0.9;
                    }
                    10% {
                      opacity: 1;
                    }
                    80% {
                      opacity: 1;
                      transform: translateY(0) scale(1);
                    }
                    90% {
                      opacity: 0.8;
                      transform: translateY(-5px) scale(1.02);
                    }
                    100% {
                      transform: translateY(-10px) scale(1.05);
                      bottom: 100%;
                      opacity: 0;
                      margin: 0;
                      padding: 0;
                    }
                  }
                `
              }} />
            </div>
            
            <div className="relative z-10 max-w-2xl lg:pr-12">
              <h4 className="font-inter font-semibold text-lg md:text-[1.1vw] lg:text-[1vw] xl:text-[1.1vw] text-gray-900 mb-6">
                What others think
              </h4>

              <h2 className="font-inter font-bold text-4xl md:text-5xl text-black mb-6 leading-[1] md:leading-[1.2] lg:leading-[1]">
                What our clients are saying about us?
              </h2>
              
              <p className="text-gray-600 text-lg md:text-[1.1vw] lg:text-[1vw] xl:text-[1.1vw]">
                See what our customers say about their experience with Hop N Go—check it out on the side!
              </p>
            </div>
          </div>

          {/* Left side - Testimonial Card and Navigation - Moved to bottom on mobile */}
          <div className="relative max-w-2xl mx-auto lg:mx-0 flex items-start gap-6 order-2 lg:order-1 mt-8 lg:mt-0">
            {/* Navigation Buttons */}
            <div className="flex flex-col gap-4 mt-8">
              <button 
                onClick={handlePrev}
                className="w-[2.5vw] h-[2.5vw] min-w-[40px] min-h-[40px] rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowUp className="w-5 h-5 text-black" />
              </button>
              <button 
                onClick={handleNext}
                className="w-[2.5vw] h-[2.5vw] min-w-[40px] min-h-[40px] rounded-full bg-black border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowDown className="w-5 h-5 text-white" />
              </button>
            </div>
            
            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl pt-6 px-8 pb-8 shadow-lg border border-gray-100 flex-1 min-w-0">
              {/* Profile Picture */}
              <div className={`flex flex-col items-start mb-4 -mt-12 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                <div className="w-[4vw] h-[4vw] min-w-[64px] min-h-[64px] rounded-full overflow-hidden border-2 border-white shadow-md mb-3">
                  <img 
                    key={currentTestimonial.id}
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name} 
                    className={`w-full h-full object-cover transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                  />
                </div>
                
                {/* Name and Rating */}
                <div className="w-full">
                  <h4 className="font-bold text-gray-900 text-left">{currentTestimonial.name}</h4>
                  <div className="flex gap-1 justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-[1vw] h-[1vw] min-w-[16px] min-h-[16px] ${i < currentTestimonial.rating ? 'fill-[#F6973F] text-[#F6973F]' : 'fill-gray-300 text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Testimonial Text */}
              <p className={`text-gray-600 text-sm md:text-[0.9vw] lg:text-[0.8vw] xl:text-[0.9vw] leading-relaxed transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isTransitioning ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}>
                "{currentTestimonial.text}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;