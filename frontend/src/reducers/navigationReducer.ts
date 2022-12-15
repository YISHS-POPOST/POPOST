import { GET_NAVIGATION , BREAK_NAVIGATION } from "../actionTypes";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";

const initialState: ProfileScreenNavigationProp | null = null;

export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_LOGIN:
      return {
        ...state,
        users: action.payload,
      };
    case LOGIN_ERROR:
      return {
        users: null,
      };
    case LOGOUT:
      return {
        users: null,
      };
    default:
      return state;
  }
}
