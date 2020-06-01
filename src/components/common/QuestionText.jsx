import React from "react";
import { Typography } from "antd";

function QuestionText({ text, className = "", ...props }) {
  return (
    <Typography className={`question-text ${className}`} {...props}>
      {text}
    </Typography>
  );
}

export default QuestionText;
