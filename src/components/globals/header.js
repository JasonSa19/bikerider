import React from "react";
import { useState } from "react";

import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className="header-wrap">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </header>
  );
};

export default Header;
