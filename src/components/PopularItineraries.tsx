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
    <section className="py-20 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-2">
              Popular Itineraries
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our top itineraries designed to inspire your next adventure
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 w-full max-w-7xl">
            {itineraries.map((itinerary, index) => (
              <div key={index} className="flex justify-center">
                <DestinationCard {...itinerary} />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Button variant="link" className="font-semibold text-lg text-[#8442FF] inline-flex items-center">
            View More
            <ArrowRight className="ml-2 w-5 h-5 stroke-[#8442FF]" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularItineraries;