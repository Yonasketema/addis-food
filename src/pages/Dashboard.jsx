import styled from "styled-components";

import Heading from "../components/Heading";
import Row from "../components/Row";
import AddFood from "../components/AddFood";
import ButtonGroup from "../components/ButtonGroup";
import Button from "../components/Button";
import Menu from "../components/Menu";
import { useRestaurant } from "../hooks/useRestaurant";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { useState } from "react";
import { useEffect } from "react";

const Title = styled.div`
  padding: 2.4rem 4rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  margin-bottom: 1.2rem;
`;

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  // iconUrl: require("./icons/placeholder.png"),
  iconSize: [38, 38], // size of the icon
});

function Dashboard() {
  const { userRestaurant } = useRestaurant();

  const [mapPosition, setMapPosition] = useState([
    9.667288506425242, 39.51955439923884,
  ]);

  useEffect(
    function () {
      if (userRestaurant)
        setMapPosition([
          userRestaurant?.restaurant.location.coordinates[1],
          userRestaurant?.restaurant.location.coordinates[0],
        ]);
    },
    [userRestaurant]
  );

  return (
    <>
      <Row>
        <div
          style={{
            display: "flex",
            fontSize: "1rem",
            gap: "1rem",
            backgroundColor: "#fff",
            padding: "1rem 1.2rem",

            flex: 1,
          }}
        >
          <img
            src="cabin-007.jpg"
            alt=""
            style={{
              width: "27rem",
            }}
          />
          <div>
            <h1>{userRestaurant?.restaurant?.restaurantName}</h1>
            <p>
              {userRestaurant?.restaurant?.description ||
                "Historia Regis Sarsa Dengel Malak Sagad. Accedit Historia Gentis Galla, Curante Guidi"}
            </p>
          </div>
        </div>

        <MapContainer
          center={mapPosition}
          zoom={13}
          style={{
            height: "35vh",
            flex: 1,
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />

          <Marker position={mapPosition} icon={customIcon}>
            <Popup>Map</Popup>
          </Marker>
        </MapContainer>
      </Row>
      <Row>
        <Heading as="h1">Menu</Heading>
        <AddFood />
      </Row>
      {userRestaurant?.restaurant?.id && (
        <Menu restaurant_id={userRestaurant?.restaurant?.id} />
      )}
    </>
  );
}

export default Dashboard;
