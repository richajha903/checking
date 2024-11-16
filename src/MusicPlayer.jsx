import React, { useState } from "react";
import "./App.css";

function MusicPlayer() {
  const [movieName, setMovieName] = useState("");
  const [rating, setRating] = useState(0);
  const [movies, setMovies] = useState([]);

  const handleAddMovie = () => {
    if (movieName && rating > 0) {
      setMovies([...movies, { name: movieName, rating: parseInt(rating) }]);
      setMovieName("");
      setRating(0);
    }
  };

  const handleDeleteMovie = (index) => {
    const newMovies = [...movies];
    newMovies.splice(index, 1);
    setMovies(newMovies);
  };

  const calculateAverageRating = () => {
    if (movies.length === 0) return 0;
    const totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
    return (totalRating / movies.length).toFixed(1);
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < count ? "#FFD700" : "#ccc" }}>
        ★
      </span>
    ));
  };

  return (
    <div className="App">
      <h1>Movie Rating App</h1>

      {/* Movie Input Section */}
      <div>
        <input
          type="text"
          placeholder="Enter movie name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="0">Select Rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>

      {/* Movie List Section */}
      <div>
        <h2>Movies List</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              {movie.name} - {renderStars(movie.rating)}
              <button onClick={() => handleDeleteMovie(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Average Rating Section */}
      <div>
        <h3>Average Rating: {calculateAverageRating()}</h3>
      </div>
    </div>
  );
}

export default MusicPlayer;
