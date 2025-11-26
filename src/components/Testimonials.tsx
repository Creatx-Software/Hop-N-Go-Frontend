import { useState } from 'react';
import { Star, ArrowUp, ArrowDown } from "lucide-react";
import eclipse from "@/assets/Ellipse 4.png";
import clientsImage from "@/assets/clients.png";

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
    image: eclipse
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Absolutely amazing service! The tour guides were knowledgeable and made the whole experience enjoyable. The views were breathtaking and worth every penny. Will definitely come back again!',
    image: eclipse
  },
  {
    id: 3,
    name: 'Michael Chen',
    rating: 5,
    text: 'One of the best travel experiences I\'ve ever had. The organization was flawless, and the sights were incredible. The team went above and beyond to make our trip special.',
    image: eclipse
  },
  {
    id: 4,
    name: 'Emma Wilson',
    rating: 4,
    text: 'Lovely experience with great attention to detail. The itinerary was well-planned, and we got to see so many beautiful places. The guides were friendly and professional.',
    image: eclipse
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = sampleTestimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? sampleTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === sampleTestimonials.length - 1 ? 0 : prev + 1));
  };
  return (
    <section className="relative py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Testimonial Card and Navigation */}
          <div className="relative max-w-2xl mx-auto lg:mx-0 flex items-start gap-6">
            {/* Navigation Buttons */}
            <div className="flex flex-col gap-4 mt-8">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowUp className="w-5 h-5 text-black" />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-black border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowDown className="w-5 h-5 text-white" />
              </button>
            </div>
            
            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex-1">
              
              {/* Profile Picture */}
              <div className="flex items-center gap-4 mb-1">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md transform -translate-y-14">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Name and Rating */}
                <div className="transform -translate-x-16">
                  <h4 className="font-bold text-gray-900">{currentTestimonial.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < currentTestimonial.rating ? 'fill-[#F6973F] text-[#F6973F]' : 'fill-gray-300 text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                "{currentTestimonial.text}"
              </p>
            </div>
          </div>

          {/* Right side - Title and Image */}
          <div className="relative w-full flex flex-row-reverse lg:block">
            <div className="lg:absolute right-0 w-2/5 lg:w-[10vw] max-w-md transform lg:translate-x-16 lg:-translate-y-16 ml-4 lg:ml-0">
              <img 
                src={clientsImage} 
                alt="Happy clients" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="relative z-10 max-w-2xl lg:pr-12">
              <h4 className="font-inter font-semibold text-lg text-gray-900 mb-2">
                What others think
              </h4>

              <br/>

              <h2 className="font-inter font-bold text-4xl md:text-5xl text-black mb-6">
                What our clients are saying about us?
              </h2>
              
              <p className="text-gray-600 text-lg">
                See what our customers say about their experience with Hop N Go—check it out on the side!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;