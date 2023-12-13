import React from "react";
import styled from "styled-components";

import StarRating from "./StarRating";
import Heading from "./Heading";

const StyledFoodCard = styled.div`
  display: flex;
  gap: 1.2rem;
  padding: 2rem 1rem;
  background-color: var(--color-grey-00);
  border: 1px solid #eee;
  margin: 0.1rem;
`;

const Container = styled.div`
  width: 100%;
`;

const Image = styled.img`
  height: 14rem;
  border-radius: 7px;
`;

const P = styled.p`
  color: var(--color-grey-500);
  font-size: 1.5rem;
  margin-bottom: 1.4rem;
`;

const ReviewText = styled.p`
  font-weight: lighter;
  color: var(--color-grey-400);
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: calc() 0.7rem;
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

const StatusContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
const StatusBox = styled.div`
  display: flex;
  gap: 0, 5rem;
`;

function FoodCard({ name, price, discountPrice, owner, description, rate }) {
  return (
    <StyledFoodCard>
      <Image src="img-6.jpg" alt="" />
      <Container>
        <Heading as="h3">{name}</Heading>
        <P>{owner}</P>
        <P>&bull; {description}</P>

        <StatusContainer>
          <StatusBox>
            <StarRating size={20} />
            <Heading as="h4">{rate}</Heading>
            <ReviewText>(200 reviews)</ReviewText>
          </StatusBox>
          <PriceContainer>
            {discountPrice && (
              <DiscountPriceBox>
                <Heading as="h4">{price}</Heading>
                <small>Birr</small>
              </DiscountPriceBox>
            )}

            <PriceBox>
              <Heading as="h4">{discountPrice || price}</Heading>
              <small>Birr</small>
            </PriceBox>
          </PriceContainer>
        </StatusContainer>
      </Container>
    </StyledFoodCard>
  );
}

export default FoodCard;
