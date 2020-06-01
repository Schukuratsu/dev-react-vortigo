import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function SearchBar({ onChange, value, className = "", ...props }) {
  const searchInput = React.useRef();
  const [renderSearch, setRenderSearch] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const onChangeSearchValue = (evt) => setSearchValue(evt.target.value);
  const onSearch = () => onChange(searchValue);
  const toggleRenderSearch = () => setRenderSearch((v) => !v);
  return (
    <div className={`search-bar ${className}`} {...props}>
      {renderSearch || value ? (
        <Input.Search
          size="large"
          placeholder="Pokémon name..."
          ref={searchInput}
          onBlur={toggleRenderSearch}
          value={searchValue}
          onChange={onChangeSearchValue}
          onSearch={onSearch}
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
