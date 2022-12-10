import React from "react";

import ctaSvgCart from "../../images/layout/shopping-cart.svg";
import ctaSvgHeart from "../../images/layout/herz.svg";

const ShopItems = ({
  image,
  prodName,
  prodDesc,
  prodNmbr,
  prodPrice,
  customClass,
}) => {
  return (
    <section className={customClass + " shop-item"}>
      <div className="shop-item-inner">
        <div className="shop-item-img">
          <img alt={prodName} src={image} />
        </div>
        <div className="shop-item-text">
          <span>
            <strong>{prodName}</strong>
            <p>{prodDesc}</p>
          </span>
        </div>
        <div className="shop-item-info">
          <span className="shop-item-number">{prodNmbr}</span>
          <div className="shop-item-info-cta">
            <span className="item-price">{prodPrice}</span>
            <div className="cta-buttons">
              <button className="item-cta">
                <img src={ctaSvgCart} alt="Einkaufskorb" />
              </button>
              <button className="item-cta">
                <img src={ctaSvgHeart} alt="Herz" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopItems;
