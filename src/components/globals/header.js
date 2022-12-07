import React from "react";

import Hamburger from "./hamburger";

import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Menu from "./menu";

const Header = () => {
  return (
    <header>
      <Menu />
      <div className="header-outer-wrap">
        <div className="header-wrap">
          <div className="menu-toggler">
            <Hamburger />
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
