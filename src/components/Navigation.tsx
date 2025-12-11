import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LanguageDropdown from "@/components/LanguageDropdown";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isDestinationPage = location.pathname === '/destinations' || location.pathname.startsWith('/destination-') || location.pathname === '/destination-list' || location.pathname.startsWith('/destination/');
  const isColoredNav = isDestinationPage || location.pathname === '/about-us' || location.pathname === '/contact' || location.pathname === '/e-visa';
  const isHeroPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
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

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Only close menu when clicking the menu icon
  const handleMenuButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileMenuOpen(prev => !prev);
  };

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    closeMobileMenu();
  };

  return (
    <header className={`fixed w-full z-50 pointer-events-auto transition-all duration-300 ${scrolled ? 'bg-white/50 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className={`w-full px-[5%] md:px-[4%] lg:px-[5%] xl:px-[6%] ${scrolled ? 'pt-4 pb-4' : 'pt-10 pb-4'}`}>
        <div className="flex items-center justify-between w-full">
          {/* Logo aligned with hero content */}
          <div className="flex items-center w-[20%] min-w-[120px] max-w-[180px]">
            <a href="/" aria-label="Hop N Go home" className="flex items-center w-full" onClick={closeMobileMenu}>
              <img 
                src="/Logo 23917.svg" 
                alt="Hop N Go logo" 
                className="w-full h-auto" 
              />
            </a>
          </div>
          
          {/* Desktop Navigation - Left Aligned */}
          <div className="hidden md:flex items-center flex-1 pl-[10%]">
            <div className="flex items-center gap-[1.5vw] lg:gap-[2vw] xl:gap-[2.5vw]">
              <Link 
                to="/destinations"
                className={`${isDestinationPage ? 'text-primary' : isHeroPage && !scrolled ? 'text-white hover:text-white/80' : 'text-[#170F49] hover:text-primary'} transition-colors font-inter font-medium text-[1.1vw]`}
              >
                Destination
              </Link>
              <Link 
                to="/e-visa"
                className={`${location.pathname === '/e-visa' ? 'text-primary' : isHeroPage && !scrolled ? 'text-white hover:text-white/80' : 'text-[#170F49] hover:text-primary'} transition-colors font-inter font-medium text-[1.1vw]`}
              >
                E Visa
              </Link>
              <Link 
                to="/about-us"
                className={`${location.pathname === '/about-us' ? 'text-primary' : isHeroPage && !scrolled ? 'text-white hover:text-white/80' : 'text-[#170F49] hover:text-primary'} transition-colors font-inter font-medium text-[1.1vw]`}
              >
                About Us
              </Link>
              <Link 
                to="/contact"
                className={`${location.pathname === '/contact' ? 'text-primary' : isHeroPage && !scrolled ? 'text-white hover:text-white/80' : 'text-[#170F49] hover:text-primary'} transition-colors font-inter font-medium text-[1.1vw]`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Login button aligned with carousel right edge */}
          <div className="flex items-center justify-end w-[20%] min-w-[120px] max-w-[180px] gap-4">
            <a 
              href="#login" 
              className={`hidden md:flex items-center justify-center gap-2 ${scrolled ? 'text-foreground' : isHeroPage ? 'text-white' : 'text-foreground'} px-6 py-2 rounded-full font-inter font-medium transition-all duration-300`}
              style={{
                width: '7.5vw',
                minWidth: '104px',
                height: '2.8vw',
                minHeight: '38px',
                backgroundColor: scrolled ? 'rgba(87, 90, 100, 0.46)' : 'rgba(87, 90, 100, 0.46)',
                border: '1px solid rgba(87, 90, 100, 0.48)',
                boxSizing: 'border-box',
                borderRadius: '100px',
                fontSize: '0.9vw',
                lineHeight: '1.2',
              }}
            >
              <span>Login</span>
              <div className="w-[1.5vw] h-[1.5vw] min-w-[24px] min-h-[24px] rounded-full bg-white flex-shrink-0 flex items-center justify-center">
                <User className="w-[0.8vw] h-[0.8vw] min-w-[12px] min-h-[12px] text-[#FF5A2D] flex-shrink-0" />
              </div>
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-3 rounded-sm focus:outline-none focus:ring-0 text-foreground bg-white/10 backdrop-blur-sm"
              onClick={handleMenuButtonClick}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className={`w-5 h-5 transition-transform ${mobileMenuOpen ? 'rotate-90' : ''} ${isHeroPage ? 'text-white' : 'text-black'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`mobile-menu-container md:hidden fixed top-24 right-4 transition-all duration-300 ease-in-out transform ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
          } z-40 bg-white/40 backdrop-blur-md rounded-lg shadow-lg border border-white/20 pt-4`}
          style={{
            width: 'auto',
            minWidth: '200px',
            padding: '1rem',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="flex flex-col space-y-3 items-end">
            <Link 
              to="/destinations"
              className={`text-lg py-2 transition-colors ${isDestinationPage ? 'text-primary' : 'text-foreground hover:text-primary'} font-medium`}
              onClick={closeMobileMenu}
            >
              Destination
            </Link>
            <Link 
              to="/e-visa"
              className="text-lg py-2 transition-colors text-foreground hover:text-primary font-medium"
              onClick={closeMobileMenu}
            >
              E Visa
            </Link>
            <Link 
              to="/about-us"
              className="text-lg py-2 transition-colors text-foreground hover:text-primary font-medium"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link 
              to="/contact"
              className="text-lg py-2 transition-colors text-foreground hover:text-primary font-medium"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            
            <div className="pt-4 mt-4">
              <a 
                href="#login" 
                className={`flex items-center justify-center gap-2 px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  scrolled ? 'bg-[rgba(87,90,100,0.46)] text-foreground' : 'bg-[rgba(87,90,100,0.46)] text-white'
                }`}
                style={{
                  width: '104px',
                  height: '38px',
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;