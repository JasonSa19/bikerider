import React from "react";

// Needed Components
import Header from "../components/globals/header";
import Footer from "../components/globals/footer";
import HeroSub from "../components/globals/herosub";

// Needed Resources
import image from "../images/layout/trainings.jpg";

const Umbau = () => {
  return (
    <>
      <Header />
      <HeroSub
        imgClass="object-top"
        heroSubImage={image}
        heroSubImageAlt="Trainings"
        heroSubHeadline="Trainings"
      />
      <Footer />
    </>
  );
};

export default Umbau;
