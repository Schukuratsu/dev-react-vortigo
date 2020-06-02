import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SearchBar from "../common/SearchBar";
import TypeScroller from "../common/TypeScroller";
import PokemonList from "../common/PokemonList";
import { savePokemons, savePokemonTypes } from "../../actions/appActions";
import PokemonApi from "../../api/pokemon";
import PokemonTypeApi from "../../api/pokemonType";

function Pokedex() {
  const history = useHistory();
  const dispatch = useDispatch();

  // will redirect to Home on page reload
  const fromHome = useSelector(
    (store) => store.appState.fromHome,
    shallowEqual
  );
  React.useEffect(() => {
    if (!fromHome) {
      history.push("/");
    }
  }, []);

  // loads pokemons from api
  const pokemons = useSelector((store) => store.appState.pokemons);
  React.useEffect(() => {
    if (!pokemons[0]) {
      PokemonApi.list().then((response) => {
        // for some reason there are some repeated pokemon in the list
        response = response.filter(
          (p1, i) => response.findIndex((p2) => p1.id === p2.id) === i
        );
        dispatch(savePokemons(response));
      });
    }
  }, []);

  const favoriteType = useSelector(
    (store) => store.trainerState.favoritePokemonType,
    shallowEqual
  );

  const [selectedType, setSelectedType] = React.useState(favoriteType);

  // loads pokemons from api
  const types = useSelector((store) => store.appState.pokemonTypes);
  React.useEffect(() => {
    if (!types[0]) {
      PokemonTypeApi.list().then((response) => {
        // response = response.filter(
        //   (t1, i) => response.findIndex((t2) => t1.name === t2.name) === i
        // );
        dispatch(savePokemonTypes(response));
      });
    }
  }, []);
  const orderedTypes = [
    ...types.filter((type) => type.name === favoriteType),
    ...types.filter((type) => type.name !== favoriteType),
  ];

  const [searchValue, setSearchValue] = React.useState("");

  console.log(selectedType);

  return (
    <div className="page bg-white column">
      {/* header */}
      <SearchBar value={searchValue} onChange={setSearchValue} />
      {/* scroller */}
      {!searchValue && (
        <TypeScroller
          types={orderedTypes}
          onChange={setSelectedType}
          className="type-scroller-position"
        />
      )}
      {/* list */}
      <PokemonList
        selectedType={selectedType}
        pokemons={pokemons}
        searchValue={searchValue}
      />
    </div>
  );
}

export default Pokedex;
