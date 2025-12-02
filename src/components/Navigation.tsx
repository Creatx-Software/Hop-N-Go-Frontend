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
  const isColoredNav = location.pathname === '/destinations' || location.pathname === '/about-us' || location.pathname === '/contact';

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
      <div className={`container mx-auto px-6 ${scrolled ? 'pt-4 pb-4' : 'pt-10 pb-4'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" aria-label="Hop N Go home" className="flex items-center" onClick={closeMobileMenu}>
              <img src="/favicon.png" alt="Hop N Go logo" className="w-30 h-10" />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-[-540px]">
            <Link 
              to="/destinations"
              className={`${isColoredNav ? 'text-[#170F49] hover:text-primary' : (scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary/90')} transition-colors font-inter font-medium`}
            >
              Destination
            </Link>
            <button 
              onClick={() => scrollToSection('evisa')} 
              className={`${isColoredNav ? 'text-[#170F49] hover:text-primary' : (scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary/90')} transition-colors font-inter font-medium`}
            >
              E Visa
            </button>
            <Link 
              to="/about-us"
              className={`${isColoredNav ? 'text-[#170F49] hover:text-primary' : (scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary/90')} transition-colors font-inter font-medium`}
            >
              About Us
            </Link>
            <Link 
              to="/contact"
              className={`${isColoredNav ? 'text-[#170F49] hover:text-primary' : (scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary/90')} transition-colors font-inter font-medium`}
            >
              Contact
            </Link>
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
            
            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden p-2 rounded-full focus:outline-none focus:ring-0 ${scrolled ? 'text-foreground' : 'text-white'}`}
              onClick={handleMenuButtonClick}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className={`w-5 h-5 transition-transform ${mobileMenuOpen ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`mobile-menu-container md:hidden fixed top-16 right-4 transition-all duration-300 ease-in-out transform ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
          } z-40 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/10`}
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
              className={`text-lg py-2 transition-colors ${scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary/90'} font-medium`}
              onClick={closeMobileMenu}
            >
              Destination
            </Link>
            <button 
              onClick={() => handleNavClick('evisa')} 
              className={`text-lg py-2 transition-colors ${scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary/90'} font-medium`}
            >
              E Visa
            </button>
            <Link 
              to="/about-us"
              className={`text-lg py-2 transition-colors ${scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary/90'} font-medium`}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <button 
              onClick={() => handleNavClick('contact')} 
              className={`text-lg py-2 transition-colors ${scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary/90'} font-medium`}
            >
              Contact
            </button>
            
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