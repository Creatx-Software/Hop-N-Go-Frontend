import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Users as UsersIcon, ChevronDown, ChevronLeft, ChevronRight, RefreshCw, Star, Plus, Minus, Check, Maximize2, Clock, Facebook, Twitter, Linkedin, CalendarDays } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Calendar } from '@/components/ui/calendar';
import Footer from "@/components/Footer";
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

// Function to calculate distance between two coordinates in kilometers (Haversine formula)
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c; // Distance in km
  return Math.round(distance * 10) / 10; // Round to 1 decimal place
};

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
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [activeFilter, setActiveFilter] = useState('all');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  
  // Location coordinates mapping
  const locationCoordinates: { [key: string]: { lat: number; lng: number } } = {
    'New York': { lat: 40.7128, lng: -74.0060 },
    'Paris': { lat: 48.8566, lng: 2.3522 },
    'London': { lat: 51.5074, lng: -0.1278 },
    'Tokyo': { lat: 35.6762, lng: 139.6503 },
    'Sydney': { lat: -33.8688, lng: 151.2093 },
  };

  // Map and Itinerary state
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>(
    locationCoordinates[selectedLocation.name] 
      ? [locationCoordinates[selectedLocation.name].lat, locationCoordinates[selectedLocation.name].lng]
      : [40.7128, -74.0060] // Default to New York if location not found
  );
  const [mapZoom, setMapZoom] = useState(13);

  // Refs for first and last dot elements
  const firstDotRef = useRef<HTMLDivElement>(null);
  const lastDotRef = useRef<HTMLDivElement>(null);
  const [lineStyle, setLineStyle] = useState<React.CSSProperties>({});

  // Update line position when dots change
  useEffect(() => {
    const updateLinePosition = () => {
      if (firstDotRef.current && lastDotRef.current) {
        const firstDotRect = firstDotRef.current.getBoundingClientRect();
        const lastDotRect = lastDotRef.current.getBoundingClientRect();
        const container = firstDotRef.current.closest('.relative');
        const containerRect = container?.getBoundingClientRect();
        
        if (containerRect) {
          // Calculate the center points of the first and last dots
          const firstDotCenter = firstDotRect.top + firstDotRect.height;
          const lastDotCenter = lastDotRect.top + lastDotRect.height;
          
          // Calculate the top position to be exactly at the center of the first dot
          const top = (firstDotRect.top - containerRect.top) + (firstDotRect.height);
          
          // Calculate the height based on the distance between dots
          const height = lastDotCenter - firstDotCenter;
          
          setLineStyle({
            top: `${top}px`,
            height: `${height}px`,
            opacity: 1,
            left: '18px',
            width: '2px',
          });
        }
      }
    };

    // Initial update
    updateLinePosition();
    
    // Update on window resize
    window.addEventListener('resize', updateLinePosition);
    return () => window.removeEventListener('resize', updateLinePosition);
  }, [selectedDay]);

  
  // Update map center when selected location changes
  useEffect(() => {
    if (selectedLocation?.name && locationCoordinates[selectedLocation.name]) {
      const { lat, lng } = locationCoordinates[selectedLocation.name];
      setMapCenter([lat, lng]);
    }
  }, [selectedLocation]);

  // Function to handle day selection
  const handleDaySelect = (dayId: number) => {
    setSelectedDay(dayId);
    // Set map to show first activity of the selected day
    const selectedDayData = itineraryData.days.find(day => day.id === dayId);
    if (selectedDayData?.activities?.length > 0) {
      const firstActivity = selectedDayData.activities[0];
      setSelectedActivity(firstActivity.id);
      setMapCenter([firstActivity.coordinates.lat, firstActivity.coordinates.lng]);
    } else if (selectedLocation?.name && locationCoordinates[selectedLocation.name]) {
      // If no activities, center on selected location
      const { lat, lng } = locationCoordinates[selectedLocation.name];
      setMapCenter([lat, lng]);
    }
  };

  // Handle activity selection
  const handleActivitySelect = (activity: any) => {
    setSelectedActivity(activity.id);
    setMapCenter([activity.coordinates.lat, activity.coordinates.lng]);
  };

