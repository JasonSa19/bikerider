import React from "react";
import Headline from "../headline";

const TextMedia = ({
  direction,
  mediaImage,
  mediaImageFilter,
  mediaImageFilterAlt,
  mediaImageAlt,
  textContent,
  hlContent,
}) => {
  return (
    <section className="text-media">
      <div className={direction + " text-media-wrap"}>
        <div className="media">
          <img
            class="background-image"
            alt={mediaImageFilterAlt}
            src={mediaImageFilter}
          />
          <img class="foreground-image" alt={mediaImageAlt} src={mediaImage} />
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
