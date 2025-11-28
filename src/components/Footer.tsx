import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import greeceImage from "@/assets/greece.jpg";
import phuketImage from "@/assets/phuket.jpg";
import grid from "@/assets/grid.png";
import footersec from "@/assets/footersec.png";
import cards from "@/assets/cards.png";

const Footer = () => {
  return (
    <footer className="relative bg-secondary text-secondary-foreground pt-14 pb-0 overflow-hidden">
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
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              
              <span className="font-display font-bold text-xl">
                Hop N Go
              </span>
            </div>
            <p className="font-inter font-normal text-secondary-foreground/60 mb-6 leading-relaxed max-w-2xl font-[400]">
              Experience a whole new journey with Hop N Go — your smart travel companion that helps you explore beautiful destinations with ease and comfort. Discover the world, create memories, and enjoy every moment of your adventure.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-[#F74A1F]/20 hover:bg-[#a6533f] rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer group">
                <Facebook className="w-4 h-4 text-[#F74A1F] group-hover:text-white transition-colors duration-200" />
              </a>

              <a href="#" className="w-9 h-9 bg-[#F74A1F]/20 hover:bg-[#a6533f] rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer group">
                <Twitter className="w-4 h-4 text-[#F74A1F] group-hover:text-white transition-colors duration-200" />
              </a>

              <a href="#" className="w-9 h-9 bg-[#F74A1F]/20 hover:bg-[#a6533f] rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer group">
                <Linkedin className="w-4 h-4 text-[#F74A1F] group-hover:text-white transition-colors duration-200" />
              </a>

              <a href="#" className="w-9 h-9 bg-[#F74A1F]/20 hover:bg-[#a6533f] rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer group">
                <Phone className="w-4 h-4 text-[#F74A1F] group-hover:text-white transition-colors duration-200" />
              </a>

              <a href="#" className="w-9 h-9 bg-[#F74A1F]/20 hover:bg-[#a6533f] rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer group">
                <Instagram className="w-4 h-4 text-[#F74A1F] group-hover:text-white transition-colors duration-200" />
              </a>
            </div>

          </div>

          <div className="md:ml-12">
            <h4 className="font-Manrope font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 font-[400]">
              <li className="group">
                <Link to="/destinations" className="flex items-center text-secondary-foreground/60 hover:text-primary transition-colors">
                  <ChevronRight className="w-4 h-4 mr-1 text-secondary-foreground/60 group-hover:text-primary transition-colors group-hover:translate-x-1 transition-transform" />
                  Destinations
                </Link>
              </li>
              <li className="group">
                <a href="#" className="flex items-center text-secondary-foreground/60 hover:text-primary transition-colors">
                  <ChevronRight className="w-4 h-4 mr-1 text-secondary-foreground/60 group-hover:text-primary transition-colors group-hover:translate-x-1 transition-transform" />
                  Services
                </a>
              </li>
              <li className="group">
                <a href="#" className="flex items-center text-secondary-foreground/60 hover:text-primary transition-colors">
                  <ChevronRight className="w-4 h-4 mr-1 text-secondary-foreground/60 group-hover:text-primary transition-colors group-hover:translate-x-1 transition-transform" />
                  About Us
                </a>
              </li>
              <li className="group">
                <a href="#" className="flex items-center text-secondary-foreground/60 hover:text-primary transition-colors">
                  <ChevronRight className="w-4 h-4 mr-1 text-secondary-foreground/60 group-hover:text-primary transition-colors group-hover:translate-x-1 transition-transform" />
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-Manrope font-semibold text-lg mb-6">Get In Touch</h4>
            <ul className="space-y-4 font-[400]">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 bg-[#F74A1F]/20 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#F74A1F]" />
                </div>
                <div>
                  <p className="text-secondary-foreground/60">+01 234 567 890</p>
                  <p className="text-secondary-foreground/60">+09 999 999 999</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 bg-[#F74A1F]/20 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#F74A1F]" />
                </div>
                <p className="text-secondary-foreground/60">hopngoinfo@gmail.com</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 bg-[#F74A1F]/20 rounded-full flex-shrink-0 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#F74A1F]" />
                </div>
                <p className="text-secondary-foreground/60">789 Inner Lane, Holy park, California, USA</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-Manrope font-semibold text-lg mb-6">Instagram Post</h4>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src={greeceImage} alt="Instagram post" className="w-full h-full object-cover hover:scale-110 transition-transform" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src={phuketImage} alt="Instagram post" className="w-full h-full object-cover hover:scale-110 transition-transform" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src={greeceImage} alt="Instagram post" className="w-full h-full object-cover hover:scale-110 transition-transform" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src={phuketImage} alt="Instagram post" className="w-full h-full object-cover hover:scale-110 transition-transform" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src={greeceImage} alt="Instagram post" className="w-full h-full object-cover hover:scale-110 transition-transform" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src={phuketImage} alt="Instagram post" className="w-full h-full object-cover hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex gap-5">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary text-xs transition-colors">Terms & Conditions</a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary text-xs transition-colors">Privacy Policy</a>
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
                <p className="text-white text-sm">
                  Copyright {new Date().getFullYear()} Tours. All Rights Reserved
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-white text-sm font-medium">We Accept</span>
                  <img 
                    src={cards} 
                    alt="Payment Methods" 
                    className="h-6 w-auto object-contain" 
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