import React from "react";

// Needed Components
import Header from "../components/globals/header";
import Footer from "../components/globals/footer";
import HeroSub from "../components/hero-subpage/herosub";
import Text from "../components/text";

// Needed Resources
import image from "../images/layout/trainings.jpg";

const Trainings = () => {
  return (
    <>
      <Header />
      <HeroSub
        imgClass="object-top"
        heroSubImage={image}
        heroSubImageAlt="Trainings"
        heroSubHeadline="Trainings"
      />
      <Text
        hlContent="Ihre letzte Motorrad-Tour ist lange her?"
        cstmClass="smaller-line"
        text="Aufsitzen und den Alltag vergessen, ausgedehnte Touren mit den Freunden – damit dies keine schöne Erinnerung, sondern wieder ein gelebter Traum wird, bietet BikeRider Live-Trainings an. Für alle ehemaligen Motorradfahrer, die im Herzen immer Biker geblieben sind! Lassen Sie das Gefühl von damals wieder aufleben und erfahren Sie, was Motorräder von heute in punkto Sicherheit, Ergonomie und Komfort zu bieten haben. Natürlich können Sie als aktiver Biker auch Ihre Fahrkünste in unseren Trainings perfektionieren. "
      />
      <Footer />
    </>
  );
};

export default Trainings;
