// Import required assets and packages
import * as React from "react";
import "../styles/main.sass";

import Layout from "../components/Layout";

// Init Components
const IndexPage = () => {
  return (
    <>
      <Layout pageTitle={"Webdesigner & Front-End Entwickler"}></Layout>
    </>
  );
};

// Export Title to Head
export const Head = () => <title>BikeRider Live</title>;

// export Component
export default IndexPage;
