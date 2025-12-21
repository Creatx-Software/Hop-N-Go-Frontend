import { MapPin, Plane, ArrowRight, Users, Star } from "lucide-react";
import travelImage from "@/assets/travel.png";
import tripImage from "@/assets/Trip.png";
import travel1 from "@/assets/travel1.png";
import travel2 from "@/assets/travel2.png";
import travel3 from "@/assets/travel3.png";
import h1 from "@/assets/h1.png";
import h2 from "@/assets/h2.png";
import h3 from "@/assets/h3.png";

// Animation keyframes
const styles = `
  @keyframes float1 {
    0% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(-8px) translateX(3px); }
    100% { transform: translateY(0px) translateX(0px); }
  }
  @keyframes float2 {
    0% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(6px) translateX(-2px); }
    100% { transform: translateY(0px) translateX(0px); }
  }
  @keyframes float3 {
    0% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(-6px) translateX(4px); }
    100% { transform: translateY(0px) translateX(0px); }
  }
`;

const TripPlanning = () => {
  return (
    <>
      <style>{styles}</style>
    <section className="bg-white py-16 md:py-[5vw] lg:py-[6vw] overflow-hidden md:-mt-20 lg:-mt-32">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F8F0FF] to-transparent -z-10"></div>
      
      <div className="container w-full px-12 md:px-12 mx-auto">
        <div className="grid md:grid-cols-2 gap-[2vw] items-center">
          <div className="relative z-10">
            {/* Happy Travellers Button with Travel Image */}
            <div className="flex items-center gap-[1vw] mb-6">
              <div className="inline-flex items-center gap-[0.5vw] bg-white px-[1vw] py-[0.5vw] rounded-full shadow-sm">
                <div className="flex -space-x-2">
                  {[h1, h2, h3].map((img, index) => (
                    <img 
                      key={index}
                      src={img}
                      alt={`Traveler ${index + 1}`}
                      className="w-[2.2vw] h-[2.2vw] min-w-[32px] min-h-[32px] rounded-full border-2 border-white object-cover"
                    />
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
                    <span className="text-sm sm:text-[0.9vw] font-medium text-foreground ml-1">(1.5k Reviews)</span>
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

            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-8">
              Ready to plan your next trip?
            </h2>
            <p className="text-muted-foreground text-lg sm:text-[1.1vw] lg:text-[1.2vw] xl:text-[1.3vw] leading-relaxed mb-8">
              Tell us about your travel style and what excites you most - and we'll create a personalized trip designed just for you. Your purpose, interests, travel group, budget, and overall budget all help shape the perfect itinerary
            </p>
            
            <div className="flex flex-wrap gap-4">
            </div>
          </div>
          
          <div className="relative">
            {/* Main Trip Image */}
            <div className="relative z-10 md:scale-75 lg:scale-80 xl:scale-75 origin-center">
              <img 
                src={tripImage} 
                alt="Trip planning"
                className="relative z-0 w-full h-auto"
              />
              
              {/* Bottom Card */}
              <div className="absolute -bottom-16 md:bottom-0 -left-0 w-[185.82px] h-[174.76px] md:w-[20vw] md:h-[18vw] lg:w-[18vw] lg:h-[16vw] xl:w-[16vw] xl:h-[15vw] rounded-2xl shadow-lg overflow-hidden z-20 bg-transparent" style={{ animation: 'float1 6s ease-in-out infinite' }}>
                <img 
                  src={travel1} 
                  alt="Travel 1" 
                  className="min-w-full min-h-full w-auto h-auto object-cover"
                  style={{ transform: 'scale(1.2) translateY(7px)' }}
                />
              </div>
              
              {/* Right Side Small Card */}
              <div className="absolute top-[39%] md:top-1/2 right-2 md:right-[5%] lg:right-[5%] xl:right-[5%] w-[109.84px] h-[103.31px] md:w-[14vw] md:h-[12vw] lg:w-[12vw] lg:h-[10vw] xl:w-[11vw] xl:h-[9vw] rounded-2xl shadow-lg overflow-hidden z-20 bg-transparent" style={{ animation: 'float2 5s ease-in-out infinite' }}>
                <img 
                  src={travel2} 
                  alt="Travel 2" 
                  className="min-w-full min-h-full w-auto h-auto object-cover"
                  style={{ transform: 'scale(1.2) translateY(10px)' }}
                />
              </div>
              
              {/* Upper Badge */}
              <div className="absolute top-10 md:top-[15%] lg:top-[20%] -right-6 md:right-[4%] lg:right-[4%] w-[166px] h-10 md:w-[18vw] md:h-[4vw] lg:w-[16vw] lg:h-[3.5vw] xl:w-[14vw] xl:h-[3vw] rounded-full shadow-md overflow-hidden z-20 bg-transparent" style={{ animation: 'float3 5s ease-in-out infinite' }}>
                <img 
                  src={travel3} 
                  alt="Travel 3" 
                  className="min-w-full min-h-full w-auto h-auto object-cover"
                  style={{ transform: 'scale(1.3)' }}
                />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-purple-100/30 blur-3xl -z-10"></div>
            <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-pink-100/30 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default TripPlanning;