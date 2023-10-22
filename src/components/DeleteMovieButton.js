import React from "react";
import config from "../hook/configMstore";

const DeleteMovieButton = ({ imdbID, onDelete }) => {
  const confirmDelete = () => {
    const confirmMessage = "Are you sure you want to delete this movie?";
    if (window.confirm(confirmMessage)) {
      deleteMovie();
    }
  };

  const deleteMovie = async () => {
    try {
      const response = await fetch(`${config.apiUrl}movies/${imdbID}`, {
        method: "DELETE",
      });

      if (response.ok) {
        onDelete();
        console.log("Movie deleted successfully");
      } else {
        console.error("Failed to delete movie");
      }
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <button className="delete-movie-button" onClick={confirmDelete}>
      Delete Movie
    </button>
  );
};

export default DeleteMovieButton;
