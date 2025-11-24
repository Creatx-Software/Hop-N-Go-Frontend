import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import forestImage from "@/assets/nature-forest.jpg";

const TravelerQuiz = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={forestImage} 
                alt="Nature destination" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-primary font-semibold mb-2">Discover Your Style</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              What Kind of traveler are you?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Take our quick travel quiz. We'll reveal your travel style and help set personal preferences for presents you with recommendations you'll love. Now let's explore your ideal destinations!
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              <HelpCircle className="mr-2 w-5 h-5" />
              Take Quiz
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelerQuiz;