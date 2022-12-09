import React from "react";

import Headline from "../headline";
import TourTeaser from "./tourteaser";

// Needed Resources
import firstImage from "../../images/layout/touren.jpg";
import secondImage from "../../images/layout/lapalma.jpg";
import thirdImage from "../../images/layout/cotedazur.jpg";
import forthImage from "../../images/layout/Sportmotorrad.jpg";

const TourTeaserSection = () => {
  return (
    <section className="tour-teaser-section">
      <Headline
        headlineContent="Hier unsere nächsten Touren:"
        cstmClass="center-line"
      />
      <div className="tour-teaser-wrap">
        <TourTeaser
          date="7. – 17.5.2023:"
          tour="Dolomiten total"
          tourSub="Südtiroler Bergabenteuer"
          image={firstImage}
        />
        <TourTeaser
          date="20. – 28.7.2023:"
          tour="La Palma - Kanarische Inseln"
          tourSub="1000 Kehren - ein Vulkan"
          image={secondImage}
        />
        <TourTeaser
          date="13. – 21.9.2023:"
          tour="Cote d´AZUR"
          tourSub="Landschaft, Täler, Panoramen"
          image={thirdImage}
        />
        <TourTeaser
          date="1. – 19.12.2023:"
          tour="Toscana"
          tourSub="Dolce Vita, Pinienhaine und Paläste"
          image={forthImage}
        />
      </div>
    </section>
  );
};

export default TourTeaserSection;
