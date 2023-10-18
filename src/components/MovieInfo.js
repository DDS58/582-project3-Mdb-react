import React, { useState, useEffect } from "react";
import MarkAsSeenButton from "./MarkAsSeenButton";
import UserReviewInput from "./UserReviewInput";

import { useParams } from "react-router-dom";
import config from "./configMstore";

const MovieDetail = ({}) => {
  const { imdbID } = useParams();
  const [fetchedMovie, setFetchedMovie] = useState({
    watched: false,
    reviews: [],
  });

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const response = await fetch(`${config.apiUrl}movies/${imdbID}`);
        const movieData = await response.json();
        setFetchedMovie(movieData);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setFetchedMovie(null);
      }
    }

    fetchMovieData();
  }, [imdbID]);

  const updateSeenStatus = (newSeenStatus) => {
    setFetchedMovie({ ...fetchedMovie, watched: newSeenStatus });
  };

  const addReview = async (newReview) => {
    const updatedReviews = [...fetchedMovie.reviews, newReview];
    setFetchedMovie({ ...fetchedMovie, reviews: updatedReviews });

    try {
      await fetch(`${config.apiUrl}movies/${imdbID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reviews: updatedReviews }),
      });
    } catch (error) {
      console.error("Error updating movie data:", error);
    }
  };

  return (
    <div>
      {fetchedMovie ? (
        <div className="movie-detail">
          <div className="movie-detail-left">
            <img
              src={fetchedMovie.Poster}
              alt={fetchedMovie.Title}
              className="movie-poster"
            />
          </div>
          <div className="movie-detail-right">
            <h2 className="movie-title">{fetchedMovie.Title}</h2>
            <p>
              <strong>Year:</strong> {fetchedMovie.Year}
            </p>
            <p>
              <strong>Genre:</strong> {fetchedMovie.Genre}
            </p>
            <p>
              <strong>Director:</strong> {fetchedMovie.Director}
            </p>
            <p>
              <strong>Plot:</strong> {fetchedMovie.Plot}
            </p>
            <p>
              <strong>Actors:</strong> {fetchedMovie.Actors}
            </p>
            <p>
              <strong>Language:</strong> {fetchedMovie.Language}
            </p>
            <p>
              <strong>Country:</strong> {fetchedMovie.Country}
            </p>
            <p>
              <strong>Rated:</strong> {fetchedMovie.Rated}
            </p>
            <p>
              <strong>Runtime:</strong> {fetchedMovie.Runtime}
            </p>
            <p>
              <strong>Writer:</strong> {fetchedMovie.Writer}
            </p>
            <p>
              <strong>imdbRating:</strong> {fetchedMovie.imdbRating}
            </p>
            <div className="usersInput">
              <MarkAsSeenButton
                imdbID={imdbID}
                seen={fetchedMovie.watched}
                onUpdateSeen={updateSeenStatus}
              />
              <UserReviewInput onReviewSubmitted={addReview} />
            </div>

            <div className="movie-reviews">
              <h3>User Reviews</h3>
              <ul>
                {fetchedMovie.reviews.map((review, index) => (
                  <p key={index}>
                    {review.rating}⭐ <strong>{review.user}:</strong>{" "}
                    {review.text}
                  </p>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading movie data...</div>
      )}
    </div>
  );
};

export default MovieDetail;
