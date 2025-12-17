import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight as FiChevronRightIcon } from 'react-icons/fi';
import { Mail, Play } from 'lucide-react';
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
const NextArrow = (props: any) => {
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

const PrevArrow = (props: any) => {
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
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      <div className="w-screen h-9 bg-[#FFC8BB]/30 relative z-10 overflow-x-hidden">
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
      
      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden mt-16">
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
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 md:px-0 mt-32">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Philosopher'] font-bold text-white mb-10">
            Hop N Go
          </h1>
          <p className="text-white text-lg md:text-xl font-inter font-medium px-2 md:px-20 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Hero Images */}
        <div className="relative z-10 flex flex-col items-center mt-16 w-full">
          <div className="w-full max-w-[1440px] px-6 mx-auto">
            <div className="flex justify-center gap-4 md:gap-10">
              <img 
                src={hero1} 
                alt="Travel destination 1" 
                className="h-auto w-full max-h-36 md:max-h-[580px] object-cover"
              />
              <img 
                src={hero2} 
                alt="Travel destination 2" 
                className="h-auto w-full max-h-48 md:max-h-[680px] object-cover -mt-12"
              />
              <img 
                src={hero3} 
                alt="Travel destination 3" 
                className="h-auto w-full max-h-52 md:max-h-[800px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Know About Us */}
        <div className="relative z-10 w-full py-16 md:py-24">
          <div className="w-full px-6 md:px-20 mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Side - Title */}
              <div className="lg:w-1/2">
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-14 h-[2px] bg-white"></div>
                    <span className="text-white text-sm font-inter font-bold tracking-widest">KNOW ABOUT US</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-white mb-8 leading-tight">
                  We are your trusted travel companion
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
                  Hop N Go is your trusted travel partner, offering seamless trips and carefully planned itineraries. Our goal is to make every journey easy, safe, and unforgettable.
                </p>
                <p className="text-white/60 font-inter font-regular text-lg">
                  From curated itineraries to seamless eVisa support, we ensure your journey starts the moment you dream of travelling. With expert guidance, reliable service, and a passion for exploration, Hop N Go is your trusted travel companion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative w-full bg-white py-16 md:py-16">
        <div className="w-full px-6 md:px-20 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Side - Image with overlap */}
            <div className="lg:w-1/2 -mt-24 md:-mt-72 relative z-10">
              <div className="relative overflow-hidden">
                <img 
                  src={vision} 
                  alt="Our Vision"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="lg:w-1/2 lg:pl-16">
              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-black text-sm font-inter font-bold tracking-widest">OUR VISION</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-inter font-bold text-black mb-6 leading-tight">
                To inspire meaningful travel experiences across the globe
              </h2>
              <p className="text-black/70 font-inter italic text-lg mb-0">
                We envision a world where travel is smoother, smarter, and more enriching. Hop N Go strives to bring people closer to cultures, landscapes, and unforgettable moments.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative w-full bg-white pt-0 pb-8 md:pt-0 md:pb-24">
        <div className="w-full px-6 md:px-20 mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            {/* Right Side - Image */}
            <div className="lg:w-1/2 relative z-10">
              <div className="relative overflow-hidden">
                <img 
                  src={mission} 
                  alt="Our Mission"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Left Side - Content */}
            <div className="lg:w-1/2 lg:pr-16">
              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-black text-sm font-inter font-bold tracking-widest">OUR MISSION</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-inter font-bold text-black mb-6 leading-tight">
                We make travel accessible, enjoyable, and worry-free
              </h2>
              <p className="text-black/70 font-inter italic text-lg">
                We aim to empower travelers with simple tools, personalised recommendations, and reliable support — ensuring everyone can explore the world confidently.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="relative w-full bg-white pt-12 pb-12 lg:pb-64">
        <div className="w-full mx-auto px-4 md:px-16 -mt-4 md:-mt-16">
          <div className="relative">
            <div className="bg-black rounded-3xl overflow-hidden lg:max-w-[70%] min-h-[400px] flex items-center">
              <div className="w-full p-8 md:p-12 lg:pr-48 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-inter font-bold tracking-widest">OUR JOURNEY</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-inter font-bold mb-6">How We Help Travelers Explore More</h2>
                <p className="text-white/60 font-inter font-regular mb-10 text-md md:text-lg">
                  Since our beginning, we have helped thousands of travelers plan meaningful adventures with confidence.
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-inter font-bold mb-2">34K+</h3>
                    <p className="text-white/60 text-xs md:text-sm font-inter font-medium">Destinations Searched</p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-inter font-bold mb-2">400+</h3>
                    <p className="text-white/60 text-xs md:text-sm font-inter font-medium">Successful Trips</p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-inter font-bold mb-2">20+</h3>
                    <p className="text-white/60 text-xs md:text-sm font-inter font-medium">Travel Experts</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Journey Image - Positioned to overlap the black card */}
            <div className="relative lg:absolute right-0 top-1/8 transform lg:-translate-y-1/2 w-full lg:w-[45%] h-80 lg:h-[500px] mt-8 lg:mt-0">
              <img 
                src={journey} 
                alt="Travel Journey"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUsPage;