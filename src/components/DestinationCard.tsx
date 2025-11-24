import { Button } from "@/components/ui/button";
import { MapPin, Star, Users } from "lucide-react";

interface DestinationCardProps {
  image: string;
  title: string;
  rating: number;
  location: string;
  price: string;
  duration: string;
  travelers: string;
}

const DestinationCard = ({ 
  image, 
  title, 
  rating, 
  location, 
  price, 
  duration, 
  travelers 
}: DestinationCardProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-md hover-lift">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Star className="w-4 h-4 fill-current" />
          {rating}
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-secondary px-3 py-1 rounded-full text-sm font-semibold">
          <MapPin className="w-3 h-3 inline mr-1" />
          {location}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-xl text-foreground mb-4">{title}</h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <span>{duration}</span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {travelers}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Starting from</p>
            <p className="font-display font-bold text-2xl text-foreground">{price}</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;