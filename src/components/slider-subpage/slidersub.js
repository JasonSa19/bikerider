import React from "react";

import Slider from "react-slick";

import arrowPrev from "../../images/layout/prev.svg";
import arrowNext from "../../images/layout/next.svg";

import SliderSubItem from "./slidersubitem";

// Images

import firstSlideImg from "../../images/layout/bikertreff.jpg";
import secondSlideImg from "../../images/layout/treffen.jpg";
import thirdSlideImg from "../../images/layout/inspektion.jpg";
import forthSlideImg from "../../images/layout/lenker.jpg";
import fifthSlideImg from "../../images/layout/mann_auf_motorrad.jpg";
import sixthSlideImg from "../../images/layout/treffen_alternative.jpg";

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

const SliderSub = () => {
  var settings = {
    dots: false,
    nav: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <section className="subpage-slider">
      <div className="subpage-slider-wrap">
        <Slider {...settings}>
          <SliderSubItem
            meet="Biker-Treffen, Hamburg"
            date="28.8.2023:"
            image={firstSlideImg}
            imageAlt="Biker-Treffen Hamburg"
          />
          <SliderSubItem
            meet="Easyrider-Clubtreffen, Pirmasens"
            date="3. - 5.9.2023:"
            image={secondSlideImg}
            imageAlt="Easyrider-Treffen"
          />
          <SliderSubItem
            meet="Tuning-Days, Merseburg"
            date="12.9.2023:"
            image={thirdSlideImg}
            imageAlt="Tuning-Days Merseburg"
          />
          <SliderSubItem
            meet="Magic-Bikes, Frankfurt"
            date="26.9.2023:"
            image={forthSlideImg}
            imageAlt="Magic-Bikes Frankfurt"
          />
          <SliderSubItem
            meet="Biker-Show, Essen"
            date="15.10.2023:"
            image={fifthSlideImg}
            imageAlt="Biker-Show Essen"
          />
          <SliderSubItem
            meet="Customizing-Trend-Messe, Köln"
            date="28.10.2023:"
            image={sixthSlideImg}
            imageAlt="foo"
          />
        </Slider>
      </div>
    </section>
  );
};

export default SliderSub;
