import { Camera, Compass, Map } from "lucide-react";
import happyTraveler from "@/assets/happy-traveler.jpg";

const TripPlanning = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Camera className="w-8 h-8 text-primary" />
              <Compass className="w-8 h-8 text-accent" />
              <Map className="w-8 h-8 text-primary" />
            </div>
            <p className="text-primary font-semibold mb-2">Plan Your Trip</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Ready to plan your next trip?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Let us advise your travel destinations and what excites you most - we can create a personalized trip designer just for you. Real journeys, sensible, travel, group, budget, and we'll budget all of how! Hop N Go today!
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Custom Itineraries</p>
                  <p className="text-sm text-muted-foreground">Tailored to your needs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={happyTraveler} 
                alt="Happy traveler" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPlanning;