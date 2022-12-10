import React from "react";

import Headline from "../headline";
import ShopItems from "./shop-items";

// Needed Images

import lightFirstImg from "../../images/layout/teile.jpg";
import lightSecondImg from "../../images/layout/licht.jpg";

const LightItemsTeaser = () => {
  return (
    <section className="shop-items-teaser">
      <div className="shop-items-teaser-inner">
        <Headline headlineContent="Beleuchtung" cstmClass="center-line" />
        <ShopItems
          image={lightFirstImg}
          prodName="Cat-Eye Rücklicht auf Halter"
          prodDesc="E-geprüft mit ABE"
          prodNmbr="Art.-Nr. 255-707"
          prodPrice="76 €"
        />
        <ShopItems
          image={lightSecondImg}
          prodName="PROTECH Dual-light Antik"
          prodDesc="Das ultimative Light-Kit.
Komplett mit e-geprüftem DU-Scheinwerfer
(Durchmesser je 65 mm) für die optimale
Lichtausbeute."
          prodNmbr="Art.-Nr. 6580603"
          prodPrice="699 €"
        />
      </div>
    </section>
  );
};

export default LightItemsTeaser;
