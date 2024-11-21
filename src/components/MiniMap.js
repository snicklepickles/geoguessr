import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

function MiniMap() {
  const mapStyle = {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    width: "30%",
    height: "30vh",
    minWidth: "150px",
    minHeight: "150px",
    zIndex: 1000,
  };

  return (
    <MapContainer center={[-37.9114, 145.1339]} zoom={17} style={mapStyle}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default MiniMap;
