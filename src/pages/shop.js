import React from "react";

// Needed Components
import Header from "../components/globals/header";
import Footer from "../components/globals/footer";
import HeroShop from "../components/hero-shop/heroshop";
import ShopTeaser from "../components/shop-teaser/shopteaser";

const Shop = () => {
  return (
    <>
      <Header />
      <HeroShop />
      <ShopTeaser />
      <Footer />
    </>
  );
};

export default Shop;
