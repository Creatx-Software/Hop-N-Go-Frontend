import Navigation from '../components/Navigation';
import HeroSection from '../components/Hero';
import TripPlanning from '../components/TripPlanning';
import EVisa from '../components/EVisa';
import Itinerary from '../components/Itinerary';
import Quiz from '../components/TravelerQuiz';
import PopularItineraries from '../components/PopularItineraries';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
export default function Landing() {
  return <div className="min-h-screen bg-transparent overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <TripPlanning />
        <EVisa />
        <Itinerary />
        <Quiz />
        <PopularItineraries />
        <Testimonials />
      </main>
      <Footer />
    </div>;
}