import React from "react";

const ShopTeaserItem = ({ jumpMark, imageAlt, image, title }) => {
  return (
    <a href={jumpMark}>
      <div className="shop-teaser-item">
        <img alt={imageAlt} src={image} />
        <p>{title}</p>
      </div>
    </a>
  );
};

export default ShopTeaserItem;
