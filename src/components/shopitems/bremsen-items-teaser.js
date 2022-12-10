import React from "react";

import Headline from "../headline";
import ShopItems from "./shop-items";

// Needed Images

import bremsenFirstImg from "../../images/layout/bremsen2.jpg";
import bremsenSecondImg from "../../images/layout/bremsen.jpg";
import bremsenThirdImg from "../../images/layout/bremsen3.jpg";

const BremsenItemsTeaser = () => {
  return (
    <section id="bremsen" className="shop-items-teaser">
      <div className="shop-items-teaser-inner">
        <Headline headlineContent="Bremsen:" cstmClass="center-line" />
        <ShopItems
          image={bremsenFirstImg}
          prodName="RSV Mille Tuono"
          prodDesc="Die neuen PEAK Bremsscheiben von ABM
                    unterscheiden sich durch ihr komplett
                    überarbeitetes Design von den
                    herkömmlichen Bremsscheiben.
                    "
          prodNmbr="Art.-Nr. 2A114-01592"
          prodPrice="392 €"
        />
        <ShopItems
          image={bremsenSecondImg}
          prodName="CB 500"
          prodDesc="Die äußeren Bremsringe für
                    EPC-Bremsscheiben werden aus einem Stahl
                    mit der Bezeichnung GSPR gefertigt. Es
                    handelt sich um einen kohlenstoffarmen Stahl
                    mit hoher Festigkeit. Er ist äußerst schlagfest
                    und biegesteif und Oberflächenrisse können
                    nicht entstehen.
                    "
          prodNmbr="Art.-Nr. 26-101"
          prodPrice="260 €"
          customClass="extra-height"
        />
        <ShopItems
          image={bremsenThirdImg}
          prodName="NTV 650 Revere"
          prodDesc="Bremsscheiben Typ-Custom. Mit perfekt
                    auf Hochglanz polierten Innenring sind
                    CUSTOM-Bremsscheiben von BRAKING
                    nicht nur ein optischer Blickfang, sondern
                    steigern auch spürbar die Leistungsfähigkeit
                    der Bremsanlange."
          prodNmbr="Art.-Nr. 26-117"
          prodPrice="305 €"
          customClass="extra-height"
        />
      </div>
    </section>
  );
};

export default BremsenItemsTeaser;
