import { combineReducers } from "redux";
import navigationReducer from "./navigationReducer";
import userReducer from "./userReducer";

export default combineReducers({
  users: userReducer,
  navigation: navigationReducer,
});
