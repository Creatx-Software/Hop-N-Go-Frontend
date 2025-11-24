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
      tags: ["Hiking", "Surfing", "Coastal Paragliding"]
    },
    {
      image: vietnamImage,
      title: "10 Days in Vietnam",
      rating: 4.9,
      location: "Vietnam",
      price: "$ 1,799,000",
      tags: ["Beach", "Cultural", "Food Tour"]
    },
    {
      image: japanImage,
      title: "9D Splendid Japan",
      rating: 4.7,
      location: "Japan",
      price: "$ 1,799,000",
      tags: ["Temples", "Shopping", "Hot Springs"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {itineraries.map((itinerary, index) => (
            <DestinationCard key={index} {...itinerary} />
          ))}
        </div>
        <div className="text-center">
          <Button variant="link" className="text-primary font-semibold text-lg">
            View More
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularItineraries;