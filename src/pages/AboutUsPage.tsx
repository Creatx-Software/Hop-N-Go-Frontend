import { useState, useRef, useEffect, ReactElement, SVGProps } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight as FiChevronRightIcon } from 'react-icons/fi';
import { Mail, Play, ArrowRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LanguageDropdown from "@/components/LanguageDropdown";
import hero from '@/assets/aboutHero.png';
import mission from '@/assets/mission.png';
import service1 from '@/assets/service1.png';
import service2 from '@/assets/service2.png';
import vision from '@/assets/vision.png';
import journey from '@/assets/journeyHelp.png';
import hero1 from '@/assets/aboutHero1.png';
import hero2 from '@/assets/aboutHero2.png';
import hero3 from '@/assets/aboutHero3.png';
import background from '@/assets/aboutusbg.png';

// Custom Arrow Components
interface ArrowProps {
  onClick?: () => void;
  className?: string;
}

const NextArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300 focus:outline-none"
    >
      <FiChevronRightIcon className="w-5 h-5 text-white" />
    </button>
  );
};

const PrevArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300 focus:outline-none"
    >
      <FiChevronLeft className="w-5 h-5 text-white" />
    </button>
  );
};

interface JourneyStatsProps {
  destinationsSearched: string | number;
  successfulTrips: number;
  travelExperts: number;
}

const JourneyStats: React.FC<JourneyStatsProps> = ({
  destinationsSearched = '34K',
  successfulTrips = 400,
  travelExperts = 20
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <h3 className="text-2xl md:text-3xl font-inter font-bold mb-2">
          {typeof destinationsSearched === 'number' 
            ? `${destinationsSearched.toLocaleString()}+` 
            : destinationsSearched.endsWith('+') 
              ? destinationsSearched 
              : `${destinationsSearched}+`}
        </h3>
        <p className="text-white/60 text-xs md:text-sm font-inter font-medium">Destinations Searched</p>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-inter font-bold mb-2">{successfulTrips.toLocaleString()}+</h3>
        <p className="text-white/60 text-xs md:text-sm font-inter font-medium">Successful Trips</p>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-inter font-bold mb-2">{travelExperts.toLocaleString()}+</h3>
        <p className="text-white/60 text-xs md:text-sm font-inter font-medium">Travel Experts</p>
      </div>
    </div>
  );
};

const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState('mission');
  
  // Animation for continuous scroll
  const [isClient, setIsClient] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
    
    const scrollContainer = sliderRef.current;
    if (!scrollContainer) return;
    
    const scrollWidth = scrollContainer.scrollWidth;
    let scrollPosition = 0;
    const speed = 1; // Adjust speed here (lower = faster)
    
    const scroll = () => {
      if (scrollContainer) {
        scrollPosition += speed;
        if (scrollPosition >= scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      requestAnimationFrame(scroll);
    };
    
    const animationFrame = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isClient]);

  // Carousel settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden mt-20 md:mt-24 lg:pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={background} 
            alt="Background" 
            className="w-full h-full object-cover"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
              height: '100%'
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Overlay */}
        <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center px-6 md:px-0 mt-16">
          <h3 className="text-sm md:text-lg font-roboto font-bold text-white mb-4 tracking-widest">
            ABOUT US
          </h3>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold text-white mb-10 max-w-5xl">
            Where Smart Travel Meets Heartfelt Experiences
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-inter font-medium italic px-2 md:px-20">
            Hop N Go isn’t just another travel company.
          </p>
          <p className="text-white/90 text-lg md:text-xl font-inter font-medium italic px-2 md:px-20">
          &nbsp;It’s a story — born from passion, powered by technology, and built for dreamers who believe travel should be as simple as it is magical. We are a UK-registered outbound travel agency operating in both Sri Lanka and the United Kingdom,driven by one clear purpose:&nbsp;to make travel effortless, intelligent, and deeply personal. At Hop N Go, we’ve built a new kind of travel experience — one that blends the brilliance of Artificial Intelligence with the warmth of human understanding. A place where you can explore the world confidently, guided by technology that listens, learns, and personalizes every detail — yet always supported by a real person who truly cares. You may never need to call us — but we’ll always be right there if you do. That’s our promise.
          </p>
          <p className="text-white/90 text-lg md:text-xl font-inter font-medium italic px-2 md:px-20 mb-10">
            A promise to make travel feel as easy as it should be, yet as personal as it used to be.
          </p>
        </div>

        {/* Hero Images */}
        <div className="relative z-10 flex flex-col items-center mt-12 w-full">
          <div className="w-full max-w-[1440px] px-6 mx-auto">
            <img 
              src={hero} 
              alt="About Us Hero"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Know About Us */}
        <div className="container relative z-10 w-full py-16 md:py-24">
          <div className="w-full mx-auto px-6 md:px-8 lg:px-10 xl:px-10">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Side - Title */}
              <div className="flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-14 h-[2px] bg-white"></div>
                    <span className="text-white text-sm font-inter font-bold tracking-widest">KNOW ABOUT US</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-inter font-bold text-white mb-8 leading-tight">
                  A New Kind of Travel Experience
                </h1>
                <div className="relative group">
                  <Link 
                    to="/destinations" 
                    className="inline-block bg-[#F15A24] hover:bg-[#e04e1a] text-white px-10 py-3.5 font-medium text-base rounded-[10px] transition-all duration-300 relative z-10"
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 0%, calc(100% - 20px) 100%, 0 100%)",
                    }}
                  >
                    EXPLORE MORE
                  </Link>
                </div>
              </div>
              
              {/* Right Side - Description */}
              <div className="lg:w-1/2 flex flex-col justify-center lg:pl-12">
                <p className="text-white text-lg font-inter font-bold mb-6">
                  While many platforms help you “get things done” fast, we go further.We believe you deserve not just speed — but confidence.Our AI-powered website gives you all the information you need in seconds — curated, verified, and transparent.No guessing. No back-and-forth. No uncertainty.
                </p>
                <p className="text-white/60 font-inter font-regular text-lg">
                  Yet, if ever you need a real person — a human voice who listens and understands — our experienced consultants are always just a message or call away. They're here to guide you, inspire you, and ensure every step of your journey feels right. Because we believe travel should be human at heart, even when it’s powered by machines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container relative w-full bg-white py-16 md:py-16">
        <div className="w-full px-0 md:px-0 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Side - Image with overlap */}
            <div className="lg:w-2/3 -mt-24 2xl:-mt-32 relative z-10">
              <div className="relative overflow-hidden">
                <img 
                  src={vision} 
                  alt="Our Vision"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="lg:w-1/2 lg:pl-16 2xl:-mt-24">
              {/* pink half-circle */}
              <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[600px] h-[400px] -translate-x-1/3 z-0">
                <div className="w-full h-full bg-gradient-to-r from-pink-300/40 via-pink-500/20 to-transparent rounded-full blur-3xl"></div>
              </div>
              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-black text-sm font-inter font-bold tracking-widest">OUR VISION</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-inter font-bold text-black mb-6 leading-tight">
                To inspire meaningful travel experiences across the globe
              </h2>
              <p className="text-black/70 font-inter italic text-lg mb-0">
                To become a global symbol of intelligent, trusted, and heartfelt travel —
              </p>
              <p className="text-black/70 font-inter italic text-lg mb-0">
                where every journey begins with confidence and ends with connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container relative w-full bg-white pt-0 pb-8 md:pt-0 md:pb-24 mt-0 2xl:-mt-28">
        <div className="w-full px-0 md:px-0 mx-auto">
          
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            {/* Right Side - Image */}
            <div className="lg:w-2/3 relative z-10 2xl:ml-20 2xl:transform 2xl:scale-110">
              <div className="relative overflow-hidden">
                <img 
                  src={mission} 
                  alt="Our Mission"
                  className="w-full h-auto object-cover"
                />
                {/* Subtle overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Left Side - Content */}
            <div className="lg:w-1/2 lg:pr-16 2xl:mt-12">
              {/* soft pink half-circle */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[400px] translate-x-1/3 z-0">
                <div className="w-full h-full bg-gradient-to-l from-pink-300/40 via-pink-500/20 to-transparent rounded-full blur-3xl"></div>
              </div>
              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-black text-sm font-inter font-bold tracking-widest">OUR MISSION</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-inter font-bold text-black mb-6 leading-tight">
                We make travel accessible, enjoyable, and worry-free
              </h2>
              <p className="text-black/70 font-inter italic text-lg mb-0">
                To become a global symbol of intelligent, trusted, and heartfelt travel —
              </p>
              <p className="text-black/70 font-inter italic text-lg mb-0">
                where every journey begins with confidence and ends with connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
    <section className="relative bg-white pt-12">
      <div className="w-full max-w-[1440px] mx-auto px-6 2xl:px-10 -mt-4 md:-mt-16">
        <div className="relative">
          <div className="bg-black rounded-3xl overflow-hidden 2xl:max-w-[70%] min-h-[400px] flex items-center">
            <div className="w-full p-8 md:p-12 2xl:pr-60 text-white">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-inter font-bold tracking-widest">OUR JOURNEY</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-inter font-bold mb-6">How We Help Travelers Explore More</h2>
              <p className="text-white/60 font-inter font-regular mb-10 text-md md:text-lg">
                Since our beginning, we have helped thousands of travelers plan meaningful adventures with confidence.
              </p>
              
              <JourneyStats 
                destinationsSearched="34K"
                successfulTrips={400}
                travelExperts={20}
              />
            </div>
          </div>
          
          {/* Journey Image - Overlapping with Expert Services */}
          <div className="relative z-10 2xl:absolute right-0 top-8 2xl:top-40 w-full 2xl:w-[48%] 2xl:h-[600px]">
            <img 
              src={journey} 
              alt="Travel Journey"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Expert Services */}
    <section className="relative w-full bg-white pt-20 md:pt-12 pb-12">
      <div className="w-full max-w-[1440px] mx-auto px-6 2xl:px-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Images Section - Left Side */}
          <div className="w-full 2xl:w-7/12">
            {/* Service 1 Image */}
            <div className="relative">
              <img 
                src={service1} 
                alt="Expert Travel Services"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            {/* Service 2 Image - Positioned below service1 */}
            <div className="mt-6 w-full relative">
              <img 
                src={service2} 
                alt="Travel Planning"
                className="w-full h-auto object-cover rounded-lg"
              />
              <ArrowRight className="absolute bottom-4 right-4 w-16 h-16 md:w-32 md:h-32 lg:w-24 lg:h-24 2xl:w-32 2xl:h-32 text-[#F07026] bg-[#0F1011] rounded-full p-2" />
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="w-full lg:w-7/12 bg-transparent p-0 px-4 2xl:px-24 mt-8 lg:mt-[20rem] 2xl:mt-[30rem]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-inter font-medium tracking-widest text-black">Welcome to Hop N Go</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-inter font-medium text-black mb-6">
              Choose Hop N Go with Our Expert Services
            </h2>
            <p className="text-[#454545] font-inter font-regular text-md mb-8">
              Discover the benefits that set us apart and make your travel experience smoother and more enjoyable.
            </p>

            <div className="space-y-6 mb-0">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#423939] flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-inter font-medium text-lg text-[#141414] mb-1">Expert Travel Planners</h3>
                  <p className="font-inter font-regular text-[#454545]">Our experienced travel specialists provide personalised guidance to craft itineraries suited to your budget, interests, and travel style.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#423939] flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-inter font-medium text-lg text-[#141414] mb-1">Smart, Seamless Tools</h3>
                  <p className="font-inter font-regular text-[#454545]">Use our platform to explore destinations, compare travel options, and plan every detail with ease.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#423939] flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-inter font-medium text-lg text-[#141414] mb-1">Reliable Support Anytime</h3>
                  <p className="font-inter font-regular text-[#454545]">From visa guidance to itinerary adjustments, our team is always ready to assist you every step of the way.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#423939] flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-inter font-medium text-lg text-[#141414] mb-1">Tailored Travel Programs</h3>
                  <p className="font-inter font-regular text-[#454545]">Choose from a variety of curated tours and travel experiences — from budget trips to luxury escapes.</p>
                </div>
              </div>

              <div className="pt-6">
                <button className="bg-[#F74A1F] text-white font-roboto font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-colors">
                  Create Your Next Adventure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Ready for Adventure Section */}
      <section className="relative w-full bg-white py-16">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 xl:px-10">
          <div className="w-full py-8 bg-[#EEEEEE] rounded-sm">
        <div className="relative z-10">
          <div className="mx-auto">
            <div className="flex flex-col lg:flex-row px-8">
              {/* Left Side - Title */}
              <div className="w-full lg:w-2/5 mb-10 lg:mb-0 lg:pr-0">
                <h2 className="text-3xl md:text-5xl font-inter font-semibold text-black">
                  Ready for Your Next Adventure?
                </h2>
                <button className="relative group mt-8 after:content-[''] after:absolute after:bottom-[-12px] after:-ml-[104px] after:-translate-x-1/2 after:w-[calc(100%-30px)] after:h-3 after:bg-gradient-to-b after:from-[rgba(0,0,0,0.15)] after:to-transparent after:rounded-b-md hover:after:bottom-[-14px] hover:after:h-3.5 active:after:bottom-[-4px] active:after:h-1 after:transition-all after:duration-300">
                  <Link 
                    to="/destinations" 
                    className="inline-block bg-[#F15A24] hover:bg-[#e04e1a] text-white px-10 py-3.5 font-medium text-base rounded-[10px] transition-all duration-300 relative z-10 active:translate-y-[2px]"
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 0%, calc(100% - 20px) 100%, 0 100%)",
                    }}
                  >
                    GET STARTED
                  </Link>
                </button>
              </div>
              
              {/* Right Side - Content */}
              <div className="w-full lg:w-3/5 lg:pl-48">
                <h3 className="text-xl md:text-2xl font-inter font-bold text-black mb-4">
                  Your dream destination is just a click away.
                </h3>
                <p className="text-[#4C4C4C] text-md md:text-md font-inter font-semibold mb-0">
                  Start exploring breathtaking landscapes, vibrant cultures, and unforgettable experiences today. With Hop N Go, you’re not just booking a trip — you’re creating lifelong memories em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                </p>
              </div>
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

export default AboutUsPage;