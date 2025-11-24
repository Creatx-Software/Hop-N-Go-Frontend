import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import phuketImage from "@/assets/phuket.jpg";

const Itinerary = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold mb-2">Smart Planning</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Your smart itinerary is ready in seconds
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Based on your desired trip plans—let's briefly spell your trip. Share a few details and we'll create a seamless, personalized schedule based on your interests, preferences, attractions, highlights, and travel time. Just board and enjoy!
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8">
              <Sparkles className="mr-2 w-5 h-5" />
              Generate Itinerary
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <div className="relative">
            <div className="bg-card rounded-3xl p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="rounded-2xl overflow-hidden">
                  <img src={phuketImage} alt="Destination" className="w-full h-32 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img src={phuketImage} alt="Destination" className="w-full h-32 object-cover" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Morning Beach Visit</p>
                    <p className="text-sm text-muted-foreground">9:00 AM - 12:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Local Cuisine Tour</p>
                    <p className="text-sm text-muted-foreground">1:00 PM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;