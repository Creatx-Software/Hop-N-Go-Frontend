import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type MapModalProps = {
  isOpen: boolean;
  onClose: () => void;
  location: {
    lat: number;
    lng: number;
    name: string;
    reviews: number;
  };
};

export default function MapModal({ isOpen, onClose, location }: MapModalProps) {
  // Default to Bali, Indonesia coordinates if no location is provided
  const { lat = -8.4095, lng = 115.1889, name = 'Destination' } = location || {};
  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&center=${lat},${lng}&zoom=15`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-2">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl">Map View: {name}</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </DialogHeader>
        <div className="h-[70vh] w-full">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={mapUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
