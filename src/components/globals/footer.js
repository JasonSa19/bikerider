import React from "react";

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="footer-contact">
          <div className="footer-contact-left">
            <h4>Kontakt</h4>
            <p>
              <strong>Bikerider Live</strong>
              <br />
              Thomas Müller
              <br />
              Harleystraße 7<br />
              63214 Krümmerberg
            </p>
          </div>

          <div className="footer-contact-right">
            <div className="footer-contact-right_wrap">
              <div className="contact-link">
                <StaticImage src="../../images/icon/phone.svg"></StaticImage>
                <a href="tel:02211101777">(0 22 11) 10 17 77</a>
              </div>
              <div className="contact-link">
                <StaticImage src="../../images/icon/fax.svg"></StaticImage>
                <span>(022 11) 10 17 78</span>
              </div>
              <div className="contact-link">
                <StaticImage src="../../images/icon/email.svg"></StaticImage>
                <a href="mailto:bikerider@bikerider-live.de">
                  bikerider@bikerider-live.de
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-opening">
          <h4>Öffnungszeiten</h4>
          <p>
            <strong>Montags bis Freitags</strong>
            <br />
            von 9:30 - 20:00 Uhr
          </p>
          <p>
            <strong>Samstags</strong>
            <br />
            von 10:00 - 15:00 Uhr
          </p>
        </div>
        <div className="footer-meta-menu">
          <h4>Rechtliches</h4>

          <div className="footer-meta-menu-inner">
            <AnchorLink to="/impressum">Impressum</AnchorLink>
            <AnchorLink to="/kontakt">Kontakt</AnchorLink>
            <AnchorLink to="/">AGB</AnchorLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
