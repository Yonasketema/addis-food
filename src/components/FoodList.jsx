import React from "react";
import styled from "styled-components";

import FoodCard from "./FoodCard";
import FoodCardSkeleton from "./FoodCardSkeleton";
import AccessDemo from "./AccessDemo";

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
          .fill("z")
          .map((z, i) => <FoodCardSkeleton key={z + i} />)}
      {(!foods || foods?.foods.length === 0) && <AccessDemo />}
      {foods?.foods?.map((food) => (
        <FoodCard key={food.menu._id} food={food} />
      ))}
    </StyledFoodList>
  );
}

export default FoodList;
