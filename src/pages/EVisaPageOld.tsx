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
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden mt-24">
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
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-6xl mx-auto mt-16 md:mt-32">
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
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-white">
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
            <div className="lg:w-2/3 md:-mt-32 flex justify-center md:justify-end">
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

      {/* Why EVisa Section */}
      <section className="py-16 md:py-24 bg-gradient-to-t from-[#F53900] to-[#F9AC7D]">
        <div className="container w-full mx-auto px-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Mobile Image */}
            <div className="lg:w-1/2 -mt-40 md:-mt-52">
              <img 
                src={mobile} 
                alt="EVisa Mobile App" 
                className="w-full h-auto max-w-xs mx-auto"
              />
            </div>

            {/* Right Side - Text Content */}
            <div className="lg:w-1/2">
              <div className="mb-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-[2px] bg-white"></div>
                  <span className="text-white text-sm font-inter font-bold tracking-widest">WHY EVISA</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-inter font-bold text-white">
                  Why Evisa Express ?
                </h2>
              </div>
              <div className="space-y-4 mt-8 ml-0">
                <p className="text-white/80 text-base md:text-lg font-inter font-regular max-w-3xl">
                  Our service provides assistance with electronic visas to numerous countries worldwide.
                </p>
                <p className="text-white/80 text-base md:text-lg font-inter font-regular max-w-3xl">
                  15 min. - the application process can be completed.
                </p>
                <p className="text-white/80 text-base md:text-lg font-inter font-regular max-w-3xl">
                  The processing time takes a few days; however, most eVisas are usually approved as soon as it is possible. Processed eVisas arrive directly to applicants via email.
                </p>
                <p className="text-white/80 text-base md:text-lg font-inter font-regular max-w-3xl">
                  There is no need to wait in long lines at the Embassy to handle your visa anymore!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opinion Section */}
      <section className="py-16 md:py-16 bg-white overflow-hidden">
        <div className="container w-full mx-auto px-4 md:px-10">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-5xl font-inter font-bold text-black ml-8">Opinions</h2>
            <div className="flex space-x-4 mr-0 md:mr-8">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full bg-[#EDEDED] hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5 text-black" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-3 rounded-full bg-[#EDEDED] hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="w-full overflow-hidden">
              <div 
                className="relative transition-transform duration-300 ease-in-out"
                style={{
                  transform: isMobile 
                    ? `translateX(calc(-${currentSlide} * 100%))`
                    : `translateX(calc(-${currentSlide} * (${cardWidth}% + ${gapWidth}%)))`,
                  width: isMobile ? '100%' : '100%',
                  padding: isMobile ? '0 16px' : '0 1%',
                  boxSizing: 'border-box'
                }}
              >
                <div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile 
                      ? `repeat(${testimonials.length}, 1fr)` 
                      : `repeat(${testimonials.length}, ${cardWidth}%)`,
                    gap: isMobile ? '0' : `${gapWidth}%`,
                    width: isMobile ? '100%' : '100%',
                    boxSizing: 'border-box',
                    padding: isMobile ? '0 0' : '0 1px'
                  }}
                >
                      {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-5 rounded-xl shadow-sm border border-[#9E9E9E] w-[calc(100%-32px)] mx-4 h-full">
                      <div className="flex items-start mb-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full mr-4 flex-shrink-0" 
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-inter font-medium text-black whitespace-nowrap">
                              {testimonial.name}
                            </h4>
                            <div className="flex items-center">
                              <div className="flex text-[#EB662B] space-x-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <svg 
                                    key={i} 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-4 w-4" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-black font-inter font-regular">{testimonial.country}</span>
                        </div>
                      </div>
                      <p className="text-black text-sm text-justify font-inter font-regular leading-relaxed mb-4">
                        {testimonial.text}
                      </p>
                      <p className="text-black text-xs font-inter font-regular">Date of experience: {testimonial.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evisa Express Today Section */}
      <section className="bg-white pt-0 pb-6 md:pt-0 md:pb-0">
        <div className="container w-full mx-auto px-8 md:px-12">
          <div className="flex flex-col lg:flex-row rounded-none overflow-hidden">
            <div className="bg-[#F53900] text-white w-full lg:w-1/2 px-8 md:px-16 pt-0 pb-3 md:pt-0 md:pb-0 flex items-center">
              <div className="space-y-8 max-w-sm">
                <h2 className="text-3xl md:text-4xl text-[#F4F7F2] font-inter font-medium mt-10 md:-mt-20 md:mb-16">
                  Evisa Express Today
                </h2>
                <div className="space-y-6 text-left">
                  <div>
                    <p className="text-2xl md:text-4xl font-inter font-semibold mb-1">99%</p>
                    <p className="text-sm md:text-base text-white/80 font-inter font-medium leading-relaxed">
                      Effectiveness in positively processed applications
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-4xl font-inter font-bold mb-1">85%</p>
                    <p className="text-sm md:text-base text-white/80 font-inter font-medium leading-relaxed">
                      Time saved by using our service, we’ll just do it for you
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-4xl font-inter font-bold mb-1">100%</p>
                    <p className="text-sm md:text-base text-white/80 font-inter font-regular leading-relaxed">
                      evisa.express utilizes top-tier data security standards, leveraging SSL certificate protection to guarantee a high level of data security. This ensures that all personal data provided by users is appropriately safeguarded
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-[300px] md:h-[160px] lg:h-auto">
              <img
                src={expressImg}
                alt="Evisa Express team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-12 md:py-16"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, #FEFEFE 0%, #FEFEFE 6%, transparent 20%, transparent 80%, #FEFEFE 100%), radial-gradient(circle at center, #FEFEFE 0%, #FEFEFE 35%, #FFF0E9 65%, #FFECEE 85%, #FEFEFE 100%)',
        }}
      >
        <div className="container w-full mx-auto px-8 md:px-12">
          <h2 className="text-3xl md:text-5xl font-inter font-bold text-black mb-8 md:mb-10">
            FAQ
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            <div className="space-y-4">
              {leftFaqs.map((item) => {
                const isActive = activeFaqId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveFaqId(isActive ? null : item.id)}
                    className={`w-full text-left rounded-2xl transition-all duration-200 shadow-sm border border-[#FFF0E9] ${
                      isActive ? 'bg-[#FFF0E9]' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between px-5 md:px-6 py-4 md:py-5">
                      <div className="flex-1">
                        <p className="text-sm md:text-base font-inter font-semibold text-black mb-0">
                          {item.question}
                        </p>
                        <div 
                          className="overflow-hidden transition-all duration-300 ease-in-out"
                          style={{
                            maxHeight: isActive ? '200px' : '0',
                            opacity: isActive ? 1 : 0,
                            marginTop: isActive ? '0.5rem' : '0'
                          }}
                        >
                          {item.answer && (
                            <p className="text-xs md:text-sm font-inter font-regular text-[#9D9D9D] leading-relaxed">
                              {item.answer}
                            </p>
                          )}
                        </div>
                      </div>
                      <span
                        className={`ml-4 flex h-7 w-7 min-h-[28px] min-w-[28px] flex-shrink-0 items-center justify-center rounded-full text-white ${
                          isActive ? 'bg-[#EB662B]' : 'bg-[#FFF0E9]'
                        }`}
                      >
                        {isActive ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-[#EB662B]" />
                        )}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="space-y-4">
              {rightFaqs.map((item) => {
                const isActive = activeFaqId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveFaqId(isActive ? null : item.id)}
                    className={`w-full text-left rounded-2xl transition-all duration-200 shadow-sm border border-transparent ${
                      isActive ? 'bg-[#FFF0E9]' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between px-5 md:px-6 py-4 md:py-5">
                      <div className="flex-1">
                        <p className="text-sm md:text-base font-inter font-semibold text-black mb-0">
                          {item.question}
                        </p>
                        <div 
                          className="overflow-hidden transition-all duration-300 ease-in-out"
                          style={{
                            maxHeight: isActive ? '200px' : '0',
                            opacity: isActive ? 1 : 0,
                            marginTop: isActive ? '0.5rem' : '0'
                          }}
                        >
                          {item.answer && (
                            <p className="text-xs md:text-sm font-inter font-regular text-[#9D9D9D] leading-relaxed">
                              {item.answer}
                            </p>
                          )}
                        </div>
                      </div>
                      <span
                        className={`ml-4 flex h-7 w-7 min-h-[28px] min-w-[28px] flex-shrink-0 items-center justify-center rounded-full text-white ${
                          isActive ? 'bg-[#EB662B]' : 'bg-[#FFF0E9]'
                        }`}
                      >
                        {isActive ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-[#EB662B]" />
                        )}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="container bg-[#FEFEFE] py-16 md:py-20">
        <div className="w-full mx-auto px-0 md:px-0-mt-16">
          <h2 className="text-3xl md:text-5xl font-inter font-bold text-black mb-8 md:mb-10">
            Contact Us
          </h2>

          <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/5 bg-[#EB662B] text-white px-8 md:px-12 py-8 md:py-10 relative">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-inter font-bold mb-4">Contact Information</h3>
                <p className="text-sm md:text-base font-inter font-medium text-white/70 max-w-xs">
                  Fill up the form and our Team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6 text-sm md:text-base font-inter font-medium">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#EB662B] fill-[#EB662B]" />
                  </div>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white fill-[#EB662B]" />
                  </div>
                  <span>domain@paypal.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                    <Globe2 className="w-4 h-4 text-[#EB662B]" />
                  </div>
                  <span>https://paypal.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white fill-[#EB662B]" />
                  </div>
                  <span>Location</span>
                </div>
              </div>

              <img
                src={evisaCircle}
                alt="Decorative circle"
                className="pointer-events-none select-none absolute -bottom-11 -right-0 w-72 h-72 object-contain opacity-90"
              />
            </div>

            <div className="w-full lg:w-3/5 bg-white px-4 md:px-12 py-8 md:py-10">
              <div className="mb-8">
                <p className="text-xs md:text-sm font-inter font-semibold tracking-[0.25em] text-[#EB662B] uppercase mb-4 flex items-center gap-2">
                  Contact Information
                  <Send className="w-4 h-4 text-[#EB662B] fill-[#EB662B]" />
                </p>
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-inter font-bold text-[#EB662B] max-w-lg">
                  Let Your Wanderlust Guide You
                </h3>
              </div>

              <div className="bg-[#FFF4EE] rounded-3xl px-4 md:px-12 py-5 md:py-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)] lg:-ml-12">
                <form className="space-y-4 md:space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-inter font-regular text-[#EB662B]">Your Email</label>
                    <div className="flex items-center rounded-full bg-white border border-[#FFE0D1] px-4 py-3 md:py-3.5">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="flex-1 bg-transparent outline-none text-sm md:text-base font-inter font-regular text-black placeholder:text-[#FFE0D1]"
                      />
                      <Send className="w-6 h-6 text-white fill-[#EB662B]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-inter font-regular text-[#EB662B]">Your Phone</label>
                    <div className="flex items-center rounded-full bg-white border border-[#FFE0D1] px-4 py-3 md:py-3.5">
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        className="flex-1 bg-transparent outline-none text-sm md:text-base font-inter font-regular text-black placeholder:text-[#FFE0D1]"
                      />
                      <Phone className="w-4 h-4 text-[#EB662B] fill-[#EB662B]" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-inter font-regular text-[#EB662B]">Your Address</label>
                  <div className="flex items-center rounded-full bg-white border border-[#FFE0D1] px-4 py-3 md:py-3.5">
                    <input
                      type="text"
                      placeholder="Your Address"
                      className="flex-1 bg-transparent outline-none text-sm md:text-base font-inter font-regular text-black placeholder:text-[#FFE0D1]"
                    />
                    <MapPin className="w-5 h-5 text-white fill-[#EB662B]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-inter font-regular text-[#EB662B]">Message</label>
                  <div className="rounded-2xl bg-white border border-[#FFE0D1] px-4 pt-3 pb-10 flex items-start">
                    <textarea
                      placeholder="Write Message.."
                      className="flex-1 bg-transparent outline-none text-sm md:text-base font-inter font-regular text-black placeholder:text-[#FFE0D1] resize-none min-h-[80px]"
                    />
                    <Mail className="w-4 h-4 text-white fill-[#EB662B] mt-1 ml-3" />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    className="w-full rounded-full bg-gradient-to-r from-[#F9AC7D] to-[#F53900] text-white text-sm md:text-base font-roboto font-semibold py-3.5 md:py-4"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EVisaPage;
