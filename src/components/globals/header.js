import React from "react";

import { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";

import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = () => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <header>
      <div className="header-wrap">
        <div className="menu-toggler">
          <button onClick={toggleMenu} aria-label="Menü öffnen"></button>
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
    </header>
  );
};

export default Header;
