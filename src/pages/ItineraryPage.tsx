import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MapPin, Images, Car, Train, Bus, Plane, MapPinIcon, Maximize2 } from 'lucide-react';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet';
import { CheckCircle2, Phone, Mail, Star } from 'lucide-react';
import JapanImage from '@/assets/Japan.png';
import OperatorImage from '@/assets/operator.png';
import days1 from '@/assets/days1.png';
import days2 from '@/assets/days2.png';
import days3 from '@/assets/days3.png';
import days4 from '@/assets/days4.png';
import osaka1 from '@/assets/japan1.png';
import osaka2 from '@/assets/japan2.png';
import osaka3 from '@/assets/japan3.png';
import osaka4 from '@/assets/japan4.png';
import osaka5 from '@/assets/japan5.png';
import accommodation from '@/assets/accommodation.png';
import d2accommodation from '@/assets/d2Accommodation.png';
import experience1 from '@/assets/experience1.png';
import experience2 from '@/assets/experience2.png';
import experience3 from '@/assets/experience3.png';
import d2experience1 from '@/assets/d2Experience1.png';
import d2experience2 from '@/assets/d2Experience2.png';
import d2experience3 from '@/assets/d2Experience3.png';
import Nara1 from '@/assets/d2Gallery1.png';
import Nara2 from '@/assets/d2Gallery2.png';
import Nara3 from '@/assets/d2Gallery3.png';
import Nara4 from '@/assets/d2Gallery4.png';
import Nara5 from '@/assets/d2Gallery5.png';

const inclusions = [
  'Guided walking tour of Florence (2.5-3 hours)',
  'Entry to the Duomo complex (cathedral +dome access)',
  'Visit to Ponte Vecchio and artisan shopping areas',
  'Free time at Mercato Centrale',
  'Professional English-speaking local guide',
  'City map and welcome bottle of water'
];

const exclusions = [
  'Meals and personal shopping expenses',
  'Museum entrance fees (e.g., Uffizi, Accademia) unless added as an extra',
  'Hotel pickup/drop-off (available at extra cost)',
  'Travel insurance',
  'Tips/gratuities'
];

// Cost per person data
const costPerPerson = {
  amount: 1500,
  currency: 'USD',
  includesTaxes: true
};

const tourOperator = {
  name: 'John Smith',
  rating: 4.8,
  reviews: 127,
  phone: '+1 (555) 123-4567',
  email: 'john.smith@travelagency.com',
  companyDescription: 'Hop N Go is a premier travel agency, dedicated to crafting personalized and unforgettable travel experiences. Specializing in authentic cultural journeys, luxury getaways, and custom-made itineraries, we connect travelers with the heart of UK and beyond. With expert local knowledge and a passion for excellence, Hop N Go turns every trip into a unique and seamless adventure. Add a summary about your company',
  companyLogo: '/Logo 23917.svg',
  companyName: 'TravelEase Tours'
};

const tourInfo = [
  { label: 'Name:', value: 'Hansika Hettiarachchige' },
  { label: 'Dates:', value: '14th August 2025 - 19th August 2025' },
  { label: 'Size of Group:', value: 'Group Size 10-30' },
  { label: 'Email:', value: 'example@gmail.com' },
  { label: 'No Of Peoples:', value: '02 Adults , 01 Children' },
  { label: 'Guide:', value: 'Fully Guided' },
  { label: 'Country:', value: 'United States' },
  { label: 'Type of Tour:', value: 'Group Tour' },
  { label: 'Language:', value: 'English' }
];

const summaryData = [
  { day: '01 Day', date: '14 Aug 2024', accommodation: 'Sun House Hotel', destination: 'Naperville,Naperville,Naperville', rooms: 'Single Room' },
  { day: '02 Day', date: '15 Aug 2024', accommodation: 'Sun House Hotel', destination: 'Naperville,Naperville,Naperville', rooms: 'Double Room' },
  { day: '03 Day', date: '16 Aug 2024', accommodation: 'Sun House Hotel', destination: 'Naperville,Naperville,Naperville', rooms: 'Double Room' },
  { day: '04 Day', date: '17 Aug 2024', accommodation: '', destination: '', rooms: '' }
];

