// Import required assets and packages
import * as React from "react";
import "../styles/main.scss";

import Header from "../components/globals/header";
import Footer from "../components/globals/footer";

// Init Components
const IndexPage = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

// Export Title to Head
export const Head = () => <title>BikeRider Live</title>;

// export Component
export default IndexPage;
