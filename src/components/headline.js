import React from "react";

const Headline = ({ headlineContent, cstmClass }) => {
  return (
    <div className="headline-wrap">
      <div className="headline-wrap-inner">
        <h3>{headlineContent}</h3>
        <div className={cstmClass + " custom-underline"}></div>
      </div>
    </div>
  );
};

export default Headline;
