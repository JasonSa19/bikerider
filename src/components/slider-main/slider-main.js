import React from "react";
import Slider from "react-slick";
import SlidermainItem from "./slider-main-item";
import Headline from "../headline";

//Imported Images for Slider
import umbauImage from "../../images/layout/umbauten.jpg";
import verchromImage from "../../images/layout/verchromen.jpg";
import strahlenImage from "../../images/layout/lenker.jpg";
import polierImage from "../../images/layout/polierarbeiten.jpg";
import lackierImage from "../../images/layout/lackierung.jpg";
import metallImage from "../../images/layout/metall.jpg";
import teileImage from "../../images/layout/teile.jpg";
import inspectImage from "../../images/layout/inspektion.jpg";
import motorImage from "../../images/layout/umbauten.jpg";
import zentrierImage from "../../images/layout/lenker.jpg";
import serviceImage from "../../images/layout/metall.jpg";
import tuvImage from "../../images/layout/lackierung.jpg";
import tourImage from "../../images/layout/tour.jpg";
import trainingImage from "../../images/layout/Sportmotorrad.jpg";

//Custom Arrows
import arrowPrev from "../../images/layout/next.svg";
import arrowNext from "../../images/layout/prev.svg";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button onClick={onClick} className={className}>
      <img alt="Nächster Slide" src={arrowNext}></img>
    </button>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button onClick={onClick} className={className}>
      <img alt="Vorheriger Slide" src={arrowPrev}></img>
    </button>
  );
}

const Slidermain = () => {
  var settings = {
    dots: false,
    nav: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="slider-main">
      <Headline headlineContent="Leistungen" />
      <div className="slider-wrap">
        <Slider {...settings}>
          <SlidermainItem
            content="Motorrad-Umbauten (Customizing)"
            image={umbauImage}
            imageAlt="Umbauten"
          />
          <SlidermainItem
            content="Verchromen"
            image={verchromImage}
            imageAlt="Verchromen"
          />
          <SlidermainItem
            content="Glas- und Sandstrahlen"
            image={strahlenImage}
            imageAlt="Glas- und Sandstrahlen"
          />
          <SlidermainItem
            content="Sonderlackierungen"
            image={lackierImage}
            imageAlt="Sonderlackierungen"
          />
          <SlidermainItem
            content="Polierarbeiten"
            image={polierImage}
            imageAlt="Polierarbeiten"
          />
          <SlidermainItem
            content="Metallarbeiten"
            image={metallImage}
            imageAlt="Metallarbeiten"
          />
          <SlidermainItem
            content="Weltweite Teilebeschaffung (Versand)"
            image={teileImage}
            imageAlt="Weltweite Teilebeschaffung"
          />
          <SlidermainItem
            content="Inspektionen"
            image={inspectImage}
            imageAlt="Inspektionen"
          />
          <SlidermainItem
            content="Motorinstandsetzung"
            image={motorImage}
            imageAlt="Motorinstandsetzung"
          />
          <SlidermainItem
            content="Einspeichen und Zentrieren"
            image={zentrierImage}
            imageAlt="Einspeichen und Zentrieren"
          />
          <SlidermainItem
            content="Hol-/Bringservice"
            image={serviceImage}
            imageAlt="Hol-/Bringservice"
          />
          <SlidermainItem
            content="TÜV/Sonderabnahmen"
            image={tuvImage}
            imageAlt="TÜV/Sonderabnahmen"
          />
          <SlidermainItem
            content="Touren"
            image={tourImage}
            imageAlt="Touren"
          />
          <SlidermainItem
            content="Trainings"
            image={trainingImage}
            imageAlt="Trainings"
          />
        </Slider>
      </div>
    </section>
  );
};

export default Slidermain;
