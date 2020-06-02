import React from "react";
import { Typography } from "antd";

function TypeScroller({ types, onChange, value, className = "", ...props }) {
  return (
    <div className={`type-scroller row ${className}`} {...props}>
      {types.map((type) => (
        <div
          onClick={() => onChange(type.name)}
          className="type-scroller-item column align-center"
          key={type.name}
        >
          <img
            src={type.thumbnailImage}
            alt={type.name}
            className="type-scroller-image"
          />
          <Typography className="type-scroller-text">{type.name}</Typography>
        </div>
      ))}
    </div>
  );
}

export default TypeScroller;
