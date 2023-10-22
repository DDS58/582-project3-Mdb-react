import React, { useState } from "react";
import RateDown from "./RateDown";

const UserReviewInput = ({ onReviewSubmitted, currentUserRole }) => {
  const [reviewText, setReviewText] = useState("");
  const [selectedRating, setSelectedRating] = useState("10");

  const handleRatingSelected = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmitReview = () => {
    const review = {
      user: currentUserRole,
      text: reviewText,
      rating: selectedRating,
    };

    onReviewSubmitted(review);
    setReviewText("");
    setSelectedRating("10");
  };

  return (
    <div>
      <textarea
        value={reviewText}
        rows="5"
        placeholder="Write your review here... and select a rating"
        onChange={(e) => setReviewText(e.target.value)}
      ></textarea>
      <RateDown onRatingSelected={handleRatingSelected} />
      <button onClick={handleSubmitReview}>Submit Review</button>
    </div>
  );
};

export default UserReviewInput;
