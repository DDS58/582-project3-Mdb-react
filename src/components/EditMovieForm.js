import React, { useState } from "react";
import config from "../hook/configMstore";

const EditMovieForm = ({ movie, onMovieUpdated }) => {
  const { _id, ...movieWithoutId } = movie;
  const [editedMovie, setEditedMovie] = useState({ ...movieWithoutId });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${config.apiUrl}movies/${editedMovie.imdbID}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedMovie),
        }
      );

      if (response.ok) {
        console.log("Movie updated successfully");
        onMovieUpdated(editedMovie);
      } else {
        console.error("Failed to update movie");
      }
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Poster img"
        value={editedMovie.Poster}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, Poster: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Title"
        value={editedMovie.Title}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, Title: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Year"
        value={editedMovie.Year}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, Year: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Genre"
        value={editedMovie.Genre}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, Genre: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Director"
        value={editedMovie.Director}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, Director: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Plot"
        value={editedMovie.Plot}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, Plot: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Actors"
        value={editedMovie.Actors}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, Actors: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Language"
        value={editedMovie.Language}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, Language: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Country"
        value={editedMovie.Country}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, Country: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Rated"
        value={editedMovie.Rated}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, Rated: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Runtime"
        value={editedMovie.Runtime}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, Runtime: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Writer"
        value={editedMovie.Writer}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, Writer: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="IMDb Rating"
        value={editedMovie.imdbRating}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, imdbRating: e.target.value })
        }
      />
      <button type="submit">Update Movie</button>
    </form>
  );
};

export default EditMovieForm;
