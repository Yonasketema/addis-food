import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

import { getMenu } from "../apis/foodApi";
import MenuListCard from "./MenuListCard";

const ListContainer = styled.ul`
  list-style: none;
  padding: 0.8rem 0;
  overflow-y: scroll;
  height: 70%;
`;

function PlaceMenu({ onClose, selectedId }) {
  const { data: menu } = useQuery({
    queryKey: [selectedId + "menu"],
    queryFn: () => getMenu(selectedId),
  });

  console.log(menu);
  return (
    <div>
      <button className="btn-back" onClick={onClose}>
        &larr;
      </button>

      <ListContainer>
        {menu?.foods?.map((food) => (
          <MenuListCard key={food._id} food={food} />
        ))}
      </ListContainer>
    </div>
  );
}

export default PlaceMenu;
