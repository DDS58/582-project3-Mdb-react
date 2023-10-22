import React, { useState } from "react";
import config from "../hook/configMstore";

const AddMovieForm = () => {
  const [movieData, setMovieData] = useState({
    imdbID: "",
    Title: "",
    Year: "",
    Genre: "",
    Director: "",
    Plot: "",
    Actors: "",
    Language: "",
    Country: "",
    Rated: "",
    Runtime: "",
    Writer: "",
    imdbRating: "",
    reviews: [],
  });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${config.apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      });

      if (response.ok) {
        console.log("Movie added successfully");
        setMovieData({
          imdbID: "",
          Title: "",
          Year: "",
          Genre: "",
          Director: "",
          Plot: "",
          Actors: "",
          Language: "",
          Country: "",
          Rated: "",
          Runtime: "",
          Writer: "",
          imdbRating: "",
          reviews: [],
        });
      } else {
        console.error("Failed to add movie");
      }
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  return (
    <form onSubmit={submitForm} className="movie-detail">
      <div className="movie-detail-left">
        <input
          type="text"
          placeholder="imdbID"
          value={movieData.imdbID}
          onChange={(e) =>
            setMovieData({ ...movieData, imdbID: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Poster img"
          value={movieData.Poster}
          onChange={(e) =>
            setMovieData({ ...movieData, Poster: e.target.value })
          }
        />
      </div>
      <div className="movie-detail-right">
        <input
          type="text"
          placeholder="Title"
          value={movieData.Title}
          onChange={(e) =>
            setMovieData({ ...movieData, Title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Year"
          value={movieData.Year}
          onChange={(e) => setMovieData({ ...movieData, Year: e.target.value })}
        />
        <input
          type="text"
          placeholder="Genre"
          value={movieData.Genre}
          onChange={(e) =>
            setMovieData({ ...movieData, Genre: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Director"
          value={movieData.Director}
          onChange={(e) =>
            setMovieData({ ...movieData, Director: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Plot"
          value={movieData.Plot}
          onChange={(e) => setMovieData({ ...movieData, Plot: e.target.value })}
        />
        <input
          type="text"
          placeholder="Actors"
          value={movieData.Actors}
          onChange={(e) =>
            setMovieData({ ...movieData, Actors: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Language"
          value={movieData.Language}
          onChange={(e) =>
            setMovieData({ ...movieData, Language: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Country"
          value={movieData.Country}
          onChange={(e) =>
            setMovieData({ ...movieData, Country: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Rated"
          value={movieData.Rated}
          onChange={(e) =>
            setMovieData({ ...movieData, Rated: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Runtime"
          value={movieData.Runtime}
          onChange={(e) =>
            setMovieData({ ...movieData, Runtime: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Writer"
          value={movieData.Writer}
          onChange={(e) =>
            setMovieData({ ...movieData, Writer: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="IMDb Rating"
          value={movieData.imdbRating}
          onChange={(e) =>
            setMovieData({ ...movieData, imdbRating: e.target.value })
          }
        />
        <button type="submit">Add Movie</button>
      </div>
    </form>
  );
};

export default AddMovieForm;
