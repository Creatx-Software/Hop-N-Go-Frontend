import { Search, MapPin, Calendar, Plane, Clock, Star, Play } from "lucide-react";
import destiHero from "@/assets/destiHero.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DestinationPage = () => {
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-pink-100 to-purple-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 bg-cover bg-center" style={{ backgroundImage: `url(${destiHero})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Create Your Perfect Travel Itinerary
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
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
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular destinations that our customers love
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden group">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white text-xl font-semibold mb-1">{destination.name}</h3>
                      <div className="flex items-center text-white/80 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {destination.location}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Best Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out our top-rated destinations with amazing experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bestDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white text-2xl font-bold mb-2">{destination.name}</h3>
                          <div className="flex items-center text-white/80 mb-4">
                            <MapPin className="w-4 h-4 mr-1" />
                            {destination.location}
                            <span className="mx-2">•</span>
                            <Clock className="w-4 h-4 mr-1" />
                            {destination.duration}
                          </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                          <span className="text-white font-medium">{destination.rating}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                        <div>
                          <span className="text-sm text-white/60">Starting from</span>
                          <div className="text-2xl font-bold text-white">{destination.price}</div>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button 
                    size="icon" 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
                  >
                    <Play className="w-6 h-6 text-white fill-white" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
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
