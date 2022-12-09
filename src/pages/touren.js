import React from "react";

// Needed Components
import Footer from "../components/globals/footer";
import Header from "../components/globals/header";
import HeroSub from "../components/hero-subpage/herosub";
import TextMedia from "../components/text-media/text-media";

// Needed Resources
import image from "../images/layout/touren.jpg";
import mediaImage from "../images/layout/Tourer.jpg";
import mediaImageFilter from "../images/layout/Tourer_filter.jpg";

const Touren = () => {
  return (
    <>
      <Header />
      <HeroSub
        heroSubImage={image}
        heroSubImageAlt="Touren"
        heroSubHeadline="Touren"
      />
      <TextMedia
        direction="image-left"
        mediaImage={mediaImage}
        mediaImageFilter={mediaImageFilter}
        mediaImageAlt="Tourer"
        mediaImageFilterAlt="Tourer"
        cstmClass="no-line"
        textContent="In unzähligen Kehren und Kurven schrauben Sie sich mit Ihrem Bike in die Höhen des südfranzösischen Hinterlandes, entlang schöner Küstenstraßen, überqueren Alpenpässe oder sind auf der Suche nach dem nächsten Insel-Highlight.
                    Die Resonanz auf unsere erste BikeRider Live-Tour war so umwerfend, dass es uns leicht fällt, dieses Programm für 2006 auszubauen. Denn, egal wo Motorradfahrer und BikeRider Live-Fans  zusammentreffen, sind Vergnügen und gute Stimmung angesagt."
      />
      <Footer />
    </>
  );
};

export default Touren;
