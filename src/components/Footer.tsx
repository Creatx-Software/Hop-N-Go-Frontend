import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { NavLink } from "./NavLink";
import insta1 from "@/assets/i1.png";
import insta2 from "@/assets/i2.png";
import insta3 from "@/assets/i3.png";
import insta4 from "@/assets/i4.png";
import insta5 from "@/assets/i5.png";
import insta6 from "@/assets/i6.png";
import grid from "@/assets/grid.png";
import footersec from "@/assets/footersec.png";
import cards from "@/assets/cards.png";

interface FooterProps {
  className?: string;
  phoneNumbers?: string[];
  email?: string;
  address?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    phone?: string;
    instagram?: string;
  };
}

const Footer = ({ 
  className = '',
  phoneNumbers = ['+01 234 567 890', '+09 999 999 999'],
  email = 'hopngoinfo@gmail.com',
  address = '789 Inner Lane, Holy park, California, USA',
  socialLinks = {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    phone: '#',
    instagram: '#'
  }
}: FooterProps) => {
  return (
    <footer className={`relative bg-secondary text-secondary-foreground pt-[5vw] pb-0 overflow-hidden ${className}`}>
      {/* White Gradient Overlay */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/10 via-white/5 to-transparent z-10 pointer-events-none"></div>
      
      {/* Grid Background */}
      <div className="absolute inset-0 w-full h-full opacity-50 z-0 pointer-events-none">
        <img 
          src={grid}
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full px-[5%] md:px-[4%] lg:px-[5%] xl:px-[6%] mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-[3vw] mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              
              <span className="font-display font-bold text-xl md:text-[1.5vw] lg:text-[1.2vw] xl:text-[1.5vw]">
                Hop N Go
              </span>
            </div>
            <p className="font-inter font-normal text-secondary-foreground/60 mb-6 leading-relaxed max-w-2xl font-[400] text-sm md:text-[0.9vw] lg:text-[0.8vw] xl:text-[0.9vw]">
              Experience a whole new journey with Hop N Go — your smart travel companion that helps you explore beautiful destinations with ease and comfort. Discover the world, create memories, and enjoy every moment of your adventure.
            </p>
            <div className="flex gap-3">
              <a href={socialLinks.facebook} className="w-[2.25vw] h-[2.25vw] min-w-[36px] min-h-[36px] bg-[#F74A1F]/20 hover:bg-[#a6533f] rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer group">
                <Facebook className="w-[1vw] h-[1vw] min-w-[16px] min-h-[16px] text-[#F74A1F] fill-[#F74A1F] group-hover:text-white transition-colors duration-200" />
              </a>

              <a href={socialLinks.twitter} className="w-[2.25vw] h-[2.25vw] min-w-[36px] min-h-[36px] bg-[#F74A1F]/20 hover:bg-[#a6533f] rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer group">
                <Twitter className="w-[1vw] h-[1vw] min-w-[16px] min-h-[16px] text-[#F74A1F] fill-[#F74A1F] group-hover:text-white transition-colors duration-200" />
              </a>

              <a href={socialLinks.linkedin} className="w-[2.25vw] h-[2.25vw] min-w-[36px] min-h-[36px] bg-[#F74A1F]/20 hover:bg-[#a6533f] rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer group">
                <Linkedin className="w-[1vw] h-[1vw] min-w-[16px] min-h-[16px] text-[#F74A1F] fill-[#F74A1F] group-hover:text-white transition-colors duration-200" />
              </a>

              <a href={socialLinks.phone} className="w-[2.25vw] h-[2.25vw] min-w-[36px] min-h-[36px] bg-[#F74A1F]/20 hover:bg-[#a6533f] rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer group">
                <Phone className="w-[1vw] h-[1vw] min-w-[16px] min-h-[16px] text-[#F74A1F] group-hover:text-white transition-colors duration-200" />
              </a>

              <a href={socialLinks.instagram} className="w-[2.25vw] h-[2.25vw] min-w-[36px] min-h-[36px] bg-[#F74A1F]/20 hover:bg-[#a6533f] rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer group">
                <Instagram className="w-[1vw] h-[1vw] min-w-[16px] min-h-[16px] text-[#F74A1F] group-hover:text-white transition-colors duration-200" />
              </a>
            </div>

          </div>

          <div className="md:ml-12">
            <h4 className="font-Manrope font-semibold text-lg md:text-[1.1vw] lg:text-[1vw] xl:text-[1.1vw] mb-6">Quick Links</h4>
            <ul className="space-y-3 font-[400]">
              <li className="group">
                <NavLink to="/" className="flex items-center gap-2 text-secondary-foreground/60 hover:text-primary transition-colors duration-200 mb-2">
                  <ChevronRight className="w-3 h-3" /> Home
                </NavLink>
              </li>
              <li className="group">
                <NavLink to="/destinations" className="flex items-center gap-2 text-secondary-foreground/60 hover:text-primary transition-colors duration-200 mb-2">
                  <ChevronRight className="w-3 h-3" /> Destinations
                </NavLink>
              </li>
              <li className="group">
                <NavLink to="/e-visa" className="flex items-center gap-2 text-secondary-foreground/60 hover:text-primary transition-colors duration-200 mb-2">
                  <ChevronRight className="w-3 h-3" /> E-Visa
                </NavLink>
              </li>
              <li className="group">
                <NavLink to="/about-us" className="flex items-center gap-2 text-secondary-foreground/60 hover:text-primary transition-colors duration-200 mb-2">
                  <ChevronRight className="w-3 h-3" /> About Us
                </NavLink>
              </li>
              <li className="group">
                <NavLink to="/contact" className="flex items-center gap-2 text-secondary-foreground/60 hover:text-primary transition-colors duration-200 mb-2">
                  <ChevronRight className="w-3 h-3" /> Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-Manrope font-semibold text-lg md:text-[1.1vw] lg:text-[1vw] xl:text-[1.1vw] mb-6">Get In Touch</h4>
            <ul className="space-y-4 font-[400]">
              <li className="flex items-center gap-3">
                <div className="w-[2.25vw] h-[2.25vw] min-w-[36px] min-h-[36px] bg-[#F74A1F]/20 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Phone className="w-[1vw] h-[1vw] min-w-[16px] min-h-[16px] text-[#F74A1F]" />
                </div>
                <div className="text-sm md:text-[0.9vw] lg:text-[0.8vw] xl:text-[0.9vw]">
                  {phoneNumbers.map((number, index) => (
                    <p key={index} className="text-secondary-foreground/60">{number}</p>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-[2.25vw] h-[2.25vw] min-w-[36px] min-h-[36px] bg-[#F74A1F]/20 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Mail className="w-[1vw] h-[1vw] min-w-[16px] min-h-[16px] text-[#F74A1F]" />
                </div>
                <p className="text-secondary-foreground/60 text-sm md:text-[0.9vw] lg:text-[0.8vw] xl:text-[0.9vw]">{email}</p>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-[2.25vw] h-[2.25vw] min-w-[36px] min-h-[36px] bg-[#F74A1F]/20 rounded-full flex-shrink-0 flex items-center justify-center">
                  <MapPin className="w-[1vw] h-[1vw] min-w-[16px] min-h-[16px] text-[#F74A1F]" />
                </div>
                <p className="text-secondary-foreground/60 text-sm md:text-[0.9vw] lg:text-[0.8vw] xl:text-[0.9vw]">{address}</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-Manrope font-semibold text-lg md:text-[1.1vw] lg:text-[1vw] xl:text-[1.1vw] mb-6">Instagram Post</h4>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="aspect-square overflow-hidden">
                <img src={insta1} alt="Instagram post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="aspect-square overflow-hidden">
                <img src={insta2} alt="Instagram post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="aspect-square overflow-hidden">
                <img src={insta3} alt="Instagram post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="aspect-square overflow-hidden">
                <img src={insta4} alt="Instagram post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="aspect-square overflow-hidden">
                <img src={insta5} alt="Instagram post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="aspect-square overflow-hidden">
                <img src={insta6} alt="Instagram post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex gap-5">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary text-xs md:text-[0.7vw] lg:text-[0.6vw] xl:text-[0.7vw] transition-colors">Terms & Conditions</a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary text-xs md:text-[0.7vw] lg:text-[0.6vw] xl:text-[0.7vw] transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="relative mt-16 w-screen left-1/2 -translate-x-1/2">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-18 -translate-y-0">
            <img 
              src={footersec} 
              alt="" 
              className="w-screen h-full object-cover"
            />
          </div>
          
          {/* Content Overlay */}
          <div className="relative z-10 py-6">
            <div className="w-full max-w-[90rem] mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-white text-sm md:text-[0.9vw] lg:text-[0.8vw] xl:text-[0.9vw]">
                  Copyright {new Date().getFullYear()} Tours. All Rights Reserved
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-white text-sm md:text-[0.9vw] lg:text-[0.8vw] xl:text-[0.9vw] font-medium">We Accept</span>
                  <img 
                    src={cards} 
                    alt="Payment Methods" 
                    className="h-6 md:h-[1.5vw] w-auto object-contain" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;