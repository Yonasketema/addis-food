import React, { useState } from "react";
import styled from "styled-components";

import Heading from "./Heading";
import Modal from "./Modal";
import FoodDetailBox from "./FoodDetailBox";
import Rating from "./Rating";

const StyledFoodCard = styled.div`
  display: flex;
  gap: 1.2rem;
  padding: 2rem 1rem;
  background-color: var(--color-grey-00);
  border: 1px solid #eee;
  margin: 0.1rem;

  &:hover {
    background-color: var(--color-grey-50);
  }
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

const StatusContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
const StatusBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

function FoodCard({ food }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <FoodDetailBox food={food} />
        </Modal>
      )}

      <StyledFoodCard
        onClick={() => setIsOpenModal((show) => setIsOpenModal(!show))}
      >
        <Image src="img-6.jpg" alt="" />
        <Container>
          <Heading as="h3"> {food.menu.name}</Heading>
          <P>{food.restaurantName}</P>
          <P>&bull; {food.menu.description}</P>

          <StatusContainer>
            <StatusBox>
              <Rating size={21} value={food.menu.rating} />
              <Heading as="h4">{food.menu.rating}</Heading>
              <ReviewText>
                ({food.menu.reviews?.length || 0} reviews)
              </ReviewText>
            </StatusBox>
            <PriceContainer>
              {food.menu.discountPrice && (
                <DiscountPriceBox>
                  <Heading as="h4">{food.menu.price}</Heading>
                  <small>Birr</small>
                </DiscountPriceBox>
              )}

              <PriceBox>
                <Heading as="h4">
                  {food.menu.discountPrice || food.menu.price}
                </Heading>
                <small>Birr</small>
              </PriceBox>
            </PriceContainer>
          </StatusContainer>
        </Container>
      </StyledFoodCard>
    </>
  );
}

export default FoodCard;
