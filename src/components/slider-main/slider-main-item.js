import React from "react";

const SlidermainItem = ({ content, image, imageAlt }) => {
  return (
    <div className="slider-item">
      <img alt={imageAlt} src={image}></img>
      <div className="slider-item-text">{content}</div>
    </div>
  );
};

export default SlidermainItem;
