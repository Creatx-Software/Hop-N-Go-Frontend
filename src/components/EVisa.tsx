import evisaImage from "@/assets/evisa.png";

const EVisa = () => {
  return (
    <section className="py-2 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-4 items-center">
          {/* Left Side - eVisa Image */}
          <div className="relative w-full max-w-lg -ml-8 overflow-hidden">
            <img
              src={evisaImage}
              alt="eVisa"
              className="w-full h-96 md:h-[560px] object-cover rounded-3xl"
            />
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