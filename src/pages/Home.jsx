import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

import HomeMap from "../components/HomeMap";
import FoodList from "../components/FoodList";

const Main = styled.main`
  display: flex;
  height: 87vh;
`;

function Home() {
  const { data: foods, isLoading } = useQuery({
    queryKey: ["near-foods"],
    queryFn: () =>
      fetch(
        "http://localhost:8000/api/v1/foods/nearby?lat=39.51955439923884&log=9.667288506425242"
      ).then((res) => res.json()),
  });

  return (
    <Main>
      <FoodList foods={foods} isLoading={isLoading} />
      <HomeMap foods={foods} />
    </Main>
  );
}

export default Home;