const placesToSee = [
  {
    id: 1,
    image: days1,
    name: "Osaka",
    day: "01",
  },
  {
    id: 2,
    image: days2,
    name: "Nara",
    day: "02",
  },
  {
    id: 3,
    image: days3,
    name: "Kyoto",
    day: "03",
  },
  {
    id: 4,
    image: days4,
    name: "Nagoya",
    day: "04",
  }
];

const dayDetails = [{
  id: 1,
  dayNumber: "01",
  title: "Rome",
  date: "14 Aug 2024",
  mainImage: osaka1, // Main large image
  images: [
    { src: osaka2, alt: "Cherry blossom path" },
    { src: osaka3, alt: "Street with lanterns" },
    { src: osaka4, alt: "Traditional pagoda" },
    { src: osaka5, alt: "Traditional pagoda" },
  ],
  overview: "Embark on a captivating Italian adventure that begins in the Eternal City, Rome. On Day 1, dive into the rich tapestry of history amidst ancient ruins and iconic landmarks. Wander through the Colosseum's storied arches, stand in awe before the majestic Vatican City, and toss a coin into the enchanting Trevi Fountain. As night falls, savor Roman cuisine in a cozy trattoria, immersing yourself in the vibrant local culture. On Day 2, journey north to the Renaissance heart of Italy, Florence. This city is a living museum, adorned with breathtaking art and architecture. Marvel at Michelangelo's David, explore the Uffizi Gallery's masterpieces, and meander through the charming streets, lined with quaint cafes and artisan shops. Immerse yourself in the Tuscan charm as you dine al fresco, indulging in exquisite regional delicacies. Your adventure culminates on Day 3 in the cosmopolitan allure of Milan, Italy's fashion and design capital. Discover the stunning Duomo di Milano's intricate beauty, indulge in world-class shopping in the Galleria Vittorio Emanuele II, and take in modern art at the city's acclaimed galleries. As your journey concludes, relish in the culinary delights of Northern Italy, celebrating a whirlwind tour of Italy's most iconic cities.",
  accommodation: {
    name: "Casa Hotel",
    address: "Barcelona , Osaka",
    rating: 4.5,
    reviewCount: 25,
    description: "Experience luxury and comfort at Casa Hotel, located in the heart of Rome. Our hotel offers stunning views of the city and is just a short walk from major attractions. Enjoy our rooftop terrace, gourmet restaurant, and exceptional service.",
    image: accommodation
  },
  experiences: [
    {
      id: 1,
      title: "Colosseum",
      description: "Skip the line and explore the iconic Colosseum with an expert guide. Discover the history of ancient Rome's most famous amphitheater. Majestic, the Colosseum stands as a timeless testament to ancient Roman engineering and culture. Its grandeur echoes with the roars of history-gladiatorial battles, roaring crowd.",
      image: experience1
    },
    {
      id: 2,
      title: "Pantheon",
      description: "Experience the Vatican Museums, Sistine Chapel, and St. Peter's Basilica with priority access and an art historian guide. Majestic, the Colosseum stands as a timeless testament to ancient Roman engineering and culture. Its grandeur echoes with the roars of history-gladiatorial battles, roaring crowd.",
      image: experience2
    },
    {
      id: 3,
      title: "Trevi Fountain",
      description: "Walk through Rome's historic center, visit the Pantheon, Trevi Fountain, and other iconic landmarks with a local guide. Majestic, the Colosseum stands as a timeless testament to ancient Roman engineering and culture. Its grandeur echoes with the roars of history-gladiatorial battles, roaring crowd.",
      image: experience3
    }
  ],
  transportation: [
    {
      id: 1,
      title: "Airport Transfer",
      description: "Private transfer from Fiumicino Airport to Hotel Bella Vista"
    },
    {
      id: 2,
      title: "City Transportation",
      description: "Hop-on Hop-off Bus Tour for city exploration"
    }
  ]
}, {
  id: 2,
  dayNumber: "02",
  title: "Florence",
  date: "15 Aug 2024",
  mainImage: Nara1,
  images: [
    { src: Nara2, alt: "Florence Cathedral" },
    { src: Nara3, alt: "Ponte Vecchio" },
    { src: Nara4, alt: "Uffizi Gallery" },
    { src: Nara5, alt: "Tuscan Countryside" },
  ],
  overview: "Experience the heart of the Renaissance in Florence. Visit the iconic Duomo, marvel at Michelangelo's David, and stroll across the historic Ponte Vecchio. Indulge in authentic Tuscan cuisine and explore the Uffizi Gallery's masterpieces.",
  accommodation: {
    name: "Grand Hotel Florence",
    address: "Piazza Ognissanti 1, 50123 Florence, Italy",
    rating: 4.7,
    reviewCount: 42,
    description: "Luxury accommodation with stunning views of the Arno River. Enjoy our rooftop terrace, spa services, and gourmet restaurant featuring Tuscan specialties.",
    image: d2accommodation
  },
  experiences: [
    {
      id: 1,
      title: "Todai-ji Temple",
      description: "Skip the line and explore one of the world's greatest art museums with an expert guide. See masterpieces by Botticelli, Michelangelo, and da Vinci. Majestic, the Colosseum stands as a timeless testament to ancient Roman engineering and culture. Its grandeur echoes with the roars of history-gladiatorial battles, roaring crowd. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
      image: d2experience1
    },
    {
      id: 2,
      title: "Isuien Garden",
      description: "Visit a local winery in the Chianti region for a tasting of world-renowned Tuscan wines and traditional Italian appetizers. Majestic, the Colosseum stands as a timeless testament to ancient Roman engineering and culture. Its grandeur echoes with the roars of history-gladiatorial battles, roaring crowd. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
      image: d2experience2
    },
    {
      id: 3,
      title: "Nara National Museum",
      description: "Discover Florence's hidden gems and major landmarks on a guided walking tour through the historic city center. Majestic, the Colosseum stands as a timeless testament to ancient Roman engineering and culture. Its grandeur echoes with the roars of history-gladiatorial battles, roaring crowd. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
      image: d2experience3
    }
  ],
  transportation: [
    {
      id: 1,
      title: "Train to Florence",
      description: "High-speed train from Rome to Florence, 1.5 hours"
    },
    {
      id: 2,
      title: "City Transport Pass",
      description: "24-hour public transportation pass for Florence"
    }
  ]
}];

