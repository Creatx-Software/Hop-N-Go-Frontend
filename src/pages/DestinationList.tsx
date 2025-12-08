import { Search, MapPin, MapPinned, Star, ChevronDown, ChevronRight, Mail, ChevronUp, X, Clock, UserRound, Globe, List, LayoutGrid, Heart, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { FaHouseUser, FaBuilding, FaBed, FaHotel, FaHome, FaCampground } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import listHero from "@/assets/ListHero.png";
import MapModal from "@/components/MapModal";
import Footer from "@/components/Footer";
import map from "@/assets/map.png";
import list1 from "@/assets/list1.png";
import list2 from "@/assets/list2.png";
import list3 from "@/assets/list3.png";
import list4 from "@/assets/list4.png";
import list5 from "@/assets/list5.png";
import list6 from "@/assets/list6.png";
import list7 from "@/assets/list7.png";
import list8 from "@/assets/list8.png";
import list9 from "@/assets/list9.png";

const DestinationList = () => {
  const navigate = useNavigate();
  const [travelType, setTravelType] = useState('solo');
  const [bedrooms, setBedrooms] = useState(1);
  const [beds, setBeds] = useState(1);
  const [bathrooms, setBathrooms] = useState<string | number>('Any');
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
    name: 'Japan',
    reviews: 1248 // Default number of reviews for Bali
  });
  const [openAccommodation, setOpenAccommodation] = useState(true);
  const [activeAccommodation, setActiveAccommodation] = useState<string | null>(null);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState('Recommended');
  const [isGridView, setIsGridView] = useState(false);

  const sortOptions = [
    { value: 'recommended', label: 'Recommended' },
    { value: 'topRated', label: 'Top Rated' },
    { value: 'priceLowToHigh', label: 'Price: Low to High' },
    { value: 'priceHighToLow', label: 'Price: High to Low' },
    { value: 'mostReviewed', label: 'Most Reviewed' },
    { value: 'newest', label: 'Newest' },
  ];

  const handleSortSelect = (option: string) => {
    setSortOption(option);
    setIsSortOpen(false);
    // Here you would typically update the destinations list based on the selected sort option
  };

  const handleAccommodationClick = (type: string) => {
    setActiveAccommodation(activeAccommodation === type ? null : type);
  };

  const handleSearch = () => {
    navigate('/destination-search');
  };

  const destinations = [
    {
      id: 1,
      name: "Best of Japan: Tokyo to Osaka",
      feedback: "We have had the trip of a lifetime. The guides we had during the trip were prompt knowledgeable and obviously they enjoy sharing the delights of Japan.",
      feedbackOwner: "Sarah Johnson",
      traveledMonth: "May 2024",
      duration: "7-10 days",
      destinationsList: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
      ageRange: "18-39",
      operatedIn: "English, Spanish",
      ageGroup: "All Ages",
      language: "English, Indonesian",
      price: "1200",
      rating: 4.8,
      discount: 15,
      image: list1
    },
    {
      id: 2,
      name: "Kyoto, Japan",
      feedback: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses.",
      feedbackOwner: "Michael Chen",
      traveledMonth: "March 2024",
      duration: "5-7 days",
      destinationsList: ["Kyoto", "Nara", "Uji", "Arashiyama"],
      ageRange: "18-35",
      operatedIn: "English, Japanese",
      ageGroup: "All Ages",
      language: "Japanese, English",
      price: "1800",
      rating: 4.9,
      discount: 15,
      image: list2
    },
    {
      id: 3,
      name: "Santorini, Greece",
      feedback: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape.",
      feedbackOwner: "Elena Rodriguez",
      traveledMonth: "June 2024",
      duration: "4-6 days",
      destinationsList: ["Santorini", "Oia", "Fira", "Akrotiri"],
      ageRange: "18-45",
      operatedIn: "English, Greek, French",
      ageGroup: "All Ages",
      language: "Greek, English",
      price: "1500",
      rating: 4.7,
      discount: 15,
      image: list3
    },
    {
      id: 4,
      name: "Greek Islands Explorer",
      feedback: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape.",
      feedbackOwner: "David Kim",
      traveledMonth: "July 2024",
      duration: "8-12 days",
      destinationsList: ["Santorini", "Mykonos", "Athens", "Delos"],
      ageRange: "21-50",
      operatedIn: "English, Greek",
      ageGroup: "All Ages",
      language: "Greek, English",
      price: "2100",
      rating: 4.8,
      discount: 10,
      image: list4
    },
    {
      id: 5,
      name: "Italian Riviera & Tuscany",
      feedback: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape.",
      feedbackOwner: "Aisha Patel",
      traveledMonth: "August 2024",
      duration: "10-14 days",
      destinationsList: ["Florence", "Cinque Terre", "Pisa", "Siena"],
      ageRange: "18-40",
      operatedIn: "English, Italian",
      ageGroup: "All Ages",
      language: "Italian, English",
      price: "2500",
      rating: 4.9,
      discount: 12,
      image: list5
    },
    {
      id: 6,
      name: "Iceland Ring Road Adventure",
      feedback: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape.",
      feedbackOwner: "James Wilson",
      traveledMonth: "September 2024",
      duration: "10-12 days",
      destinationsList: ["Reykjavik", "Vik", "Akureyri", "Golden Circle"],
      ageRange: "21-55",
      operatedIn: "English, Icelandic",
      ageGroup: "All Ages",
      language: "Icelandic, English",
      price: "3200",
      rating: 4.9,
      discount: 8,
      image: list6
    },
    {
      id: 7,
      name: "Costa Rica Nature Explorer",
      feedback: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape.",
      feedbackOwner: "Maria Garcia",
      traveledMonth: "April 2024",
      duration: "8-10 days",
      destinationsList: ["San Jose", "Arenal", "Monteverde", "Manuel Antonio"],
      ageRange: "18-50",
      operatedIn: "English, Spanish",
      ageGroup: "All Ages",
      language: "Spanish, English",
      price: "1800",
      rating: 4.7,
      discount: 10,
      image: list7
    },
    {
      id: 8,
      name: "Vietnam Highlights",
      feedback: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape.",
      feedbackOwner: "Thomas Müller",
      traveledMonth: "October 2024",
      duration: "12-14 days",
      destinationsList: ["Hanoi", "Halong Bay", "Hoi An", "Ho Chi Minh"],
      ageRange: "18-45",
      operatedIn: "English, Vietnamese",
      ageGroup: "All Ages",
      language: "Vietnamese, English",
      price: "1600",
      rating: 4.8,
      discount: 12,
      image: list8
    },
    {
      id: 9,
      name: "Morocco Adventure",
      feedback: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape.",
      feedbackOwner: "Sophie Martin",
      traveledMonth: "November 2024",
      duration: "10-12 days",
      destinationsList: ["Marrakesh", "Sahara Desert", "Fes", "Chefchaouen"],
      ageRange: "18-50",
      operatedIn: "English, French, Arabic",
      ageGroup: "All Ages",
      language: "Arabic, French, English",
      price: "1900",
      rating: 4.8,
      discount: 10,
      image: list9
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
            <div className="w-full md:w-[320px] lg:pl-0 md:-ml-4">
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
                            name: 'Bali, Indonesia',
                            reviews: 1248
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
                          className="w-full pl-3 pr-8 py-3 border border-gray-300 rounded-sm text-sm bg-white text-[#232323] font-inter font-regular focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                        />
                        <div className="absolute -top-2 left-3 px-1 bg-white text-xs text-[#9A9A9A] font-inter font-medium">
                          Start City
                        </div>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black" />
                      </div>
                    </div>
                    <div className="relative mb-2">
                      <div className="relative">
                        <input 
                          type="text" 
                          defaultValue="Search for a city" 
                          onFocus={(e) => e.target.value = ''}
                          onBlur={(e) => !e.target.value && (e.target.value = 'Search for a city')}
                          className="w-full pl-3 pr-8 py-3 border border-gray-300 rounded-sm text-sm bg-white text-[#232323] font-inter font-regular focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                        />
                        <div className="absolute -top-2 left-3 px-1 bg-white text-xs text-[#9A9A9A] font-inter font-medium">
                          End City
                        </div>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black" />
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
                          className="w-full pl-3 pr-8 py-3 border border-gray-300 rounded-sm text-sm bg-white text-[#232323] font-inter font-regular focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                        />
                        <div className="absolute -top-2 left-3 px-1 bg-white text-xs text-[#9A9A9A] font-inter font-medium">
                          Search City
                        </div>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black" />
                      </div>
                    </div>
                  </div>

                  {/* Regions Filter */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm text-[#383E48] font-roboto font-medium">Regions</h3>
                      <ChevronUp className="h-4 w-4 text-[#383E48]" />
                    </div>
                    <div className="space-y-2">
                      {[
                        { name: 'Honshu', count: 12 },
                        { name: 'Southern Japan', count: 200 },
                        { name: 'Central Japan', count: 10 },
                        { name: 'Kansai', count: 35 },
                        { name: 'Kanto', count: 35 },
                        { name: 'Shikoku', count: 35 },
                      ].map((region, index) => (
                        <div key={`region-${index}`} className="flex items-center justify-between">
                          <div className="flex items-center mb-2">
                            <input
                              id={`region-${index}`}
                              type="checkbox"
                              className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                            />
                            <label htmlFor={`region-${index}`} className="ml-2 text-sm text-[#4F4F4F] font-inter font-medium">
                              {region.name}
                            </label>
                          </div>
                          <span className="text-xs text-[#4F4F4F] font-inter font-medium">{region.count}</span>
                        </div>
                      ))}
                      <button className="text-sm text-[#4F4F4F] font-inter font-semibold hover:underline mt-1 underline underline-offset-2 hover:no-underline">
                        See More
                      </button>
                    </div>
                  </div>

                  {/* Travel Type Filter */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm text-[#383E48] font-roboto font-medium">Travel Type</h3>
                      <ChevronUp className="h-4 w-4 text-[#383E48]" />
                    </div>
                      
                    {/* Solo/Group Toggle - Updated to match Price Filter style */}
                    <div className="flex border border-gray-300 rounded-md overflow-hidden mb-4">
                      <button 
                        onClick={() => setTravelType('solo')}
                        className={`flex-1 py-2 text-sm font-roboto font-medium text-center ${
                          travelType === 'solo' ? 'text-[#1F2226]' : 'text-[#8B94A4]'
                        }`}
                      >
                        Solo Travel
                      </button>
                      <div className="w-px bg-gray-300 my-1"></div>
                      <button 
                        onClick={() => setTravelType('group')}
                        className={`flex-1 py-2 text-sm font-roboto font-medium text-center ${
                          travelType === 'group' ? 'text-[#1F2226]' : 'text-[#8B94A4]'
                        }`}
                      >
                        Group Travel
                      </button>
                    </div>
                      
                    {/* Room Type */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center mb-2">
                          <input
                            id="private-room"
                            type="checkbox"
                            className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                          />
                          <label htmlFor="private-room" className="ml-2 text-sm text-[#4F4F4F] font-inter font-medium">
                            Private Room
                          </label>
                        </div>
                        <span className="text-xs text-[#4F4F4F] font-inter font-medium">12</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="shared-room"
                            type="checkbox"
                            className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                          />
                          <label htmlFor="shared-room" className="ml-2 text-sm text-[#4F4F4F] font-inter font-medium">
                            Shared Room
                          </label>
                        </div>
                        <span className="text-xs text-[#4F4F4F] font-inter font-medium">200</span>
                      </div>
                    </div>
                      
                    {/* Bedrooms, Beds, Bathrooms */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-xs text-[#2B3037] font-roboto font-medium">Bedrooms</label>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => setBedrooms(prev => Math.max(1, prev - 1))}
                            className={`${bedrooms <= 1 ? 'text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
                            disabled={bedrooms <= 1}
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="11.5" stroke="currentColor"/>
                              <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{bedrooms}</span>
                          <button 
                            onClick={() => setBedrooms(prev => prev + 1)}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="11.5" fill="white" stroke="#2B3037"/>
                              <path d="M12 8V16M8 12H16" stroke="#2B3037" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                        
                      <div className="flex items-center justify-between">
                        <label className="text-xs text-[#2B3037] font-roboto font-medium">Beds</label>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => setBeds(prev => Math.max(1, prev - 1))}
                            className={`${beds <= 1 ? 'text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
                            disabled={beds <= 1}
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="11.5" stroke="currentColor"/>
                              <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{beds}</span>
                          <button 
                            onClick={() => setBeds(prev => prev + 1)}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="11.5" fill="white" stroke="#2B3037"/>
                              <path d="M12 8V16M8 12H16" stroke="#2B3037" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                        
                      <div className="flex items-center justify-between">
                        <label className="text-xs text-[#2B3037] font-roboto font-medium">Bathrooms</label>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => {
                              if (bathrooms === 'Any') return;
                              if (bathrooms === 1) setBathrooms('Any');
                              else setBathrooms(prev => (prev as number) - 1);
                            }}
                            className={`${bathrooms === 'Any' ? 'text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
                            disabled={bathrooms === 'Any'}
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="11.5" stroke="currentColor"/>
                                <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{bathrooms}</span>
                          <button 
                            onClick={() => {
                              if (bathrooms === 'Any') setBathrooms(1);
                              else setBathrooms(prev => (prev as number) + 1);
                            }}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="11.5" fill="white" stroke="#2B3037"/>
                              <path d="M12 8V16M8 12H16" stroke="#2B3037" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Age Range */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm text-[#383E48] font-roboto font-medium">Age Range</h3>
                      <ChevronUp className="h-4 w-4 text-[#383E48]" />
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: '18-29', count: 12 },
                        { label: '30-39', count: 200 },
                        { label: '40-49', count: 10 },
                        { label: '50-59', count: 35 },
                        { label: '60+', count: 35 },
                      ].map((item, index) => (
                        <div key={`age-${index}`} className="flex items-center justify-between">
                          <div className="flex items-center mb-2">
                            <input
                              id={`age-${index}`}
                              type="checkbox"
                              className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                            />
                            <label htmlFor={`age-${index}`} className="ml-2 text-sm text-[#4F4F4F] font-inter font-medium">
                              {item.label}
                            </label>
                          </div>
                          <span className="text-xs text-[#4F4F4F] font-inter font-medium">{item.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Child-Friendly Tours */}
                  <div className="p-4 border-t border-gray-200">
                    <h3 className="text-sm text-[#383E48] font-roboto font-medium mb-3">Or Filter by child-friendly tours</h3>
                    <div className="relative">
                      <input 
                        type="text"
                        defaultValue="Age"
                        onFocus={(e) => e.target.value = ''}
                        onBlur={(e) => !e.target.value && (e.target.value = 'Age')}
                        onChange={(e) => setSearchCity(e.target.value)} 
                        className="w-full pl-3 pr-8 py-3 border border-gray-300 rounded-sm text-sm bg-white text-[#232323] font-inter font-regular focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                      />
                      <div className="absolute -top-2 left-3 px-1 bg-white text-xs text-[#9A9A9A] font-inter font-medium">
                        Select age of the youngest child
                      </div>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black" />
                    </div>
                  </div>

                  {/* Guide Type */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm text-[#383E48] font-roboto font-medium">Guide Type</h3>
                      <ChevronUp className="h-4 w-4 text-[#383E48]" />
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: 'Fully Guided', count: 12 },
                        { label: 'Partially Guided', count: 200 },
                        { label: 'Self - Guided', count: 10 },
                      ].map((item, index) => (
                        <div key={`guide-${index}`} className="flex items-center justify-between">
                          <div className="flex items-center mb-2">
                            <input
                              id={`guide-${index}`}
                              type="checkbox"
                              className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                            />
                            <label htmlFor={`guide-${index}`} className="ml-2 text-sm text-[#4F4F4F] font-inter font-medium">
                              {item.label}
                            </label>
                          </div>
                          <span className="text-xs text-[#4F4F4F] font-inter font-medium">{item.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Maximum Group Size  */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm text-[#383E48] font-roboto font-medium">Maximum Group Size</h3>
                      <ChevronUp className="h-4 w-4 text-[#383E48]" />
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: '+50 People', count: 12 },
                        { label: '50 People', count: 200 },
                        { label: '20 People', count: 10 },
                        { label: '10 People', count: 35 },
                      ].map((item, index) => (
                        <div key={`group-${index}`} className="flex items-center justify-between">
                          <div className="flex items-center mb-2">
                            <input
                              id={`group-${index}`}
                              type="checkbox"
                              className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                            />
                            <label htmlFor={`group-${index}`} className="ml-2 text-sm text-[#4F4F4F] font-inter font-medium">
                              {item.label}
                            </label>
                          </div>
                          <span className="text-xs text-[#4F4F4F] font-inter font-medium">{item.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Accommodation */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm text-[#383E48] font-roboto font-medium">Accommodation</h3>
                      <ChevronUp className="h-4 w-4 text-[#383E48]" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <button 
                        onClick={() => handleAccommodationClick('house')}
                        className={`flex items-center gap-2 px-3 py-2 border rounded-full h-10 transition-colors ${
                          activeAccommodation === 'house' 
                            ? 'border-[#121316] bg-white' 
                            : 'border-[#B5BAC2] bg-white hover:bg-gray-50'
                        }`}
                      >
                        <FaHouseUser className={`h-4 w-4 ${activeAccommodation === 'house' ? 'text-[#121316]' : 'text-gray-600'}`} />
                        <span className={`text-xs font-medium ${activeAccommodation === 'house' ? 'text-[#121316]' : 'text-gray-700'}`}>House</span>
                      </button>
                      <button 
                        onClick={() => handleAccommodationClick('apartment')}
                        className={`flex items-center gap-2 px-3 py-2 border rounded-full h-10 transition-colors ${
                          activeAccommodation === 'apartment' 
                            ? 'border-[#121316] bg-white' 
                            : 'border-[#B5BAC2] bg-white hover:bg-gray-50'
                        }`}
                      >
                        <FaBuilding className={`h-4 w-4 ${activeAccommodation === 'apartment' ? 'text-[#121316]' : 'text-gray-600'}`} />
                        <span className={`text-xs font-medium ${activeAccommodation === 'apartment' ? 'text-[#121316]' : 'text-gray-700'}`}>Apartment</span>
                      </button>
                      <button 
                        onClick={() => handleAccommodationClick('guesthouse')}
                        className={`flex items-center gap-2 px-3 py-2 border rounded-full h-10 transition-colors ${
                          activeAccommodation === 'guesthouse' 
                            ? 'border-[#121316] bg-white' 
                            : 'border-[#B5BAC2] bg-white hover:bg-gray-50'
                        }`}
                      >
                        <FaBed className={`h-4 w-4 ${activeAccommodation === 'guesthouse' ? 'text-[#121316]' : 'text-gray-600'}`} />
                        <span className={`text-xs font-medium ${activeAccommodation === 'guesthouse' ? 'text-[#121316]' : 'text-gray-700'}`}>Guesthouse</span>
                      </button>
                      <button 
                        onClick={() => handleAccommodationClick('hotel')}
                        className={`flex items-center gap-2 px-3 py-2 border rounded-full h-10 transition-colors ${
                          activeAccommodation === 'hotel' 
                            ? 'border-[#121316] bg-white' 
                            : 'border-[#B5BAC2] bg-white hover:bg-gray-50'
                        }`}
                      >
                        <FaHotel className={`h-4 w-4 ${activeAccommodation === 'hotel' ? 'text-[#121316]' : 'text-gray-600'}`} />
                        <span className={`text-xs font-medium ${activeAccommodation === 'hotel' ? 'text-[#121316]' : 'text-gray-700'}`}>Hotel</span>
                      </button>
                      <button 
                        onClick={() => handleAccommodationClick('dom')}
                        className={`flex items-center gap-2 px-3 py-2 border rounded-full h-10 transition-colors ${
                          activeAccommodation === 'dom' 
                            ? 'border-[#121316] bg-white' 
                            : 'border-[#B5BAC2] bg-white hover:bg-gray-50'
                        }`}
                      >
                        <FaHome className={`h-5 w-5 ${activeAccommodation === 'dom' ? 'text-[#121316]' : 'text-gray-600'}`} />
                        <span className={`text-xs font-medium ${activeAccommodation === 'dom' ? 'text-[#121316]' : 'text-gray-700'}`}>Dom</span>
                      </button>
                      <button 
                        onClick={() => handleAccommodationClick('cabin')}
                        className={`flex items-center gap-2 px-3 py-2 border rounded-full h-10 transition-colors ${
                          activeAccommodation === 'cabin' 
                            ? 'border-[#121316] bg-white' 
                            : 'border-[#B5BAC2] bg-white hover:bg-gray-50'
                        }`}
                      >
                        <FaCampground className={`h-5 w-5 ${activeAccommodation === 'cabin' ? 'text-[#121316]' : 'text-gray-600'}`} />
                        <span className={`text-xs font-medium ${activeAccommodation === 'cabin' ? 'text-[#121316]' : 'text-gray-700'}`}>Cabin</span>
                      </button>
                    </div>
                    <div className="text-start">
                      <a href="#" className="text-sm text-[#4F4F4F] font-inter font-semibold hover:underline mt-1 underline underline-offset-2 hover:no-underline">
                        View More
                      </a>
                    </div>
                  </div>

                  {/* Adventure Style */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm text-[#383E48] font-roboto font-medium">Adventure Style</h3>
                      <ChevronUp className="h-4 w-4 text-[#383E48]" />
                    </div>
                  </div>

                  {/* Operators */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm text-[#383E48] font-roboto font-medium">Operators</h3>
                      <ChevronUp className="h-4 w-4 text-[#383E48]" />
                    </div>
                  </div>

                   {/* Physical Rating */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm text-[#383E48] font-roboto font-medium">Physical Rating</h3>
                      <ChevronUp className="h-4 w-4 text-[#383E48]" />
                    </div>
                  </div> 
                </div>
              </div>
            </div>

            {/* Destinations List */}
            <div className="w-full md:w-[80%]">
              <h2 className="text-xl font-roboto font-semibold text-black mb-2">
                Explore {destinations.length}+ Places in {selectedLocation.name}
              </h2>
              <div className="flex justify-between items-center mb-6">
                <div className="relative">
                  <button 
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="flex items-center gap-1 text-sm text-[#383E48] font-inter font-medium border border-[#E0E0E0] rounded-sm px-4 py-2 hover:bg-gray-50"
                  >
                    <span>Sort by: </span>
                    <span className="font- inter font-medium">{sortOption}</span>
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isSortOpen ? 'transform rotate-180' : ''}`} />
                  </button>
                  
                  {isSortOpen && (
                    <div className="absolute z-10 mt-1 w-56 bg-white rounded-md shadow-lg border border-[#B5BAC2]">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleSortSelect(option.label)}
                            className={`w-full text-left px-4 py-2 text-sm ${
                              sortOption === option.label 
                                ? 'bg-gray-100 text-[#F74A1F]' 
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-2 p-1 border border-[#B5BAC2] rounded-full">
                  <button 
                    onClick={() => setIsGridView(false)}
                    className={`p-2 rounded-full ${!isGridView ? 'border border-[#1F2226] text-[#1F2226]' : 'text-[#8B94A4] hover:bg-gray-50'}`}
                    aria-label="List view"
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setIsGridView(true)}
                    className={`p-2 rounded-full ${isGridView ? 'border border-[#1F2226] text-[#1F2226]' : 'text-[#8B94A4] hover:bg-gray-50'}`}
                    aria-label="Grid view"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Destinations Cards */}
              <div className="space-y-6">
                {destinations.map((destination) => (
                  <div key={destination.id} className="bg-white rounded-2xl shadow-[4px_4px_12px_rgba(0,0,0,0.12)] overflow-hidden border border-[#E0E0E0] hover:shadow-[6px_6px_16px_rgba(0,0,0,0.15)] transition-shadow duration-300">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 relative m-3">
                        <img 
                          className="h-full w-full object-cover aspect-[4/3] rounded-lg" 
                          src={destination.image} 
                          alt={destination.name}
                        />
                      </div>
                      <div className="pt-14 px-6 pb-4 flex-1 relative">
                        <div className="absolute top-4 right-6">
                          <div className="bg-[#F0F0F0] bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 cursor-pointer transition-all">
                            <Heart className="h-4 w-4 text-black" />
                          </div>
                        </div>
                        {destination.discount > 0 && (
                          <div className="absolute top-4 left-6">
                            <div className="bg-[#F74A1F]/10 text-[#F74A1F] text-xs font-inter font-semibold px-3 py-2 rounded-full">
                              {destination.discount}% OFF
                            </div>
                          </div>
                        )}
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            <h3 className="text-xl font-inter font-semibold text-black mr-3">
                              {destination.name}
                            </h3>
                            <div className="flex items-center bg-transparent px-3 py-1.5 rounded-full">
                              <Star className="h-4 w-4 text-[#F74A1F] fill-[#F74A1F] mr-1.5" />
                              <span className="text-sm font-medium text-[#1F2226]">
                                {destination.rating}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center mt-0">
                            <span className="text-sm text-[#787676] font-inter font-semibold">
                              ({selectedLocation.reviews} Reviews)
                            </span>
                          </div>
                        </div>

                        <div className="mt-1">
                          <p className="text-[#717171] text-sm font-inter font-regular leading-6 mb-1">
                            "{destination.feedback}"
                          </p>
                          <div className="flex items-center text-xs text-[#585858] font-inter font-regular">
                            <span className="font-inter font-regular text-[#585858]">{destination.feedbackOwner}</span>
                            <span className="mx-0">,</span>
                            <span>traveled in {destination.traveledMonth}</span>
                          </div>
                        </div>

                        
                      

                        <div className="mt-4 space-y-2">
                          <div className="flex items-baseline">
                            <h4 className="text-sm font-inter font-bold text-black w-28 flex-shrink-0">Duration</h4>
                            <p className="text-sm text-black font-inter font-regular">{destination.duration}</p>
                          </div>
                          
                          <div className="flex items-baseline">
                            <h4 className="text-sm font-inter font-bold text-black w-28 flex-shrink-0">Destinations</h4>
                            <p className="text-sm text-black font-inter font-regular">{destination.destinationsList.join(', ')}</p>
                          </div>
                          
                          <div className="flex items-baseline">
                            <h4 className="text-sm font-inter font-bold text-black w-28 flex-shrink-0">Age Range</h4>
                            <p className="text-sm text-black font-inter font-regular">{destination.ageRange} years</p>
                          </div>
                          
                          <div className="flex items-baseline">
                            <h4 className="text-sm font-inter font-bold text-black w-28 flex-shrink-0">Operated In</h4>
                            <p className="text-sm text-black font-inter font-regular">{destination.operatedIn}</p>
                          </div>
                        </div>

                        <div className="mt-3">
                          <div className="md:flex md:justify-between md:items-center mb-0">
                            <div className="text-black">
                              <span className="text-2xl font-inter font-bold">${destination.price}</span>
                              <span className="text-sm font-inter font-regular ml-1">/ Per Person</span>
                              <p className="text-xs text-black font-inter font-regular md:hidden">Price based on Private Double Room</p>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <Button 
                                onClick={() => navigate(`/tours/${destination.id}`, { state: { destination } })}
                                className="w-full md:w-auto bg-gradient-to-r from-[#F9AC7D] to-[#F53900] hover:opacity-90 text-white px-6 py-2.5 rounded-full font-inter font-medium text-sm"
                              >
                                View Tour Details 
                              </Button>
                            </div>
                          </div>
                          <p className="hidden md:block text-xs text-black font-inter font-regular">Price based on Private Double Room</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            
              {/* Pagination */}
              <div className="mt-8 flex flex-col items-center">
                <nav className="flex items-center space-x-1">
                  <button 
                    className="px-2 py-2 border border-[#E0E0E0] rounded-full text-[#2B3037] hover:bg-[#F8F9FC] disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={true}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  {[1, 2, 3].map((page) => (
                    <button 
                      key={page}
                      className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                        page === 1 
                          ? 'bg-transparent text-[#121316] border border-[#121316]' 
                          : 'text-[#B5BAC2] border border-[#E0E0E0] hover:bg-[#F8F9FC]'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <span className="px-2 text-[#5E6775]">...</span>
                  
                  <button className="w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium text-[#5E6775] border border-[#E0E0E0] hover:bg-[#F8F9FC]">
                    9
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium text-[#5E6775] border border-[#E0E0E0] hover:bg-[#F8F9FC]">
                    10
                  </button>
                  
                  <button className="px-2 py-2 border border-[#E0E0E0] rounded-full text-[#2B3037] hover:bg-[#F8F9FC]">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    
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
