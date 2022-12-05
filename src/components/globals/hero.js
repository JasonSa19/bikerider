import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="image-wrap">
        <StaticImage src="../../images/layout/Cross.jpg"></StaticImage>
      </div>
    </section>
  );
};

export default Hero;
