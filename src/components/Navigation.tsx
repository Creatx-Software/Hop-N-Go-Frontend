import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show background as soon as user starts scrolling
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-0' : 'py-4'}`}>
      <div className={`container mx-auto px-6 ${scrolled ? 'py-3' : 'py-0'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" aria-label="Hop N Go home" className="flex items-center">
              <img src="/favicon.png" alt="Hop N Go logo" className="w-30 h-10" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-8 ml-[-540px]">
            <button 
              onClick={() => scrollToSection('destination')} 
              className={`${scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary/90'} transition-colors font-inter font-medium`}
            >
              Destination
            </button>
            <button 
              onClick={() => scrollToSection('evisa')} 
              className={`${scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary/90'} transition-colors font-inter font-medium`}
            >
              E Visa
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className={`${scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary/90'} transition-colors font-inter font-medium`}
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`${scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary/90'} transition-colors font-inter font-medium`}
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#login" 
              className={`hidden md:flex items-center justify-center gap-2 ${scrolled ? 'text-foreground' : 'text-white'} px-6 py-2 rounded-full font-inter font-medium transition-all duration-300`}
              style={{
                width: '104px',
                height: '38px',
                backgroundColor: scrolled ? 'rgba(87, 90, 100, 0.46)' : 'rgba(87, 90, 100, 0.46)',
                border: '1px solid rgba(87, 90, 100, 0.48)',
                boxSizing: 'border-box',
                borderRadius: '100px',
              }}
            >
              <span>Login</span>
              <div className="w-6 h-6 rounded-full bg-white flex-shrink-0 flex items-center justify-center">
                <User className="w-3 h-3 text-[#FF5A2D] flex-shrink-0" />
              </div>
            </a>
            <Button variant="ghost" size="icon" className={`md:hidden ${scrolled ? 'text-foreground' : 'text-white'}`}>
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;