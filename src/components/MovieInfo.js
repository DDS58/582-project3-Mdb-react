import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = ({}) => {
  const { imdbID } = useParams();
  const [fetchedMovie, setFetchedMovie] = useState({
    watched: false,
    reviews: [],
  });

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const response = await fetch(`http://localhost:3001/movies/${imdbID}`);
        const movieData = await response.json();
        setFetchedMovie(movieData);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setFetchedMovie(null);
      }
    }

    fetchMovieData();
  }, [imdbID]);

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
