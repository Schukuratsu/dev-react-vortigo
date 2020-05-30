import * as actions from './actionTypes';

export function setName(name) {
  return { type: actions.SET_NAME, payload: name };
}
export function setFavouriteType(favouriteType) {
  return { type: actions.SET_FAVORITE_TYPE, payload: favouriteType };
}
