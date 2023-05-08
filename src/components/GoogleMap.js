// src/components/GoogleMap.js
import React, { useEffect, useRef } from "react";
import GoogleMapReact from "google-map-react";

const GoogleMap = ({
  apiKey,
  defaultCenter,
  defaultZoom,
  markerLatLng,
  markerTitle,
  markerIcon,
}) => {
  const mapRef = useRef();

  const handleApiLoaded = (map, maps) => {
    if (markerLatLng) {
      const marker = new maps.Marker({
        position: markerLatLng,
        map: map,
        title: markerTitle,
        icon: markerIcon,
      });

      mapRef.current = { map, maps, marker };
    } else {
      mapRef.current = { map, maps };
    }
  };

  useEffect(() => {
    return () => {
      if (mapRef.current && mapRef.current.marker) {
        mapRef.current.marker.setMap(null); // Remove marker when component unmounts
      }
    };
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      />
    </div>
  );
};

GoogleMap.defaultProps = {
  defaultCenter: {
    lat: 50.37150004740581,
    lng: 13.787847486233012,
  },
  defaultZoom: 13,
};

export default GoogleMap;
