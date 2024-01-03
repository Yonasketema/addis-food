import React from "react";
import styled from "styled-components";
import { HiStar } from "react-icons/hi2";

import Heading from "./ui/Heading";
import Row from "./ui/Row";
import CreateFoodReviewForm from "./CreateFoodReviewForm";
import PriceContainer from "./PriceContainer";
import Review from "./Review";

const StyledFoodDetailBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 55vw;
  height: 70vh;
  gap: 1rem;
`;

const Image = styled.img`
  height: 21rem;
  margin-top: 0.5rem;
  width: 100%;
  object-fit: cover;
`;

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: 1rem;
  gap: 0.5rem;
`;
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const FoodDescription = styled.p`
  height: 7rem;
  overflow: clip;
`;
const PlaceName = styled.p`
  margin-top: 1rem;

  span {
    margin-left: 0.5rem;
    border-bottom: 1px solid;
    cursor: pointer;
    color: var(--color-blue-700);
  }
`;

function FoodDetailBox({ food }) {
  return (
    <StyledFoodDetailBox>
      <div>
        <Row>
          <Heading as="h1">{food.menu.name}</Heading>
          <StatusContainer>
            <HiStar color="#fcc419" size={21} /> <p>{food.menu.rating || 0}</p>
          </StatusContainer>
        </Row>
        <PlaceName>
          By<span>{food.restaurantName}</span>
        </PlaceName>

        <Image src="img-6.jpg" alt="" />

        <PriceContainer
          discountPrice={food.menu.discountPrice}
          price={food.menu.price}
        />

        <FoodDescription>{food.menu.description}</FoodDescription>
      </div>

      <ReviewContainer>
        <div>
          {food.menu.reviews?.length ? (
            <>
              {food.menu.reviews.map((review) => (
                <Review
                  key={review._id}
                  name={review.name}
                  rate={review.rating}
                  comment={review.comment}
                />
              ))}
            </>
          ) : (
            <p>No comment !!</p>
          )}
        </div>
        <CreateFoodReviewForm food_id={food.menu._id} />
      </ReviewContainer>
    </StyledFoodDetailBox>
  );
}

export default FoodDetailBox;
