import { combineReducers } from "redux";
import trainerReducer from "./trainerReducer";
import appReducer from "./appReducer";

export default combineReducers({
  trainerState: trainerReducer,
  appState: appReducer,
});
