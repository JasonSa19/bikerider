import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";

const Menu = ({ className }) => {
  return (
    <nav className={className}>
      <AnchorLink className="menu-item" to="#leistungen">
        Leistungen
      </AnchorLink>
      <AnchorLink className="menu-item" to="/treffen">
        Treffen
      </AnchorLink>
      <AnchorLink className="menu-item" to="/touren">
        Touren
      </AnchorLink>
      <AnchorLink className="menu-item" to="/trainings">
        Trainings
      </AnchorLink>
    </nav>
  );
};

export default Menu;
