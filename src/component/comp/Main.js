import React from "react";
import Header from "./Header";
import Calculator from "./Calculator";

const Main = () => {
  return (
    <div className="main-container">
      {/* <!-- sub container --> */}
      <div class="sub-container">
        {/* <!-- Header container --> */}
        <div class="header-container">
          {/* <!-- Calculator Heading --> */}
          <h1 class="header">Calculator</h1>
        </div>

        <Calculator />
      </div>
    </div>
  );
};

export default Main;
