import { useState, useEffect, useRef } from 'react';
import { Star, ChevronDown, ChevronRight, MapPin, Clock, Users, Calendar, Globe, ChevronLeft, Mail, Heart, Share2, Images, CalendarDays, CircleDollarSign, CheckCircle, BadgeCheck, UsersRound, ArrowBigDownDash, Image, UserCheck, GlobeLock, PersonStanding, ParkingCircle, ChevronUp } from "lucide-react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate, useParams, useLocation, useLoaderData } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LanguageDropdown from '@/components/LanguageDropdown';
// Import actual images
import japan1 from "@/assets/japan1.png";
import japan2 from "@/assets/japan2.png";
import japan3 from "@/assets/japan3.png";
import japan4 from "@/assets/japan4.png";
import japan5 from "@/assets/japan5.png";
import locationIcon from "@/assets/locationIcon.png";

// Array of all images for easy mapping
const galleryImages = [
  { id: 1, src: japan1, alt: "Japan tour preview 1" },
  { id: 2, src: japan2, alt: "Japan tour preview 2" },
  { id: 3, src: japan3, alt: "Japan tour preview 3" },
  { id: 4, src: japan4, alt: "Japan tour preview 4" },
  { id: 5, src: japan5, alt: "Japan tour preview 5" },
];

const DestinationDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const handleBackClick = () => {
    console.log('Back button clicked');
    console.log('Current path:', window.location.pathname);
    navigate('/destination-search');
  };

  // Get the destination data from the location state or use a default if coming directly to the URL
  const [destination, setDestination] = useState(() => {
    // If we have state from navigation, use that
    if (location.state?.destination) {
      return location.state.destination;
    }
    
    // Otherwise, use a default (this would typically come from an API in a real app)
    return {
      id: id || '1',
      name: 'Best of Japan: Tokyo to Osaka',
      rating: 4.5,
      reviews: 1200,
      duration: 9,
      location: 'Tokyo, Japan',
      description: 'Experience the best of Japan on this 9-day tour from Tokyo to Osaka. Explore ancient temples, bustling cities, and stunning natural landscapes.',
      price: 2599,
      images: [ japan1, japan2, japan3, japan4, japan5 ],
      highlights: [
        'Explore the bustling streets of Tokyo',
        'Visit the iconic Mount Fuji',
        'Experience traditional tea ceremonies',
        'Discover the historic temples of Kyoto',
        'Enjoy the vibrant nightlife in Osaka'
      ],
      included: [
        '8 nights accommodation',
        'Daily breakfast',
        'Transportation between cities',
        'Guided tours',
        'Entrance fees to attractions'
      ]
    };
  });

  useEffect(() => {
    if (destination) {
      setIsLoading(false);
    }
  }, [destination]);

  const [selectedLocation, setSelectedLocation] = useState({
    lat: -8.4095,
    lng: 115.1889,
    name: destination.location || 'Japan',
    reviews: destination.reviews || 1248
  });

  // State for date picker and guests
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const guestDropdownRef = useRef<HTMLDivElement>(null);

  // Calculate total guests based on adults and children
  const totalGuests = adults + children;

  // Handle adult/children selection
  const handleGuestTypeChange = (type: 'adults' | 'children', value: number) => {
    if (type === 'adults') {
      const newAdults = Math.max(1, Math.min(10 - children, value)); // Ensure at least 1 adult and max 10 total
      setAdults(newAdults);
    } else {
      const newChildren = Math.min(9, Math.max(0, value)); // Max 9 children (since we need at least 1 adult)
      setChildren(newChildren);
    }
  };

  // Handle horizontal scroll and click outside
  useEffect(() => {
    // Prevent horizontal scroll
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (guestDropdownRef.current && !guestDropdownRef.current.contains(event.target as Node)) {
        setShowGuestDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Cleanup
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-semibold mb-4">Destination not found</h2>
        <Button onClick={() => navigate('/destinations')}>
          Back to Destinations
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="w-full h-9 bg-[#FFC8BB]/30 relative z-10 overflow-hidden">
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
      
      {/* Main Content */}
      <section className="flex-1 overflow-x-hidden">
        <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="w-full px-0 py-8">
          <button 
            onClick={() => navigate('/destination-search')}
            className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg text-gray-700 bg-transparent overflow-hidden"
          >
            <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <ChevronLeft className="relative z-10 w-5 h-5" />
            <span className="relative z-10">Back to results</span>
          </button>
        </div>

          {/* Tour Header */}
          <div className="container mx-auto px-4 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-3">
                <div>
                  <h1 className="text-2xl md:text-3xl font-inter font-semibold text-[#1F2226]">
                    {destination.name}
                  </h1>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#454C58]  font-roboto font-medium">From {selectedLocation.name} to {destination.location}</span>
                    <span className="text-[#1F2226]  font-roboto font-regular">{destination.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(Math.floor(destination.rating))].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 text-[#FAC91E] fill-[#FAC91E] ${i < Math.floor(destination.rating) - 1 ? 'mr-0.5' : 'mr-1.5'}`}
                      />
                    ))}
                    <span className="text-sm font-medium text-[#1F2226] ml-1">
                      {destination.rating.toFixed(1)}
                    </span>
                  </div>
                  <span className="text-sm text-[#787676] font-inter font-semibold">
                    ({selectedLocation.reviews.toLocaleString()} Reviews)
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <button className="flex items-center gap-2 text-[#1F2226] hover:text-gray-900 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 text-[#1F2226] hover:text-gray-900 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="container mx-auto px-4 mt-8">
          {/* Left soft pink half-circle - more transparent and blurred */}
          <div className="absolute left-0 top-3/4 -translate-y-1/2 w-[600px] h-[800px] -translate-x-1/3 z-0">
            <div className="w-full h-full bg-gradient-to-r from-pink-300/40 via-pink-500/20 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          {/* Right soft pink half-circle - more transparent and blurred */}
          <div className="absolute right-0 top-3/4 -translate-y-1/2 w-[600px] h-[800px] translate-x-1/3 z-0">
            <div className="w-full h-full bg-gradient-to-l from-pink-300/40 via-pink-500/20 to-transparent rounded-full blur-3xl"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] md:h-[500px]">
            {galleryImages.map((img, index) => (
              <div 
                key={img.id}
                className={`rounded-2xl overflow-hidden h-full relative ${
                  index === 0 ? 'md:row-span-2 md:col-span-2 row-span-2 col-span-2 h-[300px] md:h-full' : ''
                }`}
              >
                <img 
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
                {index === 0 && (
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white rounded-3xl px-4 py-3 flex flex-col shadow-md">
                      <div className="flex items-center">
                        <img 
                          src={locationIcon} 
                          alt="Location" 
                          className="w-12 h-12 mr-2"
                        />
                        <div className="flex flex-col mr-2">
                          <span className="text-xs text-[#1F2226] font-roboto font-regular">{selectedLocation.name}</span>
                          <span className="text-sm text-[#1F2226] font-roboto font-medium">Best Locations</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-black" />
                      </div>
                    </div>
                  </div>
                )}
                {index === 4 && (
                  <div className="absolute bottom-4 right-4 bg-black/60 rounded-sm px-3 py-1.5 flex items-center space-x-1 shadow-md">
                    <Images className="w-3.5 h-3.5 text-white" />
                    <span className="text-sm font-medium text-white">10+</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        </div>
      </section>

      {/* Description & Reservation */}
      <section className="relative z-10">
        <div className="container max-w-8xl mx-auto px-8 py-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-y-2 gap-x-6 pb-2 mb-6">
            {[
              "Overview",
              "Amenities",
              "Places",
              "Location",
              "Itinerary",
              "Stay",
              "Reviews",
            ].map((tab) => (
              <div key={tab} className="relative pb-3">
                <span
                  className={`text-sm font-roboto font-medium whitespace-nowrap cursor-pointer transition-colors ${
                    tab === "Overview"
                      ? 'text-[#1F2226] font-semibold'
                      : "text-[#717171] hover:text-[#1F2226]"
                  }`}
                >
                  {tab}
                </span>
                {tab === "Overview" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1F2226]"></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Column - Description & Amenities */}
            <div className="lg:w-2/3">
              <div className="bg-transparent rounded-2xl p-0 -mt-2">
                <h2 className="text-2xl font-inter font-semibold text-[#1F2226] mb-4">Description</h2>
                <h3 className="text-lg font-inter font-bold text-[#1F2226] mb-4">Discover Japan’s highlights with comfort and ease</h3>
                <p className="text-[#1F2226] text-base font-inter font-regular mb-6">
                  The Best of Japan: Tokyo to Osaka – 9 Days tour takes you on a memorable journey through Japan’s most iconic destinations. Starting in Tokyo, you’ll explore a perfect mix of modern attractions, cultural landmarks, and beautiful scenery before travelling through Kyoto’s historic temples and traditional streets. The trip ends in Osaka, known for its vibrant city life and amazing food.
                </p>
                <p className="text-[#1F2226] text-base font-inter font-regular mb-6">
                  Throughout the 9 days, you’ll enjoy comfortable stays, seamless travel arrangements, authentic Japanese cuisine, and a well-planned itinerary that balances sightseeing, relaxation, and cultural experiences. This tour is ideal for anyone looking to discover the true essence of Japan in one smooth and unforgettable adventure.
                </p>
                
                <h2 className="text-2xl font-inter font-semibold text-[#1F2226] mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-0 mb-0 -ml-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <BadgeCheck className="w-5 h-5 text-gray-600" />
                    <span className="text-[#010101] font-inter font-medium">Gold Operators</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <UsersRound className="w-5 h-5 text-gray-600" />
                    <span className="text-[#010101] font-inter font-medium">Group Tour</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <ArrowBigDownDash className="w-5 h-5 text-gray-600" />
                    <span className="text-[#010101] font-inter font-medium">Low Intensity</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Users className="w-5 h-5 text-gray-600" />
                    <span className="text-[#010101] font-inter font-medium">Group Size 10 - 30</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Image className="w-5 h-5 text-gray-600" />
                    <span className="text-[#010101] font-inter font-medium">In-depth Cultural</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <UserCheck className="w-5 h-5 text-gray-600" />
                    <span className="text-[#010101] font-inter font-medium">Fully Guided</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <GlobeLock className="w-5 h-5 text-gray-600" />
                    <span className="text-[#010101] font-inter font-medium">Guided in English</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <PersonStanding className="w-5 h-5 text-gray-600" />
                    <span className="text-[#010101] font-inter font-medium">All Ages Welcome</span>
                  </div>
                
                </div>
                
              </div>
            </div>

            {/* Right Column - Reservation Card */}
            <div className="lg:w-[40%] max-w-[350px] -mt-12 lg:mt-0">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-6">
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-3xl overflow-visible">
                    <div className="grid grid-cols-2">
                      <div className="relative">
                        <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-200"></div>
                      <div className="p-4">
                        <label className="flex items-center text-sm font-inter font-regular text-[#2B3037] mb-1">
                          <CalendarDays className="w-4 h-4 mr-1.5 text-[#2B3037]" />
                          Check-in
                        </label>
                        <div className="relative">
                          <div className="relative z-10">
                            <DatePicker
                              selected={startDate}
                              onChange={(date: Date) => setStartDate(date)}
                              selectsStart
                              startDate={startDate}
                              endDate={endDate}
                              minDate={new Date()}
                              placeholderText="Select date"
                              className="w-full text-center py-2 text-sm rounded-md focus:outline-none focus:border-transparent"
                              dateFormat="MMM d, yyyy"
                              popperClassName="z-50 -ml-4"
                              popperPlacement="bottom-start"
                            />
                          </div>
                          <CalendarDays className="absolute left-2 top-2.5 w-4 h-4 text-[#2B3037]" />
                        </div>
                      </div>
                      </div>
                      <div className="p-4">
                        <label className="flex items-center text-sm font-inter font-regular text-[#2B3037] mb-1">
                          <CalendarDays className="w-4 h-4 mr-1.5 text-[#2B3037]" />
                          Check-out
                        </label>
                        <div className="relative">
                          <div className="relative z-10">
                            <DatePicker
                              selected={endDate}
                              onChange={(date: Date) => setEndDate(date)}
                              selectsEnd
                              startDate={startDate}
                              endDate={endDate}
                              minDate={startDate || new Date()}
                              placeholderText="Select date"
                              className="w-full text-center py-2 text-sm rounded-md focus:outline-none focus:border-transparent"
                              dateFormat="MMM d, yyyy"
                              popperClassName="z-50 -ml-4"
                              popperPlacement="bottom-start"
                            />
                          </div>
                          <CalendarDays className="absolute left-2 top-2.5 w-4 h-4 text-[#2B3037]" />
                        </div>
                      </div>
                    </div>
                    <div className="relative px-4">
                      <div className="absolute left-8 right-8 top-0 h-px bg-gray-200"></div>
                    </div>
                    <div className="relative" ref={guestDropdownRef}>
                      <div className="p-4">
                        <label className="block text-sm font-inter font-regular text-[#2B3037] mb-1">Guests</label>
                        <div className="relative">
                          <div 
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                          >
                            <div className="flex items-center">
                              <span className="text-sm">
                                {totalGuests} {totalGuests === 1 ? 'guest' : 'guests'}
                                {children > 0 && ` (${adults} ${adults === 1 ? 'adult' : 'adults'}, ${children} ${children === 1 ? 'child' : 'children'})`}
                              </span>
                            </div>
                            {showGuestDropdown ? (
                              <ChevronUp className="w-4 h-4 text-gray-400" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                          
                          {showGuestDropdown && (
                            <div className="fixed md:absolute left-4 right-4 md:left-0 md:right-0 -mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 space-y-4">
                              <div className="font-inter font-regular text-sm text-[#383E48] mb-2">
                                {totalGuests} {totalGuests === 1 ? 'guest' : 'guests'} total
                              </div>
                              
                              <div className="space-y-4">
                                <div className="flex justify-between items-center mb-2">
                                  <div>
                                    <div className="font-inter font-regular">Adults</div>
                                    <div className="text-sm text-gray-500">Ages 18+</div>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <button 
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleGuestTypeChange('adults', adults - 1);
                                      }}
                                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                                      disabled={adults <= 1 || (adults === 1 && children === 0 && totalGuests === 1)}
                                    >
                                      -
                                    </button>
                                    <span className="w-6 text-center">{adults}</span>
                                    <button 
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        if (totalGuests < 10) {
                                          handleGuestTypeChange('adults', adults + 1);
                                        }
                                      }}
                                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                                      disabled={totalGuests >= 10}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                  <div>
                                    <div className="font-inter font-regular">Children</div>
                                    <div className="text-sm text-gray-500">Ages 0-18</div>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <button 
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleGuestTypeChange('children', children - 1);
                                      }}
                                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                                      disabled={children <= 0}
                                    >
                                      -
                                    </button>
                                    <span className="w-6 text-center">{children}</span>
                                    <button 
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        if (totalGuests < 10) {
                                          handleGuestTypeChange('children', children + 1);
                                        }
                                      }}
                                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                                      disabled={totalGuests >= 10 || (adults + children) >= 10}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-0">
                    <span className="font-inter font-regular text-[#1F2226] text-sm">Details:</span>
                    <div className="flex justify-between text-sm">
                      <span className="font-inter font-regular text-[#1F2226]">Capacity:</span>
                      <span className="font-inter font-regular text-[#1F2226]">10 Persons</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-inter font-regular text-[#1F2226]">For 5 persons (per night):</span>
                      <span className="font-inter font-regular text-[#1F2226]">${destination.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-inter font-regular text-[#1F2226]">For each additional person:</span>
                      <span className="font-inter font-regular text-[#1F2226]">$59</span>
                    </div>
                    <div className="relative px-4 py-2">
                      <div className="absolute left-16 right-16 top-0 h-px bg-gray-200 mt-4"></div>
                    </div>
                    <div className="flex justify-between text-sm font-inter font-regular text-[#1F2226] pt-2">
                      <span>Total</span>
                      <span>${(destination.price + (totalGuests > 5 ? (totalGuests - 5) * 59 : 0)).toLocaleString()}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-b from-[#F9AC7D] to-[#F53900] hover:opacity-90 text-white font-medium py-3 px-4 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg">
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DestinationDetails;
