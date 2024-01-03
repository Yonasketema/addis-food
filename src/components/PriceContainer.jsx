import React from "react";
import styled from "styled-components";
import Heading from "./ui/Heading";

const StyledPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const DiscountPriceBox = styled.div`
  display: flex;
  align-items: baseline;
  text-decoration: line-through;
  font-weight: bold;
  color: var(--color-grey-600);
`;

const PriceBox = styled.div`
  display: flex;
  align-items: baseline;
  font-weight: bold;
  color: var(--color-grey-900);
`;

function PriceContainer({ discountPrice, price }) {
  return (
    <StyledPriceContainer>
      {discountPrice && (
        <DiscountPriceBox>
          <Heading as="h2">{price}</Heading>
          <small>Birr</small>
        </DiscountPriceBox>
      )}

      <PriceBox>
        <Heading as="h2">{discountPrice || price}</Heading>
        <small>Birr</small>
      </PriceBox>
    </StyledPriceContainer>
  );
}

export default PriceContainer;
