import React from "react";
import { useQuery } from "@tanstack/react-query";
import RowCard from "./RowCard";

export default function Menu({ restaurant_id }) {
  const { data: menu } = useQuery({
    queryKey: ["Menu"],
    queryFn: () =>
      fetch(
        `http://localhost:8000/api/v1/food/restaurantfoods?restaurant=${restaurant_id}`
      ).then((res) => res.json()),
  });

  return (
    <>
      {menu?.foods?.map((food) => (
        <RowCard food={food} key={food._id} />
      ))}
    </>
  );
}
