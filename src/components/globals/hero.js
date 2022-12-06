import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="content-wrap">
        <StaticImage src="../../images/layout/Cross.jpg"></StaticImage>

        <div className="text-wrap">
          <div className="text-wrap_inner">
            <h1>
              Ein Motorrrad
              <br />
              <span>–</span>
            </h1>

            <h2>
              So individuell
              <br />
              wie Ihr Lebensgefühl.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
