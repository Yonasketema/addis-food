import React from "react";
import styled from "styled-components";

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

function MenuListCard({ food }) {
  return (
    <List>
      <Img src={"img-6.jpg"} alt={`${food.name} poster`} />
      <h3>{food.name}</h3>
      <InfoBox>
        <p>
          <span>{food.discountPrice || food.price} </span>
          <span>Birr</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>
            {food.rating.toFixed(1)} ({food.numReviews}reviews)
          </span>
        </p>
      </InfoBox>
    </List>
  );
}

export default MenuListCard;
