import React from "react";
import Review from "./Review";

function FoodReviewList({ reviews }) {
  return (
    <div>
      {reviews?.length ? (
        <>
          {reviews.map((review) => (
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
  );
}

export default FoodReviewList;
