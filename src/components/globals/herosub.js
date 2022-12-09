import React from "react";

const HeroSub = ({
  imgClass,
  heroSubImage,
  heroSubImageAlt,
  heroSubHeadline,
}) => {
  return (
    <section className="hero-subpage">
      <div className="hero-subpage-wrap">
        <img
          className={imgClass}
          alt={heroSubImageAlt}
          src={heroSubImage}
        ></img>
        <div className="hero-subpage-text">
          <div className="hero-subpage-text-inner">
            <h1>{heroSubHeadline}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSub;
