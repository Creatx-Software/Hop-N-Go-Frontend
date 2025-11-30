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
      image: "/dal-lake.jpg",
      duration: "3 Days",
      price: "$450",
    },
    {
      id: 2,
      name: "Trekking the Great Lakes",
      image: "/great-lakes.jpg",
      duration: "5 Days",
      price: "$750",
    },
    {
      id: 3,
      name: "Cultural Heritage Tour",
      image: "/cultural-heritage.jpg",
      duration: "4 Days",
      price: "$600",
    },
  ];


  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="w-full h-9 bg-[#FFC8BB]/30 relative z-10">
        <div className="container mx-auto h-full flex items-center justify-center px-6 text-xs md:text-sm text-[#170F49] font-normal">
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-20">
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
<section className="relative mt-16">
  {/* Hero Image Wrapper */}
  <div
    className="relative w-full mx-auto bg-no-repeat bg-center bg-contain"
    style={{
      backgroundImage: `url(${destiHero})`,
      minHeight: '640px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingTop: '100px',
      boxSizing: 'border-box'
    }}
  >
    {/* Hero Content */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-6xl mx-auto -mt-16">
      <div className="bg-transparent border border-white text-[#F74A1F] text-sm font-inter font-medium px-4 py-2 rounded-full mb-6 inline-flex items-center">
        AI Powered Travel Planning
      </div>
      <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-white via-white to-[#FF481A] bg-clip-text text-transparent">
        Create Your Perfect Travel Itinerary
      </h1>
      <p className="text-xl mb-6 max-w-lg mx-auto text-white">
        Transform travel inspiration into detailed itineraries with AI assistance and your creative vision
      </p>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl shadow-xl flex flex-row items-center justify-between overflow-hidden p-10 border border-gray-200">
        
        {/* Destinations */}
        <div className="flex-1 flex flex-col items-start justify-center pr-6">
          <label className="text-sm font-medium text-gray-500 mb-1 ml-[0.5rem]">
            Destinations
          </label>
          <div className="flex items-center bg-[#F3F3F4] rounded-[7px] p-3 pl-4 w-full">
            <input type="text" placeholder="Japan" className="w-full border-0 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500 text-base pl-0"/>
            <MapPin className="w-5 h-5 text-gray-500 mr-3" />
          </div>
        </div>
        
        {/* Check In */}
        <div className="flex-1 flex flex-col items-start justify-center px-6">
          <label className="text-sm font-medium text-gray-500 mb-1 ml-[0.5rem]">Check In</label>
          <div className="flex items-center bg-[#F3F3F4] rounded-[7px] p-3 pl-4 w-full">
            <input type="date" className="w-full border-0 bg-transparent focus:outline-none text-gray-700 text-base pl-0"/>
          </div>
        </div>
        
        {/* Guest */}
        <div className="flex-1 flex flex-col items-start justify-center px-6">
          <label className="text-sm font-medium text-gray-500 mb-1 ml-[0.5rem]">Guest</label>
          <div className="flex items-center bg-[#F3F4F6] rounded-[7px] p-3 pl-4 w-full">
            <input type="text" placeholder="+ Add Guest" className="w-full border-0 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500 text-base pl-0"/>
            <UserRound className="w-5 h-5 text-gray-500 mr-3" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 ml-12 mt-6">
          <Button variant="outline" className="bg-[#F74A1F] hover:bg-[#F74A1F]/90 px-6 py-6 rounded-[7px] font-medium h-[28px] flex items-center justify-center text-white">
              Search
              <Search className="w-5 h-5 ml-4" />
          </Button>
          <Button className="bg-gradient-to-r from-[#F9AC7D] to-[#F53900] hover:opacity-90 text-white px-6 py-6 rounded-[7px] font-medium h-[28px] flex items-center justify-center border-0">
              Create Itineraries
              <ChevronRight className="w-5 h-5 ml-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>

  {/* Stats */}
  <div className="flex flex-wrap justify-start gap-10 -mt-16 ml-6">
    {stats.map((stat, index) => (
      <div key={index} className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-black">{stat.value}</span>
        <span className="text-base text-gray-700">{stat.label}</span>
      </div>
    ))}
  </div>
</section>

      {/* Animated Destination Cards */}
      <section className="py-12 bg-white overflow-hidden">
        <AnimatedDestinationCards />
      </section>

      {/* Popular Destinations */}
<section className="py-20 bg-gray-50 -mt-28">
  <div className="container mx-auto px-5">
    <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-4">
      <div className="md:w-1/2">
        <h2 className="font-inter text-md text-[#0C111F] font-normal mb-4">[Popular Destinations]</h2>
        <p className="font-inter text-5xl font-semibold text-[#0C111F] text-left">
          A unique blend of adventure, culture and natural wonders
        </p>
      </div>
      <div className="md:w-1/2 flex justify-end mt-0">
        <p className="font-inter font-regular text-lg text-[#98A2B3] max-w-md text-left mt-14">
          Discover a fussion of adventure, culture and scenic beauty across our diverse destinations, offering unforgettanble experince at every turn.
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-6">
      {/* First Row */}
      <div className="flex gap-6">
        {popularDestinations.slice(0, 2).map((destination, index) => (
          <Card key={destination.id} className={`relative overflow-hidden group rounded-3xl cursor-pointer bg-transparent ${index === 0 ? 'w-[805px] h-[371px]' : 'w-[525px] h-[371px]'}`}>
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
                  <div className="w-full p-8 rounded-3xl bg-white/20 backdrop-blur-xl">
                    <h3 className="text-5xl font-inter font-medium text-white mb-4">
                      {destination.name}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed font-inter font-normal">
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
                  <div className="w-full p-8 rounded-3xl bg-white/20 backdrop-blur-xl transition-all duration-500 translate-y-64 group-hover:translate-y-0">
                    <h3 className="text-5xl font-inter font-medium text-white mb-4">
                      {destination.name}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed font-inter font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {destination.description}
                    </p>
                  </div>
                </div>
                {/* Title only overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-5xl font-inter font-medium text-white">
                    {destination.name}
                  </h3>
                </div>
              </>
            )}
          </Card>
        ))}
      </div>
      
      {/* Second Row */}
      <div className="flex gap-6">
        {popularDestinations.slice(2).map((destination, index) => (
          <Card key={destination.id} className={`relative overflow-hidden group rounded-3xl cursor-pointer bg-transparent ${index === 0 ? 'w-[558px] h-[371px]' : 'w-[772px] h-[371px]'}`}>
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute top-5 right-5 z-20 w-12 h-12 rounded-full bg-transparent border-2 border-white/70 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:bg-white group-hover:text-black">
              <ArrowRight className="w-6 h-6 text-white group-hover:text-black" />
            </div>
            <div className="absolute bottom-0 left-0 w-full px-3 pb-3">
              <div className="w-full p-8 rounded-3xl bg-white/20 backdrop-blur-xl transition-all duration-500 translate-y-64 group-hover:translate-y-0">
                <h3 className="text-5xl font-inter font-medium text-white mb-4">
                  {destination.name}
                </h3>
                <p className="text-white/90 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {destination.description}
                </p>
              </div>
            </div>
            {/* Title only overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-5xl font-inter font-medium text-white">
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
      <section className="py-20 bg-white">
  <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

    {/* Section Header */}
    <div className="mb-12">
      <div className="mb-8">
        <h2 className="font-inter font-bold text-4xl md:text-5xl text-foreground mb-2">
          Best Destinations
        </h2>
        <p className="text-muted-foreground text-lg">
          We've selected some of the top spots around the world to inspire your next adventure.
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
            className={`text-sm font-Roboto font-medium cursor-pointer transition-colors ${
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose our range of expertly crafted packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden group">
                <div className="relative h-64">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                    {pkg.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DestinationPage;
