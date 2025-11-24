import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" aria-label="Hop N Go home" className="flex items-center">
              <img src="/favicon.png" alt="Hop N Go logo" className="w-30 h-10" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-8 ml-[-540px]">
            <a href="#destination" className="text-white hover:text-primary transition-colors font-medium">
              Destination
            </a>
            <a href="#deals" className="text-white hover:text-primary transition-colors font-medium">
              Deals
            </a>
            <a href="#about" className="text-white hover:text-primary transition-colors font-medium">
              About Us
            </a>
            <a href="#contact" className="text-white hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#login" className="hidden md:flex items-center gap-2 bg-[#575A64] hover:bg-white/30 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Login
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                <User className="w-3 h-3 text-[#FF5A2D]" />
              </div>
            </a>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;