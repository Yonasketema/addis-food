import React from "react";
import StarRating from "./StarRating";
import Row from "./Row";
import Input from "./Input";

function PostReviewForm() {
  return (
    <div>
      <StarRating size={24} />
      <Row>
        <Input />
        <button>post</button>
      </Row>
    </div>
  );
}

export default PostReviewForm;
