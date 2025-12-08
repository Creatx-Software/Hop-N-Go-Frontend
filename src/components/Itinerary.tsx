import { Send, AudioLines, Smile } from "lucide-react";
// Removed unused rotating collage images
import itineraryImage from "@/assets/itinerary.png";

const Itinerary = () => {
  return (
    <section className="pt-0 py-6 bg-white -mt-2 md:-mt-12">
      <div className="w-full px-[5%] md:px-[4%] lg:px-[5%] xl:px-[6%] mx-auto">
        <div className="grid md:grid-cols-2 gap-[3vw] items-center">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-[3.5vw] lg:text-[3.2vw] xl:text-[3vw] text-foreground mb-8 leading-[1] md:leading-[1.2] lg:leading-[1]">
              Your smart itinerary is ready in seconds
            </h2>
            <p className="text-muted-foreground text-lg md:text-[1.1vw] lg:text-[1vw] xl:text-[1.1vw] leading-relaxed mb-8">
              Relax and let us handle the planning—just enjoy your trip. Share a few details and we'll design a seamless, personalized schedule based on your interests, travel dates, and comfort.
            </p>
          </div>
          
          <div className="relative">
            <div className="">
              {/* Static Itinerary Image */}
              <div className="w-full mb-4 flex items-center justify-center">
                <img 
                  src={itineraryImage} 
                  alt="itinerary" 
                  className="w-[360px] h-[360px] md:w-[35vw] md:h-[35vw] lg:w-[32vw] lg:h-[32vw] xl:w-[30vw] xl:h-[30vw] object-contain max-w-[500px] max-h-[500px]" 
                />
              </div>

              {/* Big Chat Input bar with icons inside the field */}
              <div className="mt-4 flex justify-center">
                <div className="w-full md:max-w-[35vw] rounded-[1.25vw] border-2 border-black/80 bg-transparent px-[1vw] py-[0.75vw] flex flex-col gap-[0.5vw]">

                  {/* Text input at the top */}
                  <input
                    type="text"
                    placeholder="Ask anything ..."
                    className="w-full text-xl placeholder:text-gray-400 bg-transparent outline-none"
                  />

                  {/* Icons row inside the input field */}
                  <div className="flex justify-between items-center">
                    {/* Left icons */}
                    <div className="flex items-center gap-[0.5vw]">
                      <button className="w-[2vw] h-[2vw] min-w-[32px] min-h-[32px] rounded-full flex items-center justify-center text-gray-500 text-[0.9vw] md:text-sm">+</button>
                      <button className="w-[2vw] h-[2vw] min-w-[32px] min-h-[32px] rounded-full flex items-center justify-center text-gray-500 text-[0.9vw] md:text-sm">
                        <Smile className="w-[1vw] h-[1vw] min-w-[16px] min-h-[16px]" />
                      </button>
                      <button className="w-[2vw] h-[2vw] min-w-[32px] min-h-[32px] rounded-full flex items-center justify-center text-gray-500 text-[0.9vw] md:text-sm">@</button>
                    </div>

                    {/* Right icons */}
                    <div className="flex items-center gap-[1.25vw]">
                      <button className="w-[2vw] h-[2vw] min-w-[32px] min-h-[32px] rounded-full flex items-center justify-center text-gray-500">
                        <AudioLines className="w-[1vw] h-[1vw] min-w-[16px] min-h-[16px]" />
                      </button>
                      <button className="bg-transparent text-white p-[0.5vw] rounded-full">
                        <Send className="w-[1vw] h-[1vw] min-w-[16px] min-h-[16px] fill-black" />
                      </button>
                    </div>
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