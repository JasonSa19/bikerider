import React from "react";

const ShopItems = ({ image, prodName, prodDesc, prodNmbr, prodPrice }) => {
  return (
    <section className="shop-item">
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
            <span>{prodPrice}</span>
            <div className="item-cta"></div>
            <div className="item-cta"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopItems;
