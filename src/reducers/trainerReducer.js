import * as actions from "../actions/actionTypes";

const defaultState = {
  name: "",
  favoritePokemonType: "",
};

const trainer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case actions.SET_FAVORITE_TYPE:
      return {
        ...state,
        favoritePokemonType: action.payload,
      };
    default:
      return state;
  }
};

export default trainer;
