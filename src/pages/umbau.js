import React from "react";

// Needed Components
import Header from "../components/globals/header";
import Footer from "../components/globals/footer";
import HeroSub from "../components/hero-subpage/herosub";

// Needed Resources
import image from "../images/layout/umbauten.jpg";

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
      <Footer />
    </>
  );
};

export default Umbau;
