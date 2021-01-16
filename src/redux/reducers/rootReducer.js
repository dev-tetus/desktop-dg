import isLogged from "./isLogged";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authentication: isLogged,
});
export default rootReducer;
