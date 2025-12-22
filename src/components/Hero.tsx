import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin, Star, ArrowDown, ChevronRight } from "lucide-react";
import grid from "@/assets/grid.png";
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
  { id: 1, title: "Phuket", description: "A beautiful tropical island known for clear beaches and stunning sunsets...", price: "$ 1,799,000", rating: 5.0, location: "Thailand", image: phuketImage },
  { id: 2, title: "Toronto", description: "A vibrant city known for its diverse culture and iconic CN Tower...", price: "$ 1,800,000", rating: 4.8, location: "Canada", image: melbourneImage },
  { id: 3, title: "Greece", description: "Experience ancient history and stunning Mediterranean views...", price: "$ 2,100,000", rating: 4.9, location: "Europe", image: greeceImage },
  { id: 4, title: "Vietnam", description: "Discover stunning landscapes and rich cultural heritage...", price: "$ 1,500,000", rating: 4.7, location: "Asia", image: vietnamImage },
];

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(destinations[0].image);
  const [carouselApi, setCarouselApi] =
    useState<import("embla-carousel-react").UseEmblaCarouselType[1] | null>(null);
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
      } catch {}
    };

    updateBg();
    carouselApi.on("select", updateBg);

    return () => {
      carouselApi.off?.("select", updateBg);
    };
  }, [carouselApi]);

  return (
    <section className="relative min-h-[150vh] sm:min-h-screen pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.2),transparent_60%)] z-10 pointer-events-none"></div>
      {/* Split Background */}
      <div className="absolute inset-0 z-0 flex flex-col lg:grid lg:grid-cols-[55%_45%] h-auto min-h-[200vh] sm:min-h-screen">
        {/* Left Side (with Grid) */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#07111a] via-[#0b1622] to-[#09121a] h-[70vh] lg:h-full w-full">
          <img
            src={grid}
            alt="Grid Background"
            className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/20 z-10" />
        </div>

        {/* Right Side (dynamic background image) */}
        <div className="relative overflow-hidden h-[80vh] sm:h-[60vh] lg:h-full w-full">
          <img
            src={currentBg}
            alt="Travel"
            className="w-full h-full object-cover transition-all duration-700 ease-in-out blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white/25 via-white/10 to-transparent" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="w-full pl-[5%] md:pl-[4%] lg:pl-[5%] xl:pl-[6%] relative z-20">
        <div className="flex flex-col lg:grid lg:grid-cols-[55%_45%] gap-8 items-center min-h-[95vh] sm:min-h-[95vh] lg:min-h-[calc(100vh-5rem)] pt-6 sm:pt-12 lg:pt-0">
          <div className="container pt-12 sm:pt-16 pb-8 lg:py-24 w-[100%]">
            <h1 className="font-inter font-bold text-[8vw] sm:text-[6vw] md:text-[5.5vw] lg:text-[4.5vw] xl:text-[4vw] text-white mb-6 sm:mb-8 leading-tight">
              <div className="mb-2 sm:mb-2">Enjoy Your</div>
              <div className="mb-2 sm:mb-2">Vacation With</div>
              <div>
                <span className="text-[#FF5A2D]">Hop N Go</span> Travel
              </div>
            </h1>
            <p className="font-inter text-white/80 text-xs sm:text-[1.1vw] lg:text-[1vw] xl:text-[1.2vw] mb-6 sm:mb-8 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[90%] xl:max-w-[80%] leading-relaxed">
              With Hop N Go, you can explore incredible places with effortless
              planning and breathtaking views that make every moment unforgettable.
            </p>

            <div className="flex flex-row items-center gap-4 sm:gap-[0.5vw] w-full max-w-[90%] flex-nowrap">
              <Button
                size="lg"
                className="bg-[#F74A1F] hover:opacity-90 text-[#0C111F] font-semibold pr-[2.5vw] sm:pr-[2.5vw] pl-[1.2vw] py-[0.8vw] rounded-full shadow-[0_20px_40px_rgba(255,90,45,0.18)] flex items-center relative w-auto min-w-[140px] sm:min-w-[160px] lg:min-w-[12vw] text-xs sm:text-sm lg:text-[0.9vw] xl:text-[0.9vw] min-h-[40px] sm:min-h-[44px]"
              >
                <span className="mr-[1.5vw] ml-0.5 flex-shrink-0">Create Itineraries</span>
                <span className="w-[1.2vw] h-[1.2vw] min-w-[16px] min-h-[16px] sm:min-w-[20px] sm:min-h-[20px] rounded-full bg-white flex items-center justify-center absolute right-[1vw] top-1/2 -translate-y-1/2">
                  <ChevronRight className="w-[0.8vw] h-[0.8vw] min-w-[12px] min-h-[12px] text-[#F74A1F]" />
                </span>
              </Button>

              <button className="group flex items-center gap-[0.5vw] text-white rounded-full px-[0.8vw] py-[0.5vw] backdrop-blur-sm hover:bg-white/10 text-xs sm:text-sm lg:text-[0.9vw] xl:text-[0.9vw] whitespace-nowrap">
                <span className="w-[2.5vw] h-[2.5vw] min-w-[32px] min-h-[32px] sm:min-w-[40px] sm:min-h-[40px] rounded-full bg-white/20 flex items-center justify-center">
                  <span className="w-[1.8vw] h-[1.8vw] min-w-[24px] min-h-[24px] sm:min-w-[28px] sm:min-h-[28px] rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Play className="w-[0.8vw] h-[0.8vw] min-w-[12px] min-h-[12px] text-[#FF5A2D] fill-[#FF5A2D]" />
                  </span>
                </span>
                <span>Play Video</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="absolute bottom-64 md:bottom-8 left-1/2 -translate-x-1/2 lg:left-[calc(55%_-_48px)] -translate-x-1/2 lg:translate-x-0 flex flex-col items-center gap-2 cursor-pointer focus:outline-none z-30"
          aria-label="Scroll down"
        >
          {/* Rotating ring with text and inner orange button */}
          <div className="relative w-[96px] h-[96px] flex items-center justify-center">
            {/* Outer rotating SVG ring with circular text */}
            <svg viewBox="0 0 106 106" className="absolute inset-0 w-full h-full z-10 pointer-events-none">
              <defs>
                  {/* Reduce the path radius more (36 instead of 40) so 'see more' sits slightly more inward away from the border */}
                  <path id="seeMorePath" d="M53 17a36 36 0 1 1 0 72 36 36 0 1 1 0-72" />
              </defs>
              {/* Border ring */}
              <circle cx="53" cy="53" r="50" className="stroke-white/20 fill-[#0C111F]" strokeWidth="1.6" />
              {/* Rotating group contains only text to rotate around the ring */}
              <g className="animate-[spin_8s_linear_infinite]" style={{ transformOrigin: '53px 53px' }}>
                <text fill="#ffffff" opacity="0.95" fontSize="12" fontWeight={500} className="tracking-widest">
                  <textPath href="#seeMorePath" startOffset="0">
                    • see more • see more • see more
                  </textPath>
                </text>
              </g>
            </svg>

            {/* Inner orange button (stationary) */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF7A3D] to-[#FF5A2D] flex items-center justify-center shadow-2xl z-20">
              <ArrowDown className="w-6 h-6 text-[#0C111F]" />
            </div>
          </div>
        </button>
      </div>

      {/* Carousel */}
      <div className="lg:absolute inset-y-0 right-0 lg:mr-[-100px] flex items-start sm:items-center justify-center z-20 pointer-events-auto w-full lg:w-auto h-[40vh] sm:h-[45vh] lg:h-full -mt-36 sm:-mt-0 lg:mt-0 pl-5 sm:pl-10 lg:pl-0">
        <div className="w-full h-auto max-w-full lg:w-[68vw] lg:max-w-[560px] overflow-visible relative">
          <Carousel
            setApi={(api) => setCarouselApi(api)}
            className="w-full"
            opts={{ loop: false, align: "start", dragFree: false, containScroll: "keepSnaps" }}
          >
            <CarouselContent className="py-2 sm:py-4 h-full flex items-center">
              {destinations.map((destination, idx) => (
                <CarouselItem
                  key={destination.id}
                  className={[
                    "transition-all duration-300",
                    selectedIndex === idx ? "scale-100 opacity-100" : "scale-95 opacity-90",
                    idx === destinations.length - 1 ? (selectedIndex === idx ? "pr-0" : "pr-0") : "mr-4",
                    selectedIndex === destinations.length - 1 && idx === destinations.length - 2 ? "opacity-0 pointer-events-none" : "",
                    selectedIndex === destinations.length - 1 && idx === destinations.length - 1 ? "-ml-16" : "",
                    selectedIndex === 0 && idx < selectedIndex ? "hidden" : ""
                  ].join(" ")}
                  style={{
                    ...(window.innerWidth < 640 ? { flex: "0 0 85%" } : { flex: "0 0 75%" }),
                    ...(window.innerWidth >= 640 && { flexBasis: "70%" }),
                    ...(window.innerWidth >= 1024 && { 
                      flexBasis: "65%",
                      ...(selectedIndex === destinations.length - 1 && idx === destinations.length - 1 && { marginLeft: "-12rem" })
                    })
                  }}>
                    <div className="relative">
                    <div className="bg-white rounded-[28px] overflow-hidden shadow-lg w-full h-[400px] sm:h-[440px] flex flex-col transition-all">
                      {/* Card Image and Info */}
                      <div className="relative h-64 overflow-hidden group rounded-t-[28px]">
                        <img
                          src={destination.image}
                          alt={destination.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg bg-white/20 backdrop-blur-sm">
                          <span className="w-6 h-6 rounded-full bg-[#FF7A3D] flex items-center justify-center">
                            <Star className="w-3 h-3 text-white fill-white" />
                          </span>
                          <span className="text-white">{destination.rating}</span>
                        </div>
                        <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-white flex items-center gap-2 shadow-lg">
                          <MapPin className="w-4 h-4 text-primary text-white" />
                          {destination.location}
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

                      <div className="p-5 flex-1 flex flex-col bg-white rounded-b-[28px]">
                        <h3 className="font-display font-bold text-2xl text-gray-900 mb-1">
                          {destination.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-2 font-normal">
                          {destination.description}
                        </p>
                        <span className="text-[#FF5A2D] font-normal cursor-pointer text-sm mb-3">
                          Explore More
                        </span>

                        <div className="flex items-end justify-between mt-auto">
                          <div>
                            <p className="text-gray-500 text-xs mb-1 font-medium">Price</p>
                            <p className="font-display font-bold text-xl text-gray-900">
                              {destination.price}
                              <span className="text-sm text-gray-500 font-normal">/Person</span>
                            </p>
                          </div>
                          <Button className="bg-gradient-to-r from-[#FF5A2D] to-[#FF7A3D] hover:opacity-90 text-white rounded-full px-4 py-2 text-sm font-medium shadow-md transition-opacity">
                            View More
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Floating next arrow - Only show if not the last card */}
                    {selectedIndex === idx && selectedIndex < destinations.length - 1 && (
                      <div className="absolute right-[-28px] top-1/2 -translate-y-1/2 rounded-full w-16 h-16 flex items-center justify-center">
                        {/* Glass white border layer */}
                        <div className="absolute inset-0 rounded-full bg-white/50 backdrop-blur-sm pointer-events-none"></div>
                        <button
                          onClick={() => carouselApi?.scrollNext()}
                          className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#FF7A3D] to-[#FF5A2D] flex items-center justify-center shadow-2xl z-40"
                        >
                          <ArrowRight className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Horizontal Menu Bar */}
            <div className="flex justify-center items-center gap-4 mt-6 mb-4">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    carouselApi?.scrollTo(index);
                    setSelectedIndex(index);
                  }}
                  className={`w-3 h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === index ? 'w-8 bg-white' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Floating previous arrow */}
            {selectedIndex !== 0 && (
              <div className="absolute left-[-28px] top-52 md:top-60 -translate-y-1/2 w-16 h-16 flex items-center justify-center">
                {/* Glass border layer */}
                <div className="absolute inset-0 rounded-full bg-white/50 backdrop-blur-sm pointer-events-none"></div>

                {/* Previous Button */}
                <button
                  onClick={() => carouselApi?.scrollPrev()}
                  className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-2xl z-40 text-black hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black"
                >
                  <ArrowRight className="w-5 h-5 text-black rotate-180" />
                </button>
              </div>
            )}

          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;
