import * as actions from "../actions/actionTypes";

const defaultState = {
  fromHome: false,
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SET_FROM_HOME:
      return {
        ...state,
        fromHome: true,
      };
    default:
      return state;
  }
};

export default app;
