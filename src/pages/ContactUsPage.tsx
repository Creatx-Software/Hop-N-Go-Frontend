import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LanguageDropdown from '@/components/LanguageDropdown';

const ContactUsPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I book a tour with Hop N Go?',
      answer: 'You can book a tour through our website, mobile app, or by contacting our customer service team.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'You can cancel your booking up to 48 hours before the tour for a full refund.'
    },
    {
      question: 'Do you offer group discounts?',
      answer: 'Yes, we offer special rates for groups of 10 or more. Contact our sales team for more information.'
    },
    {
      question: 'What should I bring on my tour?',
      answer: 'We recommend bringing comfortable walking shoes, weather-appropriate clothing, sunscreen, and a camera.'
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <div className="w-full h-9 bg-[#FFC8BB]/30 relative z-10 overflow-hidden">
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

      {/* Header Section */}
      <section className="bg-white">
      <header className="bg-gradient-to-t from-[#F53900] to-[#F9AC7D] text-[#170F49] pt-16 pb-24 md:pt-20 md:pb-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="text-left -mt-8 md:-mt-42">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-14 h-[2px] bg-white"></div>
                  <span className="text-white text-sm font-roboto font-bold tracking-widest">CONTACT</span>
                </div>
                <div className="text-white text-sm font-roboto font-bold tracking-widest ml-16">US</div>
              </div>
              <div className="relative">
                <h1 className="text-4xl text-white md:text-7xl font-inter font-bold mb-6 ml-16 leading-tight">
                  We'd love to hear from you
                </h1>
                <p className="text-white/60 font-inter font-regular text-lg mb-8 ml-16 max-w-lg">
                  Have a question, planning a trip, or need assistance with your booking? Our team is always ready to help. Reach out through the form or contact details below.
                </p>
              </div>
            </div>
            
            {/* Right Side */}
            <div className="bg-transparent backdrop-blur-sm rounded-2xl p-8 max-w-md -mt-8 md:-mt-10">
              <h3 className="text-2xl text-white font-inter font-bold mb-6">Let's talk!</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <p className="text-white/80 text-md font-inter font-regular">+01 234 567 890</p>
                </div>
                
                <div className="flex flex-col">
                  <p className="text-white/80 text-md font-inter font-regular">hopngoinfo@gmail.com</p>
                </div>
                
                <div className="pt-4">
                  <div className="w-96 h-[2px] bg-white/60 mb-4 -mt-5"></div>
                  <div className="w-96 border-t border-transparent pt-2">
                    <p className="text-md text-white font-inter font-bold mb-3">Headoffice</p>
                    <p className="text-white/80 font-inter font-regular mb-6">8 Brewery Drive, Lagos,<br/>Nigeria.</p>
                    
                    <p className="text-md text-white font-inter font-bold mb-3">Branch Office</p>
                    <p className="text-white/80 font-inter font-regular mb-6">Opp Opolo round about, Yenagoa, Bayelsa,<br/>Nigeria</p>
                    
                    <div className="flex space-x-4 mt-8">
                      <a href="#" className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center hover:bg-[#F53900]/70 transition-colors duration-200">
                        <Facebook className="w-5 h-5 text-[#F53900]/90 fill-[#F53900]/90 hover:text-white hover:fill-white transition-colors duration-200" />
                      </a>
                      <a href="#" className="w-6 h-6 rounded-full bg-transparent flex items-center justify-center hover:bg-white/90 transition-colors duration-200">
                        <Twitter className="w-5 h-5 text-white/90 fill-white/90 hover:text-[#F53900] hover:fill-[#F53900] transition-colors duration-200" />
                      </a>
                      <a href="#" className="w-6 h-6 bg-white/90 flex items-center justify-center hover:bg-[#F53900]/70 transition-colors duration-200">
                        <Linkedin className="w-5 h-5 text-[#F53900]/90 fill-[#F53900]/90 hover:text-white hover:fill-white transition-colors duration-200" />
                      </a>
                    </div>
                    <div className="absolute -right-48 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 pr-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-transparent border border-white flex items-center justify-center hover:bg-[#F53900]/50 transition-colors duration-200">
                    <Facebook className="w-5 h-5 text-white/90 fill-white/90 hover:text-white hover:fill-white transition-colors duration-200" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-transparent border border-white flex items-center justify-center hover:bg-[#F53900]/50 transition-colors duration-200">
                    <Instagram className="w-5 h-5 text-white/90 fill-transparent hover:text-white hover:fill-transparent transition-colors duration-200" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-transparent border border-white flex items-center justify-center hover:bg-[#F53900]/50 transition-colors duration-200">
                    <Twitter className="w-5 h-5 text-white/90 fill-white/90 hover:text-white hover:fill-white transition-colors duration-200" />
                  </a>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      </section>

      {/* Get in Touch */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-0 max-w-7xl">
          <div className="text-start mb-4">
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-black mb-4">Get in Touch</h2>
            <p className="text-lg text-[#747474] font-inter font-regular max-w-8xl mb-8">
              We are here to support your travel needs with quick, friendly, and reliable assistance. Whether you need itinerary suggestions, booking guidance, or destination information — just reach out! <a href="#" className="text-[#F53900] hover:underline">Read More</a>
            </p>
            <div className="flex flex-wrap gap-60 mt-6">
              <div className="flex items-start space-x-3">
                <div className="bg-transparent p-3 rounded-full">
                  <Phone className="w-5 h-5 text-[#8D8D8D]" />
                </div>
                <div>
                  <p className="text-sm text-[#747474]">Tel</p>
                  <p className="font-inter font-medium text-black">+01 234 567 890</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-transparent p-3 rounded-full">
                  <Mail className="w-5 h-5 text-[#8D8D8D]" />
                </div>
                <div>
                  <p className="text-sm text-[#747474]">Mail</p>
                  <p className="font-inter font-medium text-black">hopngoinfo@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-transparent p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-[#8D8D8D]" />
                </div>
                <div>
                  <p className="text-sm text-[#747474]">Address</p>
                  <p className="font-inter font-medium text-black">706 Campfire Ave. Meriden, CT 06450</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Form */}
      <section className="py-0 bg-gradient-to-r from-[#F74A1F]/10 to-white">
        <div className="container mx-auto px-4 max-w-10xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Form */}
            <div className="bg-transparent p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-inter font-bold text-black mb-4">Contact Us</h2>
            <p className="text-lg text-[#747474] font-inter font-regular max-w-8xl mb-8">
              Your journey matters to us. Connect with our travel experts for personalized assistance and smooth travel planning.
            </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <div className="relative">
                      <Input 
                        id="first-name" 
                        type="text" 
                        placeholder="First Name" 
                        className="w-full h-12 px-4 bg-[#E9E9E9]/50 rounded-[10px] text-[#5D5D5D] text-inter text-regular border-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring-0 focus:ring-offset-0 focus:outline-none"
                        required
                      />
                      <span className="absolute left-24 top-1/2 transform -translate-y-1/2 text-red-500">*</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="relative">
                      <Input 
                        id="last-name" 
                        type="text" 
                        placeholder="Last Name" 
                        className="w-full h-12 px-4 bg-[#E9E9E9]/50 rounded-[10px] text-[#5D5D5D] text-inter text-regular border-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring-0 focus:ring-offset-0 focus:outline-none"
                        required
                      />
                      <span className="absolute left-24 top-1/2 transform -translate-y-1/2 text-red-500">*</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="relative">
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Email Id" 
                        className="w-full h-12 px-4 bg-[#E9E9E9]/50 rounded-[10px] text-[#5D5D5D] text-inter text-regular border-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring-0 focus:ring-offset-0 focus:outline-none"
                        required
                      />
                      <span className="absolute left-20 top-1/2 transform -translate-y-1/2 text-red-500">*</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="relative">
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Phone Number" 
                        className="w-full h-12 px-4 bg-[#E9E9E9]/50 rounded-[10px] text-[#5D5D5D] text-inter text-regular border-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring-0 focus:ring-offset-0 focus:outline-none"
                        required
                      />
                      <span className="absolute left-32 top-1/2 transform -translate-y-1/2 text-red-500">*</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="relative">
                    <Textarea 
                      id="message" 
                      rows={5} 
                      placeholder="Message" 
                      className="w-[110%] max-w-[120%] px-4 py-3 bg-[#E9E9E9] rounded-[10px] text-[#5D5D5D] text-inter text-regular border-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring-0 focus:ring-offset-0 focus:outline-none resize-none"
                    />
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto px-72 py-6 text-base font-medium text-white bg-gradient-to-r from-[#F9AC7D] to-[#F53900] hover:opacity-90 transition-opacity duration-200 rounded-[10px] shadow-md"
                  >
                    SEND
                  </Button>
                </div>
              </form>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:block ml-24 w-[120%] max-w-[660px]">
              <img 
                src="/src/assets/contact.png" 
                alt="Contact Us" 
                className="w-full h-auto rounded-2xl object-cover"
              />
              {/* Rating Card */}
              <div className="bg-white p-4 rounded-2xl shadow-lg -mt-20 ml-12 max-w-[200px]">
                <div className="flex items-center justify-center mb-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 text-xs font-medium text-gray-700">5.0 (1.2k)</span>
                </div>
                <p className="text-sm text-gray-700 text-center mb-2">"Outstanding service!"</p>
                <div className="flex justify-center space-x-1">
                  {['😊', '😍', '😎', '😢', '😡'].map((emoji, index) => (
                    <button 
                      key={index}
                      className="text-xl hover:scale-110 transition-transform"
                      onClick={() => console.log(`Rated: ${emoji}`)}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-24 pb-8 bg-[#040F15] text-white w-full relative overflow-hidden">
        {/* Gradient circle background */}
        <div 
          className="absolute left-[150px] top-[70px] w-[500px] h-[500px] rounded-full -z-0"
          style={{
            background: 'radial-gradient(circle, rgba(247, 74, 31, 0.15) 0%, rgba(4, 15, 21, 0) 70%)',
            filter: 'blur(8px)'
          }}
        ></div>
        
        <div className="container mx-auto px-4 w-full max-w-[80rem] px-8 relative z-10">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-5xl font-inter font-bold mb-4">
              <div className="mb-2">FREQUENTLY</div>
              <div>ASK <span className="text-[#F74A1F]">QUESTIONS</span></div>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start w-full">
            {/* FAQ List */}
            <div className="space-y-6 w-full">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-transparent border border-white/50 rounded-sm overflow-hidden hover:border-[#F74A1F]/50 transition-colors duration-200">
                  <button
                    className="w-full px-4 py-4 text-left flex items-center gap-0 focus:outline-none h-full relative"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white font-inter font-medium text-sm">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <span className="font-inter font-regular text-white/80 text-base text-md flex-grow pr-2 my-auto">{faq.question}</span>
                    <div className="absolute right-0 top-0 bottom-0 flex items-center h-full">
                      {activeFaq === index ? (
                        <div className="w-14 h-full flex items-center justify-center bg-[#F74A1F] rounded-r-sm">
                          <span className="text-2xl leading-none text-white/70">-</span>
                        </div>
                      ) : (
                        <div className="w-14 h-full flex items-center justify-center bg-[#152329] rounded-r-sm">
                          <span className="text-2xl leading-none text-white/70">+</span>
                        </div>
                      )}
                    </div>
                  </button>
                  {activeFaq === index && (
                    <div className="px-4 pb-3 pt-0 font-inter font-regular text-white/70 text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Image Section */}
            <div className="relative hidden lg:block -mt-24">
              <div className="w-[140%]">
                <img 
                  src="/src/assets/question.png" 
                  alt="People hiking" 
                  className="w-full h-auto object-contain max-h-[700px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUsPage;