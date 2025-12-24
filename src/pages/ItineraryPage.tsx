import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Star, Plus, Minus, RefreshCw, MoreVertical, Edit, Trash2, Share2, ChevronLeft, Home, Utensils, User, Bus, Wifi, PlusCircle, Languages, ShieldCheck, Headset, CreditCard, MapPin, Clock, Users, Globe, Heart, Image as ImageIcon, ChevronDown, X, CalendarDays, Users as UsersIcon, MapPin as MapPinIcon, Check } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock data - replace with API calls in a real application
const mockItinerary = {
  id: 1,
  title: 'Summer Europe Adventure',
  location: 'Paris',
  duration: '7',
  groupSize: '2-4 People',
  rating: 4.8,
  reviews: 24,
  price: 1299,
  discountPrice: 999,
  images: [
    'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  ],
  description: 'Experience the best of Europe with this amazing summer adventure. Visit iconic landmarks, enjoy local cuisine, and create unforgettable memories.',
  highlights: [
    'Eiffel Tower visit with skip-the-line access',
    'Seine River cruise with dinner',
    'Louvre Museum guided tour',
    'Day trip to Versailles',
    'Wine tasting in Montmartre',
    'Shopping at Champs-Élysées'
  ],
  included: [
    '6 nights accommodation in 4-star hotels',
    'Daily breakfast',
    'Airport transfers',
    'All entrance fees',
    'Professional English-speaking guide',
    'Transportation between cities'
  ],
  excluded: [
    'International flights',
    'Travel insurance',
    'Personal expenses',
    'Optional activities',
    'Tips and gratuities'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Paris',
      description: 'Arrive at Charles de Gaulle Airport and transfer to your hotel. Enjoy some free time to relax before a welcome dinner at a local restaurant.',
      activities: ['Airport transfer', 'Hotel check-in', 'Welcome dinner'],
      meals: ['Dinner']
    },
    {
      day: 2,
      title: 'Paris City Tour',
      description: 'Explore the highlights of Paris including the Eiffel Tower, Champs-Élysées, and Arc de Triomphe. Enjoy a Seine River cruise in the evening.',
      activities: ['City tour', 'Eiffel Tower visit', 'Seine River cruise'],
      meals: ['Breakfast', 'Dinner']
    }
  ],
};
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Mock data - replace with actual API calls in a real application
const mockItineraries = [
  {
    id: 1,
    title: 'Summer Europe Trip',
    date: 'Jun 15 - 30, 2024',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    days: 15,
    destinations: ['Paris', 'Rome', 'Barcelona'],
    isFavorite: true,
  },
  {
    id: 2,
    title: 'Asian Adventure',
    date: 'Dec 1 - 15, 2024',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    days: 14,
    destinations: ['Tokyo', 'Seoul', 'Bangkok'],
    isFavorite: false,
  },
  {
    id: 3,
    title: 'USA Road Trip',
    date: 'Aug 1 - 14, 2024',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    days: 14,
    destinations: ['New York', 'Las Vegas', 'San Francisco'],
    isFavorite: true,
  },
];

const ItineraryPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [itineraries, setItineraries] = useState(mockItineraries);
  const [selectedLocation, setSelectedLocation] = useState({
    id: 1,
    name: 'New York',
    code: 'NYC'
  });
  
  const [guests, setGuests] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  
  const locations = [
    { id: 1, name: 'New York', code: 'NYC' },
    { id: 2, name: 'Paris', code: 'PAR' },
    { id: 3, name: 'London', code: 'LON' },
    { id: 4, name: 'Tokyo', code: 'TYO' },
    { id: 5, name: 'Sydney', code: 'SYD' },
  ];
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'popular', label: 'Popular' },
    { id: 'beach', label: 'Beach' },
    { id: 'mountain', label: 'Mountain' },
    { id: 'city', label: 'City' },
  ];
  
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };
  
  const incrementGuests = () => setGuests(prev => Math.min(prev + 1, 10));
  const decrementGuests = () => setGuests(prev => Math.max(prev - 1, 1));
  
  const formatDate = (date: Date | null) => {
    if (!date) return 'Select Date';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const handleCreateNew = () => {
    // Navigate to create new itinerary page
    navigate('/itinerary/new');
  };

  const handleEdit = (id: number) => {
    // Navigate to edit itinerary page
    navigate(`/itinerary/edit/${id}`);
  };

  const handleDelete = (id: number) => {
    // Delete itinerary logic
    setItineraries(itineraries.filter(itinerary => itinerary.id !== id));
  };

  const handleShare = (id: number) => {
    // Share logic
    console.log('Sharing itinerary:', id);
  };

  const toggleFavorite = (id: number) => {
    setItineraries(itineraries.map(itinerary => 
      itinerary.id === id 
        ? { ...itinerary, isFavorite: !itinerary.isFavorite } 
        : itinerary
    ));
  };

  const filteredItineraries = itineraries.filter(itinerary =>
    itinerary.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    itinerary.destinations.some(dest => dest.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <div className="relative bg-white">
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-transparent to-gray-900/80" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center">
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-3 mt-12">
                <div className="absolute top-20 left-8 z-20">
                  <Button 
                    variant="ghost" 
                    className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
                    onClick={handleBack}
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                  </Button>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-inter font-semibold text-[#1F2226]">
                    {mockItinerary.title}
                  </h1>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#454C58]  font-roboto font-medium">From {selectedLocation.name} to {mockItinerary.location}</span>
                    <span className="text-[#1F2226]  font-roboto font-regular">{mockItinerary.duration} Days</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(Math.floor(mockItinerary.rating))].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 text-[#FAC91E] fill-[#FAC91E] ${i < Math.floor(mockItinerary.rating) - 1 ? 'mr-0.5' : 'mr-1.5'}`}
                      />
                    ))}
                    <span className="text-sm font-medium text-[#1F2226] ml-1">
                      {mockItinerary.rating.toFixed(1)}
                    </span>
                  </div>
                  <span className="text-sm text-[#787676] font-inter font-semibold">
                    ({mockItinerary.reviews.toLocaleString()})
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-2 -mt-16 relative z-10">
        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-0 mb-2 border-2 border-gray-200">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row items-center gap-0 p-0">

            {/* Location Picker */}
            <div className="relative w-full md:w-auto ml-2">
              <button 
                onClick={() => setShowLocationPicker(!showLocationPicker)}
                className="flex items-center justify-between w-full md:w-48 px-4 py-3 bg-white border-2 border-gray-200 border-t-transparent border-b-transparent border-r-transparent border-l-transparent text-left focus:outline-none focus:ring-2 focus:ring-[#F53900] focus:border-transparent"
              >
                <span className="text-gray-600">{selectedLocation?.name || 'Select Location'}</span>
                <MapPinIcon className="h-5 w-5 text-gray-400" />
              </button>
              
              {showLocationPicker && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2 max-h-60 overflow-y-auto">
                  {locations.map((location) => (
                    <button
                      key={location.id}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md ${
                        selectedLocation?.id === location.id ? 'bg-gray-100 font-medium' : ''
                      }`}
                      onClick={() => {
                        setSelectedLocation(location);
                        setShowLocationPicker(false);
                      }}
                    >
                      {location.name} ({location.code})
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Date Picker */}
            <div className="relative w-full md:w-auto">
              <button 
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="flex items-center justify-between w-full md:w-48 px-4 py-3 bg-white border-2 border-gray-200 border-t-transparent border-b-transparent border-r-transparent text-left focus:outline-none focus:ring-2 focus:ring-[#F53900] focus:border-transparent"
              >
                <span className="text-gray-600">{formatDate(selectedDate)}</span>
                <CalendarDays className="h-5 w-5 text-gray-400" />
              </button>
              
              {showDatePicker && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                  <Calendar
                    mode="single"
                    selected={selectedDate || undefined}
                    onSelect={(date) => date && handleDateSelect(date as Date)}
                    className="rounded-md border"
                    showOutsideDays
                  />
                </div>
              )}
            </div>

            {/* Guest Picker */}
            <div className="relative w-full md:w-auto">
              <button 
                onClick={() => setShowGuestPicker(!showGuestPicker)}
                className="flex items-center justify-between w-full md:w-48 px-4 py-3 bg-white border-2 border-gray-200 border-t-transparent border-b-transparent border-r-transparent text-left focus:outline-none focus:ring-2 focus:ring-[#F53900] focus:border-transparent"
              >
                <span className="text-gray-600">{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                <UsersIcon className="h-5 w-5 text-gray-400" />
              </button>
              
              {showGuestPicker && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium">Guests</span>
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={decrementGuests}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                        disabled={guests <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-6 text-center">{guests}</span>
                      <button 
                        onClick={incrementGuests}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                        disabled={guests >= 10}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button 
                      onClick={() => setShowGuestPicker(false)}
                      className="px-4 py-2 bg-[#F53900] text-white rounded-lg hover:bg-[#E53300] transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Filter Dropdown */}
            <div className="relative w-full md:w-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="flex items-center justify-between w-full md:w-48 px-4 py-3 bg-white border-2 border-gray-200 border-t-transparent border-b-transparent border-r-transparent text-left focus:outline-none focus:ring-2 focus:ring-[#F53900] focus:border-transparent"
                  >
                    <span className="text-gray-600">Filters</span>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 p-2" align="start">
                  <div className="space-y-2">
                    {filters.map((filter) => (
                      <DropdownMenuItem 
                        key={filter.id}
                        onClick={() => setActiveFilter(filter.id)}
                        className={`px-3 py-2 text-sm rounded-md cursor-pointer ${
                          activeFilter === filter.id 
                            ? 'bg-[#F53910] text-white' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <span>{filter.label}</span>
                        {activeFilter === filter.id && (
                          <Check className="ml-auto h-4 w-4" />
                        )}
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Search icon button */}
            <button 
              onClick={() => {
                // Add search functionality here
                console.log('Search clicked with term:', searchTerm);
              }}
              className="w-12 h-12 flex items-center justify-center bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#F53900] focus:border-transparent flex-shrink-0"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Re-Generate Button */}
        <button className="w-full md:w-auto px-6 py-3 bg-[#F53900] text-white rounded-lg hover:bg-[#E53300] transition-colors flex items-center justify-center gap-2 flex-shrink-0">
          <RefreshCw className="h-5 w-5" />
          <span>Re-Generate</span>
        </button>
      </main>
    </div>
  );
};

export default ItineraryPage;
