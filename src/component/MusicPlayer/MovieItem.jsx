import React from "react";

function MovieItem({ movie }) {
  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < count ? "#FFD700" : "#ccc" }}>
        &#9734;
      </span>
    ));
  };

  return (
    <li>
      {movie.name} - {renderStars(movie.rating)}
      <button style={{ marginLeft: "10px" }}>Delete</button>
    </li>
  );
}

export default MovieItem;
