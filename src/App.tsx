import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DestinationPage from "./pages/DestinationPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import EVisaPage from "./pages/EVisaPage";
import DestinationList from "./pages/DestinationList";
import DestinationDetails from "./pages/DestinationDetails";
import ItineraryPageOld from "./pages/ItineraryPageOld";
import ItineraryPage from "./pages/ItineraryPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/destinations" element={<DestinationPage />} />
          <Route path="/destination-search" element={<DestinationList />} />
          <Route path="/e-visa" element={<EVisaPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/tours/:id" element={<DestinationDetails />} />
          <Route path="/itinerary" element={<ItineraryPage />} />
          <Route path="/itinerary/old" element={<ItineraryPageOld />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
