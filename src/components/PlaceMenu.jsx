import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

import { getMenu } from "../apis/foodApi";
import MenuListCard from "./MenuListCard";
import { HiArrowLongLeft } from "react-icons/hi2";

const ListContainer = styled.ul`
  list-style: none;
  padding: 0.8rem 0;
  overflow-y: scroll;
  height: 80%;
`;

const BackButton = styled.button`
  background: transparent;
  border: none;

  width: 7%;
  height: 7%;
  padding: 0;

  &:focus {
    outline: none;
  }
  &:hover {
    transform: translateX(-9%);
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;

  gap: 2rem;
  font-size: 1.8rem;
  font-weight: lighter;
`;

function PlaceMenu({ onClose, selectedId, PlaceName }) {
  const { data: menu } = useQuery({
    queryKey: [selectedId + "menu"],
    queryFn: () => getMenu(selectedId),
  });

  return (
    <div>
      <Header>
        <BackButton onClick={onClose}>
          <HiArrowLongLeft size={33} />
        </BackButton>
        {PlaceName}
      </Header>

      <ListContainer>
        {menu?.foods?.map((food) => (
          <MenuListCard key={food._id} food={food} />
        ))}
      </ListContainer>
    </div>
  );
}

export default PlaceMenu;
