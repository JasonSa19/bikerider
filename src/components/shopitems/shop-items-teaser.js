import React from "react";

import Headline from "../headline";
import ShopItems from "./shop-items";

const ShopItemsTeaser = () => {
  return (
    <section className="shop-items-teaser">
      <div className="shop-items-teaser-inner">
        <Headline headlineContent="Beleuchtung" cstmClass="center-line" />
        <ShopItems
          image=""
          prodName="Cat-Eye Rücklicht auf Halter"
          prodDesc="E-geprüft mit ABE"
          prodNmbr="Art.-Nr. 255-707"
          prodPrice="76 €"
        />
      </div>
    </section>
  );
};

export default ShopItemsTeaser;
