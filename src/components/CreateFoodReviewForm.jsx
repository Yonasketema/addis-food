import React, { useState } from "react";
import StarRating from "./StarRating";
import Row from "./Row";
import Input from "./Input";
import { useCreateFoodReview } from "../hooks/useCreateFoodReview";

function PostReviewForm({ food_id }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const { isCreating, createReview } = useCreateFoodReview();

  function handleCreateReview() {
    createReview({ food_id, rating, comment });
  }

  return (
    <div>
      <StarRating size={24} onSetRating={(r) => setRating(r)} />
      <Row>
        <Input value={comment} onChange={(e) => setComment(e.target.value)} />
        <button onClick={handleCreateReview}>post</button>
      </Row>
    </div>
  );
}

export default PostReviewForm;
