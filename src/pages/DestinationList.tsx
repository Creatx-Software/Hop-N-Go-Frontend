import { Search, MapPin, Star, ChevronDown, ChevronRight, Mail, ChevronUp, X, Clock, UserRound, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import listHero from "@/assets/ListHero.png";

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
    <div className="min-h-screen flex flex-col overflow-x-hidden">
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
      <section className="mt-6">
      {/* Add padding to push content below the overlapping search bar */}
      <div className="pt-16">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Discover Destinations</h1>
              <div className="relative w-1/3">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F74A1F] focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button 
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="text-sm text-[#F74A1F] hover:underline"
                  >
                    {isFilterOpen ? 'Hide' : 'Show'} Filters
                  </button>
                </div>
              
                {isFilterOpen && (
                  <div className="space-y-6">
                    {Object.entries(filterOptions).map(([category, options]) => (
                      <div key={category} className="border-b border-gray-100 pb-4">
                        <button 
                          className="flex justify-between items-center w-full text-left font-medium text-gray-700 mb-2"
                          onClick={() => {
                            const updatedFilters = { ...filters };
                            updatedFilters[category] = [];
                            setFilters(updatedFilters);
                          }}
                        >
                          <span className="capitalize">{category}</span>
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        </button>
                        <div className="space-y-2">
                          {options.map((option) => (
                            <div key={option} className="flex items-center">
                              <input
                                id={`${category}-${option}`}
                                type="checkbox"
                                className="h-4 w-4 text-[#F74A1F] focus:ring-[#F74A1F] border-gray-300 rounded"
                                checked={filters[category].includes(option)}
                                onChange={() => toggleFilter(category, option)}
                              />
                              <label htmlFor={`${category}-${option}`} className="ml-2 text-sm text-gray-600">
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Button 
                      onClick={clearFilters}
                      variant="outline" 
                      className="w-full mt-4 border-[#F74A1F] text-[#F74A1F] hover:bg-[#F74A1F]/10"
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Destinations List */}
            <div className="w-full md:w-3/4">
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
  </div>
  );
};

export default DestinationList;
