import React from "react";

import Headline from "../headline";
import ShopItems from "./shop-items";

// Needed Images

import rastenFirstImg from "../../images/layout/verchromen.jpg";

const LenkerItemsTeaser = () => {
  return (
    <section id="beleuchtung" className="shop-items-teaser">
      <div className="shop-items-teaser-inner">
        <Headline headlineContent="Rasten:" cstmClass="center-line" />
        <ShopItems
          image={rastenFirstImg}
          prodName="R1100 S"
          prodDesc="Exklusive, filigrane Fußrasteneinlagen.
sicherlich die leichtesten auf dem Markt. Hoch-
festes Aluminium, für sehr hohe Stabilität.
"
          prodNmbr="Art.-Nr. 101-011"
          prodPrice="399 €"
        />
      </div>
    </section>
  );
};

export default LenkerItemsTeaser;
