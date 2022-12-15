import { combineReducers } from "redux";
import communityReducer from "./communityReducer";
import userReducer from "./userReducer";

export default combineReducers({
  usersList: userReducer,
  writeData: communityReducer,
});
