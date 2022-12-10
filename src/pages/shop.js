import React from "react";

// Needed Components
import Header from "../components/globals/header";
import Footer from "../components/globals/footer";
import HeroShop from "../components/hero-shop/heroshop";
import ShopTeaser from "../components/shop-teaser/shopteaser";
import LightItemsTeaser from "../components/shopitems/light-items-teaser";

const Shop = () => {
  return (
    <>
      <Header />
      <HeroShop />
      <ShopTeaser />
      <LightItemsTeaser />
      <Footer />
    </>
  );
};

export default Shop;
