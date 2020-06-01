import React from "react";
import { Input } from "antd";

function PhraseText({ className = "", ...props }) {
  return <Input className={`name-input ${className}`} {...props} />;
}

export default PhraseText;
