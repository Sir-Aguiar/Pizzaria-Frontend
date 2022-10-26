import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const MapContainer: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_API,
  });
  const defaultPosition = { lat: 40.805857281879284, lng: -74.14535546628153 };
  return (
    <div className="h-[90%] w-full p-1 fade fade-right transition-all duration-300 ">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%", border: "1px solid black", borderRadius: "5px" }}
          center={defaultPosition}
          zoom={15}
        >
          <Marker position={defaultPosition} label={{ text: "Lorem Ipsum", className: "place-marker" }} />
        </GoogleMap>
      ) : (
        "Nada"
      )}
    </div>
  );
};

export default MapContainer;
