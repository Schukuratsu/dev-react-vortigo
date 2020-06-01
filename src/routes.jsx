import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import TrainerName from "./components/pages/TrainerName";
import FavoritePokemonType from "./components/pages/FavoritePokemonType";
import Pokedex from "./components/pages/Pokedex";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/trainer-name" component={TrainerName} />
      <Route
        exact
        path="/favorite-pokemon-type"
        component={FavoritePokemonType}
      />
      <Route exact path="/pokedex" component={Pokedex} />
    </Switch>
  );
}

export default Routes;
