import React from "react";

const MovieCard = ({ imdbID, title, posterUrl }) => {
  const navigateToDetail = () => {
    try {
      console.log("Clicked movie with imdbID:", imdbID);
      window.location.href = `/movies/${imdbID}`;
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div className="movie-card" onClick={navigateToDetail}>
      <img src={posterUrl} alt={title} className="movie-poster" />
      <h3 className="movie-title">{title}</h3>
    </div>
  );
};

export default MovieCard;
