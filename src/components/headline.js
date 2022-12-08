import React from "react";

const Headline = ({ headlineContent }) => {
  return (
    <div className="headline-wrap">
      <div className="headline-wrap-inner">
        <h3>{headlineContent}</h3>
        <div className="custom-underline"></div>
      </div>
    </div>
  );
};

export default Headline;
