import evisaImage from "@/assets/evisa.png";

const EVisa = () => {
  return (
    <section className="relative z-20 bg-white">
      <div className="relative z-30 pt-10 pb-0 md:pt-0 md:pb-0 md:-mt-10 lg:-mt-16">
      <div className="w-full px-[5%] md:px-[4%] lg:px-[5%] xl:px-[6%] mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-[3vw]">
          {/* Content - Right side on desktop, top on mobile */}
          <div className="md:w-[45%] lg:w-[50%] text-left md:-mt-32 lg:-mt-44">
            <h2 className="font-display font-bold text-4xl md:text-[3.5vw] lg:text-[3.2vw] xl:text-[3vw] leading-tight text-foreground">
              Your eVisa, made easy
            </h2>
            <div className="space-y-2 mt-4">
              <p className="text-lg md:text-[1.1vw] lg:text-[1vw] xl:text-[1.1vw] text-muted-foreground leading-relaxed">
                We guide you through a simple, secure process to help you submit your eVisa accurately and on time.
              </p>
              <p className="text-lg md:text-[1.1vw] lg:text-[1vw] xl:text-[1.1vw] text-muted-foreground leading-relaxed">
                Just follow the steps, upload your documents, and track your application with real-time updates — no stress, no confusion.
              </p>
            </div>
          </div>
          
          {/* Image - Left side on desktop, bottom on mobile */}
          <div className="w-full md:w-[55%] lg:w-[50%] md:-ml-[8%] -mt-16 md:-mt-40 lg:-mt-48 xl:-mt-56">
            <div className="relative w-full max-w-3xl mx-auto">
              <img
                src={evisaImage}
                alt="eVisa"
                className="w-full h-auto max-h-[700px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -right-[5vw] -top-[5vw] w-[16vw] h-[16vw] min-w-[64px] min-h-[64px] rounded-full bg-pink-100/30 blur-3xl -z-10 hidden md:block"></div>
      <div className="absolute -left-[5vw] bottom-0 w-[20vw] h-[20vw] min-w-[80px] min-h-[80px] rounded-full bg-purple-100/30 blur-3xl -z-10 hidden md:block"></div>
      </div>
    </section>
  );
};

export default EVisa;