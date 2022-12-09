import React from "react";

const TourTeaser = ({ date, tour, tourSub, image }) => {
  return (
    <div className="tour-teaser">
      <div className="tour-teaser-inner">
        <div className="date">{date}</div>
        <div className="tour-media">
          <div class="tour-media-text">
            <p>{tour}</p>
            <p>{tourSub}</p>
          </div>
          <img className="tour-media-image" alt="Tour" src={image} />
        </div>
      </div>
    </div>
  );
};

export default TourTeaser;
