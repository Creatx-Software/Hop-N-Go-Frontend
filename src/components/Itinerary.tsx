import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Send } from "lucide-react";
import phuketImage from "@/assets/phuket.jpg";
import greeceImage from "@/assets/greece.jpg";
import japanImage from "@/assets/japan.jpg";

const Itinerary = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Your smart itinerary is ready in seconds
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Relax and let us handle the planning—just enjoy your trip. Share a few details and we'll design a seamless, personalized schedule based on your interests, travel dates, and comfort.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-card rounded-3xl p-6 shadow-2xl">
              {/* Image Collage */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img src={phuketImage} alt="Phuket" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img src={greeceImage} alt="Greece" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img src={japanImage} alt="Japan" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Chat bubbles */}
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-muted/50 rounded-2xl px-4 py-2 max-w-[80%]">
                    <p className="text-sm">Your 7-day trip to Bali is ready!</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-primary/10 rounded-2xl px-4 py-2 max-w-[80%]">
                    <p className="text-sm">Can you add more beach activities?</p>
                  </div>
                </div>
              </div>
              
              {/* Input field */}
              <div className="relative mt-4">
                <input 
                  type="text" 
                  placeholder="Ask anything..." 
                  className="w-full bg-muted/50 border border-border rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;