// Vehicle types and their data
const VEHICLES = {
  car: { name: 'Car', icon: Car, speed: 80 }, // km/h
  train: { name: 'Train', icon: Train, speed: 120 },
  bus: { name: 'Bus', icon: Bus, speed: 70 },
  plane: { name: 'Plane', icon: Plane, speed: 800 }
};

// Distance between cities in km
const DISTANCES = {
  'Rome-Florence': 275,
  'Florence-Venice': 260,
  'Venice-Milan': 280
};

const ItineraryPage = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  
  // State for selected vehicle
  const [selectedVehicle, setSelectedVehicle] = useState<keyof typeof VEHICLES>('car');
  const [expandedExperiences, setExpandedExperiences] = useState<{[key: number]: boolean}>({});

  const toggleExperience = (id: number) => {
    setExpandedExperiences(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
    scrollContainerRef.current.style.cursor = 'grabbing';
    scrollContainerRef.current.style.userSelect = 'none';
  };

  const handleMouseLeave = () => {
    if (!scrollContainerRef.current) return;
    isDraggingRef.current = false;
    scrollContainerRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    if (!scrollContainerRef.current) return;
    isDraggingRef.current = false;
    scrollContainerRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2; // Adjust scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    const touch = e.touches[0];
    startXRef.current = touch.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2; // Adjust scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleBack = () => {
    navigate(-1);
  };

  const checkScrollPosition = () => {
    // Add any scroll position logic here if needed
    // For example, you could add scroll indicators or snap points
  };

  const handleScroll = () => {
    checkScrollPosition();
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <div className="relative h-[270px] md:h-[700px] overflow-hidden bg-[#EEEEEE]">
        <div className="absolute inset-0 p-6 pb-0 md:mt-16">
          <div className="w-full h-full overflow-hidden rounded-t-lg">
            <img 
              src={JapanImage} 
              alt="Japan Travel Destination"
              className="w-full h-full object-contain object-bottom md:object-cover"
            />
          </div>
        </div>
        <div className="absolute top-6 left-10 z-20">
          <Button 
            variant="ghost" 
            className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
            onClick={handleBack}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </Button>
        </div>
        <div className="absolute inset-0 flex items-end justify-center z-10 pb-16">
          <div className="text-center">
            <h1 className="text-5xl font-['Philosopher'] font-bold text-white mb-4">Japan</h1>
            <div className="text-[#F5F5F5] text-base font-semibold inline-block">
              4 DAYS / 3 NIGHTS
            </div>
          </div>
        </div>
      </div>

      {/* Tour Information Section */}
      <div className="w-full mx-auto px-6 py-8 bg-[#EEEEEE]">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-inter font-semibold text-[#1F1F1F] mb-6">Tour Information</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tourInfo.map((item, index) => (
                  <div key={index} className="text-sm">
                    <span className="font-inter font-semibold text-[#171717]">{item.label} </span>
                    <span className="font-inter font-regular text-[#171717]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="w-full mx-auto px-6 py-8 bg-[#EEEEEE]">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-inter font-semibold text-[#1F1F1F] mb-6">Overview</h2>
            <p className="text-sm text-[#393939] font-inter font-medium">
              Embark on a captivating Italian adventure that begins in the Eternal City, Rome. On Day 1, dive into the rich tapestry of history amidst ancient ruins and iconic landmarks. Wander through the Colosseum's storied arches, stand in awe before the majestic Vatican City, and toss a coin into the enchanting Trevi Fountain. As night falls, savor Roman cuisine in a cozy trattoria, immersing yourself in the vibrant local culture. On Day 2, journey north to the Renaissance heart of Italy, Florence. This city is a living museum, adorned with breathtaking art and architecture. Marvel at Michelangelo's David, explore the Uffizi Gallery's masterpieces, and meander through the charming streets, lined with quaint cafes and artisan shops. Immerse yourself in the Tuscan charm as you dine al fresco, indulging in exquisite regional delicacies. Your adventure culminates on Day 3 in the cosmopolitan allure of Milan, Italy's fashion and design capital. Discover the stunning Duomo di Milano's intricate beauty, indulge in world-class shopping in the Galleria Vittorio Emanuele II, and take in modern art at the city's acclaimed galleries. As your journey concludes, relish in the culinary delights of Northern Italy, celebrating a whirlwind tour of Italy's most iconic cities.
            </p>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="w-full mx-auto px-6 py-8 bg-[#EEEEEE]">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-inter font-semibold text-[#1F1F1F] mb-6">Summary</h2>
            <div 
              ref={scrollContainerRef}
              className="relative overflow-x-auto border border-[#ECECEC] rounded-lg touch-auto select-none cursor-grab active:cursor-grabbing"
              data-scroll-container
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none', // IE and Edge
              }}
            >
              <style dangerouslySetInnerHTML={{
                __html: `
                  /* Hide scrollbar for Chrome, Safari and Opera */
                  [data-scroll-container]::-webkit-scrollbar {
                    display: none;
                  }
                  [data-scroll-container] {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                  }
                `
              }} />
              <table className="min-w-full">
                <thead>
                  <tr className="">
                    <th className="text-left py-4 px-3 text-sm font-inter font-semibold text-[#1F1F1F] w-[15%]">Day</th>
                    <th className="text-left py-4 px-3 text-sm font-inter font-semibold text-[#1F1F1F] w-[15%]">Date</th>
                    <th className="text-left py-4 px-3 text-sm font-inter font-semibold text-[#1F1F1F] w-[20%]">Accommodation</th>
                    <th className="text-left py-4 px-3 text-sm font-inter font-semibold text-[#1F1F1F] w-[35%]">Destination</th>
                    <th className="text-left py-4 px-3 text-sm font-inter font-semibold text-[#1F1F1F] w-[20%]">Rooms</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryData.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`${index % 2 === 0 ? 'bg-[#FDC9B1]/10' : 'bg-white'} hover:bg-gray-50`}
                    >
                      <td className="py-4 px-3 text-sm font-inter font-medium text-[#1F1F1F]">{item.day}</td>
                      <td className="py-4 px-3 text-sm font-inter text-[#666666]">{item.date}</td>
                      <td className="py-4 px-3 text-sm font-inter text-[#666666]">{item.accommodation}</td>
                      <td className="py-4 px-3 text-sm font-inter text-[#666666]">{item.destination}</td>
                      <td className="py-4 px-3 text-sm font-inter text-[#666666]">{item.rooms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
          </div>
        </div>
      </div>

      {/* Tour Days Section */}
      <div className="w-full mx-auto px-6 py-8 bg-[#EEEEEE]">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-inter font-semibold text-[#1F1F1F] mb-6">Tour Days</h2>
            <div className="h-[340px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {placesToSee.map((place) => (
                  <div key={place.id} className="group relative bg-transparent rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:translate-y-[-8px]">
                    <div className="relative w-full bg-gray-50 overflow-hidden rounded-t-2xl">
                      <div className="relative w-full pt-[75%] transition-all duration-500 ease-in-out group-hover:pt-[85%] overflow-hidden">
                        <div className="absolute inset-0">
                          <img 
                            src={place.image} 
                            alt={place.name} 
                            className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 transition-all duration-300 ease-in-out">
                      <h3 className="font-roboto font-semibold text-[#1F2226] text-lg">{place.name}</h3>
                      <div className="flex items-center text-sm text-[#666666] transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:h-0 group-hover:mt-0">
                        <span>Day {place.day}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Day Details Section */}
      {dayDetails.map((day) => (
        <div key={day.id} className="w-full mx-auto px-6 py-8 bg-[#EEEEEE]">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-4xl font-['Philosopher'] font-bold text-black mb-2">{day.dayNumber} Day</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-inter font-semibold text-[#1F1F1F]">{day.title} - {day.date}</h3>
                  </div>
                  <div className="flex space-x-2">
                  </div>
                </div>
              </div>
              
              {/* Image Gallery */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Main Image - full width on mobile, 50% on larger screens */}
                  <div className="w-full sm:w-1/2 rounded-xl overflow-hidden h-[200px] sm:h-[500px]">
                    <img 
                      src={day.mainImage}
                      alt="Main attraction"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Small images grid - 2x2 - full width on mobile, 50% on larger screens */}
                  <div className="w-full sm:w-1/2 grid grid-cols-2 gap-2 h-[200px] sm:h-[500px]">
                    {day.images.map((img, index) => (
                      <div key={index} className="relative rounded-lg overflow-hidden">
                        <img 
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover aspect-square"
                        />
                        {index === 3 && (
                          <div className="absolute bottom-2 right-2 bg-black/60 rounded-sm px-4 py-2 flex items-center space-x-1 shadow-md">
                            <Images className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">10+</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-inter font-semibold text-[#1F1F1F] mb-3 flex items-center">
                  Overview
                </h3>
                <p className="text-sm text-[#393939] font-inter font-medium">
                  {day.overview}
                </p>
              </div>
              
              {/* Accommodation */}
              <div className="mb-8">
                <h3 className="text-xl font-inter font-semibold text-[#1F1F1F] mb-4">
                  Accommodation
                </h3>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-[300px] h-[200px] rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                    <img 
                      src={day.accommodation.image} 
                      alt={day.accommodation.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                      <h4 className="text-lg font-roboto font-semibold text-[#1F1F1F]">{day.accommodation.name}</h4>
                      <div className="flex items-center space-x-2">
                        <div className="h-7 bg-[#FFECE3] flex items-center justify-center mr-2 px-2 rounded-l-full rounded-br-full">
                          <span className="font-roboto font-medium text-sm">{day.accommodation.rating}</span>
                        </div>
                        <span className="text-[#EB662B] text-xs font-roboto font-medium">
                          {day.accommodation.rating >= 4.5 ? 'Excellent' : 
                           day.accommodation.rating >= 4 ? 'Very Good' : 
                           day.accommodation.rating >= 3.5 ? 'Good' : 
                           day.accommodation.rating >= 3 ? 'Average' : 'Fair'}
                        </span>
                        <span className="text-[#8B94A4] text-xs font-roboto font-regular">
                          {day.accommodation.reviewCount} reviews
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start mt-2 text-sm text-[#A9A9A9] font-inter font-semibold">
                      <MapPin className="w-4 h-4 mt-0.5 mr-1.5 flex-shrink-0 text-[#505050]" />
                      <span>{day.accommodation.address}</span>
                    </div>
                    {day.accommodation.description && (
                      <p className="mt-3 text-sm text-[#393939] font-inter font-medium leading-relaxed">
                        {day.accommodation.description}
                      </p>
                    )}
                    <div className="py-0.5 order-1 md:order-none">
                      <a href="#" className="text-[#EB662B] text-sm font-inter font-medium underline hover:no-underline">
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Experiences */}
              <div className="mb-8">
                <h3 className="text-xl font-inter font-semibold text-[#1F1F1F] mb-6">
                  Experiences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {day.experiences.map((experience) => (
                    <div key={experience.id} className="bg-white rounded-xl overflow-hidden">
                      <div className="h-50 overflow-hidden mb-2">
                        <img 
                          src={experience.image} 
                          alt={experience.title}
                          className="w-full h-full object-cover transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-[#1F1F1F] font-inter">{experience.title}</h4>
                        </div>
                        <p className={`text-sm text-[#666666] font-inter mb-4 ${expandedExperiences[experience.id] ? '' : 'line-clamp-2'}`}>
                          {experience.description}
                        </p>
                        <div className="flex items-center">
                          <button 
                            onClick={() => toggleExperience(experience.id)}
                            className="text-[#EB662B] text-sm font-medium hover:underline focus:outline-none"
                          >
                            {expandedExperiences[experience.id] ? 'Show Less' : 'View More'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Transportation */}
              <div className="mt-8">
                <h3 className="text-xl font-inter font-semibold text-[#1F1F1F] mb-6">
                  Transportation
                </h3>
                
                <div className="relative">
                  {/* Vehicle Selection */}
                  <div className="flex flex-col items-center mb-6 w-full">
                    <div className="flex flex-wrap justify-center gap-2 mb-0 w-full">
                      {Object.entries(VEHICLES).map(([key, vehicle]) => {
                        const isSelected = selectedVehicle === key;
                        return (
                          <button 
                            key={key}
                            onClick={() => setSelectedVehicle(key as keyof typeof VEHICLES)}
                            className="flex items-center justify-center w-12 h-12 p-2 transition-colors"
                          >
                            <vehicle.icon className={`w-6 h-6 ${isSelected ? 'text-[#EB662B]' : 'text-[#989898]'}`} />
                          </button>
                        );
                      })}
                    </div>
                    
                    {/* Route with Dotted Line */}
                    <div className="w-full md:px-60">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-inter font-bold text-[#393939] text-sm">{day.title}</p>
                        <div className="flex-1 border-t-2 border-dashed border-[#393939] mx-4"></div>
                        <p className="font-inter font-bold text-[#393939] text-sm">{dayDetails[day.id]?.title || 'Destination'}</p>
                      </div>
                      
                      {/* Duration and Distance */}
                      {day.id < dayDetails.length && (
                        <div className="flex justify-center items-center gap-8 mt-0">
                          <div className="text-center">
                            <p className="font-inter font-semibold text-[#393939] text-sm">
                              {(() => {
                                const nextDay = dayDetails[day.id];
                                const routeKey = `${day.title}-${nextDay.title}` as keyof typeof DISTANCES;
                                const distance = DISTANCES[routeKey] || 0;
                                const hours = Math.floor(distance / VEHICLES[selectedVehicle].speed);
                                const minutes = Math.round(((distance / VEHICLES[selectedVehicle].speed) % 1) * 60);
                                return `${hours > 0 ? `${hours}h ` : ''}${minutes}m`;
                              })()}
                            </p>
                          </div>
                          <div className="h-4 w-px bg-[#393939]"></div>
                          <div className="text-center">
                            <p className="font-inter font-semibold text-[#393939] text-sm">
                              {(() => {
                                const nextDay = dayDetails[day.id];
                                const routeKey = `${day.title}-${nextDay.title}` as keyof typeof DISTANCES;
                                return DISTANCES[routeKey] ? `${DISTANCES[routeKey]} km` : 'N/A';
                              })()}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Location */}
      <div className="w-full mx-auto px-6 py-8 bg-[#EEEEEE]">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-inter font-semibold text-[#1F1F1F] mb-6">Location</h2>
                
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
        </div>
      </div>

      {/* Inclusion & Exclusion */}
      <div className="w-full mx-auto px-6 py-8 bg-[#EEEEEE]">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Included Section */}
              <div>
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-inter font-semibold text-[#454545]">Inclusion</h3>
                </div>
                <ul className="space-y-3">
                  {inclusions.map((item, index) => (
                    <li key={`included-${index}`} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-white fill-[#423939] mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-[#5A5A5A] font-inter font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Excluded Section */}
              <div>
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-inter font-semibold text-[#454545]">Exclusion</h3>
                </div>
                <ul className="space-y-3">
                  {exclusions.map((item, index) => (
                    <li key={`excluded-${index}`} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-white fill-[#423939] mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-[#5A5A5A] font-inter font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
      
          </div>
        </div>
      </div>

      {/* Cost Per Person */}
      <div className="w-full mx-auto px-6 py-8 bg-[#EEEEEE]">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-inter font-semibold text-[#1F1F1F]">Cost Per Person</h2>
              <div className="text-right">
                <div className="text-3xl font-inter font-bold text-[#393939]">
                  ${costPerPerson.amount.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Operator */}
      <div className="w-full mx-auto px-6 py-8 bg-[#EEEEEE]">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-inter font-semibold text-[#1F1F1F] mb-6">Tour Operator</h2>
            
            <div className="flex flex-col gap-8">
              {/* Operator Info */}
              <div className="w-full">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <img 
                    src={OperatorImage} 
                    alt={tourOperator.name}
                    className="w-full max-w-[160px] h-40 rounded-sm object-cover"
                  />
                  <div className="w-full">
                    <h3 className="text-3xl font-inter font-semibold text-black mb-2">Operated by {tourOperator.name}</h3>
                    <p className="text-black text-sm font-inter font-regular">Company review score {tourOperator.rating} Based on {tourOperator.reviews} reviews from property</p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center text-black text-sm font-inter font-medium">
                        <div className="w-8 h-8 rounded-full bg-[#EB662B]/10 flex items-center justify-center mr-2">
                          <Phone className="w-4 h-4 text-[#EB662B] fill-[#EB662B]" />
                        </div>
                        <span>{tourOperator.phone}</span>
                      </div>
                      <div className="flex items-center text-black text-sm font-inter font-medium">
                        <div className="w-8 h-8 rounded-full bg-[#EB662B]/10 flex items-center justify-center mr-2">
                          <Mail className="w-5 h-5 text-white fill-[#EB662B]" />
                        </div>
                        <span>{tourOperator.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Company Info */}
              <div className="w-full">
                <div className="p-6 w-full">
                  <div className="flex flex-col items-center gap-4">
                    <img 
                      src={tourOperator.companyLogo} 
                      alt={tourOperator.companyName}
                      className="w-32 h-auto"
                    />
                    <p className="text-[#393939] text-center font-inter font-medium">
                      {tourOperator.companyDescription}
                    </p>
                    <button className="px-6 py-2 rounded-sm bg-gradient-to-r from-[#F9AC7D] to-[#F53900] hover:opacity-90 transition-opacity duration-200 text-white font-inter font-medium mt-2">
                      Visit Website
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ItineraryPage;