interface ContactUsPageProps {
  phoneNumber: string;
  email: string;
  address: string;
  headOffice: {
    addressLine1: string;
    addressLine2: string;
  };
  branchOffice: {
    addressLine1: string;
    addressLine2: string;
  };
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

const contactInfo: ContactUsPageProps = {
  phoneNumber: "+01 234 567 890",
  email: "hopngoinfo@gmail.com",
  address: "706 Campfire Ave. Meriden, CT 06450",
  headOffice: {
    addressLine1: "8 Brewery Drive, Lagos,",
    addressLine2: "Nigeria."
  },
  branchOffice: {
    addressLine1: "Opp Opolo round about, Yenagoa, Bayelsa,",
    addressLine2: "Nigeria"
  },
  socialLinks: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  }
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
            description: 'Iconic urban park with walking paths, lakes, and the Central Park Zoo.',
            image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            id: 2,
            name: 'The Metropolitan Museum',
            time: '12:30 PM',
            duration: '2-3 hours',
            price: '$25',
            address: '1000 5th Ave, New York, NY',
            coordinates: { lat: 40.7794, lng: -73.9632 },
            description: 'World-famous art museum with an extensive collection spanning 5,000 years.',
            image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            id: 3,
            name: 'Times Square',
            time: '4:00 PM',
            duration: '1 hour',
            price: 'Free',
            address: 'Manhattan, NY 10036',
            coordinates: { lat: 40.7580, lng: -73.9855 },
            description: 'Bustling square known for its bright lights, Broadway shows, and vibrant atmosphere.',
            image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
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
            description: 'Iconic symbol of freedom and one of the most recognized landmarks in the world.',
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
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
            description: 'Iconic 102-story Art Deco skyscraper with observatories on the 86th and 102nd floors.',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
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
    setCurrentMonth(new Date(date.getFullYear(), date.getMonth(), 1));
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      
      <div className="w-full max-w-full px-2 2xl:px-28 overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="relative bg-white">
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-transparent to-gray-900/80" />
        
