import { Button } from "@/components/ui/button";
import { MapPin, FileText, Send, Calendar, Heart } from "lucide-react";
import greeceImage from "@/assets/greece.jpg";

const EVisa = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Pink background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FFE4F3] via-background to-background"></div>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-4 items-center">
          {/* Left Side - Card */}
          <div className="relative w-full max-w-md -ml-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-[0_15px_30px_-5px_rgba(119,35,254,0.2)] border border-gray-100">
              {/* Main Image */}
              <div className="relative">
                <img 
                  src={greeceImage} 
                  alt="Greece" 
                  className="w-full h-64 object-cover"
                />
                {/* Processing Status Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 pt-10">
                  <div className="text-white">
                    <p className="text-sm font-medium text-white/80">Processing Status</p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-base">Ongoing review</span>
                      <span className="text-sm font-medium">40% completed</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-1.5">
                      <div className="bg-white h-1.5 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">Trip To Greece</h3>
                    <div className="flex items-center text-muted-foreground text-sm space-x-3">
                      <span>14-29 June</span>
                      <span>•</span>
                      <span className="text-muted-foreground/70">by Robbin jo</span>
                    </div>
                  </div>
                  <button className="text-muted-foreground hover:text-rose-500 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-2 mb-4">
                  <Button variant="outline" size="sm" className="rounded-full h-9 px-4 text-sm font-medium">
                    <MapPin className="h-4 w-4 mr-2" />
                    Map
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full h-9 px-4 text-sm font-medium">
                    <FileText className="h-4 w-4 mr-2" />
                    Document
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full h-9 w-9 p-0">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Last Updated */}
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground/70" />
                  <span className="text-muted-foreground/80">Last updated: 14 June</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-6 pl-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight text-foreground">
              Your eVisa, made easy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              We guide you through a simple, secure process to help you submit your eVisa accurately and on time. Just follow the steps, upload your documents, and track your application with real-time updates — no stress, no confusion.
            </p>
            <div className="flex space-x-4 pt-2">
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-pink-100/30 blur-3xl -z-10"></div>
      <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-purple-100/30 blur-3xl -z-10"></div>
    </section>
  );
};

export default EVisa;