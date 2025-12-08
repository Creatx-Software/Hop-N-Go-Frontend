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
    <div className="relative bg-[#F7F7F7] backdrop-blur-xl rounded-3xl overflow-hidden shadow-sm hover-lift w-[320px] h-[400px] sm:w-[360px] sm:h-[450px] md:w-[400px] md:h-[496px] lg:w-[30vw] lg:h-[36vw] xl:w-[28vw] xl:h-[34vw] 2xl:w-[26vw] 2xl:h-[32vw]">
      <div className="relative h-[55%] sm:h-[55.5%] md:h-[57.2%] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg bg-white/20 backdrop-blur-sm lg:px-[0.8vw] lg:py-[0.4vw] lg:text-[0.9vw] 2xl:px-[0.6vw] 2xl:py-[0.3vw] 2xl:text-[0.8vw]">
          <span className="w-6 h-6 rounded-full bg-[#FF7A3D] flex items-center justify-center lg:w-[1.5vw] lg:h-[1.5vw] lg:min-w-[1.5vw] 2xl:w-[1.3vw] 2xl:h-[1.3vw] 2xl:min-w-[1.3vw]">
            <Star className="w-3 h-3 text-white fill-white lg:w-[0.8vw] lg:h-[0.8vw] 2xl:w-[0.6vw] 2xl:h-[0.6vw]" />
          </span>
          <span className="text-white">{rating}</span>
        </div>
        <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-white flex items-center gap-2 shadow-lg lg:px-[0.8vw] lg:py-[0.4vw] lg:text-[0.9vw] 2xl:px-[0.6vw] 2xl:py-[0.3vw] 2xl:text-[0.8vw]">
          <MapPin className="w-4 h-4 text-primary text-white lg:w-[1vw] lg:h-[1vw] 2xl:w-[0.8vw] 2xl:h-[0.8vw]" />
          {location}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
        {/* Glass ring around button */}
        <div className="absolute w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm shadow-[0_0_18px_8px_rgba(255,255,255,0.06)] lg:w-[4vw] lg:h-[4vw] 2xl:w-[3.5vw] 2xl:h-[3.5vw]"></div>
          {/* White button on top */}
          <button className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-10 lg:w-[2.5vw] lg:h-[2.5vw] lg:min-w-[2.5vw] 2xl:w-[2.2vw] 2xl:h-[2.2vw] 2xl:min-w-[2.2vw]">
            <Play className="w-6 h-6 text-[#FF5A2D] fill-[#FF5A2D] lg:w-[1.5vw] lg:h-[1.5vw] 2xl:w-[1.2vw] 2xl:h-[1.2vw]" />
          </button>
        </div>
      </div>
      <div className="p-0 h-[45%] sm:h-[44.5%] md:h-[42.8%] lg:h-[42%] xl:h-[41.5%] 2xl:h-[41%] flex flex-col">
  {/* Top: Solid white section with title and tags */}
  <div className="relative bg-white px-4 sm:px-5 pt-4 sm:pt-5 pb-0 rounded-b-3xl overflow-hidden flex-1 flex flex-col">
    <div 
      className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] opacity-30"
      style={{
        maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
      }}
    ></div>
    <h3 className="font-Montserrat font-bold text-lg sm:text-xl lg:text-[1.5vw] xl:text-[1.4vw] 2xl:text-[1.5vw] text-foreground mb-1 sm:mb-0">{title}</h3>
    {tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-3 lg:mb-4 mt-auto">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="bg-transparent text-[#3B3B3B] text-xs lg:text-[0.9vw] xl:text-[0.9vw] 2xl:text-[0.85vw] px-2 py-1 rounded-full border border-[#C4C4C4]"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
  {/* Bottom: Glass section with price and view plan button */}
  <div className="relative flex items-center justify-between px-4 sm:px-5 pb-3 sm:pb-4 lg:pb-[1vw] xl:pb-[0.8vw] 2xl:pb-[0.7vw] pt-2 z-0">
    <div>
      <p className="text-sm lg:text-[1.1vw] xl:text-[1vw] 2xl:text-[0.9vw] text-muted-foreground mb-0">Price</p>
      <p className="text-xl lg:text-[1.5vw] xl:text-[1.4vw] 2xl:text-[1.3vw] text-foreground">
        <span className="text-sm lg:text-[1.1vw] xl:text-[1vw] 2xl:text-[0.9vw] text-muted-foreground mr-1">From</span>
        <span className="font-Montserrat font-bold">{price}</span>
      </p>
    </div>
    <Button className="rounded-full text-white bg-gradient-to-r from-[#F9AC7D] to-[#F53B00] px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 hover:opacity-90 transition-opacity relative overflow-hidden group lg:px-[1.5vw] lg:py-[0.6vw] 2xl:px-[1.3vw] 2xl:py-[0.5vw]">
      <span className="relative z-10 font-medium text-sm sm:text-base lg:text-[1.1vw] xl:text-[1vw] 2xl:text-[0.9vw]">View Plan</span>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3 sm:h-4 bg-gradient-to-r from-[#F9AC7D]/40 to-[#F53B00]/40 blur-md rounded-full lg:h-[0.8vw]"></div>
    </Button>
  </div>
</div>
    </div>
  );
};

export default DestinationCard;