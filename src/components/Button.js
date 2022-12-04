import React from "react";
import { Link } from "gatsby";

const Button = ({ buttonDestination, buttonText }) => {
  return (
    <Link className="btn" to={buttonDestination}>
      {buttonText}
    </Link>
  );
};

export default Button;
