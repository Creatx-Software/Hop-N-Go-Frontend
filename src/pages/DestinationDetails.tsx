import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { 
  Star, ChevronDown, ChevronRight, MapPin, Clock, Users, Calendar, Globe, 
  ChevronLeft, Mail, Heart, Share2, Images, CalendarDays, CircleDollarSign, 
  CheckCircle, BadgeCheck, UsersRound, ArrowBigDownDash, Image, UserCheck, 
  GlobeLock, PersonStanding, ParkingCircle, ChevronUp, MapPin as MapPinIcon, Maximize2, Minimize2,
  Home, Utensils, User, Bus, Wifi, PlusCircle
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Custom styles for date picker
const datePickerStyles = `
  .date-picker-popper {
    z-index: 50 !important;
    margin-top: 8px !important;
  }
  .react-datepicker {
    font-family: 'Inter', sans-serif;
    border: 1px solid #E5E7EB;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  .react-datepicker__header {
    background-color: white;
    border-bottom: 1px solid #E5E7EB;
  }
  .react-datepicker__day--selected, .react-datepicker__day--keyboard-selected {
    background-color: #EB662B;
  }
`;

// Add styles to the head
const styleElement = document.createElement('style');
styleElement.textContent = datePickerStyles;
document.head.appendChild(styleElement);
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
import place1 from "@/assets/place1.png";
import place2 from "@/assets/place2.png";
import place3 from "@/assets/place3.png";
import place4 from "@/assets/place4.png";
import place5 from "@/assets/place5.png";
import place6 from "@/assets/place6.png";
import place7 from "@/assets/place7.png";
import stay1 from "@/assets/stay1.png";
import stay2 from "@/assets/stay2.png";
import stay3 from "@/assets/stay3.png";
import stay4 from "@/assets/stay4.png";
import gallery1 from "@/assets/gallery1.png";
import gallery2 from "@/assets/gallery2.png";
import gallery3 from "@/assets/gallery3.png";
import gallery4 from "@/assets/gallery4.png";
import gallery5 from "@/assets/gallery5.png";

// Array of all images for easy mapping
const galleryImages = [
  { id: 1, src: japan1, alt: "Japan tour preview 1" },
  { id: 2, src: japan2, alt: "Japan tour preview 2" },
  { id: 3, src: japan3, alt: "Japan tour preview 3" },
  { id: 4, src: japan4, alt: "Japan tour preview 4" },
  { id: 5, src: japan5, alt: "Japan tour preview 5" },
];

const datesAvailability = [
  {
    id: 1,
    fromDate: 'Friday 27 Feb, 2026',
    toDate: 'Saturday 7 Mar, 2026',
    roomType: 'Multiple Room Type',
    language: 'English',
    isGuaranteed: true,
    originalPrice: 350,
    discountedPrice: 290,
    nights: 5,
    discountPercentage: 10
  },
  {
    id: 2,
    fromDate: 'Friday 6 Mar, 2026',
    toDate: 'Saturday 14 Mar, 2026',
    roomType: 'Single Room',
    language: 'English',
    isGuaranteed: true,
    originalPrice: 400,
    discountedPrice: 320,
    nights: 5,
    discountPercentage: 20
  },
  {
    id: 3,
    fromDate: 'Friday 13 Mar, 2026',
    toDate: 'Saturday 21 Mar, 2026',
    roomType: 'Double Room',
    language: 'English',
    isGuaranteed: false,
    originalPrice: 380,
    discountedPrice: 350,
    nights: 5,
    discountPercentage: 8
  }
];

// Places data for the "Places You'll See" section
const placesToSee = [
  {
    id: 1,
    image: place1,
    category: "Beach",
    distance: "600 m away",
    name: "Osaka",
    price: 50,
    discountPrice: 42
  },
  {
    id: 2,
    image: place2,
    category: "Show",
    distance: "800 m away",
    name: "Nara",
    price: 35,
    discountPrice: 29
  },
  {
    id: 3,
    image: place3,
    category: "Museum",
    distance: "1.3 km away",
    name: "Kyoto",
    price: 45,
    discountPrice: 39
  },
  {
    id: 4,
    image: place4,
    category: "Food",
    distance: "500 m away",
    name: "Nagoya",
    price: 30,
    discountPrice: 25
  },
  {
    id: 5,
    image: place5,
    category: "Beach",
    distance: "800 m away",
    name: "Tokyo",
    price: 30,
    discountPrice: 25
  },
  {
    id: 6,
    image: place6,
    category: "Castle",
    distance: "800 m away",
    name: "Tokyo",
    price: 30,
    discountPrice: 25
  },
  {
    id: 7,
    image: place7,
    category: "Museum",
    distance: "800 m away",
    name: "Tokyo",
    price: 30,
    discountPrice: 25
  }
];

const flow = [
  {
    day: 1,
    title: 'Airport Pick Up',
    description: ''
  },
  {
    day: 2,
    title: 'Temples & River Cruise',
    description: ''
  },
  {
    day: 3,
    title: 'Massage & Overnight Train',
    description: 'Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.'
  },
  {
    day: 4,
    title: 'Khao Sok National Park',
    description: ''
  },
  {
    day: 5,
    title: 'Travel to Koh Phangan',
    description: ''
  },
  {
    day: 6,
    title: 'Morning Chill & Muay Thai Lesson',
    description: ''
  },
  {
    day: 7,
    title: 'Island Boat Trip',
    description: ''
  }
]

const stays = [
  {
    id: 1,
    name: 'The Grand Hotel',
    location: 'Bangkok, Thailand',
    rating: 4.8,
    reviews: 1248,
    price: 120,
    discountPrice: 99,
    image: stay1,
    description: 'Luxury hotel with stunning city views and premium amenities'
  },
  {
    id: 2,
    name: 'Beachfront Resort',
    location: 'Phuket, Thailand',
    rating: 4.7,
    reviews: 945,
    price: 150,
    discountPrice: 129,
    image: stay2,
    description: 'Beachfront paradise with direct access to white sandy beaches'
  },
  {
    id: 3,
    name: 'Mountain View Lodge',
    location: 'Chiang Mai, Thailand',
    rating: 4.6,
    reviews: 832,
    price: 110,
    discountPrice: 89,
    image: stay3,
    description: 'Peaceful retreat with breathtaking mountain views'
  },
  {
    id: 4,
    name: 'City Center Hotel',
    location: 'Bangkok, Thailand',
    rating: 4.5,
    reviews: 1103,
    price: 95,
    discountPrice: 79,
    image: stay4,
    description: 'Modern comfort in the heart of the city with easy access to attractions'
  }
]

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1); // 1px buffer for rounding
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 280; // Width of each card
      const gap = 64; // Space between cards (4rem = 64px)
      const scrollAmount = cardWidth + gap; // Total distance to scroll
      
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 280; // Width of each card
      const gap = 64; // Space between cards (4rem = 64px)
      const scrollAmount = cardWidth + gap; // Total distance to scroll
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    checkScrollPosition();
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Initial check
      checkScrollPosition();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);
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

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    rooms: 1
  });

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
        <div className="w-full mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="w-full px-0 md:px-6 py-8">
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
          <div className="w-full mx-auto px-4 md:px-12 mb-8">
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
        <div className="w-full mx-auto px-4 md:px-12 mt-8">
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
        <div className="w-full mx-auto px-8 md:px-16 py-8">
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

      {/* Places You’ll See */}
      <section className="flex-1 relative overflow-hidden bg-[#F1F2F3]">
        <div className="w-full mx-auto px-8 md:px-16 mt-12 relative">
          <h2 className="text-2xl font-inter font-semibold text-[#121316] mb-6">Places You'll See</h2>
          <div className="relative">
            <div 
              className="flex overflow-hidden pb-6"
              ref={scrollContainerRef}
              onScroll={handleScroll}
            >
              <div className="flex space-x-16 snap-x snap-mandatory pl-4">
                {placesToSee.map((place) => (
                  <div key={place.id} className="group flex-shrink-0 w-[280px] bg-transparent rounded-2xl overflow-hidden snap-center transition-all duration-300 ease-in-out hover:translate-y-2">
                    <div className="relative w-full bg-gray-50 overflow-hidden">
                      <div className="relative w-full pt-[75%] transition-all duration-500 ease-in-out group-hover:pt-[85%] overflow-hidden">
                        <div className="absolute inset-0">
                          <img 
                            src={place.image} 
                            alt={place.name} 
                            className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute top-3 right-3 bg-white/85 border border-[#DDDFE3] px-3 py-1 rounded-full text-xs font-roboto font-medium text-[#121316] z-10">
                          {place.distance}
                        </div>
                        <div className="absolute top-3 left-3 bg-white/75 text-[#EB662B] border border-[#EB662B] text-xs font-roboto font-medium px-3 py-1 rounded-full z-10">
                          {place.category}
                        </div>
                      </div>
                    </div>
                    <div className="px-0 py-4 w-full transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:h-0 group-hover:py-0 group-hover:overflow-hidden">
                      <h3 className="font-roboto font-semibold text-[#1F2226] mb-1">{place.name}</h3>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center text-sm text-gray-400">
                          <span>Per Person</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-400 font-roboto font-semibold line-through mr-1">${place.price}</span>
                          <span className="text-[#1F2226] font-roboto font-semibold">${place.discountPrice}</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      <h3 className="font-roboto font-semibold text-[#1F2226]">{place.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={scrollLeft}
              className={`absolute left-0 top-1/3 -translate-y-1/2 -translate-x-1/4 w-10 h-10 rounded-full bg-white border-2 border-[#EB662B] shadow-md flex items-center justify-center text-[#EB662B] hover:bg-gray-100 transition-all duration-200 z-10 ${showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollRight}
              className={`absolute right-0 top-1/3 -translate-y-1/2 translate-x-1/4 w-10 h-10 rounded-full bg-white border-2 border-[#EB662B] shadow-md flex items-center justify-center text-[#EB662B] hover:bg-gray-100 transition-all duration-200 z-10 ${showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 bg-white">
        <div className="w-full mx-auto px-4 md:px-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-inter font-semibold text-[#121316]">Location</h2>
          </div>
          
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-gray-200">
            <MapContainer
              center={[41.3874, 2.1686]} // Barcelona coordinates
              zoom={13}
              style={{ height: '100%', width: '100%' }}
              zoomControl={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[41.3874, 2.1686]}>
                <Popup>
                  <div className="flex items-center">
                    <MapPinIcon size={16} className="text-red-500 mr-1" />
                    <span>Barcelona, Spain</span>
                  </div>
                </Popup>
              </Marker>
              <div className="leaflet-top leaflet-right">
                <div className="leaflet-control-container">
                  <div className="leaflet-top leaflet-right">
                    <div className="leaflet-control-zoom leaflet-bar leaflet-control bg-white">
                      <button 
                        className="leaflet-control-zoom-in" 
                        title="Maximize map"
                        onClick={() => {
                          const mapContainer = document.querySelector('.leaflet-container')?.parentElement;
                          if (mapContainer) {
                            if (!document.fullscreenElement) {
                              mapContainer.requestFullscreen().catch(err => {
                                console.error(`Error attempting to enable fullscreen: ${err.message}`);
                              });
                            } else {
                              document.exitFullscreen();
                            }
                          }
                        }}
                      >
                        <Maximize2 size={16} className="w-6 h-5 m-auto" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <ZoomControl position="bottomright" />
            </MapContainer>
          </div>
        </div>
      </section>

      {/* Itinerary Flow */}
      <section className="py-12 bg-white">
        <div className="w-full mx-auto px-4 md:px-16">
          <h2 className="text-2xl font-inter font-semibold text-[#121316] mb-8">Itinerary</h2>
          
          <div className="relative pl-8">
            {/* Timeline line - positioned to end at the last dot */}
            <div 
              className="absolute left-8 top-0 w-0.5 bg-[#EB662B]/30"
              style={{ height: `calc(100% - 1.25rem)` }} // Adjust this value to match half the height of your last dot
            ></div>
            
            {/* Timeline items */}
            <div className="space-y-10">
              {flow.map((item, index, array) => (
                <div key={item.day} className="relative pl-8">
                  <div 
                    className={`absolute left-0 top-0 flex items-center justify-center ${index === 0 || index === array.length - 1 ? 'w-5 h-5' : 'w-3 h-3'} 
                    rounded-full ${index === 0 || index === array.length - 1 ? 'bg-[#EB662B]' : 'bg-white'} 
                    border-2 border-[#EB662B] -translate-x-1/2`}>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-inter font-medium text-[#05073C] leading-none">Day {item.day} :</div>
                    <div className="font-inter font-medium text-[#05073C] leading-none">{item.title}</div>
                  </div>
                  {item.description && (
                    <p className="mt-2 text-[#05073C] text-sm font-inter font-regular leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where You’ll Stay */}
      <section className="py-12 bg-white">
        <div className="w-full mx-auto px-4 md:px-16">
          <h2 className="text-2xl font-inter font-semibold text-[#121316] mb-8">Where You'll Stay</h2>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stays.map((stay) => (
              <div key={stay.id} className="bg-white rounded-xl overflow-hidden border border-[#DDDFE3] hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={stay.image} 
                    alt={stay.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
          
                <div className="p-4">
                  <h3 className="font-roboto font-semibold text-lg text-[#1F2226] mb-1">{stay.name}</h3>
                  <div className="flex items-center text-sm text-[#505050] font-roboto font-medium mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {stay.location}
                  </div>
            
                  <div className="bg-[#F3F3F3] p-3 rounded-lg mt-2 mb-1">
                    <p className="text-sm text-[#626364] font-roboto font-regular">
                      {stay.description}
                    </p>
                  </div>
                  

                  <div className="flex items-center text-sm text-[#EB662B]">
                    <div className="bg-[#F3F3F3] px-2 py-1 rounded-md mt-2 mb-3 flex items-center text-sm">
                      <span className="font-roboto font-medium">{stay.rating}</span>
                    </div>
                    <span className="ml-1 text-[#EB662B] text-xs font-roboto font-medium">
                      {stay.rating >= 4.5 ? 'Excellent' : 
                       stay.rating >= 4 ? 'Very Good' : 
                       stay.rating >= 3.5 ? 'Good' : 
                       stay.rating >= 3 ? 'Average' : 'Fair'}
                    </span>
                    <span className="text-[#8B94A4] text-xs font-roboto font-regular ml-2">{stay.reviews} reviews</span>
                  </div>
                  <div className="flex items-center justify-end mt-0">
                    <Calendar className="w-4 h-4 text-black mr-1" />
                    <span className="text-md text-[#1F2226] font-roboto font-semibold">
                      {stay.id} Day{stay.id > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traveler's Gallery */}
      <section className="py-12 bg-white">
        <div className="w-full mx-auto px-4 md:px-16">
          <h2 className="text-2xl font-inter font-semibold text-[#121316] mb-8">Traveler's Gallery</h2>
          
          <div className="relative">
            <div 
              className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide cursor-grab active:cursor-grabbing pl-4"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                touchAction: 'pan-y',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                msUserSelect: 'none',
                MozUserSelect: 'none'
              }}
              onWheel={(e) => {
                const container = e.currentTarget;
                const scrollAmount = e.deltaY > 0 ? 100 : -100;
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
              }}
              onTouchStart={(e) => {
                const container = e.currentTarget;
                const startX = e.touches[0].clientX;
                const scrollLeft = container.scrollLeft;
                
                const moveHandler = (moveEvent: TouchEvent) => {
                  const x = moveEvent.touches[0].clientX;
                  const walk = (x - startX) * 2;
                  container.scrollLeft = scrollLeft - walk;
                };
                
                const endHandler = () => {
                  document.removeEventListener('touchmove', moveHandler);
                  document.removeEventListener('touchend', endHandler);
                };
                
                document.addEventListener('touchmove', moveHandler, { passive: false });
                document.addEventListener('touchend', endHandler);
              }}
              onMouseDown={(e) => {
                const container = e.currentTarget as HTMLElement;
                const startX = e.pageX - container.offsetLeft;
                const scrollLeft = container.scrollLeft;
                container.style.cursor = 'grabbing';
                
                const moveHandler = (moveEvent: MouseEvent) => {
                  if (e.buttons !== 1) return; // Only if left mouse button is still pressed
                  const x = moveEvent.pageX - container.offsetLeft;
                  const walk = (x - startX) * 2;
                  container.scrollLeft = scrollLeft - walk;
                };
                
                const endHandler = () => {
                  container.style.cursor = 'grab';
                  document.removeEventListener('mousemove', moveHandler);
                  document.removeEventListener('mouseup', endHandler);
                };
                
                document.addEventListener('mousemove', moveHandler);
                document.addEventListener('mouseup', endHandler);
              }}
            >
              {[gallery1, gallery2, gallery3, gallery4, gallery5].map((img, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[280px] h-[280px] rounded-xl overflow-hidden relative group select-none"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <img 
                    src={img} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Include */}
      <section className="py-12 bg-white">
        <div className="w-full mx-auto px-4 md:px-16">
          <h2 className="text-2xl font-inter font-semibold text-[#121316] mb-6">What's Include</h2>
          
          {/* Filter Buttons */}
          <div className="mb-2">
            <div className="flex flex-wrap gap-2 pb-2">
              {[
                { name: 'Accommodation', icon: <Home size={16} className="mr-2" /> },
                { name: 'Meals', icon: <Utensils size={16} className="mr-2" /> },
                { name: 'Guide', icon: <User size={16} className="mr-2" /> },
                { name: 'Transport', icon: <Bus size={16} className="mr-2" /> },
                { name: 'Additional Services', icon: <PlusCircle size={16} className="mr-2" /> },
                { name: 'Free eSIM', icon: <Wifi size={16} className="mr-2" /> }
              ].map((category, index) => (
                <button
                  key={index}
                  className={`flex items-center flex-shrink-0 px-4 py-2 rounded-full text-sm font-inter font-regular whitespace-nowrap
                    ${index === 0 
                      ? 'bg-white text-[#2B3037] border border-[#B5BAC2]' 
                      : 'bg-white text-[#2B3037] border border-white'}`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Accommodation List */}
          <div className="space-y-4">
            {[
              {
                id: 1,
                name: 'Star Gate Hotel Kansai Airport or similar',
                address: '1-1 Rinkuorai-Kita, Izumisano-shi, 598-0048, Japan',
              },
              {
                id: 2,
                name: 'Hotel Nikko Kansai Airport',
                address: '1, Senshu-kuko Kita, Izumisano-shi, 549-0001, Japan',
              },
              {
                id: 3,
                name: 'Kansai Airport Washington Hotel',
                address: '1-7 Rinkuoraikita, Izumisano, Osaka 598-0048, Japan',
              },
              {
                id: 4,
                name: 'Kansai Airport Washington Hotel',
                address: '1-7 Rinkuoraikita, Izumisano, Osaka 598-0048, Japan',
              },
              {
                id: 5,
                name: 'Kansai Airport Washington Hotel',
                address: '1-7 Rinkuoraikita, Izumisano, Osaka 598-0048, Japan',
              }
            ].map((hotel) => (
              <div key={hotel.id} className="flex items-start p-0">
                <div className="flex-shrink-0 w-5 h-5 mt-2 rounded-full bg-[#EB662B] mr-3"></div>
                <div className="flex-1">
                  <h3 className="text-[#05073C] font-inter font-regular text-sm">{hotel.name}</h3>
                  <p className="text-[#05073C] font-inter font-regular text-sm mt-1">{hotel.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dates & availability */}
      <section className="py-12 bg-white">
        <div className="w-full mx-auto px-4 md:px-16">
          <h2 className="text-2xl font-inter font-semibold text-[#1F2226] mb-6">Dates & availability</h2>
          
          {/* Filter/Search Bar */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl shadow-sm overflow-visible mb-8 relative z-10">
            <div className="flex flex-col md:flex-row">
              {/* Destination */}
              <div className="flex-1 p-5 relative">
                <div className="relative h-full flex items-center">
                  <MapPin className="flex-shrink-0 text-gray-400 h-4 w-4 mr-2" />
                  <div className="relative flex-grow flex flex-col justify-center h-full">
                    <span className="text-sm text-[#424242] font-inter font-medium pointer-events-none mb-1">Destination</span>
                    <select className="w-full text-sm bg-transparent border-0 focus:ring-0 focus:outline-none cursor-pointer text-black font-inter font-medium">
                      <option value="nara">Nara, Japan</option>
                    </select>
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-px bg-[#E5E7EB] hidden md:block"></div>
              </div>
              
              {/* Date */}
              <div className="flex-1 p-5 relative">
                <div className="relative h-full flex items-center">
                  <Calendar className="flex-shrink-0 text-gray-400 h-4 w-4 mr-2" />
                  <div className="relative flex-grow flex flex-col justify-center h-full">
                    <span className="text-sm text-[#424242] font-inter font-medium pointer-events-none mb-1">Date</span>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      placeholderText="Select date"
                      className="w-full text-sm bg-transparent border-0 focus:ring-0 focus:outline-none cursor-pointer text-black font-inter font-medium"
                      dateFormat="dd MMM, yyyy"
                      minDate={new Date()}
                      showPopperArrow={false}
                      popperClassName="date-picker-popper"
                    />
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-px bg-[#E5E7EB] hidden md:block"></div>
              </div>
              
              {/* Guest */}
              <div className="flex-1 p-5 relative group">
                <div className="relative h-full flex items-center">
                  <Users className="flex-shrink-0 text-gray-400 h-4 w-4 mr-2" />
                  <div className="relative flex-grow">
                    <div className="flex items-center justify-between cursor-pointer">
                      <div>
                        <div className="text-sm text-[#424242] font-inter font-medium">Guest</div>
                        <div className="text-sm text-black font-inter font-medium">
                          {guests.adults} {guests.adults === 1 ? 'Adult' : 'Adults'}, {guests.children} {guests.children === 1 ? 'Child' : 'Children'}, {guests.rooms} {guests.rooms === 1 ? 'Room' : 'Rooms'}
                        </div>
                      </div>
                      <ChevronDown className="text-gray-400 h-4 w-4 transition-transform group-has-[.guest-dropdown:focus]:rotate-180" />
                    </div>
                    
                    {/* Guest Selection Dropdown */}
                    <div className="guest-dropdown absolute left-0 right-0 mt-2 p-4 bg-white rounded-lg shadow-lg border border-gray-200 z-50 hidden group-hover:block focus-within:block">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Adults</div>
                            <div className="text-xs text-gray-500">Ages 13 or above</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <button 
                              type="button" 
                              onClick={() => setGuests(prev => ({
                                ...prev,
                                adults: Math.max(1, prev.adults - 1)
                              }))}
                              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="w-6 text-center">{guests.adults}</span>
                            <button 
                              type="button"
                              onClick={() => setGuests(prev => ({
                                ...prev,
                                adults: prev.adults + 1
                              }))}
                              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div>
                            <div className="font-medium">Children</div>
                            <div className="text-xs text-gray-500">Ages 2-12</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <button 
                              type="button"
                              onClick={() => setGuests(prev => ({
                                ...prev,
                                children: Math.max(0, prev.children - 1)
                              }))}
                              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="w-6 text-center">{guests.children}</span>
                            <button 
                              type="button"
                              onClick={() => setGuests(prev => ({
                                ...prev,
                                children: prev.children + 1
                              }))}
                              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div>
                            <div className="font-medium">Rooms</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <button 
                              type="button"
                              onClick={() => setGuests(prev => ({
                                ...prev,
                                rooms: Math.max(1, prev.rooms - 1)
                              }))}
                              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="w-6 text-center">{guests.rooms}</span>
                            <button 
                              type="button"
                              onClick={() => setGuests(prev => ({
                                ...prev,
                                rooms: prev.rooms + 1
                              }))}
                              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-px bg-[#E5E7EB] hidden md:block"></div>
              </div>
              
              {/* Search Button */}
              <div className="p-5 flex items-center">
                <button className="w-full md:w-auto bg-[#F53900] hover:bg-[#D45A26] text-white font-inter font-semibold py-3 px-6 rounded-sm transition-colors">
                  Check Availability
                </button>
              </div>
            </div>
          </div>

          {/* Availability Cards */}
          {datesAvailability.map((availability) => (
            <div key={availability.id} className="border border-[#E5E7EB] rounded-lg overflow-hidden mb-4">
              {/* Header */}
              <div className="bg-[#F9FAFB] p-4 border-b border-[#E5E7EB]">
                <div className="text-sm text-[#4B5563]">From {availability.fromDate} to {availability.toDate}</div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-2 text-sm text-[#4B5563] mb-2">
                      <span>{availability.roomType}</span>
                      <span>•</span>
                      <span>{availability.language}</span>
                      {availability.isGuaranteed && (
                        <>
                          <span>•</span>
                          <span className="text-[#10B981] font-medium">Guaranteed departure</span>
                        </>
                      )}
                    </div>
                    <a href="#" className="text-[#EB662B] text-sm font-medium hover:underline">
                      See Similar Tours For These Dates
                    </a>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-end gap-2 mb-1">
                      <span className="bg-[#FEE2E2] text-[#DC2626] text-xs font-medium px-2 py-0.5 rounded">
                        {availability.discountPercentage}% off
                      </span>
                      <span className="text-[#6B7280] text-xs line-through">${availability.originalPrice}</span>
                      <span className="text-[#111827] font-semibold">${availability.discountedPrice}</span>
                      <span className="text-[#6B7280] text-xs">per person</span>
                    </div>
                    <div className="text-right text-[#6B7280] text-sm mb-3">x {availability.nights} night{availability.nights > 1 ? 's' : ''}</div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[#111827] font-semibold">
                        Total Price: ${availability.discountedPrice * availability.nights}
                      </span>
                      <button className="bg-[#EB662B] hover:bg-[#D45A26] text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors">
                        Confirm Dates
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DestinationDetails;
