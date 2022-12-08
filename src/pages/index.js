// Import required assets and packages
import * as React from "react";
import "../styles/main.scss";

import Header from "../components/globals/header";
import Hero from "../components/globals/hero";
import Slidermain from "../components/slider-main/slider-main";
import Footer from "../components/globals/footer";

// Init Components
const IndexPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Slidermain />
      <Footer />
    </>
  );
};

// Export Title to Head
export const Head = () => <title>BikeRider Live</title>;

// export Component
export default IndexPage;
