import React from "react";
import Slider from "react-slick";
import SlidermainItem from "./slider-main-item";

const Slidermain = () => {
  var settings = {
    dots: false,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <section className="slider-main">
      <div className="slider-wrap">
        <Slider {...settings}>
          <SlidermainItem
            content="Motorrad-Umbauten (Customizing)"
            image="../../images/layout/Cross.jpg"
          />
          <SlidermainItem content="foo" />
          <SlidermainItem content="foo" />
          <SlidermainItem content="foo" />
          <SlidermainItem content="foo" />
        </Slider>
      </div>
    </section>
  );
};

export default Slidermain;
