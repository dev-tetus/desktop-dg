import isLogged from "./isLogged";
import { combineReducers } from "redux";

const reducers = combineReducers({
  auth: isLogged,
});
export default reducers;
