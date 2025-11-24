import { Star, ChevronUp, ChevronDown } from "lucide-react";
import ellipse1 from "@/assets/Ellipse 1.png";
import ellipse2 from "@/assets/Ellipse 2.png";
import ellipse3 from "@/assets/Ellipse 3.png";
import ellipse4 from "@/assets/Ellipse 4.png";

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Testimonial Card */}
          <div className="relative">
            <div className="bg-[#F8F9FC] rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center gap-2">
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  </button>
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img 
                      src={ellipse1} 
                      alt="John Smith" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="font-display font-bold text-lg text-gray-900">John Smith</h4>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    "I had an absolutely amazing experience with Hop N Go! From the moment I booked my trip till I came back home was filled with joy and amazing memories. Highly recommend for anyone looking for a seamless, stress-free vacation experience."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Title and Avatars */}
          <div className="text-center lg:text-left">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              What our clients are saying about us?
            </h2>
            
            <div className="flex justify-center lg:justify-start items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img src={ellipse2} alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md -ml-4">
                <img src={ellipse3} alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md -ml-4">
                <img src={ellipse4} alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-medium -ml-4">
                +5k
              </div>
            </div>
            
            <p className="text-gray-600 text-lg max-w-lg mx-auto lg:mx-0">
              Join thousands of satisfied customers who have experienced the best travel with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;