import React from "react";
import { Button } from "antd";

function LargeButton({ text, className = "", ...props }) {
  return (
    <Button
      block
      size="large"
      type="primary"
      className={`large-button ${className}`}
      {...props}
    >
      {text}
    </Button>
  );
}

export default LargeButton;
