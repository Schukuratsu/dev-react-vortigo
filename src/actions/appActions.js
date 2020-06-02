import * as actions from "./actionTypes";

export function saveFromHome() {
  return { type: actions.SAVE_FROM_HOME };
}
export function savePokemonTypes(pokemonTypes) {
  return { type: actions.SAVE_POKEMON_TYPES, payload: pokemonTypes };
}
export function savePokemons(pokemons) {
  return { type: actions.SAVE_POKEMONS, payload: pokemons };
}
