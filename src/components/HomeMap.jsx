import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { useSearchParams } from "react-router-dom";

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  // iconUrl: require("./icons/placeholder.png"),
  iconSize: [38, 38], // size of the icon
});

function HomeMap({ foods }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    lat &&
    lng && (
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        scrollWheelZoom={true}
        style={{
          height: "100%",
          width: "50vw",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {foods?.foods?.map((food, i) => (
          <Marker
            position={[
              food.location.coordinates[1],
              food.location.coordinates[0],
            ]}
            key={`${i}_${new Date().getTime()}`}
            icon={customIcon}
          >
            <Popup>
              <span>{food.restaurantName}</span>
            </Popup>
          </Marker>
        ))}

        {(!foods || foods?.foods.length === 0) && (
          <Marker position={[lat, lng]} icon={customIcon}>
            <Popup>
              <span>You</span>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    )
  );
}

export default HomeMap;
