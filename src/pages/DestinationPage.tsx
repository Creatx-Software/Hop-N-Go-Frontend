import { Search, MapPin, Calendar, Plane, Clock, Star, Play, Mail, UserRound, ChevronRight, ChevronLeft } from "lucide-react";
import AnimatedDestinationCards from "@/components/AnimatedDestinationCards";
import LanguageDropdown from "@/components/LanguageDropdown";
import { useState } from "react";
import destiHero from "@/assets/destiHero.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import srinagar from "@/assets/p1.png";
import gulmarg from "@/assets/p2.png";
import sensoji from "@/assets/p3.png";
import osakaCastle from "@/assets/p4.png";

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
      location: "Kashmir, India",
      price: "$1200",
    },
    {
      id: 2,
      name: "Gulmarg",
      image: gulmarg,
      location: "Kashmir, India",
      price: "$1500",
    },
    {
      id: 3,
      name: "Sensoji",
      image: sensoji,
      location: "Tokyo, Japan",
      price: "$2000",
    },
    {
      id: 4,
      name: "Osaka Castle",
      image: osakaCastle,
      location: "Osaka, Japan",
      price: "$1800",
    },
  ];

  const bestDestinations = [
    {
      id: 1,
      name: "Bangkok",
      image: "/bangkok.jpg",
      location: "Thailand",
      price: "$1200",
      duration: "5 Days",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Tokyo",
      image: "/tokyo.jpg",
      location: "Japan",
      price: "$2500",
      duration: "7 Days",
      rating: 4.9,
    },
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
<section className="py-20 bg-gray-50 -mt-20">
  <div className="container mx-auto px-5">
    <div className="text-left mb-16">
      <h2 className="font-inter text-md text-[#0C111F] font-normal mb-4">[Popular Destinations]</h2>
      <p className="font-inter text-5xl font-semibold text-[#0C111F] max-w-2xl text-left">
        A unique blend of adventure, culture and natural wonders
      </p>
    </div>

    <div className="flex flex-wrap gap-x-6 gap-y-6 justify-start">
      {popularDestinations.map((destination, index) => {
        // Example custom sizes for each card
        let cardClass = '';
        if (index === 0) cardClass = 'w-[805px] h-[371px]';
        else if (index === 1) cardClass = 'w-[525px] h-[371px]';
        else if (index === 2) cardClass = 'w-[558px] h-[371px]';
        else if (index === 3) cardClass = 'w-[772px] h-[371px]';

        return (
          <Card key={destination.id} className={`overflow-hidden group relative ${cardClass}`}>
            <div className="relative w-full h-full">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
                <div className="flex items-center text-white text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {destination.location}
                </div>
                <div className="mt-3 text-lg font-bold text-white">{destination.price}</div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  </div>
</section>


      {/* Best Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Best Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our top-rated destinations for an unforgettable experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {bestDestinations.map((destination, index) => {
              // Define dimensions based on card position
              let cardClass = '';
              if (index === 0) cardClass = 'h-[371px] w-[805px]';
              else if (index === 1) cardClass = 'h-[371px] w-[525px]';
              else if (index === 2) cardClass = 'h-[371px] w-[538px]';
              else if (index === 3) cardClass = 'h-[371px] w-[772px]';
              
              return (
                <div key={destination.id} className={`relative group overflow-hidden rounded-xl ${cardClass}`}>
                  <div className="relative w-full h-full">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full">
                          <Clock className="w-4 h-4 mr-1" />
                          {destination.duration}
                        </div>
                        <div className="flex items-center bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full">
                          <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
                          {destination.rating}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                      <div className="flex items-center text-white/80 mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        {destination.location}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-white">{destination.price}</div>
                        <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
