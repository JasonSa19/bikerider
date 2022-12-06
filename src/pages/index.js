// Import required assets and packages
import * as React from "react";
import "../styles/main.scss";

import Header from "../components/globals/header";
import Hero from "../components/globals/hero";
import Footer from "../components/globals/footer";

import MenuProvider from "react-flexible-sliding-menu";
import Menu from "../components/globals/menu";

// Import Menu Components

// Init Components
const IndexPage = () => {
  return (
    <MenuProvider width="100%" MenuComponent={Menu}>
      <>
        <Header />
        <Hero />
        <Footer />
      </>
    </MenuProvider>
  );
};

// Export Title to Head
export const Head = () => <title>BikeRider Live</title>;

// export Component
export default IndexPage;
