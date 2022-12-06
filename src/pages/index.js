// Import required assets and packages
import * as React from "react";
import "../styles/main.scss";

import Header from "../components/globals/header";
import Hero from "../components/globals/hero";
import Footer from "../components/globals/footer";

// Import Menu Components

// import Menu from "../components/globals/menu";

// Init Components
const IndexPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

// Export Title to Head
export const Head = () => <title>BikeRider Live</title>;

// export Component
export default IndexPage;
