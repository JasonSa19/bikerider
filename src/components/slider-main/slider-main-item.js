import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const SlidermainItem = ({ content, image }) => {
  return (
    <div className="slider-item">
      <GatsbyImage src={image}></GatsbyImage>
      <div className="slider-item-text">{content}</div>
    </div>
  );
};

export default SlidermainItem;
