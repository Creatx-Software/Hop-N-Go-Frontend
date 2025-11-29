import { Button } from "@/components/ui/button";
import quiz from "@/assets/quiz.png";

const TravelerQuiz = () => {
  return (
    <section className="relative py-20 overflow-hidden">
  {/* Pink blending background */}
  <div className="absolute inset-0 z-0">
    <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFE4E1] via-[#FFF5F3] to-transparent opacity-80"></div>
  </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={quiz} 
                alt="Nature destination" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              What Kind of traveler are you?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Take our quick travel quiz. We'll reveal your travel style and help set personal preferences for presents you with recommendations you'll love. Now let's explore your ideal destinations!
            </p>
            <Button size="lg"
              className="bg-gradient-to-r from-[#F9AC7D] to-[#F53B00] text-white rounded-full px-10 py-3 h-[56px] text-lg font-medium shadow-lg border-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F9AC7D]"
>
              Take Our Quiz
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelerQuiz;