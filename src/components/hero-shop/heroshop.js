import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeroShop = () => {
  return (
    <section className="hero shop">
      <div className="content-wrap">
        <StaticImage
          class="hero-image"
          src="../../images/layout/Showmotorrad.jpg"
        ></StaticImage>

        <div className="text-wrap">
          <div className="text-wrap_inner">
            <h1>Bikerider Live-shop</h1>

            <p>
              Bei uns finden Sie alles für Ihr Motorrad: Beleuchtung, Rasten,
              Lenker, Bremsen. Außerdem: Chrom-Accessoires, nach denen sich
              jeder umdreht, ganz zu schweigen von den Aufsehen erregenden
              Customizing-Lacksätzen in Sonderfarben.
            </p>
            <button className="cta-button">Warenkorb</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroShop;
