import { combineReducers } from "redux";
import userReducer from "./userReducer";
import communityReducer from './communityReducer';

export default combineReducers({
  users: userReducer,
  community: communityReducer
});
