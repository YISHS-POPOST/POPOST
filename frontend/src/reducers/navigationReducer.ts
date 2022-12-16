import { GET_NAVIGATION, BREAK_NAVIGATION } from "../actionTypes";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";

const initialState: ProfileScreenNavigationProp | null = null;

export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_NAVIGATION: {
      return action.payload;
    }

    case BREAK_NAVIGATION: {
      return null;
    }

    default:
      return state;
  }
}
