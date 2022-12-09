import React from "react";

// Needed Components
import Header from "../components/globals/header";
import Footer from "../components/globals/footer";
import HeroSub from "../components/hero-subpage/herosub";

// Needed Resources
import image from "../images/layout/treffen.jpg";

const Treffen = () => {
  return (
    <>
      <Header />
      <HeroSub
        heroSubImage={image}
        heroSubImageAlt="Treffen"
        heroSubHeadline="Treffen"
      />
      <Footer />
    </>
  );
};

export default Treffen;
