import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import greeceImage from "@/assets/greece.jpg";
import phuketImage from "@/assets/phuket.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">H</span>
              </div>
              <span className="font-display font-bold text-xl">
                Hop <span className="text-primary">N</span> Go
              </span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed max-w-2xl">
              Experience a whole new journey with Hop N Go — your smart travel companion that helps you explore beautiful destinations with ease and comfort. Discover the world, create memories, and enjoy every moment of your adventure.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:ml-12">
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Destinations</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-secondary-foreground/80">+01 234 567 890</p>
                  <p className="text-secondary-foreground/80">+09 999 999 999</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-secondary-foreground/80">hopngoinfo@gmail.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-secondary-foreground/80">789 Inner Lane, Holy park, California, USA</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Instagram Post</h4>
            <div className="grid grid-cols-3 gap-2">
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
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {new Date().getFullYear()} Tours . All Rights Reserved
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;