// Import required assets and packages
import * as React from "react";
import Herosection from "./Herosection";
import About from "./About";

// Init Components

const Layout = ({ children }) => {
  return (
    <main>
      <Herosection />
      <About />

      {children}
    </main>
  );
};

export default Layout;
