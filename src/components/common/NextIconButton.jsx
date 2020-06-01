import React from "react";
import nextIcon from "../../assets/next.png";

function NextIconButton({ text, className = "", ...props }) {
  return (
    <img
      src={nextIcon}
      alt="next"
      className={`next-icon-button ${className}`}
      {...props}
    />
  );
}

export default NextIconButton;
