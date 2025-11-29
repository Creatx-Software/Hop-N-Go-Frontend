import { Search, MapPin, Calendar, Plane, Clock, Star, Play, Mail } from "lucide-react";
import LanguageDropdown from "@/components/LanguageDropdown";
import { useState } from "react";
import destiHero from "@/assets/destiHero.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DestinationPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const stats = [
    { value: "100K+", label: "Happy Customers" },
    { value: "150+", label: "Destinations" },
    { value: "95%", label: "Satisfaction" },
  ];

  const popularDestinations = [
    {
      id: 1,
      name: "Srinagar",
      image: "/srinagar.jpg",
      location: "Kashmir, India",
      price: "$1200",
    },
    {
      id: 2,
      name: "Gulmarg",
      image: "/gulmarg.jpg",
      location: "Kashmir, India",
      price: "$1500",
    },
    {
      id: 3,
      name: "Sensoji",
      image: "/sensoji.jpg",
      location: "Tokyo, Japan",
      price: "$2000",
    },
    {
      id: 4,
      name: "Osaka Castle",
      image: "/osaka-castle.jpg",
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
      justifyContent: 'center',
      paddingLeft: '1rem',
      paddingRight: '1rem',
    }}
  >
    {/* Hero Content */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-6xl mx-auto">
      <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-white via-white to-[#FF481A] bg-clip-text text-transparent">
        Create Your Perfect Travel Itinerary
      </h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
        Discover amazing destinations and plan your next adventure with us
      </p>

      {/* Search Bar */}
      <div className="bg-white p-1.5 rounded-full shadow-xl flex flex-col md:flex-row gap-2 max-w-4xl mx-auto">
        <div className="flex-1 flex items-center bg-white rounded-full px-6 py-3">
          <MapPin className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="w-full border-0 bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
        <div className="flex items-center bg-white rounded-full px-6 py-3">
          <Calendar className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="date"
            className="border-0 bg-transparent focus:outline-none text-gray-700 w-40"
          />
        </div>
        <div className="flex items-center bg-white rounded-full px-6 py-3">
          <Calendar className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="date"
            className="border-0 bg-transparent focus:outline-none text-gray-700 w-40"
          />
        </div>
        <Button className="bg-[#FF5A2D] hover:bg-[#e64a33] text-white px-8 py-6 rounded-full font-medium">
          <Search className="w-5 h-5 mr-2" />
          Search
        </Button>
      </div>
    </div>
  </div>

  {/* Stats */}
  <div className="flex flex-wrap justify-center gap-10 mt-12">
    {stats.map((stat, index) => (
      <div key={index} className="text-center">
        <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
        <div className="text-muted-foreground">{stat.label}</div>
      </div>
    ))}
  </div>
</section>





      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular destinations and find your next adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden group">
                <div className="relative h-64">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {destination.location}
                    </div>
                    <div className="mt-3 text-lg font-bold text-white">{destination.price}</div>
                  </div>
                </div>
              </Card>
            ))}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestDestinations.map((destination) => (
              <div key={destination.id} className="relative group overflow-hidden rounded-xl">
                <div className="relative h-96">
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
            ))}
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
