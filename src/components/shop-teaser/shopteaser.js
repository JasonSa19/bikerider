import React from "react";
import ShopTeaserItem from "./shopteaseritem";

import firstImage from "../../images/layout/teile.jpg";
import secondImage from "../../images/layout/verchromen.jpg";
import thirdImage from "../../images/layout/lenker.jpg";
import forthImage from "../../images/layout/bremsen.jpg";

const ShopTeaser = () => {
  return (
    <section className="shop-teaser">
      <div className="shop-teaser-inner">
        <ShopTeaserItem
          jumpMark="#beleuchtung"
          alt="Beleuchtung"
          image={firstImage}
          title="Beleuchtung"
        />
        <ShopTeaserItem
          jumpMark="#rasten"
          alt="Rasten"
          image={secondImage}
          title="Rasten"
        />
        <ShopTeaserItem
          jumpMark="#lenker"
          alt="Lenker"
          image={thirdImage}
          title="Lenker"
        />
        <ShopTeaserItem
          jumpMark="#bremsen"
          alt="Bremsen"
          image={forthImage}
          title="Bremsen"
        />
      </div>
    </section>
  );
};

export default ShopTeaser;
