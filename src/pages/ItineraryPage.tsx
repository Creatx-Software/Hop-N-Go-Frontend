import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MapPin } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import JapanImage from '@/assets/Japan.png';
import days1 from '@/assets/days1.png';
import days2 from '@/assets/days2.png';
import days3 from '@/assets/days3.png';
import days4 from '@/assets/days4.png';

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

const ItineraryPage = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

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
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[700px] overflow-hidden bg-[#EEEEEE]">
        <div className="absolute inset-0 p-6 pb-0 md:mt-20">
          <div className="w-full h-full overflow-hidden rounded-t-lg">
            <img 
              src={JapanImage} 
              alt="Japan Travel Destination"
              className="w-full h-full object-contain object-bottom md:object-cover"
            />
          </div>
        </div>
        <div className="absolute top-32 left-10 z-20">
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

      {/* Day */}
      <div className="w-full mx-auto px-6 py-8 bg-[#EEEEEE]">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-inter font-semibold text-[#1F1F1F] mb-6">Day</h2>
            
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ItineraryPage;
