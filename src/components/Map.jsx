import React, { useState } from "react";
import { Icon } from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  // iconUrl: require("./icons/placeholder.png"),
  iconSize: [38, 38], // size of the icon
});

function Map({ position, customs }) {
  const [lat, setLat] = useState(position[0]);
  const [lng, setLng] = useState(position[1]);
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />

      <Marker position={[lat, lng]} icon={customIcon}>
        <Popup>Map</Popup>
      </Marker>
      {customs}
    </MapContainer>
  );
}

export default Map;
