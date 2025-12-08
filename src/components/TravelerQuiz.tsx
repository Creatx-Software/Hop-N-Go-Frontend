import { Button } from "@/components/ui/button";
import quiz from "@/assets/quiz.png";

const TravelerQuiz = () => {
  return (
    <section className="relative py-[5vw] overflow-hidden">
      {/* Pink blending background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFE4E1] via-[#FFF5F3] to-transparent opacity-80"></div>
      </div>
      <div className="w-full px-[5%] md:px-[4%] lg:px-[5%] xl:px-[6%] mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-[3vw] items-center">
          <div className="relative">
            <div className="rounded-[1.5vw] overflow-hidden shadow-2xl">
              <img 
                src={quiz} 
                alt="Nature destination" 
                className="w-full h-[24vw] min-h-[300px] object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="font-display font-bold text-4xl md:text-[3.5vw] lg:text-[3.2vw] xl:text-[3vw] text-foreground mb-8 leading-[1] md:leading-[1.2] lg:leading-[1] mt-6 md:mt-0">
              What Kind of traveler are you?
            </h2>
            <p className="text-muted-foreground text-lg md:text-[1.1vw] lg:text-[1vw] xl:text-[1.1vw] leading-relaxed mb-8">
              Take our quick travel quiz. We'll reveal your travel style and help set personal preferences for presents you with recommendations you'll love. Now let's explore your ideal destinations!
            </p>
            <Button size="lg"
              className="bg-gradient-to-r from-[#F9AC7D] to-[#F53B00] text-white rounded-full w-full sm:w-auto px-[2.5vw] py-[0.75vw] h-[3.5vw] min-h-[56px] text-[4.1vw] lg:text-[1vw] xl:text-[1.1vw] font-medium shadow-lg border-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F9AC7D]"
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