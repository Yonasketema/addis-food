import React from "react";

import FoodCard from "../components/FoodCard";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../apis/authApi";

function Home() {
  const { data: foods } = useQuery({
    queryKey: ["near-foods"],
    queryFn: () =>
      fetch(
        "http://localhost:8000/api/v1/food/nearby?lat=39.51955439923884&log=9.667288506425242"
      ).then((res) => res.json()),
  });

  return (
    <>
      <main
        style={{
          overflow: "scroll",
          overflowX: "hidden",
          height: "87vh",
          width: "50vw",
        }}
      >
        {foods?.foods.map((food) => (
          <FoodCard
            key={food._id}
            price={food.menu.price}
            name={food.menu.name}
            owner={food.name}
            description={food.menu.description}
            rate={4.6}
            discountPrice={food.menu.discountPrice}
          />
        ))}
      </main>
    </>
  );
}

export default Home;
