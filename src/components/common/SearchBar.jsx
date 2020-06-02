import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function SearchBar({ onChange, value, className = "", ...props }) {
  const searchInput = React.useRef();
  const [renderSearch, setRenderSearch] = React.useState(false);
  const toggleRenderSearch = () => setRenderSearch((v) => !v);
  return (
    <div className={`search-bar ${className}`} {...props}>
      {renderSearch || value ? (
        <Input
          className="search-bar-input"
          autoFocus
          allowClear
          size="large"
          placeholder="Pokémon name..."
          onBlur={toggleRenderSearch}
          value={value}
          onChange={(evt) => onChange(evt.target.value)}
        />
      ) : (
        <div className="search-bar-label grow row justify-between align-center">
          <div style={{ width: 20 }} />
          <div>Pokémon Finder</div>
          <SearchOutlined onClick={toggleRenderSearch} />
        </div>
      )}
    </div>
  );
}

export default SearchBar;
