import React from "react";
import { Typography } from "antd";
import arrow from "../../assets/arrow.png";

function PhraseText({ text, className = "", ...props }) {
  return (
    <div
      className={`row justify-between align-center type-select ${className}`}
      {...props}
    >
      <Typography className="type-select-text">{text}</Typography>
      <img src={arrow} alt="open type selector" className="type-select-arrow" />
    </div>
  );
}

export default PhraseText;
