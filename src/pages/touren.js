import React from "react";

// Needed Components
import Footer from "../components/globals/footer";
import Header from "../components/globals/header";
import HeroSub from "../components/globals/herosub";

// Needed Resources
import image from "../images/layout/touren.jpg";

const Touren = () => {
  return (
    <>
      <Header />
      <HeroSub
        heroSubImage={image}
        heroSubImageAlt="Touren"
        heroSubHeadline="Touren"
      />
      <Footer />
    </>
  );
};

export default Touren;
