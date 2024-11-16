import React, { useState } from "react";
import "./App.css";
// import Home from "./component/Home";
// import Calculator from "./component/comp/Calculator";
// import Main from "./component/comp/Main";
// import MusicPlayer from "./MusicPlayer";
import MusicRatingApp from "./component/MusicPlayer/MusicRatingApp";
import TodoMain from "./component/Todo/TodoMain";

function App() {
  // const [name, setName] = useState("");

  // // Update name as the user types
  // const handleChange = (event) => {
  //   setName(event.target.value);
  // };

  return (
    <div>
      {/* <MusicRatingApp /> */}
      <TodoMain />
    </div>
  );
}

export default App;
