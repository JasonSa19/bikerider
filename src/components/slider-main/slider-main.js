import React from "react";
import Slider from "react-slick";
import SlidermainItem from "./slider-main-item";
import Headline from "../headline";

//Imported Images for Slider
import umbauImage from "../../images/layout/umbauten.jpg";
import verchromImage from "../../images/layout/verchromen.jpg";
import strahlenImage from "../../images/layout/lenker.jpg";
import polierImage from "../../images/layout/polierarbeiten.jpg";

const Slidermain = () => {
  var settings = {
    dots: false,
    nav: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
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
      <Headline content="Leistungen" />
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
            content="Polierarbeiten"
            image={polierImage}
            imageAlt="Polierarbeiten"
          />
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
            content="Polierarbeiten"
            image={polierImage}
            imageAlt="Polierarbeiten"
          />
        </Slider>
      </div>
    </section>
  );
};

export default Slidermain;
