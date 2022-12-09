import React from "react";

// Needed Components
import Header from "../components/globals/header";
import Footer from "../components/globals/footer";
import HeroSub from "../components/hero-subpage/herosub";
import TextMedia from "../components/text-media/text-media";

// Needed Resources
import image from "../images/layout/treffen.jpg";
import mediaImage from "../images/layout/treffen_alternative.jpg";
import mediaImageFilter from "../images/layout/treffen_alternative_filter.jpg";
import SliderSub from "../components/slider-subpage/slidersub";

const Treffen = () => {
  return (
    <>
      <Header />
      <HeroSub
        heroSubImage={image}
        heroSubImageAlt="Treffen"
        heroSubHeadline="Treffen"
      />
      <TextMedia
        direction="image-right"
        mediaImage={mediaImage}
        mediaImageFilter={mediaImageFilter}
        mediaImageAlt="Sportmotorrad"
        mediaImageFilterAlt="Sportmotorrad"
        textContent="Lernen Sie neue Biker-Freunde und unsere Specials kennen: Bei folgenden Messen und Roadshows können Sie unsere Motorräder und das umfangreiche Zubehör genauer unter die Lupe nehmen."
        hlContent="Come together."
        cstmClass="smaller-line"
      />
      <SliderSub />
      <Footer />
    </>
  );
};

export default Treffen;
