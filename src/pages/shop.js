import React from "react";

// Needed Components
import Header from "../components/globals/header";
import Footer from "../components/globals/footer";
import HeroShop from "../components/hero-shop/heroshop";
import ShopTeaser from "../components/shop-teaser/shopteaser";
import ShopItemsTeaser from "../components/shopitems/shop-items-teaser";

const Shop = () => {
  return (
    <>
      <Header />
      <HeroShop />
      <ShopTeaser />
      <ShopItemsTeaser />
      <Footer />
    </>
  );
};

export default Shop;
