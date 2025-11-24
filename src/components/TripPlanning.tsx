import { MapPin, Plane, ArrowRight, Users, Star } from "lucide-react";
import travelImage from "@/assets/travel.png";
import tripImage from "@/assets/Trip.png";

const TripPlanning = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F8F0FF] to-transparent -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            {/* Happy Travellers Button with Travel Image */}
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary/10 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium">Happy Travellers</p>
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">(1.5k Reviews)</span>
                  </div>
                </div>
              </div>
              
              {/* Small Travel Image */}
              <div className="w-26 h-24">
                <img 
                  src={travelImage} 
                  alt="Happy travelers" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Ready to plan your next trip?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Tell us about your travel style and what excites you most - and we'll create a personalized trip designed just for you. Your purpose, interests, travel group, budget, and overall budget all help shape the perfect itinerary
            </p>
            
            <div className="flex flex-wrap gap-4">
            </div>
          </div>
          
          <div className="relative">
            {/* Main Trip Image */}
            <div className="relative z-10">
              <img 
                src={tripImage} 
                alt="Trip planning" 
                
              />
              
            </div>
            {/* Decorative Elements */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-purple-100/30 blur-3xl -z-10"></div>
            <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-pink-100/30 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPlanning;