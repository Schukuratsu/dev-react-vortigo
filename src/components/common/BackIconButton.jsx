import React from "react";
import backIcon from "../../assets/arrow.png";

function PhraseText({ className = "", ...props }) {
  return (
    <img
      src={backIcon}
      alt="previous"
      className={`back-icon-button ${className}`}
      {...props}
    />
  );
}

export default PhraseText;
