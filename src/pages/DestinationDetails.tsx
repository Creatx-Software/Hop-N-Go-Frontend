import { useState, useEffect } from 'react';
import { Star, ChevronDown, ChevronRight, MapPin, Clock, Users, Calendar, Globe, ChevronLeft, Mail, Heart, Share2, Images, CalendarDays, CircleDollarSign, CheckCircle, BadgeCheck, UsersRound, ArrowBigDownDash, Image, UserCheck, GlobeLock, PersonStanding, ParkingCircle } from "lucide-react";
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
      <section className="flex-1">
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
                  index === 0 ? 'md:row-span-2 md:col-span-2' : ''
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
        <div className="container max-w-8xl mx-auto px-4 py-8">
          {/* Tabs */}
          <div className="flex gap-6 overflow-x-auto pb-2 mb-6">
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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-0 mb-4 -ml-3">
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
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-6">
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="grid grid-cols-2 divide-x divide-gray-200">
                      <div className="p-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
                        <div className="flex items-center text-gray-600">
                          <CalendarDays className="w-5 h-5 mr-2 text-gray-400" />
                          <span>Add date</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Check Out</label>
                        <div className="flex items-center text-gray-600">
                          <CalendarDays className="w-5 h-5 mr-2 text-gray-400" />
                          <span>Add date</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200">
                      <div className="p-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-600">
                            <Users className="w-5 h-5 mr-2 text-gray-400" />
                            <span>1 guest</span>
                          </div>
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <div className="flex justify-start text-sm">
                      <span className="text-gray-600">For 5 persons (per night): </span>
                      <span className="font-medium">${destination.price}</span>
                    </div>
                    <div className="flex justify-start text-sm">
                      <span className="text-gray-600">For each additional person: </span>
                      <span className="font-medium">$59</span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold pt-2 border-t">
                      <span>Total</span>
                      <span>${destination.price + 59}</span>
                    </div>
                  </div>

                  <button className="w-full bg-[#FF6B35] hover:bg-[#E65A2B] text-white font-medium py-3 px-4 rounded-lg transition-colors">
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
