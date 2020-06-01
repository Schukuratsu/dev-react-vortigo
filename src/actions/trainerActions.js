import * as actions from "./actionTypes";

export function setName(name) {
  return { type: actions.SET_NAME, payload: name };
}
export function setFavoritePokemonType(favoriteType) {
  return { type: actions.SET_FAVORITE_TYPE, payload: favoriteType };
}
