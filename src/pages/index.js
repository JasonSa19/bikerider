// Import required assets and packages
import * as React from "react";
import "../styles/main.scss";

import Layout from "../components/Layout";

// Init Components
const IndexPage = () => {
  return (
    <>
      <Layout pageTitle={"BikeRider Live - Shop"}></Layout>
    </>
  );
};

// Export Title to Head
export const Head = () => <title>BikeRider Live</title>;

// export Component
export default IndexPage;
