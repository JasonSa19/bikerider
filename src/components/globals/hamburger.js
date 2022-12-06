import React from "react";
import { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";

const Hamburger = () => {
  const { toggleMenu } = useContext(MenuContext);
  return (
    <button onClick={toggleMenu} className="hamburger-toggler">
      <div className="hamburger-toggler-line"></div>
      <div className="hamburger-toggler-line"></div>
      <div className="hamburger-toggler-line"></div>
    </button>
  );
};

export default Hamburger;
