import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { Icon } from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Textarea from "../ui/Textarea";
import { useGeolocation } from "../../hooks/useGeolocation";
import { LOCATION_FORM, STEP_BACK } from "../../pages/Create";

const SetLocationButton = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  position: relative;
  bottom: 12%;
  left: 50%;
  z-index: 9999;

  transform: translate(-50%, -50%);
  transition: all 0.5s;

  &:hover {
    background-color: yellowgreen;
  }
`;

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  // iconUrl: require("./icons/placeholder.png"),
  iconSize: [38, 38], // size of the icon
});

function CreateLocationForm({ state, dispatch }) {
  const [phone_number, setPhoneNumber] = useState(state.phone_number || "");
  const [location_description, setLocationDescription] = useState(
    state.location_description || ""
  );
  const [city, setCity] = useState(state.city || "");
  const [lat, setLat] = useState(state.lat || 0);
  const [lng, setLng] = useState(state.lng || 0);
  const userCurrentLocationRef = useRef(null);

  const { position: userPosition } = useGeolocation();

  function handleUserLocation() {
    setLat(userCurrentLocationRef.current.lat);
    setLng(userCurrentLocationRef.current.lng);
  }

  console.log(userCurrentLocationRef);
  console.table({ lat, lng });

  useEffect(
    function () {
      if (userPosition) {
        setLng(userPosition.lng);
        setLat(userPosition.lat);
        userCurrentLocationRef.current = {
          lat: userPosition.lat,
          lng: userPosition.lng,
        };
      }
    },
    [userPosition]
  );

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
      }}
    >
      <>
        {lat && lat && (
          <div
            style={{
              position: "relative",
            }}
          >
            <MapContainer
              center={[lat, lng]}
              zoom={13}
              style={{
                width: "45rem",
                height: "100%",
                position: "relative",
              }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
              />

              <Marker position={[lat, lng]} icon={customIcon}>
                <Popup>Map</Popup>
              </Marker>
              <SelectPosition setLng={setLng} setLat={setLat} />
            </MapContainer>
            <SetLocationButton onClick={handleUserLocation}>
              use current Location
            </SetLocationButton>
          </div>
        )}
      </>

      <Form>
        <FormRow>
          <Input
            type="text"
            id="phoneNumber"
            placeholder="Phone number"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormRow>

        <FormRow>
          <Input
            type="text"
            id="city"
            placeholder="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Textarea
            type="text"
            id="location_description"
            placeholder="betelemdo mn teblo yemiteraw bota"
            value={location_description}
            onChange={(e) => setLocationDescription(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Button onClick={() => dispatch({ type: STEP_BACK })}> Back</Button>

          {phone_number && location_description && city && lng && lat ? (
            <Button
              onClick={() =>
                dispatch({
                  type: LOCATION_FORM,
                  payload: {
                    lat,
                    lng,
                    phone_number,
                    city,
                    location_description,
                  },
                })
              }
            >
              Next
            </Button>
          ) : (
            <Button variation="disabled" disabled>
              Next
            </Button>
          )}
        </FormRow>
      </Form>
    </div>
  );
}

function SelectPosition({ setLat, setLng }) {
  useMapEvents({
    click: ({ latlng }) => {
      setLat(latlng.lat);
      setLng(latlng.lng);
    },
  });
}

export default CreateLocationForm;
