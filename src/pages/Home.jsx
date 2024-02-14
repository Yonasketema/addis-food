import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-hot-toast";

import HomeMap from "../components/HomeMap";
import FoodList from "../components/FoodList";
import { useGeolocation } from "../hooks/useGeolocation";
import { useGetNearbyFoods } from "../hooks/useGetNearbyFoods";

const Main = styled.main`
  display: flex;
  height: 87vh;
`;

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const { position, error } = useGeolocation();

  const { nearFoods: foods, isLoading } = useGetNearbyFoods(
    lat || position?.lat,
    lng || position?.lng
  );

  useEffect(() => {
    if (position && !lat && !lng) {
      setSearchParams(position);
    }
  }, [position, setSearchParams, lat, lng]);

  if (error?.code === 1) {
    toast.error(`${error.message} \n Please allow to access Location `);
  }

  return (
    <Main>
      <FoodList foods={foods} isLoading={isLoading} />
      <HomeMap foods={foods} />
    </Main>
  );
}

export default Home;
