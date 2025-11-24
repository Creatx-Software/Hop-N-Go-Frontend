import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TripPlanning from "@/components/TripPlanning";
import EVisa from "@/components/EVisa";
import Itinerary from "@/components/Itinerary";
import TravelerQuiz from "@/components/TravelerQuiz";
import PopularItineraries from "@/components/PopularItineraries";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <TripPlanning />
        <EVisa />
        <Itinerary />
        <TravelerQuiz />
        <PopularItineraries />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;