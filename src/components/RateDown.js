import React, { useState } from "react";

const RateDown = ({ onRatingSelected }) => {
  const ratings = Array.from({ length: 10 }, (_, index) => index + 1);
  const [selectedRating, setSelectedRating] = useState(10);

  const handleRatingChange = (e) => {
    setSelectedRating(parseInt(e.target.value, 10));
    onRatingSelected(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <select value={selectedRating} onChange={handleRatingChange}>
        {ratings.map((rating) => (
          <option key={rating} value={rating}>
            {rating}
          </option>
        ))}
      </select>
      ⭐
    </div>
  );
};

export default RateDown;