        {/* Content */}
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center">
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-3 mt-16">
                <div className="absolute top-20 left-8 z-20">
                  <Button 
                    variant="ghost" 
                    className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 mt-2"
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
                    <span className="text-[#1F2226]  font-roboto font-bold">{mockItinerary.duration} Days</span>
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
                    <span className="text-sm font-inter font-semibold text-[#787676] ml-1">
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
      <main className="mx-auto px-4 2xl:px-8 py-2 relative z-10 -mt-16 overflow-x-visible">
        {/* Search and Filter */}
          <div className="flex flex-col 2xl:flex-row items-stretch 2xl:items-center gap-4 2xl:gap-10 w-full overflow-x-visible">
          <div className="bg-white rounded-2xl border-2 border-[#B5BAC2] w-full 2xl:w-auto overflow-x-visible">
            {/* Search Bar */}
            <div className="flex flex-row items-stretch divide-x divide-gray-200 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {/* Location Picker */}
              <div className="relative w-48 border-r border-gray-200 last:border-r-0 ml-2">
                <button 
                  onClick={() => setShowLocationPicker(!showLocationPicker)}
                  className="flex items-center justify-center w-full px-3 py-3 bg-white focus:outline-none"
                >
                  <span className="text-[#2B3037] font-roboto font-medium text-center">{selectedLocation?.name || 'Select Location'}</span>
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
                <div className="relative">
                  <div className="relative z-10">
                    <button 
                      onClick={() => setShowDatePicker(!showDatePicker)}
                      className="flex items-center justify-center w-full px-10 py-3 bg-white focus:outline-none"
                    >
                      <span className="text-[#2B3037] font-roboto font-medium">{formatDate(selectedDate)}</span>
                    </button>
                  </div>
                  <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#2B3037]" />
                  {showDatePicker && (
                    <div className="absolute z-20 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <button 
                          onClick={() => {
                            const newMonth = new Date(currentMonth);
                            newMonth.setMonth(newMonth.getMonth() - 1);
                            setCurrentMonth(newMonth);
                          }}
                          className="p-1 hover:bg-gray-100 rounded-full"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <h3 className="font-medium text-center">
                          {new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentMonth)}
                        </h3>
                        <button 
                          onClick={() => {
                            const newMonth = new Date(currentMonth);
                            newMonth.setMonth(newMonth.getMonth() + 1);
                            setCurrentMonth(newMonth);
                          }}
                          className="p-1 hover:bg-gray-100 rounded-full"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center text-sm">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                          <div key={day} className="text-gray-500 font-medium py-1">
                            {day}
                          </div>
                        ))}
                        {Array.from({ length: new Date(
                          currentMonth.getFullYear(), 
                          currentMonth.getMonth(), 
                          1
                        ).getDay() }).map((_, i) => (
                          <div key={`empty-${i}`} className="h-8" />
                        ))}
                        {Array.from({ 
                          length: new Date(
                            currentMonth.getFullYear(), 
                            currentMonth.getMonth() + 1, 
                            0
                          ).getDate() 
                        }).map((_, i) => {
                          const date = new Date(
                            currentMonth.getFullYear(),
                            currentMonth.getMonth(),
                            i + 1
                          );
                          const isSelected = selectedDate && 
                            date.getDate() === selectedDate.getDate() &&
                            date.getMonth() === selectedDate.getMonth() &&
                            date.getFullYear() === selectedDate.getFullYear();
                          const isToday = new Date().toDateString() === date.toDateString();
                          
                          return (
                            <button
                              key={i}
                              onClick={() => {
                                handleDateSelect(date);
                                setShowDatePicker(false);
                              }}
                              className={`h-8 w-8 rounded-full flex items-center justify-center mx-auto ${
                                isSelected 
                                  ? 'bg-[#F53910] text-white' 
                                  : isToday 
                                    ? 'bg-gray-100' 
                                    : 'hover:bg-gray-100'
                              }`}
                            >
                              {i + 1}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
            </div>

              {/* Guest Picker */}
              <div className="relative w-48 flex-1 border-r border-gray-200 last:border-r-0">
                <button 
                  onClick={() => setShowGuestPicker(!showGuestPicker)}
                  className="flex items-center justify-center w-full px-3 py-3 bg-white focus:outline-none"
                >
                <span className="text-[#2B3037] font-roboto font-medium text-center">{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
              </button>
              
              {showGuestPicker && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                  <div className="flex items-center justify-center space-x-4">
                    <button 
                      onClick={decrementGuests}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                      disabled={guests <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center text-lg font-medium">{guests}</span>
                    <button 
                      onClick={incrementGuests}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                      disabled={guests >= 10}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex justify-end">
                  </div>
                </div>
              )}
            </div>

              {/* Filter Dropdown */}
              <div className="relative w-48 flex-1 border-r border-gray-200 last:border-r-0">
                <button 
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  className="flex items-center justify-center gap-3 w-full px-3 py-3 bg-white focus:outline-none"
                >
                  <span className="text-[#2B3037] font-roboto font-medium text-center">
                    {filters.find(f => f.id === activeFilter)?.label || 'Filters'}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#2B3037] transition-transform duration-200 ${showFilterDropdown ? 'transform rotate-180' : ''}`} />
                </button>
                
                {showFilterDropdown && (
                  <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2 max-h-60 overflow-y-auto">
                    {filters.map((filter) => (
                      <button
                        key={filter.id}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md ${
                          activeFilter === filter.id ? 'bg-gray-100 font-medium' : ''
                        }`}
                        onClick={() => {
                          setActiveFilter(filter.id);
                          setShowFilterDropdown(false);
                        }}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search icon button */}
              <div className="flex items-center justify-beween flex-shrink-0 h-full">
                <button 
                  onClick={() => {
                    console.log('Search clicked with term:', searchTerm);
                  }}
                  className="mt-1 h-10 w-10 flex items-center justify-center bg-[#EB662B] text-white rounded-md hover:bg-[#E53300] focus:outline-none focus:ring-2 focus:ring-[#F53900] focus:ring-offset-2 mx-2"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Re-Generate Button */}
          <button className="w-full h-10 2xl:w-auto px-6 py-3 bg-[#F74A1F] text-white font-inter font-semiblod rounded-sm hover:bg-[#E53300] transition-colors flex items-center justify-center gap-2 flex-shrink-0">
            <span>Re-Generate</span>
          </button>
        </div>
      </main>

      {/* Itinerary & Map */}
      <div className="mx-auto px-4 sm:px-4 lg:px-4 py-2 border border-[#F1F2F3] rounded-2xl bg-white mt-4">
        <div className="grid grid-cols-1 xl:grid-cols-7 gap-6">
          {/* Itinerary Flow */}
          <div className="xl:col-span-4 bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4">
              <h2 className="text-2xl font-inter font-semibold text-[#121316]">Itinerary</h2>
            </div>
            
            {/* Vertical Timeline */}
            <div className="relative px-4 py-4">
              {/* Vertical line - dynamically positioned */}
              <div 
                className="absolute transition-all duration-200 w-0.5"
                style={{
                  ...lineStyle,
                  backgroundImage: 'linear-gradient(to bottom, #EB662B 50%, transparent 50%)',
                  backgroundSize: '2px 6px',
                  backgroundColor: 'transparent',
                  borderLeft: '2px dashed #EB662B',
                  height: lineStyle.height,
                  top: lineStyle.top,
                  left: '18px'
                }}
              ></div>
              
              {itineraryData.days.map((day, dayIndex) => {
                const isDaySelected = selectedDay === day.id;
                return (
                  <div key={day.id} className="relative mb-4">
                    {/* Day header */}
                    <div 
                      className="flex items-center cursor-pointer"
                      onClick={() => setSelectedDay(isDaySelected ? 0 : day.id)}
                    >
                      <div 
                        ref={dayIndex === 0 ? firstDotRef : (dayIndex === itineraryData.days.length - 1 ? lastDotRef : null)}
                        className={`z-10 flex-shrink-0 ${isDaySelected ? 'w-6 h-6 -ml-[9px]' : 'w-4 h-4 -ml-[5px]'} rounded-full flex items-center justify-center ${isDaySelected ? 'bg-[#F53900]' : 'bg-white border-2 border-[#EB662B]'}`}
                      >
                      </div>
                      <div className="ml-3">
                        <h3 
                          className="font-medium text-gray-900 hover:text-[#F53900] transition-colors"
                          onClick={() => handleDaySelect(day.id)}
                        >
                          Day {day.id}: {day.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Activities for the day */}
                    {isDaySelected && (
                      <div className="mt-2 ml-9 pl-4">
                        {day.activities.map((activity, activityIndex, activities) => {
                          const isLastActivity = activityIndex === activities.length - 1;
                          
                          return (
                            <React.Fragment key={activity.id}>
                              <div 
                                className={`relative mb-2 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow ${
                                  selectedActivity === activity.id ? 'ring-2 ring-[#F53900]' : ''
                                }`}
                              >
                                <div className="flex p-3 h-full items-center">
                                  {/* Activity Image */}
                                  <div className="w-16 h-16 bg-gray-100 relative flex-shrink-0 mr-3 rounded-md overflow-hidden">
                                    <img 
                                      src={activity.image} 
                                      alt={activity.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  
                                  {/* Activity Content */}
                                  <div className="flex-1">
                                    <h4 className="text-sm font-medium text-gray-900 flex items-center">
                                      <MapPin className="h-3.5 w-3.5 text-black mr-1.5 flex-shrink-0" />
                                      <span className="truncate">{activity.name}</span>
                                    </h4>
                                    <div className="flex items-center text-xs text-gray-500 mt-1">
                                      <Clock className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                                      <span>{activity.time}</span>
                                      <span className="mx-1">•</span>
                                      <span>{activity.duration}</span>
                                    </div>
                                  </div>
                                  
                                  {/* Details Button */}
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="text-sm w-28 h-9 px-2.5 bg-[#F3F3F3] text-black ml-2 border-[#F3F3F3] hover:bg-gray-200 hover:text-black transition-colors"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleActivitySelect(activity);
                                    }}
                                  >
                                    Details
                                  </Button>
                                </div>
                              </div>
                              
                              {/* Add vertical line between activities */}
                              {!isLastActivity && (() => {
                                const nextActivity = day.activities[activityIndex + 1];
                                const distance = calculateDistance(
                                  activity.coordinates.lat, 
                                  activity.coordinates.lng,
                                  nextActivity.coordinates.lat,
                                  nextActivity.coordinates.lng
                                );
                                
                                return (
                                  <div className="relative flex items-center ml-11 h-12 -mt-1 -mb-1">
                                    <div className="h-full w-0.5 relative">
                                      <div 
                                        className="absolute top-0 left-0 w-full h-full" 
                                        style={{
                                          backgroundImage: 'linear-gradient(to bottom, #9CA3AF 50%, transparent 50%)',
                                          backgroundSize: '2px 6px',
                                          backgroundRepeat: 'repeat-y',
                                          height: '100%',
                                          width: '1px',
                                          left: '50%',
                                          transform: 'translateX(-50%)'
                                        }} 
                                      />
                                    </div>
                                    <div className="ml-3 text-xs text-gray-500 whitespace-nowrap">
                                      {distance} km
                                    </div>
                                  </div>
                                );
                              })()}
                            </React.Fragment>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Map */}
          <div className="xl:col-span-3 h-[600px] bg-white rounded-2xl overflow-hidden border border-gray-200 relative z-0">
            {mapCenter ? (
              <div className="h-full flex flex-col">
                <div className="relative h-full">
                  <MapContainer
                    center={mapCenter}
                    zoom={mapZoom}
                    style={{ height: '100%', width: '100%' }}
                    zoomControl={false}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {/* Selected Location Marker */}
                    {selectedLocation?.name && locationCoordinates[selectedLocation.name] && (
                      <Marker 
                        position={[
                          locationCoordinates[selectedLocation.name].lat, 
                          locationCoordinates[selectedLocation.name].lng
                        ]}
                      >
                        <Popup>
                          <div className="text-sm">
                            <div className="font-medium">{selectedLocation.name}</div>
                            <div className="text-gray-600">Your selected location</div>
                          </div>
                        </Popup>
                      </Marker>
                    )}
                    {selectedDay && itineraryData.days
                      .find(day => day.id === selectedDay)
                      ?.activities.map((activity) => (
                        <Marker 
                          key={activity.id} 
                          position={[activity.coordinates.lat, activity.coordinates.lng]}
                          eventHandlers={{
                            click: () => handleActivitySelect(activity),
                          }}
                        >
                          <Popup>
                            <div className="text-sm">
                              <div className="font-medium">{activity.name}</div>
                              <div className="text-gray-600">{activity.time} • {activity.duration}</div>
                              <div className="text-gray-500 text-xs mt-1">
                                <MapPin className="inline h-3 w-3 mr-1" />
                                {activity.address.split(',')[0]}
                              </div>
                            </div>
                          </Popup>
                        </Marker>
                      ))}
                    <ZoomControl position="bottomright" />
                  </MapContainer>
                  <div className="absolute top-4 right-4 z-[1000] bg-white p-2 rounded-md shadow-md">
                    <Maximize2 className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
                {selectedActivity && (
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <h3 className="font-medium text-gray-900">
                      {itineraryData.days
                        .flatMap(day => day.activities)
                        .find(a => a.id === selectedActivity)?.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {itineraryData.days
                        .flatMap(day => day.activities)
                        .find(a => a.id === selectedActivity)?.description}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 mx-auto text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">Select a day</h3>
                  <p className="mt-1 text-gray-500">Click on a day to view activities on the map</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Love This Itinerary & Let's talk */}
      <div className="mx-auto px-4 sm:px-2 lg:px-2 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
          {/* Left side - Love This Itinerary */}
          <div className="bg-white rounded-2xl p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Love This Itinerary? Let’s Make It Happen</h3>
            <p className="text-gray-600 mb-4">Get personalized assistance from our travel experts</p>
            <p className="text-gray-600 mb-6">If this AI-generated itinerary matches your travel plans, submit your details below. Our travel agent will contact you shortly to customize, confirm, and assist you with bookings.</p>

            <form className="space-y-4">
              <div>
                <Input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email address"
                />
              </div>

              <p className="text-gray-600 mb-4">Get personalized assistance from our travel experts</p>
              
              <Button 
                type="submit" 
                className="w-40 bg-[#F74A1F] hover:bg-[#F74A1F]/80 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
              >
                Submit
              </Button>
            
            </form>
          </div>
          
          {/* Right side - Let's talk */}
          <div className="bg-[#F74A1F] p-6 text-white flex items-center justify-center min-h-[500px]">
            <div className="bg-transparent rounded-2xl p-0 2xl:p-8 w-full max-w-md">
              <h3 className="text-2xl text-white font-inter font-bold mb-6">Let's talk!</h3>
              
              <div className="grid 2xl:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <p className="text-white/80 text-md font-inter font-regular">{contactInfo.phoneNumber}</p>
                </div>
                
                <div className="flex flex-col">
                  <p className="text-white/80 text-md font-inter font-regular">{contactInfo.email}</p>
                </div>
                
                <div className="pt-4">
                  <div className="w-96 h-[2px] bg-white/60 mb-4 -mt-5"></div>
                  <div className="w-96 border-t border-transparent pt-2">
                    <p className="text-md text-white font-inter font-bold mb-3">Headoffice</p>
                    <p className="text-white/80 font-inter font-regular mb-6">
                      {contactInfo.headOffice.addressLine1}<br/>{contactInfo.headOffice.addressLine2}
                    </p>
                    
                    <p className="text-md text-white font-inter font-bold mb-3">Branch Office</p>
                    <p className="text-white/80 font-inter font-regular mb-6">
                      {contactInfo.branchOffice.addressLine1}<br/>{contactInfo.branchOffice.addressLine2}
                    </p>
                    
                    <div className="flex space-x-4 mt-8">
                      <a href={contactInfo.socialLinks.facebook} className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center hover:bg-[#F53900]/70 transition-colors duration-200">
                        <Facebook className="w-5 h-5 text-[#F53900]/90 fill-[#F53900]/90 hover:text-white hover:fill-white transition-colors duration-200" />
                      </a>
                      <a href={contactInfo.socialLinks.twitter} className="w-6 h-6 rounded-full bg-transparent flex items-center justify-center hover:bg-white/90 transition-colors duration-200">
                        <Twitter className="w-5 h-5 text-white/90 fill-white/90 hover:text-[#F53900] hover:fill-[#F53900] transition-colors duration-200" />
                      </a>
                      <a href={contactInfo.socialLinks.linkedin} className="w-6 h-6 bg-white/90 flex items-center justify-center hover:bg-[#F53900]/70 transition-colors duration-200">
                        <Linkedin className="w-5 h-5 text-[#F53900]/90 fill-[#F53900]/90 hover:text-white hover:fill-white transition-colors duration-200" />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ItineraryPage;
