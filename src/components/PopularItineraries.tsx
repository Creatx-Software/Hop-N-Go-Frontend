import { Button } from "@/components/ui/button";
import DestinationCard from "./DestinationCard";
import { ArrowRight } from "lucide-react";
import melbourneImage from "@/assets/melbourne.jpg";
import vietnamImage from "@/assets/vietnam.jpg";
import japanImage from "@/assets/japan.jpg";

const PopularItineraries = () => {
  const itineraries = [
    {
      image: melbourneImage,
      title: "7-Day Melbourne Adventure",
      rating: 4.8,
      location: "Australia",
      price: "$ 1,799,000",
      tags: ["Hiking", "Surfing", "Coastal Paragliding", "Rafting Excursion", "Kayaking"]
    },
    {
      image: vietnamImage,
      title: "10 Days in Vietnam",
      rating: 4.9,
      location: "Vietnam",
      price: "$ 1,799,000",
      tags: ["Beach", "Cultural", "Food Tour", "Rafting Excursion", "Kayaking"]
    },
    {
      image: japanImage,
      title: "9D Splendid Japan",
      rating: 4.7,
      location: "Japan",
      price: "$ 1,799,000",
      tags: ["Temples", "Shopping", "Hot Springs", "Rafting Excursion", "Kayaking"]
    }
  ];

  return (
    <section className="py-16 bg-white -mt-10 md:mt-0">
      <div className="w-full px-[5%] md:px-[4%] lg:px-[5%] xl:px-[6%] mx-auto">
        <div className="flex flex-col mb-8 md:mb-12 lg:mb-10">
          <div className="w-full max-w-4xl">
            <h2 className="font-display font-bold text-4xl md:text-[3.5vw] lg:text-[3.2vw] xl:text-[3vw] leading-tight text-foreground mb-2 md:mb-4 text-left">
              Popular Itineraries
            </h2>
            <p className="text-muted-foreground text-lg md:text-[1.1vw] lg:text-[1vw] xl:text-[1.1vw] leading-relaxed text-left">
              Explore our top itineraries designed to inspire<br className="hidden sm:inline" /> your next adventure
            </p>
          </div>
        </div>
        
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-full justify-items-center">
            {itineraries.map((itinerary, index) => (
              <div key={index} className="w-full flex justify-center">
                <div className="w-full max-w-[320px] sm:max-w-none sm:w-full">
                  <DestinationCard {...itinerary} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10 md:mt-16 lg:mt-20 xl:mt-20 mb-8 md:mb-12 lg:mb-6">
          <Button 
            variant="link" 
            className="font-normal text-lg md:text-[1.1vw] lg:text-[1vw] xl:text-[1.1vw] bg-gradient-to-r from-[#F9AC7D] to-[#F53B00] bg-clip-text text-transparent hover:opacity-80 transition-opacity inline-flex items-center"
          >
            View More
            <div className="ml-2 w-5 h-5 md:w-[1.1vw] md:h-[1.1vw] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="url(#arrow-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F9AC7D" />
                    <stop offset="100%" stopColor="#F53B00" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularItineraries;