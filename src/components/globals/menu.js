import React from "react";

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

const Menu = ({ className }) => {
  return (
    <nav className={className}>
      <div className="menu-wrapper">
        <div className="primary-menu">
          <AnchorLink className="menu-item" to="#leistungen">
            Leistungen
          </AnchorLink>
          <AnchorLink className="menu-item" to="/touren">
            Touren
          </AnchorLink>
          <AnchorLink className="menu-item" to="/trainings">
            Trainings
          </AnchorLink>
          <AnchorLink className="menu-item" to="/treffen">
            Treffen
          </AnchorLink>
          <AnchorLink className="menu-item" to="/shop">
            Bikerider live-shop
          </AnchorLink>
          <AnchorLink className="menu-item" to="/umbau">
            Umbau-tipps von a bis z
          </AnchorLink>
        </div>
        <div className="secondary-menu">
          <AnchorLink className="secondary-menu-item" to="/kontakt">
            Kontakt
          </AnchorLink>
          <AnchorLink className="secondary-menu-item" to="/impressum">
            Impressum
          </AnchorLink>
        </div>
      </div>
      <div className="gallery-menu-wrap">
        <StaticImage
          class="menu-image"
          src="../../images/layout/Cross.jpg"
        ></StaticImage>

        <StaticImage
          class="menu-image"
          src="../../images/layout/Tourer.jpg"
        ></StaticImage>

        <StaticImage
          class="menu-image"
          src="../../images/layout/Showmotorrad.jpg"
        ></StaticImage>
      </div>
    </nav>
  );
};

export default Menu;
