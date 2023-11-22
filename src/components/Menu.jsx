import React from "react";
import { useQuery } from "@tanstack/react-query";

import RowCard from "./RowCard";
import { getMenu } from "../apis/foodApi";

export default function Menu({ restaurant_id }) {
  const { data: menu } = useQuery({
    queryKey: ["Menu"],
    queryFn: () => getMenu(restaurant_id),
  });

  return (
    <>
      {menu?.foods?.map((food) => (
        <RowCard food={food} key={food._id} />
      ))}
    </>
  );
}
