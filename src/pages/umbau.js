import React from "react";

// Needed Components
import Header from "../components/globals/header";
import Footer from "../components/globals/footer";
import HeroSub from "../components/hero-subpage/herosub";
import Headline from "../components/headline";

// Needed Resources
import image from "../images/layout/umbauten.jpg";
import SiteAccordion from "../components/accordion/accordion";

const Umbau = () => {
  return (
    <>
      <Header />
      <HeroSub
        imgClass="object-top"
        heroSubImage={image}
        heroSubImageAlt="An- und Umbau von A-Z"
        heroSubHeadline="An- und Umbau von A-Z"
      />
      <div className="accordion-wrap">
        <div className="accordion-wrap-inner">
          <Headline
            headlineContent="Das ist erlaubt..."
            cstmClass="center-line"
          />
          <SiteAccordion />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Umbau;
