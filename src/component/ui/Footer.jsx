import React, { useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>This message appears when visible.</p>}
    </div>
  );
};

export default Footer;
