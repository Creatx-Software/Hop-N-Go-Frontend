import evisaImage from "@/assets/evisa.png";

const EVisa = () => {
  return (
    <section className="pt-16 pb-8 md:py-18 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Content - Right side on desktop, top on mobile */}
          <div className="md:w-1/2 space-y-6 text-center md:text-right">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight text-foreground">
              Your eVisa, made easy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We guide you through a simple, secure process to help you submit your eVisa accurately and on time. Just follow the steps, upload your documents, and track your application with real-time updates — no stress, no confusion.
            </p>
          </div>
          
          {/* Image - Left side on desktop, bottom on mobile */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full max-w-xl mx-auto">
              <img
                src={evisaImage}
                alt="eVisa"
                className="w-full h-auto max-h-[600px] object-cover rounded-3xl"
              />
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