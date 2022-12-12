import React from "react";

// Needed Components
import Header from "../components/globals/header";
import Footer from "../components/globals/footer";
import HeroSub from "../components/hero-subpage/herosub";

// Needed Resources
import image from "../images/layout/cotedazur.jpg";

import logo from "../images/layout/logo-bikerider.svg";

const Impressum = () => {
  return (
    <>
      <Header />
      <HeroSub
        imgClass="object-center"
        heroSubImage={image}
        heroSubImageAlt="Impressum"
        heroSubHeadline="Impressum"
      />
      <section className="info-section-imprint">
        <div className="info">
          <div className="info-text">
            <span className="info-intro">
              <strong>Verantwortlich für den Inhalt:</strong>
              <br />
              BikeRider Live GmbH, Krümmerberg
            </span>
            <div className="contact-information">
              <span>
                <strong>Telefon:</strong>
                <br />
                (0 12 34) 56 78
                <br />
                <br />
                <strong>Fax:</strong>
                <br />
                (0 12 34) 56 79
              </span>
              <span>
                <strong>E-Mail:</strong>
                <br />
                info@big-bang-net.de
                <br />
                <br />
                <strong>Internet:</strong>
                <br />
                big-bang-net-consult.de
              </span>
              <span>
                <strong>Technische Umsetzung der Internetseiten </strong>
                <br />
                Big Bang Net Consult GmbH
                <br />
                Motocross-Straße 7
                <br />
                35781 Ofenhausen
              </span>
            </div>
          </div>
          <div className="info-logo">
            <div className="info-logo-inner">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Impressum;
