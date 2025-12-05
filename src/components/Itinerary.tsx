import { Send, AudioLines, Smile } from "lucide-react";
// Removed unused rotating collage images
import itineraryImage from "@/assets/itinerary.png";

const Itinerary = () => {
  return (
    <section className="pt-0 py-6 bg-white -mt-2 md:mt-0">
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
            <div className="">
              {/* Static Itinerary Image */}
              <div className="w-full mb-4 flex items-center justify-center">
                {/* Show the full image (no cropping). Use object-contain and a fixed max size to avoid cropping */}
                <img src={itineraryImage} alt="itinerary" className="w-[360px] h-[360px] md:w-[420px] md:h-[420px] object-contain" />
              </div>

              {/* Big Chat Input bar with icons inside the field */}
              <div className="mt-4 flex justify-center">
                <div className="w-full md:max-w-[560px] rounded-[20px] border-2 border-black/80 bg-transparent px-4 py-3 flex flex-col gap-2">

                  {/* Text input at the top */}
                  <input
                    type="text"
                    placeholder="Ask anything ..."
                    className="w-full text-xl placeholder:text-gray-400 bg-transparent outline-none"
                  />

                  {/* Icons row inside the input field */}
                  <div className="flex justify-between items-center">
                    {/* Left icons */}
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 text-sm">+</button>
                      <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 text-sm">
                        <Smile className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 text-sm">@</button>
                    </div>

                    {/* Right icons */}
                    <div className="flex items-center gap-5">
                      <button className="flex items-center justify-center text-black">
                        <AudioLines className="w-5 h-5" />
                      </button>
                      <button className="flex items-center justify-center">
                        <Send className="w-6 h-6 fill-black stroke-white" />
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