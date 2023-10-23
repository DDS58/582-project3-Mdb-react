import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import config from "../hook/configMstore";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${config.apiUrl}`);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredMovies = movies.filter((movie) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      movie.Title.toLowerCase().includes(lowerSearchTerm) ||
      movie.Actors.toLowerCase().includes(lowerSearchTerm) ||
      movie.Genre.toLowerCase().includes(lowerSearchTerm)
    );
  });

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            imdbID={movie.imdbID}
            title={movie.Title}
            posterUrl={movie.Poster}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
