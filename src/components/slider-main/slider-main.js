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
import arrowPrev from "../../images/layout/prev.svg";
import arrowNext from "../../images/layout/next.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
    centerPadding: 30,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 860,
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
          <div className="outer-item">
            <SlidermainItem
              content="Motorrad-Umbauten (Customizing)"
              image={umbauImage}
              imageAlt="Umbauten"
            />
          </div>
          <div className="outer-item">
            <SlidermainItem
              content="Verchromen"
              image={verchromImage}
              imageAlt="Verchromen"
            />
          </div>
          <div className="outer-item">
            <SlidermainItem
              content="Glas- und Sandstrahlen"
              image={strahlenImage}
              imageAlt="Glas- und Sandstrahlen"
            />
          </div>
          <div className="outer-item">
            <SlidermainItem
              content="Sonderlackierungen"
              image={lackierImage}
              imageAlt="Sonderlackierungen"
            />
          </div>
          <div className="outer-item">
            <SlidermainItem
              content="Polierarbeiten"
              image={polierImage}
              imageAlt="Polierarbeiten"
            />
          </div>
          <div className="outer-item">
            <SlidermainItem
              content="Metallarbeiten"
              image={metallImage}
              imageAlt="Metallarbeiten"
            />
          </div>
          <div className="outer-item">
            <SlidermainItem
              content="Weltweite Teilebeschaffung (Versand)"
              image={teileImage}
              imageAlt="Weltweite Teilebeschaffung"
            />
          </div>
          <div className="outer-item">
            <SlidermainItem
              content="Inspektionen"
              image={inspectImage}
              imageAlt="Inspektionen"
            />
          </div>
          <div className="outer-item">
            <SlidermainItem
              content="Motorinstandsetzung"
              image={motorImage}
              imageAlt="Motorinstandsetzung"
            />
          </div>
          <div className="outer-item">
            <SlidermainItem
              content="Einspeichen und Zentrieren"
              image={zentrierImage}
              imageAlt="Einspeichen und Zentrieren"
            />
          </div>
          <div className="outer-item">
            <SlidermainItem
              content="Hol-/Bringservice"
              image={serviceImage}
              imageAlt="Hol-/Bringservice"
            />
          </div>
          <div className="outer-item">
            <SlidermainItem
              content="TÜV/Sonderabnahmen"
              image={tuvImage}
              imageAlt="TÜV/Sonderabnahmen"
            />
          </div>
          <AnchorLink to="/trainings">
            <div className="outer-item">
              <SlidermainItem
                content="Touren"
                image={tourImage}
                imageAlt="Touren"
              />
            </div>
          </AnchorLink>
          <AnchorLink to="/trainings">
            <div className="outer-item">
              <SlidermainItem
                content="Trainings"
                image={trainingImage}
                imageAlt="Trainings"
              />
            </div>
          </AnchorLink>
        </Slider>
      </div>
    </section>
  );
};

export default Slidermain;
