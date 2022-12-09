// Import required assets and packages
import * as React from "react";
import "../styles/main.scss";

import Header from "../components/globals/header";
import Hero from "../components/globals/hero";
import TextMedia from "../components/text-media/text-media";
import Slidermain from "../components/slider-main/slider-main";
import Footer from "../components/globals/footer";

// Data for Text-Media

import mediaImage from "../images/layout/Sportmotorrad.jpg";
import mediaImageFilter from "../images/layout/Sportmotorrad_filter.jpg";

// Init Components
const IndexPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <TextMedia
        direction="image-left"
        mediaImage={mediaImage}
        mediaImageFilter={mediaImageFilter}
        mediaImageAlt="Sportmotorrad"
        mediaImageFilterAlt="Sportmotorrad"
        textContent="BikeRider Live ist der Motorrad-Shop für Sie. Wir vertreiben Motorräder aller Marken und machen aus Ihrer
                    Maschine einen unverwechselbaren Traum aus Chrom. "
        hlContent="Freiheit, Dynamik, Fahrspass"
      />
      <Slidermain />
      <Footer />
    </>
  );
};

// Export Title to Head
export const Head = () => <title>BikeRider Live</title>;

// export Component
export default IndexPage;
