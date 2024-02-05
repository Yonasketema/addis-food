import React, { useState } from "react";
import StarRating from "./StarRating";
import Row from "./ui/Row";
import Input from "./ui/Input";
import { useCreateFoodReview } from "../hooks/useCreateFoodReview";
import Button from "./ui/Button";

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
      <Row style={{ alignItems: "baseline" }}>
        <Input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ width: "100%", marginTop: "1rem" }}
        />
        <Button onClick={handleCreateReview} disabled={isCreating}>
          Post
        </Button>
      </Row>
    </div>
  );
}

export default PostReviewForm;
