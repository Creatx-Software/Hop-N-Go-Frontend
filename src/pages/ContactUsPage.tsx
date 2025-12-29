import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import HeroBg from '@/assets/contactHero.png';
import circle from '@/assets/contactFormCircle.png';
import { Facebook, Instagram, Twitter, Phone, Mail, PhoneCall, MapPin } from 'lucide-react';

interface SocialLinks {
  facebook: string;
  instagram: string;
  twitter: string;
}

const defaultSocialLinks: SocialLinks = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  twitter: 'https://twitter.com',
};

const phoneNumber = '+1 (234) 567-8900';
const email = 'info@hopngo.com';
const address = {
  line1: '123 Travel Street',
  line2: 'New York, NY 10001'
};

const subjects = [
  { id: 'general', label: 'General Inquiry' },
  { id: 'booking', label: 'Booking' },
  { id: 'support', label: 'Support' }
];

const ContactUsPage = () => {
  const [socialLinks] = useState<SocialLinks>(defaultSocialLinks);
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#FF9B6A] selection:text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8 bg-white">
        <div className="container mx-auto rounded-[3rem] relative overflow-hidden min-h-[600px] md:min-h-[500px] 2xl:min-h-[400px] flex items-center"
          style={{
            backgroundImage: `url(${HeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Hero Content Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="container mx-auto px-2 md:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-6 2xl:gap-10 items-center">
                {/* Left Side */}
                <div className="text-left md:-mt-24 2xl:-mt-8">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 ml-8 2xl:ml-16">
                      <div className="w-14 h-[2px] bg-white"></div>
                      <span className="text-white text-sm font-roboto font-bold tracking-widest">CONTACT US</span>
                    </div>
                  </div>
                  <div className="relative">
                    <h1 className="text-4xl md:text-5xl 2xl:text-6xl text-white font-inter font-bold mb-6 ml-8 2xl:ml-16 leading-tight">
                      We'd love to hear from you
                    </h1>
                  </div>
                </div>

                {/* Right Side */}
                <div className="relative bg-transparent p-8 max-w-lg w-full mx-auto -mt-16 2xl:-mt-4 sm:-ml-0 2xl:ml-0">
                  <p className="text-white/60 font-inter font-regular text-lg mb-6">
                    Have a question, planning a trip, or need assistance with your booking? Our team is always ready to help. Reach out through the form or contact details below.
                  </p>
                  <div className="space-y-6 2xl:space-y-0 2xl:flex 2xl:space-x-8">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-5 h-5 text-white/60 flex-shrink-0" />
                      <div>
                        <a href={`tel:${phoneNumber}`} className="text-white/60 text-md font-inter font-regular hover:text-white transition-colors">
                          {phoneNumber}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 2xl:pl-8">
                      <Mail className="w-5 h-5 text-white/60 flex-shrink-0" />
                      <div>
                        <a href={`mailto:${email}`} className="text-white/60 text-md font-inter font-regular hover:text-white transition-colors">
                          {email}
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Social Icons */}
                  <div className="absolute right-2 sm:-right-12 md:-right-4 2xl:-right-14 2xl:top-1/3 transform -translate-y-1/2 flex flex-col space-y-4">
                    <a href={socialLinks.facebook} className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center hover:border-white transition-all duration-300">
                      <Facebook className="w-4 h-4 text-white fill-white/80" />
                    </a>
                    <a href={socialLinks.instagram} className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center hover:border-white transition-all duration-300">
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                    <a href={socialLinks.twitter} className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center hover:border-white transition-all duration-300">
                      <Twitter className="w-4 h-4 text-white fill-white/80" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="relative z-20 -mt-0 2xl:-mt-36 pb-24 px-0 md:px-8">
        <div className="container mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:py-4">
            {/* Left Column - Contact Information */}
            <div className="bg-black rounded-lg p-8 md:p-12 text-white relative overflow-hidden 2xl:-ml-4">
              {/* Decorative Circle Image */}
              <img 
                src={circle} 
                alt="" 
                className="absolute -bottom-10 -right-8 w-60 h-60 opacity-20"
              />
              <div className="mb-8">
                <h2 className="text-3xl font-semibold font-inter mb-3">Contact Information</h2>
                <p className="text-white/80 font-inter font-regular mb-12 2xl:mb-28">
                  Your journey matters to us. Connect with our travel experts for personalized assistance and smooth travel planning !
                </p>
              </div>
              <div className="space-y-6 mt-10 mb-20 sm:mb-0">
                <div className="flex items-center space-x-4">
                    <PhoneCall className="w-5 h-5 text-white" />
                  <div>
                    <p className="text-white font-inter font-regular text-lg">{phoneNumber}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-white" />
                  <div>
                    <p className="text-white font-inter font-regular text-lg">{email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-white" />
                  <div>
                    <p className="text-white font-inter font-regular text-lg">
                      {address.line1}<br />
                      {address.line2}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="p-8 md:p-12 bg-white">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border-b border-gray-300">
                    <label className="block text-sm font-inter font-medium text-black mb-1">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-1 py-2 bg-transparent border-none focus:ring-0 focus:border-[#F53900] focus:outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div className="border-b border-gray-300">
                    <label className="block text-sm font-inter font-medium text-black mb-1">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-1 py-2 bg-transparent border-none focus:ring-0 focus:border-[#F53900] focus:outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border-b border-gray-300">
                    <label className="block text-sm font-inter font-medium text-black mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-1 py-2 bg-transparent border-none focus:ring-0 focus:border-[#F53900] focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="border-b border-gray-300">
                    <label className="block text-sm font-inter font-medium text-black mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-1 py-2 bg-transparent border-none focus:ring-0 focus:border-[#F53900] focus:outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-sm font-inter font-medium text-black mb-3">Subject</p>
                  <div className="flex flex-wrap gap-4">
                    {subjects.map((subject, index) => (
                      <label key={subject.id} className="inline-flex items-center">
                        <div className="relative flex items-center">
                          <input 
                            type="radio" 
                            name="subject" 
                            value={subject.id}
                            className="h-5 w-5 appearance-none rounded-full border-2 border-gray-300 checked:bg-black checked:border-black focus:ring-0 focus:ring-offset-0 cursor-pointer peer"
                            defaultChecked={index === 0}
                          />
                          <svg 
                            className="absolute left-0 w-5 h-5 pointer-events-none hidden peer-checked:flex items-center justify-center" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="ml-2 text-black font-inter font-regular text-sm">{subject.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-b border-gray-300">
                  <label className="block text-sm font-inter font-medium text-black mb-1">Message</label>
                  <textarea 
                    rows={1}
                    className="w-full px-1 py-2 bg-transparent border-none focus:ring-0 focus:border-[#F53900] focus:outline-none resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button 
                    type="submit"
                    className="bg-[#F74A1F] text-white py-3 px-8 rounded-sm font-inter font-medium hover:bg-[#F74A1F]/90 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUsPage;