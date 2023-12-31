import React from "react";
import styled from "styled-components";

import StarRating from "./StarRating";

const H6 = styled.h6`
  font-weight: 600;
  font-size: 1.3rem;
  color: var(--color-grey-600);
`;
const ReviewText = styled.p`
  font-weight: 300;
  font-size: 1.4rem;
  color: var(--color-grey-500);
  padding-left: 1.7rem;
`;

function Review({ name, rate, comment }) {
  return (
    <div>
      <StarRating size={16} defaultRating={rate} />
      <H6>{name}</H6>
      <ReviewText>{comment}</ReviewText>
    </div>
  );
}

export default Review;
