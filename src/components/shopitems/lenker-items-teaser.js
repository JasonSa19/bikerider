import React from "react";

import Headline from "../headline";
import ShopItems from "./shop-items";

// Needed Images

import lenkerImg from "../../images/layout/lenker.jpg";

const LenkerItemsTeaser = () => {
  return (
    <section id="lenker" className="shop-items-teaser">
      <div className="shop-items-teaser-inner">
        <Headline headlineContent="Lenker:" cstmClass="center-line" />
        <ShopItems
          image={lenkerImg}
          prodName="Superbike-Alulenker"
          prodDesc="Attraktives Design für stilgerechte Optik,
                    keine Matten Chromstellen
                    "
          prodNmbr="Art.-Nr. MCL 100 B"
          prodPrice="79 €"
        />
        <ShopItems
          image={lenkerImg}
          prodName="Classic high"
          prodDesc="Gutes Lenkverhalten durch ausgereifte
Formen, Stahlrohre von hoher Güte
                    "
          prodNmbr="Art.-Nr. MCL 102 C"
          prodPrice="96 €"
        />
        <ShopItems
          image={lenkerImg}
          prodName="Touring high"
          prodDesc="3-fach Spezialbeschichtung
verhindert Korrosion
                    "
          prodNmbr="Art.-Nr. MCL 111"
          prodPrice="46 €"
        />
        <ShopItems
          image={lenkerImg}
          prodName="Speedfighter"
          prodDesc="Hochwertigste Oberflächenbehandlungen,
Zolllenker wahlweise mit Kabelbohrungen
                    "
          prodNmbr="Art.-Nr. MCL 132 AKK"
          prodPrice="80 €"
        />
      </div>
    </section>
  );
};

export default LenkerItemsTeaser;
