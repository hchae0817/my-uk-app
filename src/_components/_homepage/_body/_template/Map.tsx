// src/components/Map.tsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box } from "@mui/material";
import L from 'leaflet';

interface OpenStreetMapProps {
  latitude: number;
  longitude: number;
}

const Map: React.FC<OpenStreetMapProps> = ({ latitude, longitude }) => {
  const position: [number, number] = [latitude, longitude];

  // Optional custom icon for the marker
  const markerIcon = new L.Icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',  // URL of custom icon
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <Box sx={{ width: "100%", height: 300, marginTop: 3 }}>
      <MapContainer center={position} zoom={15} style={{ width: "100%", height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            Location: {latitude}, {longitude}
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default Map;
