import { Search, MapPin, MapPinned, Star, ChevronDown, ChevronRight, Mail, ChevronUp, X, Clock, UserRound, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import listHero from "@/assets/ListHero.png";
import MapModal from "@/components/MapModal";
import map from "@/assets/map.png";

const DestinationList = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    type: [],
    duration: [],
    priceRange: [],
    ageGroup: [],
    language: [],
  });
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [priceFilter, setPriceFilter] = useState<'person' | 'day'>('person');
  const [searchCity, setSearchCity] = useState('');
  const [selectedLocation, setSelectedLocation] = useState({
    lat: -8.4095, // Default to Bali, Indonesia
    lng: 115.1889,
    name: 'Bali, Indonesia'
  });

  const handleSearch = () => {
    navigate('/destination-search');
  };

  const destinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      description: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.",
      duration: "7-10 days",
      ageGroup: "All Ages",
      language: "English, Indonesian",
      price: "$1200",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      name: "Kyoto, Japan",
      description: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses.",
      duration: "5-7 days",
      ageGroup: "All Ages",
      language: "Japanese, English",
      price: "$1800",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1492571350019-22cd083bb4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      name: "Santorini, Greece",
      description: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape.",
      duration: "4-6 days",
      ageGroup: "All Ages",
      language: "Greek, English",
      price: "$1500",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e73626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const filterOptions = {
    type: ["Beach", "Mountain", "City", "Countryside"],
    duration: ["1-3 days", "4-6 days", "7-10 days", "10+ days"],
    priceRange: ["$0-500", "$500-1000", "$1000-2000", "$2000+"],
    ageGroup: ["Family", "Solo Traveler", "Couples", "Friends"],
    language: ["English", "Spanish", "French", "Japanese", "Other"]
  };

  const toggleFilter = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: [],
      duration: [],
      priceRange: [],
      ageGroup: [],
      language: [],
    });
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative w-full h-[340px] md:h-[220px] overflow-visible px-4 mt-4 md:mt-4">
        {/* Background Image */}
        <div className="absolute inset-0 px-4">
          <img 
            src={listHero} 
            alt="" 
            className="w-full h-full object-cover object-top rounded-2xl"
          />
          <div className="absolute inset-0 bg-transparent rounded-2xl"></div>
        </div>

        {/* Search Bar - Positioned to overlap the hero and section below */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 md:-bottom-6 w-[95vw] z-10 sm:px-0 px-6">
          <div className="bg-white rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between overflow-hidden pt-20 pb-8 px-6 md:pt-14 md:pb-4 md:px-8 lg:pt-20 lg:pb-10 lg:px-24 border border-gray-200 shadow-2xl w-full mx-auto">
            <div className="w-full bg-white/0 border border-gray-300 rounded-xl p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Destinations */}
            <div className="w-[50%] sm:w-full lg:w-1/4 flex flex-col items-start mb-3 sm:mb-4 lg:mb-0 lg:pr-4 ml-0 sm:mx-auto relative after:absolute after:-right-1 after:top-1/2 after:-translate-y-1/2 after:h-16 after:w-px after:bg-gray-200 last:after:hidden">
              <label className="text-xs sm:text-sm font-inter font-medium text-[#454546] mb-1 ml-2">
                Destinations
              </label>
              <div className="flex items-center bg-[#F3F3F4] rounded-[7px] p-2 sm:p-3 w-full">
                <input type="text" placeholder="Japan" className="w-full border-0 bg-transparent focus:outline-none text-[#737374] placeholder-gray-500 text-sm sm:text-base font-inter font-normal"/>
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 ml-2" />
              </div>
            </div>
        
            {/* Check In */}
            <div className="w-[50%] sm:w-full lg:w-1/4 flex flex-col items-start mb-3 sm:mb-4 lg:mb-0 lg:px-2 ml-0 sm:mx-auto relative after:absolute after:-right-2 after:top-1/2 after:-translate-y-1/2 after:h-16 after:w-px after:bg-gray-200 last:after:hidden">
              <label className="text-xs sm:text-sm font-inter font-medium text-[#454546] mb-1 ml-2">Check In</label>
              <div className="flex items-center bg-[#F3F3F4] rounded-[7px] p-2 sm:p-3 w-full">
                <input type="date" className="w-full border-0 bg-transparent focus:outline-none text-[#737374] text-sm sm:text-base font-inter font-normal"/>
              </div>
            </div>
        
            {/* Guest */}
            <div className="w-[50%] sm:w-full lg:w-1/4 flex flex-col items-start mb-4 sm:mb-6 lg:mb-0 lg:px-2 ml-0 sm:mx-auto relative after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2 after:h-16 after:w-px after:bg-gray-200 last:after:hidden">
              <label className="text-xs sm:text-sm font-inter font-medium text-[#454546] mb-1 ml-2">Guest</label>
              <div className="flex items-center bg-[#F3F4F6] rounded-[7px] p-2 sm:p-3 w-full">
                <input type="text" placeholder="+ Add Guest" className="w-full border-0 bg-transparent focus:outline-none text-[#737374] placeholder-gray-500 text-base font-inter font-normal"/>
                  <UserRound className="w-5 h-5 text-gray-500 ml-2" />
              </div>
            </div>

            {/* Buttons */}
            <div className="w-full lg:w-auto flex flex-col items-end lg:items-start lg:flex-row gap-8 sm:gap-4 lg:gap-6 lg:ml-4 -mt-40 lg:mt-6">
              <Button 
                onClick={handleSearch}
                variant="outline" 
                className="w-[45%] sm:w-auto bg-[#F74A1F] hover:bg-[#F74A1F]/90 px-3 sm:px-6 py-6 rounded-[7px] font-inter font-semibold h-[28px] flex items-center justify-center text-white"
              >
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
        </div>
      </section>
      
      {/* List Section */}
      <section className="mt-2">
      {/* Add padding to push content below the overlapping search bar */}
      <div className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            </div>
          </div>

        <div className="max-w-7xl mx-auto px-10 md:px-0 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-[320px] lg:pl-0 -ml-4">
              <div className="bg-white rounded-lg shadow-sm">
                {/* Map Section */}
                <div className="relative h-48 rounded-sm overflow-hidden">
                  <img 
                    src={map} 
                    alt="Map preview" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/4 to-black/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button 
                        onClick={() => {
                          setSelectedLocation({
                            lat: -8.4095, // Bali, Indonesia coordinates
                            lng: 115.1889,
                            name: 'Bali, Indonesia'
                          });
                          setIsMapOpen(true);
                        }}
                        className="bg-white text-[#EB662B] border-2 border-[#EB662B] rounded-sm hover:bg-white/90 font-inter font-medium flex items-center gap-2"
                      >
                        <MapPinned className="w-4 h-4" />
                        Show on Map
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Filter Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="text-[#383E48] font-roboto font-medium">Filter by:</h2>
                    <button className="text-sm font-inter font-medium text-[#2B3037] underline underline-offset-2 hover:no-underline">
                      Clear
                    </button>
                  </div>
                </div>

                <div className="divide-y divide-gray-200">
                  {/* Length Filter */}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-sm text-[#383E48] font-roboto font-medium">Length</h3>
                      <ChevronUp className="h-4 w-4 text-[#383E48]" />
                    </div>
                    <div className="space-y-3">
                      <div className="relative pt-1">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>- 2 Day</span>
                          <span>21+ Day</span>
                        </div>
                        <div className="relative h-1 bg-gray-200 rounded-full mt-3">
                          {/* Black line from start to first dot */}
                          <div className="absolute left-0 w-1/6 h-1/3 bg-black rounded-full">
                            {/* First dot (at the end of black line) */}
                            <div className="absolute right-0 w-5 h-5 -translate-y-1/2 translate-x-1/2 bg-black rounded-full border-4 border-white"></div>
                          </div>
                          {/* Second dot (on the gray line) */}
                          <div className="absolute top-1/2 right-0 w-5 h-5 -translate-y-1/2 translate-x-1/2 bg-black rounded-full border-4 border-white"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-sm text-[#383E48] font-roboto font-medium">Price</h3>
                      <ChevronUp className="h-4 w-4 text-[#383E48]" />
                    </div>
                    <div className="flex border border-gray-300 rounded-md overflow-hidden">
                      <button 
                        onClick={() => setPriceFilter('person')}
                        className={`flex-1 py-2 px-3 text-sm font-roboto font-medium hover:bg-gray-50 text-center ${
                          priceFilter === 'person' ? 'text-[#1F2226]' : 'text-[#8B94A4]'
                        }`}
                      >
                        Per Person
                      </button>
                      <div className="w-px bg-gray-300 my-2"></div>
                      <button 
                        onClick={() => setPriceFilter('day')}
                        className={`flex-1 py-2 px-3 text-sm font-roboto font-medium hover:bg-gray-50 text-center ${
                          priceFilter === 'day' ? 'text-[#1F2226]' : 'text-[#8B94A4]'
                        }`}
                      >
                        Per Day
                      </button>
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-sm text-[#383E48] font-roboto font-medium">Price Range</h3>
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                    <p className="text-xs text-[#656F81] font-roboto font-semibold mb-3">
                      {priceFilter === 'day' 
                        ? 'Nightly prices including fees and taxes' 
                        : 'Nightly prices including fees and taxes'}
                    </p>
                    
                    {/* Histogram */}
                    <div className="h-16 mb-0 flex items-end space-x-[2px] justify-center">
                      {[8, 12, 16, 24, 32, 40, 32, 24, 16, 24, 32, 40, 48, 40, 32, 24, 16, 12, 8].map((h, i) => {
                        // First 5 bars are #121316, the rest are gray
                        const isDark = i < 14;
                        return (
                          <div 
                            key={i} 
                            className={`w-1.5 rounded-t-sm ${isDark ? 'bg-[#121316]' : 'bg-gray-200'}`}
                            style={{ height: `${h}px` }}
                          />
                        );
                      })}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="relative pt-1">
                        <div className="h-1/2 bg-121316 rounded-full">
                          {/* First dot (left) - Start of orange section (bar 4) */}
                          <div className="absolute top-1/2 left-0 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-gray-200 rounded-full"></div>
                          {/* Second dot (right) - End of orange section (bar 13) */}
                          <div className="absolute top-1/2 left-[calc(12/19*100%)] w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-gray-200 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between space-x-4">
                        <div className="w-20">
                          <label className="block text-xs text-gray-500 mb-1 text-center">Minimum</label>
                          <div className="relative">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#383E48]">$</span>
                            <input 
                              type="text" 
                              value="200" 
                              className="w-full pl-6 pr-2 py-1 border border-gray-300 rounded-sm text-sm text-center text-[#383E48] font-inter font medium"
                            />
                          </div>
                        </div>
                        <div className="w-20">
                          <label className="block text-xs text-gray-500 mb-1 text-center">Maximum</label>
                          <div className="relative">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#383E48]">$</span>
                            <input 
                              type="text" 
                              value="1,500+" 
                              className="w-full pl-6 pr-2 py-1 border border-gray-300 rounded-sm text-sm text-center text-[#383E48] font-inter font medium"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Departure Date Filter */}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm text-[#383E48] font-roboto font-medium">Departure Date</h3>
                      <ChevronUp className="h-4 w-4 text-[#383E48]" />
                    </div>
                    <div className="relative mb-4">
                      <div className="relative">
                        <input 
                          type="text" 
                          defaultValue="29 November 2025" 
                          className="w-full px-3 py-3 border border-gray-300 rounded-sm text-sm bg-white text-[#232323] font-inter font-regular focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                        />
                        <div className="absolute -top-2 left-3 px-1 bg-white text-xs text-[#9A9A9A] font-inter font-medium">
                          Specific Departure Date
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {[
                        { month: 'December 2025', count: 12 },
                        { month: 'January 2026', count: 200 },
                        { month: 'February 2026', count: 10 },
                        { month: 'March 2026', count: 35 },
                        { month: 'April 2026', count: 35 },
                        { month: 'May 2026', count: 35 },
                        { month: 'June 2026', count: 35 },
                        { month: 'July 2026', count: 35 },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center mb-2">
                            <input
                              id={`month-${index}`}
                              type="checkbox"
                              className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                            />
                            <label htmlFor={`month-${index}`} className="ml-2 text-sm text-[#4F4F4F] font-inter font-medium">
                              {item.month}
                            </label>
                          </div>
                          <span className="text-xs text-[#4F4F4F] font-inter font-medium">{item.count}</span>
                        </div>
                      ))}
                      
                      <button className="text-sm text-[#4F4F4F] font-inter font-semibold hover:underline mt-2 underline underline-offset-2 hover:no-underline">
                        See More
                      </button>
                    </div>
                  </div>

                  {/* Start & Ending City Filter */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-sm text-[#383E48] font-roboto font-medium">Start & Ending City</h3>
                      <ChevronUp className="h-4 w-4 text-[#383E48]" />
                    </div>
                    <div className="relative mb-4">
                      <div className="relative">
                        <input 
                          type="text" 
                          defaultValue="Search for a city" 
                          onFocus={(e) => e.target.value = ''}
                          onBlur={(e) => !e.target.value && (e.target.value = 'Search for a city')}
                          className="w-full px-3 py-3 border border-gray-300 rounded-sm text-sm bg-white text-[#232323] font-inter font-regular focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                        />
                        <div className="absolute -top-2 left-3 px-1 bg-white text-xs text-[#9A9A9A] font-inter font-medium">
                          Start City
                        </div>
                      </div>
                    </div>
                    <div className="relative mb-2">
                      <div className="relative">
                        <input 
                          type="text" 
                          defaultValue="Search for a city" 
                          onFocus={(e) => e.target.value = ''}
                          onBlur={(e) => !e.target.value && (e.target.value = 'Search for a city')}
                          className="w-full px-3 py-3 border border-gray-300 rounded-sm text-sm bg-white text-[#232323] font-inter font-regular focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                        />
                        <div className="absolute -top-2 left-3 px-1 bg-white text-xs text-[#9A9A9A] font-inter font-medium">
                          End City
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Must See Cities Filter */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-sm text-[#383E48] font-roboto font-medium">Must See Cities</h3>
                      <ChevronUp className="h-4 w-4 text-[#383E48]" />
                    </div>
                    <div className="relative mb-4">
                      <div className="relative">
                        <input 
                          type="text"
                          defaultValue="Type to search"
                          onFocus={(e) => e.target.value = ''}
                          onBlur={(e) => !e.target.value && (e.target.value = 'Type to search')}
                          onChange={(e) => setSearchCity(e.target.value)} 
                          className="w-full px-3 py-3 border border-gray-300 rounded-sm text-sm bg-white text-[#232323] font-inter font-regular focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                        />
                        <div className="absolute -top-2 left-3 px-1 bg-white text-xs text-[#9A9A9A] font-inter font-medium">
                          Search City
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Destinations List */}
            <div className="w-full md:w-[80%]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {destinations.length} Destinations Found
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#F74A1F] focus:border-transparent">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating: High to Low</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                {destinations.map((destination) => (
                  <div key={destination.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 md:w-1/3">
                        <img 
                          className="h-48 w-full object-cover md:h-full" 
                          src={destination.image} 
                          alt={destination.name} 
                        />
                      </div>
                      <div className="p-6 flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                            <div className="flex items-center mt-1">
                              <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                              <span className="text-sm text-gray-500">{destination.name.split(', ')[1]}</span>
                              <div className="flex items-center ml-4">
                                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                                <span className="text-sm text-gray-700">{destination.rating}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-[#F74A1F]">{destination.price}</p>
                            <p className="text-xs text-gray-500">per person</p>
                          </div>
                        </div>
                      
                        <p className="mt-3 text-gray-600 text-sm">
                          {destination.description}
                        </p>
                      
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{destination.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <UserRound className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{destination.ageGroup}</span>
                            </div>
                            <div className="flex items-center">
                              <Globe className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{destination.language}</span>
                            </div>
                          </div>
                        </div>
                      
                        <div className="mt-6 flex justify-end">
                          <Button 
                            onClick={() => {}}
                            className="bg-gradient-to-r from-[#F9AC7D] to-[#F53900] hover:opacity-90 text-white px-6 py-2 rounded-md font-medium"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            
              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 border border-[#F74A1F] bg-[#F74A1F] text-white rounded-md">
                    1
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
    </div>
    </section>
    
    {/* Map Modal */}
    <MapModal 
      isOpen={isMapOpen} 
      onClose={() => setIsMapOpen(false)}
      location={selectedLocation}
    />
  </div>
  );
};

export default DestinationList;
