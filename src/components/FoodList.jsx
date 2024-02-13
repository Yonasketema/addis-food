import React from "react";
import styled from "styled-components";

import FoodCard from "./FoodCard";
import FoodCardSkeleton from "./FoodCardSkeleton";

const StyledFoodList = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  width: 50vw;
`;

function FoodList({ foods, isLoading }) {
  return (
    <StyledFoodList>
      {isLoading &&
        Array(3)
          .fill("")
          .map((a) => <FoodCardSkeleton />)}

      {foods?.foods?.map((food) => (
        <FoodCard key={food.menu._id} food={food} />
      ))}
    </StyledFoodList>
  );
}

export default FoodList;
