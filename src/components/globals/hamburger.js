import React from "react";
import { useContext } from "react";

const Hamburger = () => {
  const MenuContext = (() => {
    if (typeof window !== "undefined") {
      return require("react-flexible-sliding-menu");
    }
  })();
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
