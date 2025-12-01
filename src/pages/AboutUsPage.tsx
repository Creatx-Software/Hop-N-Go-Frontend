import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiChevronRight, FiMapPin, FiGlobe, FiAward, FiUsers } from 'react-icons/fi';
import { Mail, Play } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LanguageDropdown from "@/components/LanguageDropdown";
import { Button } from "@/components/ui/button";
import VideoImage from "@/assets/Video.png";

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

const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState('mission');
  
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
            <div className="flex flex-col lg:flex-row gap-12 mb-12">
              {/* Left Side - Title */}
              <div className="lg:w-1/2">
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-14 h-[2px] bg-[#1D2130]"></div>
                    <span className="text-[#1D2130] text-sm font-medium tracking-widest">KNOW ABOUT</span>
                  </div>
                  <div className="text-[#1D2130] text-sm font-medium tracking-widest ml-16">US</div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D2130] mb-6 ml-10 leading-tight">
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
              <div className="lg:w-1/2 flex flex-col justify-center">
                <p className="text-[#1D2130] text-lg mb-6">
                  Hop N Go is your trusted travel partner, offering seamless trips and carefully planned itineraries. Our goal is to make every journey easy, safe, and unforgettable.
                </p>
                <p className="text-[#1D2130]/70 text-lg">
                  From curated itineraries to seamless eVisa support, we ensure your journey starts the moment you dream of travelling. With expert guidance, reliable service, and a passion for exploration, Hop N Go is your trusted travel companion.
                </p>
              </div>
            </div>

            {/* Bottom Row - Video with Orange Section */}
            <div className="relative w-full -mt-8">
              {/* Orange Section - Full width */}
              <div 
                className="absolute top-1/3 left-1/2 -translate-x-1/2 w-screen h-[820px] pt-32 pb-16" 
                style={{ 
                  width: '100vw',
                  background: 'linear-gradient(180deg, #F9AC7D 0%, #F53900 100%)'
                }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Mission Section */}
                    <div className="bg-transparent backdrop-blur-sm p-8 rounded-2xl mt-36">
                      <div className="text-left mb-6">
                        <h2 className="text-xl font-bold text-white leading-tight">
                          OUR <br />
                          <span className="text-xl font-bold text-white">MISSION</span>
                        </h2>
                      </div>
                      <h1 className="font-bold text-4xl md:text-4xl text-white mb-4">We make travel accessible, enjoyable, and worry-free</h1>
                      <p className="text-white/90 text-md">
                        We aim to empower travelers with simple tools, personalised recommendations, and reliable support — ensuring everyone can explore the world confidently.
                      </p>
                    </div>

                    {/* Vision Section */}
                    <div className="bg-transparent backdrop-blur-sm p-8 rounded-2xl mt-36">
                      <div className="text-left mb-6">
                        <h2 className="text-xl font-bold text-white leading-tight">
                          OUR <br />
                          <span className="text-xl font-bold text-white">VISION</span>
                        </h2>
                      </div>
                      <h1 className="font-bold text-4xl md:text-4xl text-white mb-4">To inspire meaningful travel experiences across the globe</h1>
                      <p className="text-white/90 text-md">
                        We envision a world where travel is smoother, smarter, and more enriching. Hop N Go strives to bring people closer to cultures, landscapes, and unforgettable moments.
                      </p>
                    </div>
                  </div>

                  {/* Trusted By Section */}
                  <div className="mt-16 w-full ml-4">
                    <div className="text-left mb-6">
                      <h2 className="text-xl font-bold text-white leading-tight">
                        OUR <br />
                        <span className="text-xl font-bold text-white">SUPPORTERS</span>
                      </h2>
                    </div>
                    <div className="w-full overflow-x-auto">
                      <div className="flex justify-start items-center space-x-12 md:space-x-16 w-max">
                        <img src="/src/assets/sup1.png" alt="Supporter 1" className="h-8 object-contain flex-shrink-0" />
                        <img src="/src/assets/sup2.png" alt="Supporter 2" className="h-8 object-contain flex-shrink-0" />
                        <img src="/src/assets/sup3.png" alt="Supporter 3" className="h-8 object-contain flex-shrink-0" />
                        <img src="/src/assets/sup4.png" alt="Supporter 4" className="h-8 object-contain flex-shrink-0" />
                        <img src="/src/assets/sup5.png" alt="Supporter 5" className="h-8 object-contain flex-shrink-0" />
                        <img src="/src/assets/sup6.png" alt="Supporter 6" className="h-8 object-contain flex-shrink-0 pr-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video Container - Centered */}
              <div className="relative max-w-[1265px] h-[calc(448px+200px)] mx-auto">
                <div className="absolute top-1/2 left-0 w-full h-[200px] bg-transparent rounded-b-2xl"></div>
              
                {/* Video */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1265px] h-[448px] rounded-3xl overflow-hidden shadow-xl z-10">
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

      {/* Trusted Travel Companion Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We are your trusted travel companion</h2>
            <p className="text-gray-600 text-lg">
              We are a team of passionate travelers who believe that every journey should be an unforgettable experience. 
              Our mission is to provide you with the best travel experiences around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiMapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Destinations</h3>
              <p className="text-gray-600">Discover handpicked destinations that will take your breath away.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiGlobe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Coverage</h3>
              <p className="text-gray-600">Explore amazing places all around the world with our extensive network.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiAward className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Award Winning</h3>
              <p className="text-gray-600">Recognized as one of the best travel agencies in the industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div className="relative rounded-xl overflow-hidden h-96 md:h-[500px] w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                <img 
                  src="/images/about/story.jpg" 
                  alt="Our Story" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="inline-block bg-primary px-4 py-1 rounded-full text-sm font-medium mb-2">Since 2010</span>
                  <h3 className="text-2xl font-bold">Our Journey</h3>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              
              <div className="mb-8">
                <div className="flex space-x-4 mb-6 border-b">
                  <button 
                    className={`pb-3 px-1 font-medium ${activeTab === 'mission' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('mission')}
                  >
                    Our Mission
                  </button>
                  <button 
                    className={`pb-3 px-1 font-medium ${activeTab === 'vision' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('vision')}
                  >
                    Our Vision
                  </button>
                  <button 
                    className={`pb-3 px-1 font-medium ${activeTab === 'values' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('values')}
                  >
                    Our Values
                  </button>
                </div>
                
                <div className="min-h-[200px]">
                  {activeTab === 'mission' && (
                    <div>
                      <p className="text-gray-600 mb-4">
                        Our mission is to provide exceptional travel experiences that inspire and delight our customers. 
                        We strive to make every journey memorable by offering personalized services and unique destinations.
                      </p>
                      <p className="text-gray-600">
                        We believe in responsible tourism that benefits both travelers and local communities.
                      </p>
                    </div>
                  )}
                  
                  {activeTab === 'vision' && (
                    <div>
                      <p className="text-gray-600 mb-4">
                        Our vision is to be the most trusted and innovative travel company in the world, 
                        known for creating meaningful connections between people and places.
                      </p>
                      <p className="text-gray-600">
                        We aim to transform the way people experience travel through technology and exceptional service.
                      </p>
                    </div>
                  )}
                  
                  {activeTab === 'values' && (
                    <div>
                      <p className="text-gray-600 mb-4">
                        Our core values guide everything we do:
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Customer First: We put our customers at the heart of everything we do.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Integrity: We operate with honesty and transparency.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Innovation: We continuously seek new ways to improve and innovate.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Sustainability: We are committed to responsible and sustainable tourism.</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-primary/5 p-4 rounded-lg">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FiAward className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">15+</h4>
                    <p className="text-gray-600 text-sm">Years Experience</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-primary/5 p-4 rounded-lg">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FiUsers className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">50k+</h4>
                    <p className="text-gray-600 text-sm">Happy Travelers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of travel experts is dedicated to making your journey unforgettable. 
              Get to know the people behind your perfect trip.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex space-x-4">
                      <a href={member.social.twitter} className="text-white hover:text-primary transition-colors">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href={member.social.linkedin} className="text-white hover:text-primary transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href={member.social.instagram} className="text-white hover:text-primary transition-colors">
                        <span className="sr-only">Instagram</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center mx-auto">
              View All Team Members
              <FiArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUsPage;
