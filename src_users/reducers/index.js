import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import welcomeItems from "./welcome";
import users from "./users";
import user from "./user";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  welcomeItems: welcomeItems,
  users,
  user
});
