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
        <section id="destination">
          <Hero />
        </section>
        <section id="trip-planning">
          <TripPlanning />
        </section>
        <section id="evisa" className="md:-mt-40">
          <EVisa />
        </section>
        <section id="itinerary" className="md:-mt-32">
          <Itinerary />
        </section>
        <section id="quiz">
          <TravelerQuiz />
        </section>
        <section id="popular">
          <PopularItineraries />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;