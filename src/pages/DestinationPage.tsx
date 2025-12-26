import { Search, MapPin, Calendar, Plane, Clock, Star, Play, Mail, UserRound, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import AnimatedDestinationCards from "@/components/AnimatedDestinationCards";
import LanguageDropdown from "@/components/LanguageDropdown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSearch = () => {
    navigate('/destination-search');
  };
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
      days: 3,
      nights: 4,
      title: "Dubai",
      rating: 4.8,
      location: "Australia",
      price: "$ 1,799,000",
      description: "A modern city known for tall skyscrapers, luxury malls, and beautiful desert views..."
    },
    {
      image: bangkok,
      days: 3,
      nights: 4,
      title: "Bangkok",
      rating: 4.9,
      location: "Vietnam",
      price: "$ 1,799,000",
      description: "A vibrant city famous for its temples, street food, and rich cultural experiences..."
    },
    {
      image: tokyo,
      days: 3,
      nights: 4,
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
      
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20 bg-white">
        <div className="container relative w-full mx-auto">
          <div className="relative w-full mx-auto">
            {/* Hero Image Wrapper */}
            <div className="relative w-full md:h-[70vh] min-h-[600px] max-h-[1000px] flex items-center justify-center overflow-visible -mt-16 md:mt-0">
              <div className="w-full h-full mx-auto flex items-center justify-center">
                <img 
                  src={destiHero} 
                  alt="Travel Destination"
                  className="h-full w-auto max-w-full object-contain  -mt-64 md:mt-0"
                />
              </div>
              
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 z-0"></div>
              
              {/* Hero Content */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white w-full h-full px-4 -mt-0 md:-mt-10">
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
                <p className="text-xs md:text-xl mb-6 max-w-lg mx-auto text-white font-inter font-medium">
                  Transform travel inspiration into detailed itineraries with AI assistance and your creative vision
                </p>

                {/* Search Bar */}
                <div className="bg-white rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between overflow-hidden p-4 sm:p-6 md:p-8 border border-gray-200 w-full max-w-5xl lg:max-w-6xl mx-auto min-h-0 mt-4 sm:mt-0">
                  {/* Destinations */}
                  <div className="w-full lg:w-1/4 flex flex-col items-start mb-2 sm:mb-4 lg:mb-0 lg:pr-4">
                    <label className="text-xs sm:text-sm font-inter font-medium text-gray-500 mb-1 ml-2">
                      Destinations
                    </label>
                    <div className="flex items-center bg-[#F3F3F4] rounded-[7px] p-2 sm:p-3 w-full">
                      <input type="text" placeholder="Japan" className="w-full border-0 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500 text-sm sm:text-base font-inter font-normal"/>
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 ml-2" />
                    </div>
                  </div>
              
                  {/* Check In */}
                  <div className="w-full lg:w-1/4 flex flex-col items-start mb-2 sm:mb-4 lg:mb-0 lg:px-2">
                    <label className="text-xs sm:text-sm font-inter font-medium text-gray-500 mb-1 ml-2">Check In</label>
                    <div className="flex items-center bg-[#F3F3F4] rounded-[7px] p-2 sm:p-3 w-full">
                      <input type="date" className="w-full border-0 bg-transparent focus:outline-none text-gray-700 text-sm sm:text-base font-inter font-normal"/>
                    </div>
                  </div>
              
                  {/* Guest */}
                  <div className="w-full lg:w-1/4 flex flex-col items-start mb-4 sm:mb-6 lg:mb-0 lg:px-2">
                    <label className="text-xs sm:text-sm font-inter font-medium text-gray-500 mb-1 ml-2">Guest</label>
                    <div className="flex items-center bg-[#F3F4F6] rounded-[7px] p-2 sm:p-3 w-full">
                      <input type="text" placeholder="+ Add Guest" className="w-full border-0 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500 text-base font-inter font-normal"/>
                      <UserRound className="w-5 h-5 text-gray-500 ml-2" />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="w-full lg:w-auto flex flex-col items-end lg:items-start lg:flex-row gap-4 lg:gap-6 lg:ml-4 mt-0 lg:mt-8 min-h-[56px]">
                    <Button 
                      onClick={handleSearch}
                      variant="outline" 
                      className="w-full lg:w-auto bg-[#F74A1F] hover:bg-[#F74A1F]/90 px-6 py-2.5 h-full rounded-[7px] font-inter font-semibold flex items-center justify-center text-white"
                    >
                      Search
                      <Search className="w-5 h-5 ml-2" />
                    </Button>
                    <Button 
                      className="w-full lg:w-auto bg-[#F74A1F] hover:opacity-90 text-white px-6 py-2.5 h-full rounded-[7px] font-inter font-normal flex items-center justify-center border-0"
                      onClick={() => navigate('/itinerary')}
                    >
                      <div className="flex flex-row items-center">
                        <span className="text-sm sm:text-base">Create Itineraries</span>
                      </div>
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="relative z-10 py-4 lg:py-10 mt-0 lg:absolute lg:bottom-4 lg:left-96 lg:-translate-x-1/2">
            <div className="mx-auto px-4">
              <div className="p-4 lg:p-0">
                <div className="grid md:grid-cols-3 gap-3 w-full">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex flex-row items-center justify-center gap-3">
                      <div className="text-2xl font-bold text-[#0C111F]">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Destination Cards */}
      <section className="relative py-12 bg-white overflow-visible md:mt-0">
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
        <div className="container w-full mx-auto md:px-12 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-16 gap-4">
            <div className="w-full md:w-1/2">
              <h2 className="font-inter text-md text-[#0C111F] font-normal mb-4">[Popular Destinations]</h2>
              <p className="font-inter text-4xl md:text-5xl font-semibold text-[#0C111F] text-left">
                A unique blend of adventure, culture and natural wonders
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-end mt-4 md:mt-0">
              <p className="font-inter font-regular text-md text-[#98A2B3] max-w-md text-left md:mt-12">
                Discover a fussion of adventure, culture and scenic beauty across our diverse destinations, offering unforgettable experience at every turn.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 md:gap-6">
            {/* First Row */}
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
              {popularDestinations.slice(0, 2).map((destination, index) => (
                <Card 
                  key={destination.id} 
                  className={`relative overflow-hidden group rounded-3xl cursor-pointer bg-transparent ${
                    index === 0 
                      ? 'w-full md:w-[60%] h-[250px] md:h-[40vh] lg:h-[50vh]' 
                      : 'w-full md:w-[40%] h-[250px] md:h-[40vh] lg:h-[50vh]'
                  }`}
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  { (
                    // Cards - with hover effects
                    <>
                      <div className="absolute top-5 right-5 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-transparent border-2 border-white/70 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:bg-white group-hover:text-black">
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-full px-3 pb-3">
                        <div className="w-full p-4 md:p-6 lg:p-8 rounded-3xl bg-white/20 backdrop-blur-xl transition-all duration-500 translate-y-64 group-hover:translate-y-0">
                          <h3 className="text-2xl md:text-4xl lg:text-5xl font-inter font-medium text-white mb-2 lg:mb-4">
                            {destination.name}
                          </h3>
                          <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed font-inter font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {destination.description}
                          </p>
                        </div>
                      </div>
                      {/* Title only overlay */}
                      <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-inter font-medium text-white">
                          {destination.name}
                        </h3>
                      </div>
                    </>
                  )}
                </Card>
              ))}
            </div>
            
            {/* Second Row */}
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
              {popularDestinations.slice(2).map((destination, index) => (
                <Card 
                  key={destination.id} 
                  className={`relative overflow-hidden group rounded-3xl cursor-pointer bg-transparent ${
                    index === 0 
                      ? 'w-full md:w-[45%] h-[250px] md:h-[40vh] lg:h-[50vh]' 
                      : 'w-full md:w-[55%] h-[250px] md:h-[40vh] lg:h-[50vh]'
                  }`}
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute top-5 right-5 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-transparent border-2 border-white/70 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:bg-white group-hover:text-black">
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full px-3 pb-3">
                    <div className="w-full p-4 md:p-6 lg:p-8 rounded-3xl bg-white/20 backdrop-blur-xl transition-all duration-500 translate-y-64 group-hover:translate-y-0">
                      <h3 className="text-2xl md:text-4xl lg:text-5xl font-inter font-medium text-white mb-2 lg:mb-4">
                        {destination.name}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base lg:text-lg font-inter font-normal leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {destination.description}
                      </p>
                    </div>
                  </div>
                  {/* Title only overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-inter font-medium text-white">
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
      <section className="relative py-16 bg-white overflow-visible">
        {/* Extended pink gradient for left */}
        <div className="absolute -top-8 -left-64 w-[800px] h-[700px] z-0">
          <div className="w-full h-full bg-gradient-to-br from-pink-400/50 via-pink-300/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Extended pink gradient for right */}
        <div className="absolute top-1/2 -right-80 w-[700px] h-[350px] z-0 -translate-y-1/5">
          <div className="w-full h-full bg-gradient-to-br from-pink-400/50 via-pink-300/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 w-full mx-auto md:px-12">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
              <div className="w-full md:w-1/2">
                <h2 className="font-inter font-bold text-4xl md:text-5xl text-[#0C111F] mb-4 md:mb-6">
                  Best Destinations
                </h2>
                <p className="text-[#6B7280] text-md md:text-lg font-inter font-normal max-w-2xl">
                  <span className="hidden md:block">We've selected some of the top spots around the world to inspire your next adventure.</span>
                  <span className="md:hidden">We've selected some of the top spots around the world to inspire your next adventure.</span>
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 md:gap-6 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
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
                  className={`text-sm font-Roboto font-semibold whitespace-nowrap cursor-pointer transition-colors ${
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
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-12 mb-12 w-full -mt-4 md:-mt-8">
              {bestDestinations.map((item, index) => (
                <div key={index} className="w-full flex justify-center">
                  <div className="w-full max-w-[320px] sm:max-w-[400px] xl:max-w-none">
                    <BestDestinationCard {...item} />
                  </div>
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
      <section className="relative py-12 overflow-visible bg-white">
        {/* Pink gradient for top left */}
        <div className="absolute -top-20 -left-64 w-[800px] h-[700px] z-0">
          <div className="w-full h-full bg-gradient-to-br from-pink-400/40 via-pink-300/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 w-full mx-auto md:px-12">
          <div className="container md:px-12 mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
              <div className="w-full md:w-1/2">
                <h2 className="font-inter text-md text-[#0C111F] font-normal mb-4">[Packages]</h2>
                <p className="font-inter text-4xl md:text-5xl font-semibold text-[#0C111F] text-left mb-6 md:mb-0">
                  Choose our range of expertly crafted packages
                </p>
              </div>
              <div className="w-full md:w-1/2 pt-0 md:pt-4 mt-0 md:mt-8">
                <p className="font-inter font-light text-md text-[#98A2B3] max-w-md md:ml-12 xl:ml-48">
                  Whether you're seeking awe-inspiring landscapes, thrilling outdoor adventures, or Immerice cultural experiences, Snaeland has the perfect itinerary for you.
                </p>
              </div>
            </div>
          </div>
          
          {/* Fixed height container to prevent layout shift */}
          <div className="h-[593px] w-full relative flex items-center -mt-28 md:mt-0">
            <div 
              style={{ cursor: 'default' }}
              className="w-full flex flex-nowrap items-center justify-start md:justify-center gap-3 md:gap-6 overflow-x-auto pb-4 px-3 md:px-0 select-none [&_*]:cursor-default [&>div:first-child]:ml-3 md:[&>div:first-child]:ml-0 [&>div:last-child]:mr-3 md:[&>div:last-child]:mr-0 absolute top-1/2 left-0 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2"
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
                className={`relative flex-shrink-0 transition-all duration-500 ease-in-out w-[260px] h-[320px] hover:w-[300px] hover:h-[350px] md:w-[40vw] md:h-[42vw] md:hover:w-[45vw] md:hover:h-[47.5vw] lg:w-[35vw] lg:h-[37vw] lg:hover:w-[40vw] lg:hover:h-[42vw] xl:w-[30vw] xl:h-[32vw] xl:hover:w-[35vw] xl:hover:h-[37vw] 2xl:w-[25vw] 2xl:h-[27vw] 2xl:hover:w-[30vw] 2xl:hover:h-[32vw] rounded-3xl overflow-hidden my-auto`}
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
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl md:text-3xl text-white font-['Inter'] font-normal">
                        {pkg.name}
                      </h3>
                      
                      {/* Description - shown only on hover */}
                      <div className={`text-white/70 text-xs md:text-base leading-relaxed transition-all duration-500 overflow-hidden font-['Inter'] font-normal max-h-0 group-hover:max-h-32`}>
                        {pkg.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      
      <Footer className="-mt-24 md:mt-0" />
    </div>
  );
};

export default DestinationPage;
