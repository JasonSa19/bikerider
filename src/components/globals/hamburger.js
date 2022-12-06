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
        <div className="hamburger-toggler-line"></div>
        <div className="hamburger-toggler-line"></div>
        <div className="hamburger-toggler-line"></div>
      </button>
    </div>
  );
};

export default Hamburger;
