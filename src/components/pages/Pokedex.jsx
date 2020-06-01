import React from "react";
// import { useHistory } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import SearchBar from "../common/SearchBar";
import TypeScroller from "../common/TypeScroller";
import PokemonList from "../common/PokemonList";

function Pokedex() {
  // const history = useHistory();

  // eslint-disable-next-line no-unused-vars
  const favoriteType = useSelector(
    (store) => store.trainerState.favoritePokemonType,
    shallowEqual
  );
  const [searchValue, setSearchValue] = React.useState("");

  // // will redirect to Home on page reload
  // const fromHome = useSelector((store) => store.appState.fromHome, shallowEqual);
  // React.useEffect(
  //   () => {
  //     if (!fromHome) {
  //       history.push('/');
  //     }
  //   },
  //   [],
  // );

  return (
    <div className="page bg-white column">
      {/* header */}
      <SearchBar value={searchValue} onChange={setSearchValue} />
      {/* scroller */}
      <TypeScroller className="type-scroller-position" />
      {/* list */}
      <PokemonList />
    </div>
  );
}

export default Pokedex;
