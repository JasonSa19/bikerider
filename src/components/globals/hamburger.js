import React from "react";
import { useState } from "react";

const Hamburger = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={!isActive ? "nav-toggler" : null}>
      <button onClick={handleToggle} className="hamburger-toggler">
        <div className="hamburger-toggler-line outer-up"></div>
        <div className="hamburger-toggler-line middle"></div>
        <div className="hamburger-toggler-line outer-down"></div>
      </button>
    </div>
  );
};

export default Hamburger;
