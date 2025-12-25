import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';

const defaultCenter = {
  lat: 40.7128,
  lng: -74.0060 // Default to New York
};

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
  ],
};

interface Activity {
  id: number;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface ItineraryMapProps {
  activities: Activity[];
  selectedActivity: number | null;
  onActivitySelect: (id: number) => void;
}

export default function ItineraryMap({ activities, selectedActivity, onActivitySelect }: ItineraryMapProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
  });

  const center = useMemo(() => {
    if (activities.length > 0) {
      return {
        lat: activities[0].coordinates.lat,
        lng: activities[0].coordinates.lng
      };
    }
    return defaultCenter;
  }, [activities]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={12}
      center={center}
      options={options}
    >
      {activities.map((activity) => (
        <Marker
          key={activity.id}
          position={activity.coordinates}
          onClick={() => onActivitySelect(activity.id)}
          icon={{
            url: selectedActivity === activity.id 
              ? 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' 
              : 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            scaledSize: new window.google.maps.Size(32, 32),
          }}
        />
      ))}
    </GoogleMap>
  );
}
