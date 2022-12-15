import { GET_LOGIN, LOGIN_ERROR, LOGOUT } from "../actionTypes";
import { Users } from "../type/users";

const initialState: Users | null = null;

export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_LOGIN:
      return {
        ...action.payload,
      };
    case LOGIN_ERROR:
      return null;

    case LOGOUT:
      return null;
      
    default:
      return state;
  }
}
