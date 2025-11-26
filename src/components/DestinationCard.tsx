import { Button } from "@/components/ui/button";
import { MapPin, Star, Users, Play } from "lucide-react";

interface DestinationCardProps {
  image: string;
  title: string;
  rating: number;
  location: string;
  price: string;
  travelers?: string;
  tags?: string[];
}

const DestinationCard = ({ 
  image, 
  title, 
  rating, 
  location, 
  price, 
  travelers,
  tags = [] 
}: DestinationCardProps) => {
  return (
    <div className="relative bg-[#F7F7F7] backdrop-blur-xl rounded-3xl overflow-hidden shadow-sm hover-lift w-[400px] h-[496px]">
      <div className="relative h-[284px] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg bg-white/20 backdrop-blur-sm">
          <span className="w-6 h-6 rounded-full bg-[#FF7A3D] flex items-center justify-center">
            <Star className="w-3 h-3 text-white fill-white" />
          </span>
          <span className="text-white">{rating}</span>
        </div>
        <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-white flex items-center gap-2 shadow-lg">
          <MapPin className="w-4 h-4 text-primary text-white" />
          {location}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
        {/* Glass ring around button */}
        <div className="absolute w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm shadow-[0_0_18px_8px_rgba(255,255,255,0.06)]"></div>
          {/* White button on top */}
          <button className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-10">
            <Play className="w-6 h-6 text-[#FF5A2D] fill-[#FF5A2D]" />
          </button>
        </div>
      </div>
      <div className="p-0">
  {/* Top: Solid white section with title and tags */}
  <div className="bg-white px-5 pt-5 rounded-b-3xl">
    <h3 className="font-Montserrat font-bold text-xl text-foreground mb-3">{title}</h3>
    {tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="bg-transparent text-[#3B3B3B] text-xs px-2 py-1 rounded-full border border-[#C4C4C4]"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
  {/* Bottom: Glass section with price and view plan button */}
  <div className="relative flex items-center justify-between px-5 pb-5 pt-2 z-0">
    <div>
      <p className="text-sm text-muted-foreground mb-0">Price</p>
      <p className="text-xl text-foreground">
        <span className="text-sm text-muted-foreground mr-1">From</span>
        <span className="font-Montserrat font-bold">{price}</span>
      </p>
    </div>
    <Button className="rounded-full text-white bg-gradient-to-r from-[#8482FF] to-[#7723FE] px-6 py-2 shadow-lg hover:opacity-90 transition-opacity">
      View Plan
    </Button>
  </div>
</div>
    </div>
  );
};

export default DestinationCard;