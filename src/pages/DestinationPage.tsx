import { Search, MapPin, Calendar, Plane, Clock, Star, Play, Mail, UserRound, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import AnimatedDestinationCards from "@/components/AnimatedDestinationCards";
import LanguageDropdown from "@/components/LanguageDropdown";
import { useState } from "react";
import destiHero from "@/assets/destiHero.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import BestDestinationCard from "@/components/BestDestinationCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import srinagar from "@/assets/p1.png";
import gulmarg from "@/assets/p2.png";
import sensoji from "@/assets/p3.png";
import osakaCastle from "@/assets/p4.png";
import dubai from "@/assets/best1.png";
import bangkok from "@/assets/best2.png";
import tokyo from "@/assets/best3.png";
import package1 from "@/assets/package1.png";
import package2 from "@/assets/package2.png";
import package3 from "@/assets/package3.png";

const DestinationPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const stats = [
    { value: "100K+", label: "Happy Customers" },
    { value: "150+", label: "Best Destinations" },
    { value: "95%", label: "Customer Satisfaction" },
  ];

  const popularDestinations = [
    {
      id: 1,
      name: "Srinagar",
      image: srinagar,
      description: "Experience the serene beauty of Srinagar with its stunning lakes and vibrant culture.",
    },
    {
      id: 2,
      name: "Gulmarg",
      image: gulmarg,
      description: "Discover the breathtaking landscapes of Gulmarg, a paradise for nature lovers and adventure seekers.",
    },
    {
      id: 3,
      name: "Senso ji",
      image: sensoji,
      description: "Explore the historic Sensoji Temple in Tokyo, a blend of tradition and modernity in Japan's bustling capital.",
    },
    {
      id: 4,
      name: "Osaka Castle",
      image: osakaCastle,
      description: "Visit the iconic Osaka Castle, a symbol of Japan's rich history and architectural grandeur.",
    },
  ];

  const bestDestinations = [
    {
      image: dubai,
      title: "Dubai",
      rating: 4.8,
      location: "Australia",
      price: "$ 1,799,000",
      description: "A modern city known for tall skyscrapers, luxury malls, and beautiful desert views..."
    },
    {
      image: bangkok,
      title: "Bangkok",
      rating: 4.9,
      location: "Vietnam",
      price: "$ 1,799,000",
      description: "A vibrant city famous for its temples, street food, and rich cultural experiences..."
    },
    {
      image: tokyo,
      title: "Tokyo",
      rating: 4.7,
      location: "Japan",
      price: "$ 1,799,000",
      description: "A bustling metropolis blending the ultramodern and the traditional, from skyscrapers to temples..."
    }
  ];


  const packages = [
    {
      id: 1,
      name: "Serene Shikara Rides on Dal Lake",
      image: package1,
      duration: "5 Days, 4 Nights",
      price: "$350/Night",
      description: "Mesmerizing experience on the tranquil waters of Dal Lake, exploring Srinagar’s floating gardens, houseboats, and majestic mountain views."
    },
    {
      id: 2,
      name: "Trekking the Great Lakes",
      image: package2,
      duration: "5 Days, 4 Nights",
      price: "$350/Night",
      description: "An adventurous trek through the breathtaking Great Lakes region, witnessing pristine alpine lakes, lush meadows, and panoramic Himalayan vistas."
    },
    {
      id: 3,
      name: "Snow-Capped Gulmarg Getaway",
      image: package3,
      duration: "5 Days, 4 Nights",
      price: "$350/Night",
      description: "A winter wonderland experience in Gulmarg, indulging in skiing, snowboarding, and cozying up in charming mountain lodges."
    },
  ];


  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      <div className="w-screen h-9 bg-[#FFC8BB]/30 relative z-10 overflow-x-hidden">
        <div className="w-full max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 md:px-6 text-xs md:text-sm text-[#170F49] font-normal">
          <div className="flex-1 flex items-center justify-center space-x-4 md:space-x-20">
            <span className="text-[#6F6C8F]">🚀 Black Friday Sale</span>
            <a href="#" className="flex items-center hover:underline">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1" viewBox="0 0 20 20" fill="#170F49">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="ml-auto flex items-center space-x-6">
            <a href="mailto:hopngoinfo@gmail.com" className="hover:underline flex items-center text-[#6E7070]">
              <Mail className="w-3.5 h-3.5 mr-1.5 text-[#6E7070]" />
              hopngoinfo@gmail.com
            </a>
            <LanguageDropdown />
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative mt-10 md:mt-16 bg-white">
        <div className="relative w-full">
          {/* Hero Image Wrapper */}
          <div 
            className="relative w-full mx-auto -mt-12 md:mt-0"
            style={{
              backgroundImage: `url(${destiHero})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center 25%',
              backgroundRepeat: 'no-repeat',
              minHeight: '60vh',
              maxHeight: '600px',
              aspectRatio: '16/9',
              position: 'relative',
              zIndex: 1
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-transparent z-0"></div>
            
            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center md:justify-start md:pt-12 text-center text-white w-full h-full px-4">
          <div className="bg-transparent border border-white text-[#F74A1F] text-xs md:text-sm font-inter font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-0 md:mb-6 mt-24 md:mt-0 inline-flex items-center">
            AI Powered Travel Planning
          </div>
          <h1 className="font-inter font-semibold mb-0 md:mb-4">
            <div className="text-xl md:text-7xl bg-gradient-to-r from-white via-white to-[#FF481A] bg-clip-text text-transparent">
              Create Your Perfect Travel
            </div>
            <div className="text-xl md:text-7xl bg-gradient-to-r from-white via-white to-[#FF481A] bg-clip-text text-transparent">
              Itinerary
            </div>
          </h1>
          <p className="text-sm md:text-xl mb-6 max-w-lg mx-auto text-white font-inter font-medium">
            Transform travel inspiration into detailed itineraries with AI assistance and your creative vision
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between overflow-hidden p-4 sm:p-6 md:p-8 border border-gray-200 w-full max-w-5xl lg:max-w-6xl mx-auto min-h-[200px] sm:min-h-0 mt-8 sm:mt-0">
            {/* Destinations */}
            <div className="w-[50%] sm:w-full lg:w-1/4 flex flex-col items-start mb-3 sm:mb-4 lg:mb-0 lg:pr-4 ml-0 sm:mx-auto">
              <label className="text-xs sm:text-sm font-inter font-medium text-gray-500 mb-1 ml-2">
                Destinations
              </label>
              <div className="flex items-center bg-[#F3F3F4] rounded-[7px] p-2 sm:p-3 w-full">
                <input type="text" placeholder="Japan" className="w-full border-0 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500 text-sm sm:text-base font-inter font-normal"/>
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 ml-2" />
              </div>
            </div>
        
            {/* Check In */}
            <div className="w-[50%] sm:w-full lg:w-1/4 flex flex-col items-start mb-3 sm:mb-4 lg:mb-0 lg:px-2 ml-0 sm:mx-auto">
              <label className="text-xs sm:text-sm font-inter font-medium text-gray-500 mb-1 ml-2">Check In</label>
              <div className="flex items-center bg-[#F3F3F4] rounded-[7px] p-2 sm:p-3 w-full">
                <input type="date" className="w-full border-0 bg-transparent focus:outline-none text-gray-700 text-sm sm:text-base font-inter font-normal"/>
              </div>
            </div>
        
            {/* Guest */}
            <div className="w-[50%] sm:w-full lg:w-1/4 flex flex-col items-start mb-4 sm:mb-6 lg:mb-0 lg:px-2 ml-0 sm:mx-auto">
              <label className="text-xs sm:text-sm font-inter font-medium text-gray-500 mb-1 ml-2">Guest</label>
              <div className="flex items-center bg-[#F3F4F6] rounded-[7px] p-2 sm:p-3 w-full">
                <input type="text" placeholder="+ Add Guest" className="w-full border-0 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500 text-base font-inter font-normal"/>
                <UserRound className="w-5 h-5 text-gray-500 ml-2" />
              </div>
            </div>

            {/* Buttons */}
            <div className="w-full lg:w-auto flex flex-col items-end lg:items-start lg:flex-row gap-8 sm:gap-4 lg:gap-6 lg:ml-4 -mt-40 lg:mt-6">
                <Button variant="outline" className="w-[45%] sm:w-auto bg-[#F74A1F] hover:bg-[#F74A1F]/90 px-3 sm:px-6 py-6 rounded-[7px] font-inter font-semibold h-[28px] flex items-center justify-center text-white">
                  Search
                  <Search className="w-5 h-5 ml-2 sm:ml-4" />
                </Button>
                <Button className="w-[45%] sm:w-auto bg-gradient-to-r from-[#F9AC7D] to-[#F53900] hover:opacity-90 text-white px-3 sm:px-6 py-3 sm:py-6 rounded-[7px] font-inter font-normal h-auto sm:h-[28px] flex items-center justify-center border-0">
                  <div className="flex flex-col sm:flex-row items-center">
                    <span className="text-sm sm:text-base">Create</span>
                    <span className="text-sm sm:text-base sm:ml-1">Itineraries</span>
                  </div>
                  <ChevronRight className="w-5 h-5 ml-2 sm:ml-4" />
                </Button>
              </div>
            </div>
          </div>
          {/* Stats */}
          <div className="flex flex-nowrap overflow-x-auto gap-6 sm:gap-10 -mt-0 sm:-mt-16 ml-4 sm:ml-16 pb-2 sm:pb-0 hide-scrollbar">
            {stats.map((stat, index) => (
              <div key={index} className="flex-shrink-0 flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-2">
                <span className="text-sm sm:text-2xl font-Plus Jakarta Sans font-semibold text-black text-center sm:text-left">{stat.value}</span>
                <span className="text-xs sm:text-base text-black font-Plus Jakarta Sans font-normal text-center sm:text-left">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Animated Destination Cards */}
      <section className="relative py-12 bg-white overflow-visible mt-16 md:mt-0">
        {/* Background container for the section - extended vertically */}
        <div className="absolute inset-0 -top-24 -bottom-24 overflow-hidden pointer-events-none mt-16 md:mt-0">
          {/* Left soft pink half-circle - more transparent and blurred */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[400px] -translate-x-1/3 z-0">
            <div className="w-full h-full bg-gradient-to-r from-pink-300/40 via-pink-500/20 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          {/* Right soft pink half-circle - more transparent and blurred */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[400px] translate-x-1/3 z-0">
            <div className="w-full h-full bg-gradient-to-l from-pink-300/40 via-pink-500/20 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>
        
        {/* Content with higher z-index */}
        <div className="relative z-10">
          <AnimatedDestinationCards />
        </div>
      </section>

      {/* Popular Destinations */}
<section className="pt-0 pb-16 bg-white">
  <div className="container mx-auto px-5">
    <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-4">
      <div className="md:w-1/2">
        <h2 className="font-inter text-md text-[#0C111F] font-normal mb-4">[Popular Destinations]</h2>
        <p className="font-inter text-4xl md:text-5xl font-semibold text-[#0C111F] text-left">
          A unique blend of adventure, culture and natural wonders
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-end mt-6 md:mt-0">
        <p className="font-inter font-regular text-md text-[#98A2B3] max-w-md text-left md:mt-16">
          Discover a fussion of adventure, culture and scenic beauty across our diverse destinations, offering unforgettanble experince at every turn.
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-6">
      {/* First Row */}
      <div className="flex flex-col md:flex-row gap-6">
        {popularDestinations.slice(0, 2).map((destination, index) => (
          <Card key={destination.id} className={`relative overflow-hidden group rounded-3xl cursor-pointer bg-transparent ${index === 0 ? 'w-full md:w-[805px] h-[250px] md:h-[371px]' : 'w-full md:w-[525px] h-[250px] md:h-[371px]'}`}>
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            {index === 0 ? (
              // First card - static with always visible content
              <>
                <div className="absolute top-5 right-5 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div className="absolute bottom-0 left-0 w-full px-3 pb-3">
                  <div className="w-full p-4 md:p-8 rounded-3xl bg-white/20 backdrop-blur-xl">
                    <h3 className="text-3xl md:text-5xl font-inter font-medium text-white mb-2 md:mb-4">
                      {destination.name}
                    </h3>
                    <p className="text-white/90 text-sm md:text-lg leading-relaxed font-inter font-normal">
                      {destination.description}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              // Other cards - with hover effects
              <>
                <div className="absolute top-5 right-5 z-20 w-12 h-12 rounded-full bg-transparent border-2 border-white/70 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:bg-white group-hover:text-black">
                  <ArrowRight className="w-6 h-6 text-white group-hover:text-black" />
                </div>
                <div className="absolute bottom-0 left-0 w-full px-3 pb-3">
                  <div className="w-full p-4 md:p-8 rounded-3xl bg-white/20 backdrop-blur-xl transition-all duration-500 translate-y-64 group-hover:translate-y-0">
                    <h3 className="text-3xl md:text-5xl font-inter font-medium text-white mb-2 md:mb-4">
                      {destination.name}
                    </h3>
                    <p className="text-white/90 text-sm md:text-lg leading-relaxed font-inter font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {destination.description}
                    </p>
                  </div>
                </div>
                {/* Title only overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-3xl md:text-5xl font-inter font-medium text-white">
                    {destination.name}
                  </h3>
                </div>
              </>
            )}
          </Card>
        ))}
      </div>
      
      {/* Second Row */}
      <div className="flex flex-col md:flex-row gap-6">
        {popularDestinations.slice(2).map((destination, index) => (
          <Card key={destination.id} className={`relative overflow-hidden group rounded-3xl cursor-pointer bg-transparent ${index === 0 ? 'w-full md:w-[558px] h-[250px] md:h-[371px]' : 'w-full md:w-[772px] h-[250px] md:h-[371px]'}`}>
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute top-5 right-5 z-20 w-12 h-12 rounded-full bg-transparent border-2 border-white/70 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:bg-white group-hover:text-black">
              <ArrowRight className="w-6 h-6 text-white group-hover:text-black" />
            </div>
            <div className="absolute bottom-0 left-0 w-full px-3 pb-3">
              <div className="w-full p-4 md:p-8 rounded-3xl bg-white/20 backdrop-blur-xl transition-all duration-500 translate-y-64 group-hover:translate-y-0">
                <h3 className="text-3xl md:text-5xl font-inter font-medium text-white mb-2 md:mb-4">
                  {destination.name}
                </h3>
                <p className="text-white/90 text-sm md:text-lg font-inter font-normal leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {destination.description}
                </p>
              </div>
            </div>
            {/* Title only overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-2xl md:text-5xl font-inter font-medium text-white">
                {destination.name}
              </h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Best Destinations */}
      <section className="relative pt-4 pb-12 bg-white overflow-visible">
        {/* Extended pink gradient for left */}
        <div className="absolute -top-8 -left-64 w-[800px] h-[700px] z-0">
          <div className="w-full h-full bg-gradient-to-br from-pink-400/50 via-pink-300/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Extended pink gradient for right */}
        <div className="absolute top-1/2 -right-80 w-[700px] h-[350px] z-0 -translate-y-1/5">
          <div className="w-full h-full bg-gradient-to-br from-pink-400/50 via-pink-300/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

    {/* Section Header */}
    <div className="mb-12">
      <div className="mb-8">
        <h2 className="font-inter font-bold text-4xl text[#0C111F] md:text-5xl text-foreground mb-6">
          Best Destinations
        </h2>
        <p className="text-muted-foreground text-md text-left max-w-2xl font-inter font-regular">
          <span className="hidden md:block">We've selected some of the top spots around the world to<br/>inspire your next adventure.</span>
          <span className="md:hidden">We've selected some of the top spots around the world to inspire your next adventure.</span>
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-6">
        {[
          "Recommended",
          "Top Rated",
          "Popular",
          "Most Visited",
          "Trending Now",
          "Budget Friendly",
          "Luxury Picks",
          "Family Friend"
        ].map((tab) => (
          <span
            key={tab}
            className={`text-sm font-Roboto font-semibold cursor-pointer transition-colors ${
              tab === "Recommended"
                ? 'text-black relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-black after:w-1/2'
                : "text-[#717171] hover:text-black"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>

    {/* Destination Cards */}
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 w-full max-w-7xl">
        {bestDestinations.map((item, index) => (
          <div key={index} className="flex justify-center">
            <BestDestinationCard {...item} />
          </div>
        ))}
      </div>
    </div>

    {/* View More */}
    <div className="text-center">
      <Button
        variant="link"
        className="font-normal text-lg bg-gradient-to-r from-[#F9AC7D] to-[#F53B00] bg-clip-text text-transparent hover:opacity-80 transition-opacity inline-flex items-center"
      >
        View More
        <div className="ml-2 w-5 h-5 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="url(#arrow-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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

      {/* Packages */}
      <section className="relative py-0 overflow-visible bg-white">
        {/* Pink gradient for top left */}
        <div className="absolute -top-20 -left-64 w-[800px] h-[700px] z-0">
          <div className="w-full h-full bg-gradient-to-br from-pink-400/40 via-pink-300/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16">
              <div className="md:w-1/2">
                <h2 className="font-inter text-md text-[#0C111F] font-normal mb-4">[Packages]</h2>
                <p className="font-inter text-4xl md:text-5xl font-semibold text-[#0C111F] text-left mb-6 md:mb-0">
                  Choose our range of expertly crafted packages
                </p>
              </div>
              <div className="md:w-1/2 pt-0 md:pt-16">
                <p className="font-inter font-light text-md text-[#98A2B3] max-w-md md:ml-48">
                  Whether you're seeking awe-inspiring landscapes, thrilling outdoor adventures, or Immerice cultural experiences, Snaeland has the perfect itinerary for you.
                </p>
              </div>
            </div>
          </div>
          
          <div 
            style={{ cursor: 'default' }}
            className="w-full flex flex-nowrap items-center gap-8 overflow-x-auto pb-4 pl-12 pr-12 select-none [&_*]:cursor-default [&>div:first-child]:ml-4 [&>div:last-child]:mr-4"
            onMouseDown={(e) => {
              e.preventDefault();
              const container = e.currentTarget;
              const startX = e.pageX;
              const startScrollLeft = container.scrollLeft;
              
              const mouseMoveHandler = (e: MouseEvent) => {
                e.preventDefault();
                const x = e.pageX;
                const walk = (x - startX) * 2; // Scroll speed
                container.scrollLeft = startScrollLeft - walk;
                // Force cursor style on body and html during drag
                document.documentElement.style.cursor = 'default';
                document.body.style.cursor = 'default';
              };

              const mouseUpHandler = () => {
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
                document.documentElement.style.cursor = '';
                document.body.style.cursor = '';
              };

              // Set cursor on both html and body to be extra sure
              document.documentElement.style.cursor = 'default';
              document.body.style.cursor = 'default';
              
              document.addEventListener('mousemove', mouseMoveHandler);
              document.addEventListener('mouseup', mouseUpHandler, { once: true });
            }}
          >
            {packages.map((pkg, index) => (
              <div 
                key={pkg.id}
                className={`relative flex-shrink-0 transition-all duration-500 ease-in-out ${
                  index === 0 
                    ? 'w-[300px] h-[350px] md:w-[562px] md:h-[593px]' 
                    : 'w-[260px] h-[320px] hover:w-[300px] hover:h-[350px] md:w-[480px] md:h-[499px] md:hover:w-[562px] md:hover:h-[593px]'
                } rounded-3xl overflow-hidden`}
              >
                <div className="relative w-full h-full group overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  
                  {/* Content Container */}
                  <div className={`absolute left-0 right-0 bottom-0 px-8 pb-4 pt-8 transition-all duration-500 ${index !== 0 ? 'md:group-hover:translate-y-0' : ''}`}>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                      {/* Duration */}
                      <div className="bg-gray/40 backdrop-blur-sm text-[#FCFCFD] text-xs md:text-sm font-medium px-4 py-2 rounded-full border border-white/20 inline-flex items-center">
                        {pkg.duration}
                      </div>
                      
                      {/* Price */}
                      <div className="bg-[#F8FAFC] backdrop-blur-sm text-[#1D2939] text-xs md:text-sm font-medium px-4 py-2 rounded-full border border-white/20 inline-flex items-center">
                        {pkg.price}
                        </div>
                      
                      {/* Title */}
                      <h3 className="text-xl md:text-3xl text-white font-['Inter'] font-normal">
                        {pkg.name}
                      </h3>
                      
                      {/* Description - shown only on first card or on hover */}
                      <div className={`text-white/70 text-xs md:text-base leading-relaxed transition-all duration-500 overflow-hidden font-['Inter'] font-normal ${index === 0 ? 'max-h-32' : 'max-h-0 group-hover:max-h-32'}`}>
                        {pkg.description}
                      </div>
                    </div>
                    </div>
                  </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DestinationPage;
