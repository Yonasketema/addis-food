import React from "react";
import styled from "styled-components";

import FoodCard from "./FoodCard";

const StyledFoodList = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  width: 50vw;
`;

function FoodList({ foods }) {
  return (
    <StyledFoodList>
      {foods?.foods.map((food) => (
        <FoodCard
          key={food.menu._id}
          price={food.menu.price}
          name={food.menu.name}
          owner={food.restaurantName}
          description={food.menu.description}
          rate={4.6}
          discountPrice={food.menu.discountPrice}
        />
      ))}
    </StyledFoodList>
  );
}

export default FoodList;
