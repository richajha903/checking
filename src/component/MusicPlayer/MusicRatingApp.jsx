import React from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import AverageRating from "./AverageRating";

const MusicRatingApp = () => {
  return (
    <div>
      <h1>Movie Rating App</h1>
      <MovieForm />
      <MovieList />
      <AverageRating />
    </div>
  );
};

export default MusicRatingApp;
