import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiChevronRight, FiMapPin, FiGlobe, FiAward, FiUsers, FiChevronLeft, FiChevronRight as FiChevronRightIcon } from 'react-icons/fi';
import { Mail, Play } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LanguageDropdown from "@/components/LanguageDropdown";
import { Button } from "@/components/ui/button";
import VideoImage from "@/assets/Video.png";
import sup1 from '@/assets/sup1.png';
import sup2 from '@/assets/sup2.png';
import sup3 from '@/assets/sup3.png';
import sup4 from '@/assets/sup4.png';
import sup5 from '@/assets/sup5.png';
import sup6 from '@/assets/sup6.png';
import why from '@/assets/why.png';
import journey from '@/assets/journey.png';
import adventure from '@/assets/adventure.png';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  social: {
    twitter: string;
    linkedin: string;
    instagram: string;
  };
};

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
  
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO & Founder',
      image: '/images/team/member1.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Travel Expert',
      image: '/images/team/member2.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Tour Guide',
      image: '/images/team/member3.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      id: 4,
      name: 'Sarah Williams',
      role: 'Customer Support',
      image: '/images/team/member4.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
  ];

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
      <section className="relative py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            {/* Top Row - Title and Description */}
            <div className="flex flex-col lg:flex-row gap-30 mb-12">
              {/* Left Side - Title */}
              <div className="lg:w-1/2">
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-14 h-[2px] bg-[#1D2130] ml-10"></div>
                    <span className="text-[#1D2130] text-sm font-inter font-bold tracking-widest ml-2">KNOW ABOUT US</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-[#1D2130] mb-6 ml-10 leading-tight">
                  We are your trusted travel companion
                </h1>
                <div className="mb-8 ml-10">
                  <div className="relative">
                    <Link 
                      to="/destinations" 
                      className="relative bg-[#F15A24] hover:bg-[#e04e1a] text-white px-10 py-3.5 font-medium text-base flex items-center justify-center w-fit rounded-[10px] transition-all duration-300" 
                      style={{
                        clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 0%, calc(100% - 20px) 100%, 0 100%)",
                      }}
                    >
                      EXPLORE MORE
                    </Link>
                    <div 
                      className="absolute right-0 top-0 w-5 h-full bg-[#F15A24] group-hover:bg-[#e04e1a] -z-10 rounded-[100px]"
                      style={{
                        clipPath: "polygon(0 0, 100% 20%, 0 100%)"
                      }}
                    ></div>
                  </div>
                  <div 
                    className="w-[190px] h-[30px] mt-0 relative overflow-hidden"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0% 100%)",
                      transform: 'skewX(-5deg)'
                    }}
                  >
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(229, 229, 234, 0.4) 15%, 50%, rgba(229, 229, 234, 0.4) 85%, transparent 100%)',
                        maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
                        backdropFilter: 'blur(0.5px)'
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Right Side - Description */}
              <div className="lg:w-1/2 flex flex-col justify-center lg:pl-24 lg:pr-4">
                <p className="text-[#1D2130] text-lg font-inter font-bold mb-6">
                  Hop N Go is your trusted travel partner, offering seamless trips and carefully planned itineraries. Our goal is to make every journey easy, safe, and unforgettable.
                </p>
                <p className="text-[#1D2130]/70 font-inter font-regular text-lg">
                  From curated itineraries to seamless eVisa support, we ensure your journey starts the moment you dream of travelling. With expert guidance, reliable service, and a passion for exploration, Hop N Go is your trusted travel companion.
                </p>
              </div>
            </div>

            {/* Bottom Row - Video with Orange Section */}
            <div className="relative w-full mt-2 md:-mt-8">
              {/* Orange Section - Full width */}
              <div 
                className="absolute top-1/3 left-1/2 -translate-x-1/2 w-screen h-[920px] md:h-[820px] pt-32 pb-16 -mt-16 md:-mt-0" 
                style={{ 
                  width: '100vw',
                  background: 'linear-gradient(180deg, #F9AC7D 0%, #F53900 100%)'
                }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Mission Section */}
                    <div className="bg-transparent backdrop-blur-sm p-8 rounded-2xl mt-4 md:mt-36">
                      <div className="text-left mb-2">
                        <h2 className="text-md md:text-lg font-inter font-bold text-white leading-tight">
                          OUR <br />
                          <span className="text-md md:text-lg font-inter font-bold text-white">MISSION</span>
                        </h2>
                      </div>
                      <h1 className="font-inter font-bold text-2xl md:text-4xl text-white mb-4">We make travel accessible, enjoyable, and worry-free</h1>
                      <p className="font-inter font-regular text-white/60 text-sm md:text-md">
                        We aim to empower travelers with simple tools, personalised recommendations, and reliable support — ensuring everyone can explore the world confidently.
                      </p>
                    </div>

                    {/* Vision Section */}
                    <div className="bg-transparent backdrop-blur-sm p-8 rounded-2xl -mt-16 md:mt-36">
                      <div className="text-left mb-2">
                        <h2 className="text-md md:text-lg font-inter font-bold text-white leading-tight">
                          OUR <br />
                          <span className="text-md md:text-lg font-inter font-bold text-white">VISION</span>
                        </h2>
                      </div>
                      <h1 className="font-inter font-bold text-2xl md:text-4xl text-white mb-4">To inspire meaningful travel experiences across the globe</h1>
                      <p className="font-inter font-regular text-white/60 text-sm md:text-md">
                        We envision a world where travel is smoother, smarter, and more enriching. Hop N Go strives to bring people closer to cultures, landscapes, and unforgettable moments.
                      </p>
                    </div>
                  </div>

                  {/* Trusted By Section */}
                  <div className="w-full relative overflow-hidden bg-transparent py-8">
                    <div className="container mx-auto px-4">
                      <div className="text-left mb-8 pl-4 md:pl-0">
                        <h2 className="text-lg md:text-xl font-inter font-medium text-white leading-tight">
                          OUR <br />
                          <span className="text-xl font-inter font-medium text-white">SUPPORTERS</span>
                        </h2>
                      </div>
                      <div className="relative">
                        <div 
                          ref={sliderRef}
                          className="relative w-full overflow-x-auto no-scrollbar"
                          style={{
                            WebkitOverflowScrolling: 'touch',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                          }}
                        >
                          <div className="flex items-center" style={{ width: 'max-content' }}>
                            {[...Array(4)].map((_, loopIndex) => (
                              <div key={loopIndex} className="flex">
                                {[sup1, sup2, sup3, sup4, sup5, sup6].map((img, index) => (
                                  <div key={`${loopIndex}-${index}`} className="flex-shrink-0 px-6">
                                    <div className="flex items-center justify-center h-16 w-32">
                                      <img 
                                        src={img} 
                                        alt={`Supporter ${index + 1}`} 
                                        className="h-6 md:h-8 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <style dangerouslySetInnerHTML={{
                      __html: `
                        .no-scrollbar::-webkit-scrollbar {
                          display: none;
                        }
                      `
                    }} />
                  </div>
                </div>
              </div>
              
              {/* Video Container - Centered */}
              <div className="relative max-w-[1265px] h-[calc(448px+200px)] mx-auto">
                <div className="absolute top-1/2 left-0 w-full h-[200px] bg-transparent rounded-b-2xl"></div>
              
                {/* Video */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[90%] lg:w-[1265px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[448px] rounded-3xl overflow-hidden shadow-xl z-10">
                  {/* Video Thumbnail */}
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <img 
                      src={VideoImage} 
                      alt="About Us Video" 
                      className="w-full h-full object-cover"
                    />
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center group">
                      <div className="absolute w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm shadow-[0_0_18px_8px_rgba(255,255,255,0.06)]"></div>
                      <button className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-10">
                        <Play className="w-8 h-8 text-[#FF5A2D] fill-[#FF5A2D]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="pt-96 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Image */}
            <div className="w-full lg:w-1/2 bg transparent -mt-12 md:mt-0">
              <img 
                src={why} 
                alt="Why Choose Hop N Go" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 -mt-8 md:mt-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-[2px] bg-[#1D2130]"></div>
                <span className="text-[#1D2130] text-sm font-inter font-bold tracking-widest">WHY US</span>
              </div>
              <h2 className="text-4xl font-inter font-bold text-[#141414] mb-6">
                Why Choose Hop N Go
              </h2>
              <p className="text-lg text-[#454545] font-inter font-medium mb-8">
                Discover the benefits that set us apart and make your travel experience smoother and more enjoyable.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#423939] flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-inter font-medium text-lg text-[#141414] mb-1">Tailored Travel Programs</h3>
                    <p className="font-inter font-regular text-[#454545]">Choose from a variety of curated tours and travel experiences — from budget trips to luxury escapes.</p>
                  </div>
                </div>
              </div>
              
              <button 
                className="text-white font-roboto font-semibold py-3 px-8 rounded-3xl transition-all duration-300 flex items-center
                bg-gradient-to-r from-[#F9AC7D] to-[#F53000] hover:opacity-90 hover:shadow-lg">
                Create Your Next Adventure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 -mt-16 md:-mt-16">
          <div className="bg-[#F53900] rounded-3xl overflow-hidden py-12">
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Content */}
              <div className="w-full lg:w-[55%] p-12 pt-20 text-white -mt-12 md:mt-0">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-inter font-bold tracking-widest">OUR JOURNEY</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-inter font-bold mb-6">How We Help Travelers Explore More</h2>
                <p className="text-white/60 font-inter font-regular mb-10 text-md md:text-lg">
                  Since our beginning, we have helped thousands of travelers plan meaningful adventures with confidence.
                </p>
                
                {/* Statistics */}
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <h3 className="text-xl font-inter font-medium mb-2">34K+</h3>
                    <p className="text-white/60 text-xs md:text-sm font-inter font-medium">Destinations Searched</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-inter font-medium mb-2">400+</h3>
                    <p className="text-white/60 text-xs md:text-sm font-inter font-medium">Successful Trips</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-inter font-medium mb-2">20+</h3>
                    <p className="text-white/60 text-xs md:text-sm font-inter font-medium">Travel Experts</p>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Image */}
              <div className="w-full lg:w-[45%] flex items-center justify-end pr-12">
                <div className="w-[90%] h-auto">
                  <img 
                    src={journey} 
                    alt="Our Journey" 
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready for Adventure Section */}
      <section className="relative px-12 py-16 bg-gradient-to-r from-[#F74A1F]/10 to-white">
        <div className="absolute bottom-0 left-0 right-0 w-full h-44 overflow-hidden">
          <img 
            src={adventure} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <div className="max-w-[1800px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Title */}
              <div className="w-full lg:w-2/5 mb-10 lg:mb-0 lg:pr-0">
                <h2 className="text-3xl md:text-5xl font-inter font-semibold text-black">
                  Ready for Your Next Adventure?
                </h2>
                <div className="w-36 h-2 bg-black my-6"></div>
              </div>
              
              {/* Right Side - Content */}
              <div className="w-full lg:w-3/5 lg:pl-48">
                <h3 className="text-xl md:text-2xl font-inter font-bold text-black mb-4">
                  Your dream destination is just a click away.
                </h3>
                <p className="text-[#4C4C4C] text-md md:text-lg font-inter font-semibold mb-8">
                  Start exploring breathtaking landscapes, vibrant cultures, and unforgettable experiences today. With Hop N Go, you’re not just booking a trip — you’re creating lifelong memories
                </p>
                <button 
                  className="bg-gradient-to-r from-[#F9AC7D] to-[#F53900] text-white font-poppins font-medium py-3 px-8 rounded-3xl hover:opacity-90 transition-all duration-300"
                >
                  GET STARTED
                </button>
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
