import React from "react";

function MovieForm() {
  return (
    <div>
      <input type="text" placeholder="Enter movie name" />
      <select>
        <option value="0">Select Rating</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
      <button>Add Movie</button>
    </div>
  );
}

export default MovieForm;
