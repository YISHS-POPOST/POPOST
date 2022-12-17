import { combineReducers } from "redux";
import navigationReducer from "./navigationReducer";
import userReducer from "./userReducer";
import communityReducer from './communityReducer';

export default combineReducers({
  users: userReducer,
  community: communityReducer
  navigation: navigationReducer,
});
