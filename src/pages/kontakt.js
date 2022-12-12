import React from "react";

// Needed Components
import Header from "../components/globals/header";
import Footer from "../components/globals/footer";
import HeroSub from "../components/hero-subpage/herosub";

// Needed Resources
import image from "../images/layout/lackierung.jpg";

import internetIcon from "../images/icon/contact/internet.svg";
import mailIcon from "../images/icon/contact/email.svg";
import faxIcon from "../images/icon/contact/fax.svg";
import phoneIcon from "../images/icon/contact/phone.svg";

const Kontakt = () => {
  return (
    <>
      <Header />
      <HeroSub
        imgClass="object-top"
        heroSubImage={image}
        heroSubImageAlt="Kontakt"
        heroSubHeadline="Kontakt"
      />
      <section className="info-section">
        <div className="info">
          <div className="info-text">
            <span>
              <strong>BikeRider Live GmbH</strong>
              <br /> Thomas Müller <br /> Harleystraße 7 <br />
              63214 Krümmerberg
            </span>
            <span>
              <strong>Öffnungszeiten:</strong>
              <br /> Samstags von 10:00-15:00 Uhr <br /> Montags bis Freitags
              von 9:30-20:00 Uhr
            </span>
            <span>
              <strong>Probefahrten:</strong>
              <br /> Nach Vereinbarung
            </span>
          </div>
          <div className="info-icons">
            <div className="info-icons-col">
              <span className="info-icons-col-cell">
                <div className="img-wrap">
                  <img src={internetIcon} alt="icon" />
                </div>
                <a href="/">bikerider-live.de</a>
              </span>
              <span className="info-icons-col-cell">
                <div className="img-wrap">
                  <img src={faxIcon} alt="icon" />
                </div>
                <span>(0 22 11) 10 17 78</span>
              </span>
            </div>
            <div className="info-icons-col">
              <span className="info-icons-col-cell">
                <div className="img-wrap">
                  <img src={mailIcon} alt="icon" />
                </div>
                <a href="mailto:bikerider@bikerider-live.de">
                  bikerider@bikerider-live.de
                </a>
              </span>
              <span className="info-icons-col-cell">
                <div className="img-wrap">
                  <img src={phoneIcon} alt="icon" />
                </div>
                <a href="tel:(0 22 11) 10 17 77">(0 22 11) 10 17 77</a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Kontakt;
