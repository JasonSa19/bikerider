import React from "react";
import Headline from "../headline";

const TextMedia = ({ mediaImage, mediaImageAlt, textContent, hlContent }) => {
  return (
    <section className="text-media">
      <div className="text-media-wrap">
        <div className="media">
          <img alt={mediaImageAlt} src={mediaImage} />
        </div>
        <div className="text">
          <Headline headlineContent={hlContent} />
          <p>{textContent}</p>
        </div>
      </div>
    </section>
  );
};

export default TextMedia;
