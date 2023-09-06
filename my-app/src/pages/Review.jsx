import React from "react";
import { useParams } from "react-router-dom";
import { reviews } from "../Reviews";

export const Review = () => {
  const { id } = useParams();
  const review = reviews.find((review) => review.id === parseInt(id));

  console.log(parseInt(id));
  if (!review) {
    return <div>Review not found</div>;
  }
  return (
    <div>
      <p>review: {review.voto} </p>
      <p>comment: {review.commento} </p>
    </div>
  );
};
