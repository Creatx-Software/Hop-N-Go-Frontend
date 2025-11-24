import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin, Star, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import phuketImage from "@/assets/phuket.jpg";
import greeceImage from "@/assets/greece.jpg";
import melbourneImage from "@/assets/melbourne.jpg";
import vietnamImage from "@/assets/vietnam.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";

const destinations = [
  {
    id: 1,
    title: "Phuket",
    description:
      "A beautiful tropical island known for clear beaches and stunning sunsets...",
    price: "$ 1,799,000",
    rating: 5.0,
    location: "Thailand",
    image: phuketImage,
  },
  {
    id: 2,
    title: "Toronto",
    description:
      "A vibrant city known for its diverse culture and iconic CN Tower...",
    price: "$ 1,800,000",
    rating: 4.8,
    location: "Canada",
    image: melbourneImage,
  },
  {
    id: 3,
    title: "Greece",
    description:
      "Experience ancient history and stunning Mediterranean views...",
    price: "$ 2,100,000",
    rating: 4.9,
    location: "Europe",
    image: greeceImage,
  },
  {
    id: 4,
    title: "Vietnam",
    description:
      "Discover stunning landscapes and rich cultural heritage...",
    price: "$ 1,500,000",
    rating: 4.7,
    location: "Asia",
    image: vietnamImage,
  },
];

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(destinations[0].image);
  const [carouselApi, setCarouselApi] =
    useState<import("embla-carousel-react").UseEmblaCarouselType[1] | null>(
      null
    );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateBg = () => {
      if (!carouselApi) return;
      try {
        const idx = carouselApi.selectedScrollSnap();
        const dest = destinations[idx] ?? destinations[0];
        setCurrentBg(dest.image);
        setSelectedIndex(idx ?? 0);
      } catch {
        /* ignore */
      }
    };

    updateBg();
    carouselApi.on("select", updateBg);

    return () => {
      carouselApi.off?.("select", updateBg);
    };
  }, [carouselApi]);

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 z-0 grid lg:grid-cols-2">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#07111a] via-[#0b1622] to-[#09121a]">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />

          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "120px 120px, 120px 120px",
              opacity: 0.07,
            }}
          />
        </div>

        <div className="relative overflow-hidden">
          <img
            src={currentBg}
            alt="Travel"
            className="w-full h-full object-cover transition-all duration-700 ease-in-out blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white/25 via-white/10 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          <div className="py-12 md:py-24">
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Enjoy Your
              <br />
              Vacation With
              <br />
              <span className="text-[#FF5A2D]">Hop N Go</span> Travel.
            </h1>
            <p className="text-white/85 text-lg mb-8 max-w-lg">
              With Hop N Go, you can explore incredible places with effortless
              planning and breathtaking views that make every moment unforgettable.
            </p>

            <div className="flex items-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF5A2D] to-[#FF7A3D] text-white font-semibold px-8 py-4 rounded-full shadow-[0_20px_40px_rgba(255,90,45,0.18)]"
              >
                Create Itineraries
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>

              <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white rounded-full px-4 py-3 backdrop-blur-sm border border-white/20">
                <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Play className="w-4 h-4 text-[#FF5A2D]" />
                </span>
                <span className="text-sm">Play Video</span>
              </button>
            </div>
          </div>
        </div>

        <button 
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer focus:outline-none"
          aria-label="Scroll down"
        >
          <div className="w-12 h-12 rounded-full border-2 border-primary bg-primary/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary/30 transition-colors">
            <ChevronDown className="w-6 h-6 text-primary" />
          </div>
        </button>
      </div>

      {/* Carousel - fixed version */}
      <div className="absolute inset-y-0 right-0 mr-[-100px] flex items-center z-20 pointer-events-auto">
        <div className="w-[65vw] max-w-[520px] overflow-visible relative">
          <Carousel
            setApi={(api) => setCarouselApi(api)}
            className="w-full"
            opts={{
              loop: false,
              align: "start",
              dragFree: false,
              containScroll: "keepSnaps",
            }}
          >
            <CarouselContent className="py-4">
              {destinations.map((destination, idx) => (
                <CarouselItem
                  key={destination.id}
                  className={`
                    transition-all duration-300
                    ${selectedIndex === idx ? "scale-100" : "scale-95 opacity-90"}
                    ${idx === destinations.length - 1 ? "" : "mr-4"}
                    basis-[70%] sm:basis-[60%]
                  `}
                >
                  <div className="relative">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg w-full h-[400px] flex flex-col transition-all">
                      <div className="relative h-56 overflow-hidden group">
                        <img
                          src={destination.image}
                          alt={destination.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-xl">
                          <Star className="w-4 h-4 fill-white" />
                          {destination.rating}
                        </div>

                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-lg">
                          <MapPin className="w-4 h-4 text-primary" />
                          {destination.location}
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 text-primary ml-1" />
                          </button>
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col bg-white">
                        <h3 className="font-display font-bold text-2xl text-gray-900 mb-1">
                          {destination.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-2">
                          {destination.description}
                        </p>
                        <span className="text-[#7C3AED] font-semibold cursor-pointer text-sm mb-3">
                          Explore More
                        </span>

                        <div className="flex items-end justify-between mt-auto">
                          <div>
                            <p className="text-gray-500 text-xs mb-1 font-medium">
                              Price
                            </p>
                            <p className="font-display font-bold text-xl text-gray-900">
                              {destination.price}
                              <span className="text-sm text-gray-500 font-normal">
                                /Person
                              </span>
                            </p>
                          </div>

                          <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full px-3 py-2 text-sm font-semibold shadow-md">
                            View More
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Floating arrow */}
                    {selectedIndex === idx && (
                      <button
                        onClick={() => carouselApi?.scrollNext()}
                        className="absolute right-[-28px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF7A3D] to-[#FF5A2D] flex items-center justify-center shadow-2xl z-40"
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </button>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* FIXED Previous Arrow */}
            <CarouselPrevious
              className="
                absolute left-[-28px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white hover:bg-gray-50 flex items-center justify-center shadow-2xl z-40"
                style={{
                  color: "#000000",
                }}
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;
