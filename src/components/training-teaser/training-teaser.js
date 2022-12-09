import React from "react";

// Needed Components
import SliderSubItem from "../slider-subpage/slidersubitem";
import Headline from "../headline";

// Needed Resources
import firstImage from "../../images/layout/lackierung.jpg";
import secondImage from "../../images/layout/cross_sub.jpg";
import thirdImage from "../../images/layout/Sportmotorrad.jpg";
import forthImage from "../../images/layout/trainings.jpg";

const TrainingTeaser = () => {
  return (
    <section className="training-teaser">
      <Headline headlineContent="Unsere Trainings" cstmClass="center-line" />
      <div className="training-teaser-wrap">
        <SliderSubItem
          image={firstImage}
          imageAlt="Gespannfahrerlehrgang für Anfänger"
          meet="Gespannfahrerlehrgang für Anfänger"
          date="3. – 5.8.2023"
        />
        <SliderSubItem
          image={secondImage}
          imageAlt="MX- und Enduro-Lehrgang"
          meet="MX- und Enduro-Lehrgang"
          date="24. – 25.8.2023"
        />
        <SliderSubItem
          image={thirdImage}
          imageAlt="Sportfahrertraining"
          meet="Sportfahrertraining"
          date="11. – 13.9.2023"
        />
        <SliderSubItem
          image={forthImage}
          imageAlt="Rennstreckentraining auf dem Nürburgring"
          meet="Rennstreckentraining auf dem Nürburgring"
          date="11. – 13.9.2023"
        />
      </div>
    </section>
  );
};

export default TrainingTeaser;
