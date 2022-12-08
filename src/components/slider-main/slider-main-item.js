import React from "react";

const SlidermainItem = ({ content, image, imageAlt }) => {
  return (
    <div className="slider-item">
      <img alt={imageAlt} src={image}></img>
      <h4>{content}</h4>
    </div>
  );
};

export default SlidermainItem;
