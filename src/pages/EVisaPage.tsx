import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import LanguageDropdown from '@/components/LanguageDropdown';
import Footer from '@/components/Footer';
import { Mail, ArrowRight, ArrowLeft, ChevronRight, ChevronUp, Phone, Globe2, MapPin, Send, PhoneCall } from 'lucide-react';
import evisaHero from '@/assets/evisaHero.png';
import apply from '@/assets/apply.png';
import mobile from '@/assets/mobile.png';
import h1 from '@/assets/Ellipse 1.png';
import h2 from '@/assets/Ellipse 2.png';
import h3 from '@/assets/Ellipse 3.png';
import expressImg from '@/assets/express.png';
import evisaCircle from '@/assets/evisaCircle.png';

type VisaType = 'tourist' | 'business' | 'transit';

const EVisaPage = () => {
  const [visaType, setVisaType] = useState<VisaType>('tourist');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [nationality, setNationality] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [email, setEmail] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeFaqId, setActiveFaqId] = useState<number | null>(1);
  const testimonials = [
    {
      id: 1,
      name: 'Katie Oxley-Brown',
      avatar: h1,
      country: 'Japan',
      text: "100% recommend Evisa Express. We needed an urgent evisa for Kenya - for a flight in 1 hour, spoke to the support team who advised it could be possible, filled out the very user friendly application form and we received the visa half an hour later. Managed to get on the flight! The support team were very helpful both by phone and on email. Highly recommend this service. 100% brilliant.",
      date: 'June 05, 2023'
    },
    {
      id: 2,
      name: 'Dr. Kwaku Appiah-Kubi',
      avatar: h2,
      country: 'Ghana',
      text: "I was very skeptical about using this service at first, but I'm glad I did. The process was smooth and the support team was very responsive. I received my e-visa within 24 hours, which was perfect for my last-minute trip. The instructions were clear and the website was easy to navigate. I would definitely use this service again.",
      date: 'May 15, 2023'
    },
    {
      id: 3,
      name: 'Sophie Martin',
      avatar: h3,
      country: 'France',
      text: "Excellent service! I was a bit worried about applying for an e-visa online, but the process was straightforward and the instructions were very clear. The support team was helpful when I had questions. I received my e-visa within the promised timeframe. I will definitely use this service again for my future travels.",
      date: 'April 22, 2023'
    },
    {
      id: 4,
      name: 'Alex Johnson',
      avatar: h3, // Using the same avatar for now, you can add more avatars as needed
      country: 'USA',
      text: "The service was excellent! I got my e-visa within 24 hours, which was much faster than I expected. The application process was straightforward and the customer support team was very helpful when I had questions. I will definitely use this service again for my next trip.",
      date: 'March 30, 2023'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Reset slide position when switching between mobile and desktop
      if (mobile && currentSlide > 0) {
        setCurrentSlide(0);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const cardWidth = isMobile ? 90 : 32;
  const gapWidth = isMobile ? 10 : 2;
  const totalWidth = isMobile ? 100 : (32 * 3) + (2 * 2);

  const leftFaqs = [
    {
      id: 1,
      question: 'What is the purpose of a Evisa?',
      answer:
        "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever",
    },
    {
      id: 2,
      question: 'What documents are required for a visa application?',
      answer: "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever",
    },
    {
      id: 3,
      question:
        'Is the e-visa service compliant with data protection regulations like GDPR?',
      answer: "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever",
    },
    {
      id: 4,
      question: 'What is the difference between an evisa and a regular visa?',
      answer: "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever",
    },
    {
      id: 5,
      question: 'How does the Evisa Express service work?',
      answer: "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever",
    },
  ];

  const rightFaqs = [
    {
      id: 6,
      question: 'How long does it take to process a Evisa',
      answer: "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever",
    },
    {
      id: 7,
      question: 'Is there an age limit for applying for a Evisa?',
      answer: "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever",
    },
    {
      id: 8,
      question: 'Is the e-visa service safe for submitting my personal info',
      answer: "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever",
    },
    {
      id: 9,
      question: 'What happens if my visa application is denied?',
      answer: "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever",
    },
    {
      id: 10,
      question: 'Can I safely check the status of my e-visa online?',
      answer: "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle form submission
      console.log({
        visaType,
        date,
        nationality,
        passportNumber,
        email,
        termsAccepted
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white">
      <Navigation/>

      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[700px] lg:h-[760px] overflow-hidden mt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={evisaHero} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white mx-auto mt-16 md:mt-32">
          <div className="bg-transparent border border-white text-white/90 text-xs md:text-xs font-inter font-semibold px-4 py-2 rounded-full mb-6 inline-flex items-center">
            Easy way , Apply Your Evisa Support
            <ArrowRight className="w-5 h-5 ml-4" />
          </div>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-2xl md:text-5xl lg:text-5xl font-inter font-semibold mb-6">
              Start your journey with eVisa Express  Choose your next destination
            </h1>
            <p className="text-xs md:text-lg mb-8 max-w-5xl mx-auto font-inter font-medium px-4 md:px-8 lg:px-0 lg:-mx-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-4 mt-10">
              <Button 
                className="bg-[#F74A1F] hover:opacity-90 transition-opacity duration-200 text-white px-6 sm:px-8 py-6 text-md md:text-lg font-roboto font-semibold rounded-full w-44 sm:w-auto"
                onClick={() => {
                  const formSection = document.getElementById('visa-form');
                  formSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Before You Apply Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-20 bg-white">
        <div className="container w-full mx-auto px-6 md:px-20">
          {/* Section Header */}
          <div className="text-left mb-6 md:mb-8">
            <h2 className="text-3xl md:text-5xl max-w-2xl font-inter font-bold text-black mb-6">
              Before Applying Electronic Visa service :
            </h2>
            <p className="text-md md:text-lg max-w-5xl font-inter font-medium text-[#454545]">
              Please Make Sure That You Have The Following :
            </p>
          </div>

          <div className="flex flex-col 2xl:flex-row items-start gap-8 mt-4">
            {/* Left Side - Text Content */}
            <div className="lg:w-1/2 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#423939] flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                <div>
                  <h3 className="text-xl font-inter font-bold text-[#121212] mb-2">A valid Passport</h3>
                  <p className="text-[#454545] text-base font-inter font-regular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#423939] flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                <div>
                  <h3 className="text-xl font-inter font-bold text-[#121212] mb-2">Means of online payment</h3>
                  <p className="text-[#454545] text-base font-inter font-regular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#423939] flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                <div>
                  <h3 className="text-xl font-inter font-bold text-[#121212] mb-2">An active email address</h3>
                  <p className="text-[#454545] text-base font-inter font-regular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <Button 
                className="mt-6 bg-gradient-to-r from-[#F9AC7D] to-[#F53900] hover:opacity-90 transition-opacity duration-200 text-white px-8 py-7 text-md font-roboto font-semibold rounded-full"
              >
                Apply EVisa Service
              </Button>
            </div>

            {/* Right Side - Image */}
            <div className="lg:w-2/3 mt-2 2xl:-mt-20 flex justify-center sm:justify-end">
              <div className="w-4/5">
                <img 
                  src= {apply}
                  alt="Visa Application Process" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evisa Express Today Section */}
      <section className="bg-white py-8 md:py-12 lg:py-16 mb-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row rounded-none overflow-hidden shadow-lg">
            {/* Left Side - Stats */}
            <div className="bg-[#F53900] text-white w-full lg:w-1/2 p-6 md:p-8 lg:p-12">
              <div className="space-y-6 md:space-y-8 max-w-md mx-auto lg:mx-16">
                <h2 className="text-3xl md:text-4xl font-inter font-medium text-[#F4F7F2]">
                  Evisa Express Today
                </h2>
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <p className="text-3xl md:text-4xl font-inter font-semibold mb-2">99%</p>
                    <p className="text-sm md:text-base text-white/90 font-inter font-medium">
                      Effectiveness in positively processed applications
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-inter font-semibold mb-2">85%</p>
                    <p className="text-sm md:text-base text-white/90 font-inter font-medium">
                      Time saved by using our service, we'll just do it for you
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-inter font-semibold mb-2">100%</p>
                    <p className="text-sm md:text-base text-white/90 font-inter font-medium">
                      evisa.express utilizes top-tier data security standards, leveraging SSL certificate protection to guarantee a high level of data security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:h-auto">
              <img
                src={expressImg}
                alt="Evisa Express team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Evisa Section */}
      <section className="container w-full mx-auto px-8 mb-12 2xl:px-28 bg-white">
        <div className="mb-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-[2px] bg-black"></div>
            <span className="text-black text-sm font-inter font-bold tracking-widest">WHY EVISA</span>
            </div>
                <h2 className="text-3xl md:text-4xl font-inter font-bold text-black">
                  Why Apply for Your eVisa with Hop N Go?
                </h2>
              </div>
              <div className="space-y-4 mt-8 ml-0">
                <p className="text-black text-base md:text-lg font-inter font-regular max-w-3xl">
                  Our service provides assistance with electronic visas to numerous countries worldwide.
                </p>
                <p className="text-black text-base md:text-lg font-inter font-regular max-w-3xl">
                  15 min. - the application process can be completed.
                </p>
                <p className="text-black text-base md:text-lg font-inter font-regular max-w-3xl">
                  The processing time takes a few days; however, most eVisas are usually approved as soon as it is possible. Processed eVisas arrive directly to applicants via email.
                </p>
          <p className="text-black text-base md:text-lg font-inter font-regular max-w-3xl">
            There is no need to wait in long lines at the Embassy to handle your visa anymore!
          </p>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default EVisaPage;
