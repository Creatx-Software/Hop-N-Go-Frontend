import { useState, useEffect } from 'react';
import { Star, ChevronDown, ChevronRight, MapPin, Clock, Users, Calendar, Globe, ChevronLeft, Mail, Heart, Share2 } from "lucide-react";
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
        <div className="container mx-auto px-4 py-6">
        {/* Back Button */}
        <div className="container mx-auto px-0 py-6 mt-10">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 text-black/80 hover:text-gray-300 hover:bg-transparent"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to results</span>
          </Button>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] md:h-[500px]">
            {galleryImages.map((img, index) => (
              <div 
                key={img.id}
                className={`rounded-2xl overflow-hidden h-full ${
                  index === 0 ? 'md:row-span-2 md:col-span-2' : ''
                }`}
              >
                <img 
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DestinationDetails;
