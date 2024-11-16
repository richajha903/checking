import React from "react";
import MovieItem from "./MovieItem";

function MovieList() {
  // Static list of movies for now
  const movies = [
    { name: "Inception", rating: 5 },
    { name: "Interstellar", rating: 4 },
    { name: "The Matrix", rating: 5 },
  ];

  return (
    <div>
      <h2>Movies List</h2>
      <ul>
        {movies.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
