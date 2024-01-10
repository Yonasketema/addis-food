import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

import { getMenu } from "../apis/foodApi";

const ListContainer = styled.ul`
  list-style: none;
  padding: 0.8rem 0;
  overflow: auto;
`;
const List = styled.li`
  display: grid;
  grid-template-columns: 12rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.4rem;
  font-size: 1.6rem;
  align-items: center;

  padding: 1rem 1.2rem;
  border-bottom: 1px solid var(--color-gray-100);
`;
const Img = styled.img`
  width: 100%;
  grid-row: 1 / -1;
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;

  & > p {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
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

      {menu?.foods?.map((food) => (
        <ListContainer key={food._id}>
          <List>
            <Img src={"img-6.jpg"} alt={`${food.name} poster`} />
            <h3>{food.name}</h3>
            <InfoBox>
              <p>
                <span>{food.price}</span>
                <span>Birr</span>
              </p>
              <p>
                <span>
                  {food.rating} ({food.numReviews}reviews)
                </span>
                <span>⭐️</span>
              </p>
            </InfoBox>
          </List>
        </ListContainer>
      ))}
    </div>
  );
}

export default PlaceMenu;
