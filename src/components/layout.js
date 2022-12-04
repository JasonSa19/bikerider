// Import required assets and packages
import * as React from "react";

import Footer from "./globals/footer";
import Header from "./globals/header";

// Init Components
const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
