import React from "react";

import { useState } from "react";

import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Menu from "./menu";

const Header = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    let body = document.getElementsByTagName("body")[0];

    if (isActive) body.style.overflow = "hidden";
    else body.style.overflow = "auto";
  };

  return (
    <header>
      <Menu className={!isActive ? "nav-open" : null} />
      <div className="header-outer-wrap">
        <div className="header-wrap">
          <div className="menu-toggler">
            <div className={!isActive ? "nav-toggler" : null}>
              <button onClick={handleToggle} className="hamburger-toggler">
                <div className="hamburger-toggler-line outer-up"></div>
                <div className="hamburger-toggler-line middle"></div>
                <div className="hamburger-toggler-line outer-down"></div>
              </button>
            </div>
          </div>
          <div className="logo-wrap">
            <AnchorLink to="/">
              <StaticImage
                className="login"
                src="../../images/icon/person.svg"
                alt="Person"
              />
            </AnchorLink>
            <div className="seperator"></div>

            <AnchorLink to="/">
              <StaticImage
                className="logo"
                src="../../images/layout/logo-bikerider.svg"
                alt="BikeRider Live Logo"
              />
            </AnchorLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
