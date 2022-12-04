// Import react for jsx syntax
import * as React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

// Init aboutPage Component
const Imprint = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};
// Export Title to Head
export const Head = () => <title>Jason S. | Impressum</title>;

// export aboutPage Component
export default Imprint;
