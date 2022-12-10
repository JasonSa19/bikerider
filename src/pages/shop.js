import React from "react";

// Needed Components
import Header from "../components/globals/header";
import Footer from "../components/globals/footer";
import HeroShop from "../components/hero-shop/heroshop";
import ShopTeaser from "../components/shop-teaser/shopteaser";
import LightItemsTeaser from "../components/shopitems/light-items-teaser";
import RastenItemsTeaser from "../components/shopitems/rasten-items-teaser";
import LenkerItemsTeaser from "../components/shopitems/lenker-items-teaser";
import BremsenItemsTeaser from "../components/shopitems/bremsen-items-teaser";

const Shop = () => {
  return (
    <>
      <Header />
      <HeroShop />
      <ShopTeaser />
      <div className="item-teasers">
        <LightItemsTeaser />
        <RastenItemsTeaser />
        <LenkerItemsTeaser />
        <BremsenItemsTeaser />
      </div>
      <Footer />
    </>
  );
};

export default Shop;
