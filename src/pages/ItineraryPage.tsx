import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin as MapPinIcon, Users as UsersIcon, ChevronDown, ChevronLeft, RefreshCw, Star, Plus, Minus, Check, MapPin, MoreVertical, Edit, Trash2, Share2, Home, Utensils, User, Bus, Wifi, PlusCircle, Languages, ShieldCheck, Headset, CreditCard, Clock, Users, Globe, Heart, Image as ImageIcon, X, CalendarDays } from 'lucide-react';
import ItineraryMap from '@/components/ItineraryMap';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from "@/components/Navigation";
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
  
  // Map and Itinerary state
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);

  // Reset selected activity when day changes
  const handleDaySelect = (dayId: number) => {
    setSelectedDay(dayId);
    setSelectedActivity(null);
  };
  
  // Mock data for itinerary
  const itineraryData = {
    location: 'New York',
    days: [
      {
        id: 1,
        title: 'Arrival in New York',
        activities: [
          {
            id: 1,
            name: 'Central Park',
            time: '10:00 AM',
            duration: '1-2 hours',
            price: 'Free',
            address: 'Manhattan, New York',
            coordinates: { lat: 40.7829, lng: -73.9654 },
            description: 'Iconic urban park with walking paths, lakes, and the Central Park Zoo.'
          },
          {
            id: 2,
            name: 'The Metropolitan Museum of Art',
            time: '12:30 PM',
            duration: '2-3 hours',
            price: '$25',
            address: '1000 5th Ave, New York, NY',
            coordinates: { lat: 40.7794, lng: -73.9632 },
            description: 'World-famous art museum with an extensive collection spanning 5,000 years.'
          },
          {
            id: 3,
            name: 'Times Square',
            time: '4:00 PM',
            duration: '1 hour',
            price: 'Free',
            address: 'Manhattan, NY 10036',
            coordinates: { lat: 40.7580, lng: -73.9855 },
            description: 'Bustling square known for its bright lights, Broadway shows, and vibrant atmosphere.'
          }
        ]
      },
      {
        id: 2,
        title: 'Exploring Manhattan',
        activities: [
          {
            id: 4,
            name: 'Statue of Liberty',
            time: '9:00 AM',
            duration: '2-3 hours',
            price: '$24',
            address: 'Liberty Island, New York, NY',
            coordinates: { lat: 40.6892, lng: -74.0445 },
            description: 'Iconic symbol of freedom and one of the most recognized landmarks in the world.'
          }
        ]
      },
      {
        id: 3,
        title: 'City Highlights',
        activities: [
          {
            id: 5,
            name: 'Empire State Building',
            time: '10:30 AM',
            duration: '1-2 hours',
            price: '$44',
            address: '20 W 34th St, New York, NY',
            coordinates: { lat: 40.7484, lng: -73.9857 },
            description: 'Iconic 102-story Art Deco skyscraper with observatories on the 86th and 102nd floors.'
          }
        ]
      }
    ]
  };
  
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
                <div className="flex items-center gap-2 -mt-2 md:-mt-4">
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

      {/* Filter & Generate */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 relative z-10 -mt-16">
        {/* Search and Filter */}
        <div className="flex flex-col 2xl:flex-row items-stretch 2xl:items-center gap-2 w-full">
          <div className="bg-white rounded-2xl border-2 border-[#B5BAC2] w-full 2xl:w-auto">
            {/* Search Bar */}
            <div className="flex flex-row items-stretch divide-x divide-gray-200">
              {/* Location Picker */}
              <div className="relative w-48 border-r border-gray-200 last:border-r-0 ml-2">
                <button 
                  onClick={() => setShowLocationPicker(!showLocationPicker)}
                  className="flex items-center justify-between w-full px-3 py-3 bg-white text-left focus:outline-none"
                >
                  <span className="text-gray-600">{selectedLocation?.name || 'Select Location'}</span>
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
              <div className="relative w-48 flex-1 border-r border-gray-200 last:border-r-0">
                <button 
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  className="flex items-center justify-between w-full px-3 py-3 bg-white text-left focus:outline-none"
                >
                <span className="text-gray-600">{formatDate(selectedDate)}</span>
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
              <div className="relative w-48 flex-1 border-r border-gray-200 last:border-r-0">
                <button 
                  onClick={() => setShowGuestPicker(!showGuestPicker)}
                  className="flex items-center justify-between w-full px-3 py-3 bg-white text-left focus:outline-none"
                >
                <span className="text-gray-600">{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
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
              <div className="relative w-48 flex-1 border-r border-gray-200 last:border-r-0">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button 
                      className="flex items-center justify-between w-full px-3 py-3 bg-white text-left focus:outline-none"
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
                  console.log('Search clicked with term:', searchTerm);
                }}
                className="ml-2 mr-3 h-10 w-10 flex items-center justify-center bg-[#EB662B] text-white rounded-md hover:bg-[#E53300] focus:outline-none focus:ring-2 focus:ring-[#F53900] focus:ring-offset-2 flex-shrink-0 self-center"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Re-Generate Button */}
          <button className="w-full 2xl:w-auto px-6 py-3 bg-[#F74A1F] text-white rounded-lg hover:bg-[#E53300] transition-colors flex items-center justify-center gap-2 flex-shrink-0">
            <span>Re-Generate</span>
          </button>
        </div>
      </main>

      {/* Itinerary & Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4 py-4 border border-[#F1F2F3] rounded-2xl bg-white">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Itinerary Flow */}
          <div className="xl:col-span-1 bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">Itinerary</h2>
            </div>
            
            {/* Vertical Timeline */}
            <div className="relative px-4 py-4">
              {/* Vertical line */}
              <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {itineraryData.days.map((day, dayIndex) => {
                const isDaySelected = selectedDay === day.id;
                return (
                  <div key={day.id} className="relative mb-4">
                    {/* Day header */}
                    <div 
                      className="flex items-center cursor-pointer"
                      onClick={() => handleDaySelect(isDaySelected ? 0 : day.id)}
                    >
                      <div className={`z-10 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${isDaySelected ? 'bg-[#F53900]' : 'bg-white border-2 border-[#EB662B]'}`}>
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-gray-900">Day {day.id}: {day.title}</h3>
                      </div>
                    </div>
                    
                    {/* Activities for the day */}
                    {isDaySelected && (
                      <div className="mt-2 ml-9 pl-4">
                        {day.activities.map((activity, activityIndex) => (
                          <div 
                            key={activity.id}
                            className={`relative mb-10 p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow transition-shadow cursor-pointer ${
                              selectedActivity === activity.id ? 'ring-2 ring-[#F53900]' : ''
                            }`}
                            onClick={() => setSelectedActivity(activity.id)}
                          >
                            <div className="flex items-start">
                              {/* Time and Duration */}
                              <div className="text-center mr-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {activity.time.split(' ')[0]}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {activity.time.split(' ')[1]}
                                </div>
                              </div>
                              
                              {/* Activity Details */}
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <h4 className="text-sm font-medium text-gray-900">{activity.name}</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Map */}
          <div className="xl:col-span-2 h-[600px] bg-gray-100 rounded-2xl overflow-hidden">
            <div className="h-full flex flex-col">
              <div className="flex-1">
                <ItineraryMap
                  activities={itineraryData.days
                    .find(day => day.id === selectedDay)?.activities || []
                    .map(activity => ({
                      id: activity.id,
                      name: activity.name,
                      coordinates: activity.coordinates
                    }))
                  }
                  selectedActivity={selectedActivity}
                  onActivitySelect={setSelectedActivity}
                />
              </div>
              {selectedActivity && (
                <div className="p-4 border-t border-gray-200 bg-white">
                  <h3 className="font-medium text-gray-900">
                    {itineraryData.days
                      .flatMap(day => day.activities)
                      .find(a => a.id === selectedActivity)?.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {itineraryData.days
                      .flatMap(day => day.activities)
                      .find(a => a.id === selectedActivity)?.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItineraryPage;
