import React from "react";

const Headline = ({ content }) => {
  return (
    <div className="headline-wrap">
      <h3>{content}</h3>
      <div className="custom-underline"></div>
    </div>
  );
};

export default Headline;
