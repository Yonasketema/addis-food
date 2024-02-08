import React from "react";
import Review from "./Review";

function FoodReviewList({ reviews }) {
  return (
    <div>
      {reviews?.length ? (
        <ul
          style={{
            overflow: "auto",
            overflowX: "hidden",
            height: "30rem",
          }}
        >
          {reviews.map((review) => (
            <Review
              key={review._id}
              name={review.name}
              rate={review.rating}
              comment={review.comment}
            />
          ))}
        </ul>
      ) : (
        <p>No comment !!</p>
      )}
    </div>
  );
}

export default FoodReviewList;
