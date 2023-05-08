// src/components/MapMarker.js
import React from "react";

const MapMarker = ({ lat, lng, title, icon }) => {
  return (
    <div
      style={{
        position: "absolute",
        transform: "translate(-50%, -100%)",
        cursor: "pointer",
      }}
    >
      <img src={icon} alt={title} />
    </div>
  );
};

export default MapMarker;
