import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import LanguageDropdown from '@/components/LanguageDropdown';
import Footer from '@/components/Footer';
import { Mail, ArrowRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';

type VisaType = 'tourist' | 'business' | 'transit';

const EVisaPage = () => {
  const [visaType, setVisaType] = useState<VisaType>('tourist');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [nationality, setNationality] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [email, setEmail] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

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
    <div className="min-h-screen flex flex-col overflow-x-hidden">
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

      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden mt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/src/assets/evisaHero.png" 
            alt="E-Visa Application" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-6xl mx-auto mt-32">
          <div className="bg-transparent border border-white text-white/90 text-xs font-inter font-semibold px-4 py-2 rounded-full mb-6 inline-flex items-center">
            Easy way , Apply Your Evisa Support
            <ArrowRight className="w-5 h-5 ml-4" />
          </div>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-inter font-semibold mb-6">
              Start your journey with eVisa Express  Choose your next destination
            </h1>
            <p className="text-md md:text-lg mb-8 max-w-5xl mx-auto font-inter font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Button 
                className="bg-gradient-to-r from-[#F9AC7D] to-[#F53900] hover:opacity-90 transition-opacity duration-200 text-white px-8 py-6 text-lg font-roboto font-semibold rounded-full"
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
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-left mb-6 md:mb-8">
            <h2 className="text-3xl md:text-5xl max-w-3xl font-inter font-bold text-black mb-6">
              Before Applying Electronic Visa service :
            </h2>
            <p className="text-md md:text-lg max-w-5xl font-inter font-medium text-[#454545]">
              Please Make Sure That You Have The Following :
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-8 mt-4">
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
            <div className="lg:w-1/2 -mt-32 flex justify-end">
              <div className="w-4/5">
                <img 
                  src="/src/assets/apply.png" 
                  alt="Visa Application Process" 
                  className="w-full h-auto object-contain"
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

export default EVisaPage;
