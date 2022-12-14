import React from "react";

const SliderSubItem = ({ imageAlt, image, meet, date }) => {
  return (
    <div className="meet-sub-item">
      <div className="meet-sub-item-img">
        <img alt={imageAlt} src={image}></img>
      </div>
      <div className="meet-wrap">
        <div className="meet-date">{date}</div>
        <div className="meet-name">{meet}</div>
      </div>
    </div>
  );
};

export default SliderSubItem;
