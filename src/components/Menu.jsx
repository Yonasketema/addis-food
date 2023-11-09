import React from "react";
import { useQuery } from "@tanstack/react-query";
import RowCard from "./RowCard";

export default function Menu() {
  const { data: menu } = useQuery({
    queryKey: ["Menu"],
    queryFn: () =>
      fetch(
        "http://localhost:8000/api/v1/food/restaurantfoods?restaurant=63b5847bc452ad2747bbbbcf"
      ).then((res) => res.json()),
  });

  return (
    <>
      {menu?.foods.map((food) => (
        <RowCard food={food} key={food._id} />
      ))}
    </>
  );
}
