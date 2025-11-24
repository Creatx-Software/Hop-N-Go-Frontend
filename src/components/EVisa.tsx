import { Button } from "@/components/ui/button";
import { CheckCircle, FileCheck, Globe } from "lucide-react";

const EVisa = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 backdrop-blur-sm">
              <Globe className="w-16 h-16 text-primary mb-6" />
              <h3 className="font-display font-bold text-3xl text-foreground mb-4">
                Apply for eVisa in minutes
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Fast Processing</p>
                    <p className="text-sm text-muted-foreground">Get your visa approved within 24-48 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">190+ Countries</p>
                    <p className="text-sm text-muted-foreground">Apply for visas to destinations worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Secure & Reliable</p>
                    <p className="text-sm text-muted-foreground">Your data is protected with encryption</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-primary font-semibold mb-2">eVisa Services</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Your eVisa, made easy
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We guide you through a simple, secure process to help you quickly get your eVisa accurately and on time. Whether you're traveling for business, tourism, or an application with reputable agencies—no stress, no confusion.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              <FileCheck className="mr-2 w-5 h-5" />
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EVisa;