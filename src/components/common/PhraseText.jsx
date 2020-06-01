import React from "react";
import { Typography } from "antd";

function PhraseText({ text, className = "", ...props }) {
  return (
    <Typography className={`phrase-text ${className}`} {...props}>
      {text}
    </Typography>
  );
}

export default PhraseText;
