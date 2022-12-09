import React from "react";
import Headline from "../components/headline";

const Text = ({ text, cstmClass, hlContent }) => {
  return (
    <section className="text">
      <Headline cstmClass={cstmClass} headlineContent={hlContent} />
      <p>{text}</p>
    </section>
  );
};

export default Text;
