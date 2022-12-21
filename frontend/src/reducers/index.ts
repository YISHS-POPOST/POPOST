import { combineReducers } from "redux";
import navigationReducer from "./navigationReducer";
import userReducer from "./userReducer";
import communityReducer from "./communityReducer";
import profileReducer from "./profileEditReducer";

export default combineReducers({
  users: userReducer,
  community: communityReducer,
  navigation: navigationReducer,
  profile: profileReducer,
});
